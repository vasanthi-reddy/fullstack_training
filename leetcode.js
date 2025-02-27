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

//