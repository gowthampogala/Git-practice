// fetch("https://catfact.ninja/fact")
//   .then((res) => {
//     return res.text();
//   })
//   .then((txt) => {
//     console.log("Response text:", txt);
//     console.log("Parsed JSON:", JSON.parse(txt));
//   })
//   .catch((error) => {
//     console.log("Actual error:", error);
//   });

async function run() {
  const res = await fetch("https://catfact.ninja/fact");
  console.log(res);
  const data = await res.json();
  console.log(data);
}
run();
