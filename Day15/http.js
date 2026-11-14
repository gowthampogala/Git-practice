let exmp = {
  name: "Apple MacBook Pro 16",
  data: {
    year: 2019,
    price: 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
  },
};
async function run() {
  try {
    let res = await fetch("https://catfact.ninja/fact", {
      method: "GET",
    });
    let txt = await res.json();
    let result = txt.fact.toUpperCase();
    let arr = result.split(" ");
    console.log(arr);
  } catch (error) {
    console.log("Something wrong...............");
  }
}
run();
