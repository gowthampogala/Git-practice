let a = {
  name: "Gowtham",
  age: 21,
  gender: "Male",
  coding: function () {
    console.log("I am programmer....");
  },
  dancer: function () {
    console.log("I am dancer....");
  },
};
console.log(a.name);
console.log(a.age);
console.log(a);
a.coding();
a.dancer();
let b = a;
b.coding();
