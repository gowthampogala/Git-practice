let userRole = "Admin";
let userName = "Gowtham";
let call = function () {
  if (userRole === "Admin") {
    let welcomeMessage = `${userName} You got accessed`;
    console.log(welcomeMessage);
  }
};
call();
