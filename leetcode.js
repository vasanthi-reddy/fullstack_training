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

//