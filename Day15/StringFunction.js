let userInput =
  "   Alice Johnson  |  ALICE@example.COM  |  JavaScript developer and Coffee Enthusiast. I love JavaScript!";
let arr = userInput.split("|");
console.log(arr);
let name = arr[0].trim();
name = name.toUpperCase();
console.log(name);
let index = name.indexOf("O");
console.log(index);
let email = arr[1].trim();
let validemail = email.includes("@") && email.toLowerCase().endsWith(".com");
let output = `User name:
name: ${name} hi`;
console.log(output);
