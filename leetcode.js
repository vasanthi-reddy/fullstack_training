//Create Hello World Function
function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}

//Counter details
function createCounter(n) {
  return function() {
    return n++;
  };
}

//To Be Or not to be
const expect = (val) => ({
  toBe: (expected) => (val === expected ? true : (() => { throw new Error("Not Equal"); })()),
  notToBe: (expected) => (val !== expected ? true : (() => { throw new Error("Equal"); })())
});

//Counter II
const createCounter = (init) => {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => (current = init)
  };
};

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

//Is Object Empty
function isEmpty(obj) {
  if (Array.isArray(obj)) {
      return obj.length === 0; 
  } else if (typeof obj === "object" && obj !== null) {
      return Object.keys(obj).length === 0; 
  }
  return false; 
}

//Chunk Array
var chunk = function(arr, size) {
  const chunked = []
  let index = 0

  while (index < arr.length) {
      chunked.push(arr.slice(index, size + index))
      index += size
  }
  
  return chunked
};

//Array Prototype last
Array.prototype.last = function() {
  if (this.length === 0) {
      return -1
  }
  return this[this.length - 1]
};

//Group By
Array.prototype.groupBy = function(fn) {
  const result = {};
  this.forEach(item => {
      const key = fn(item);
      if (!result[key]) {
          result[key] = [];
      }
      result[key].push(item);
  });
  return result;
};

//Sort By
function sortBy(arr, fn) {
  return arr.slice().sort((a, b) => fn(a) - fn(b));
}

//Join two arrays by ID
const join = function(arr1, arr2) {
  const ob = {};
  for(const i of arr1) {
      ob[i.id] = i;
  }
  for(const i of arr2) {
      ob[i.id] = ob[i.id] ? {...ob[i.id], ...i} : i;
  }
  return Object.values(ob);
};

//
