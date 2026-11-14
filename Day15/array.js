let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let remove = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    remove = arr.splice(i, 1);
  }
}
console.log(arr);
console.log(remove);

arr.splice(2, 2, 90, 70);
console.log(arr);
console.log(arr.indexOf(90));
console.log(arr.lastIndexOf());
