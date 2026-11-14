function task1() {
  console.log("task1 executing...");
}
function task2() {
  console.log("task2 executing..");
  let start = Date.now();
  let delay = 5000;
  let end = start + delay;
  while (Date.now() <= end) {}
  console.log("Task 2 Executed...");
}

function task3() {
  console.log("task3 executing..");
}
task1();
setTimeout(task2, 2000);
task3();
