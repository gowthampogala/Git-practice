// function greet() {
//   console.log("Hello");
// }
// function execute(callback) {
//   greet();
// }
// execute(greet);

let add = (a, b) => a + b;

let sub = (a, b) => a - b;

let mul = (a, b) => a * b;

let calc = (a, b, callback) => callback(a, b);

console.log(calc(10, 20, add));
