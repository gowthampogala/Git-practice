const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    let c = Number(a) + Number(b);
    console.log("Sum:", c);
    rl.close();
  });
});

let a = prompt("Enter a number....");
let b = prompt("Enter a number");
console.log(a + b);
