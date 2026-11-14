function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function calc(a, b, callb) {
  return callb(a, b);
}
console.log(calc(10, 20, mul));
