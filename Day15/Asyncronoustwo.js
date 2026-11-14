function fun() {
  console.log("Fetching data");
}
let intervalid = setInterval(fun, 2000);
clearInterval(intervalid, 10000);
