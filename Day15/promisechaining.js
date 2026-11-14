function task1() {
  return new Promise((resolve, reject) => {
    console.log("task1 started");
    setTimeout(() => {
      console.log("task1 fineshed");
      resolve();
    }, 2000);
    console.log("Hi");
  });
}
function task2() {
  return new Promise((resolve, reject) => {
    console.log("task2 started");
    setTimeout(() => {
      console.log("task2 fineshed");
      resolve();
    }, 2000);
  });
}
function task3() {
  return new Promise((resolve, reject) => {
    console.log("task3 started");
    setTimeout(() => {
      console.log("task3 fineshed");
      resolve();
    }, 2000);
  });
}
function task4() {
  return new Promise((resolve, reject) => {
    console.log("task4 started");
    setTimeout(() => {
      console.log("task4 fineshed");
      resolve();
    }, 2000);
  });
}

task1()
  .then(task2)
  .then(task3)
  .then(task4)
  .then(() => console.log("All task executed..."))
  .catch(() => console.log("Something happened..."));
