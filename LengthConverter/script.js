let button = document.getElementById("convertBtn");
button.addEventListener("click", convert);
function convert() {
  let cmval = document.getElementById("input").value;
  if (cmval > 0) {
    let inches = cmval / 2.54;
    let result = document.getElementById("result");
    setTimeout(function () {
      result.innerHTML = inches.toFixed(4) + " inches";
    }, 2000);
  }
}
