let prm = new Promise((reject) => {
  console.log("Promise executed...");
  reject("Succees..");
});
prm
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
