// let a = 10;
// let b = 20;
// let add = function (x, y) {
//   let c = x + y;
//   console.log(c);
// };
// add(10, 40);

//Arrow Function

let add = () => a + b;
console.log(add());

(function () {
  console.log("dont need to call anyone i executed my self");
})();

let a = 10;
let b = 20;
let add1 = (a, b) => a + b;
console.log(add1());
