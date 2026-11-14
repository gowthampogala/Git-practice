function fun1() {
  console.log("I am fun1");
  function fun2() {
    console.log("fun2");
  }
  return fun2;
}
let emp = fun1;

emp();
