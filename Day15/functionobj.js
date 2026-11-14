let a = 10;
b = 20;
function add(a, b) {
  console.log(a + b);
}
function emp(fun) {
  fun(a, b);
}
emp(add);
