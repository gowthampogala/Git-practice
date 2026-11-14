let car = {
  color: "red",
  brand: "BMW",
  model: ["v1", "v2", "v3"],
  stop: function () {
    console.log("Stop.....");
  },
  start: function () {
    console.log("Start....");
  },
};

console.log(car);
car["color"] = "green";
console.log(car["model"][0]);

let bike = new Object();
bike.name = "pulsar";
console.log(bike);
