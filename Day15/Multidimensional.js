let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
console.log(arr);
let ar2 = structuredClone(arr);
console.log(ar2);
arr[1].push(90);
console.log(arr);
console.log(ar2);
