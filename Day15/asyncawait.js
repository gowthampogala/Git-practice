function exmp() {
  return new Promise((resolve, reject) => {
    console.log("started executing...");
    setTimeout(() => {
      console.log("fineshed");
      resolve();
    }, 2000);
  });
}
async function run() {
  await exmp();
}
run();

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

async function fun() {
  try {
    await task1();
    await task2();
    await task3();
    await task4();
  } catch (error) {
    console.log("failed something wrong....");
  }
}
fun();
