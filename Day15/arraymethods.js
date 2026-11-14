// let arr = [1, 4, 16, 25, 36];

// function squareRoot(x) {
//   return Math.sqrt(x);
// }
// let result = arr.map(squareRoot);
// console.log(arr);
// console.log(result);

//using Arrow function
// let arr = [1, 4, 16, 25, 36];

// let result = arr.map((x) => Math.sqrt(x));
// console.log(arr);
// console.log(result);

//----------------Filter--------------------------

// let age = [21, 18, 15, 12];
// let checkAge = function (x) {
//   if (x >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
// let res = age.filter(checkAge);
// console.log(age);
// console.log(res);

//-------------------reduce----------------------
let arr = [10, 20, 30];
let res = arr.reduce((total, x) => total + x, 0);
console.log(res);
