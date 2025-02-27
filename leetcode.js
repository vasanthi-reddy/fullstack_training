//Create Hello World Function
function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}
const helloFn = createHelloWorld();
console.log(helloFn()); 
console.log(helloFn()); 

//Counter details
function createCounter(n) {
  return function() {
    return n++;
  };
}
const counter = createCounter(10);
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

//To Be Or not to be
const expect = (val) => ({
  toBe: (expected) => (val === expected ? true : (() => { throw new Error("Not Equal"); })()),
  notToBe: (expected) => (val !== expected ? true : (() => { throw new Error("Equal"); })())
});
console.log(expect(5).toBe(5)); 
console.log(expect(10).notToBe(5)); 

//Counter II
const createCounter = (init) => {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => (current = init)
  };
};
const counter = createCounter(10);
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset());  

//Apply Tranform over each array
var map = function(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray
};

//Filter Elements from array
var filter = function(arr, fn) {
    let output = [];
    for (let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            output.push(arr[i])
        }
    }
    return output
};

//Array Reduce Transformation
var reduce = function(nums, fn, init) {
    let val = init
    for (let i = 0; i < nums.length; i++) {
       val = fn(val, nums[i])
    }
    return val
};

//Function Composition
var compose = function(functions) {
    return functions.length === 0 
        ? (x) => x 
        : (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};

//Return Length of Arguments passed
var argumentsLength = function(...args) {
 return args.length
};

//Allow one function call
var once = function(fn) {
  let hasBeenCalled = false;
  let result;

  return function() {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, arguments);
      return result;
    } else {
      return undefined;
    }
  };
};

//Memoize
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn (...args);
            cache.set(key, result);
            return result
        }
    }
}

//Add two promises
async function addTwoPromises(promise1, promise2) {
    const num1 = await promise1;
    const num2 = await promise2;
    return num1 + num2;
}

//Sleep
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

//Timeout Cancellation
function cancellable(fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args); 
    }, t);

    return function cancelFn() {
        clearTimeout(timer); 
    };
}

//Interval Cancellation
function cancellable(fn, args, t) {
    fn(...args);
    const interval = setInterval(() => {
        fn(...args);
    }, t);
    return function cancelFn() {
        clearInterval(interval);
    };
}

//Promise Time limit
function timeLimit(fn, t) {
  return async function (...args) {
      return new Promise((resolve, reject) => {
          const timer = setTimeout(() => {
              reject("Time Limit Exceeded");
          }, t);

          fn(...args)
              .then((result) => {
                  clearTimeout(timer); 
                  resolve(result);
              })
              .catch((error) => {
                  clearTimeout(timer); 
                  reject(error);
              });
      });
  };
}


//Cache with time limit
var TimeLimitedCache = function() {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  const now = Date.now();
  if (this.cache.has(key)) {
      this.cache.set(key, [value, now + duration]);
      return true;
  }
  this.cache.set(key, [value, now + duration]);
  return false;
};

TimeLimitedCache.prototype.get = function(key) {
  const now = Date.now();
  if (this.cache.has(key)) {
      const [value, expiry] = this.cache.get(key);
      if (now < expiry) {
          return value;
      } else {
          this.cache.delete(key);
      }
  }
  return -1;
};

TimeLimitedCache.prototype.count = function() {
  const now = Date.now();
  let count = 0;
  for (const [key, [_, expiry]] of this.cache) {
      if (now < expiry) {
          count++;
      } else {
          this.cache.delete(key);
      }
  }
  return count;
};

//Debounce
var debounce = function(fn, t) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          fn.apply(this, args);
      }, t);
  };
};

//Async functions in parallel
function promiseAll(functions) {
  return new Promise((resolve, reject) => {
      let results = [];
      let completed = 0;
      let hasRejected = false;

      functions.forEach((fn, index) => {
          fn()
              .then((result) => {
                  if (hasRejected) return; 
                  results[index] = result;
                  completed++;

                  if (completed === functions.length) {
                      resolve(results); 
                  }
              })
              .catch((error) => {
                  if (!hasRejected) {
                      hasRejected = true; 
                      reject(error); 
                  }
              });
      });

      if (functions.length === 0) {
          resolve([]); 
      }
  });
}
