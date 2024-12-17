//JavaScript For Of
/*
for of loop iterates over an object and provide the value 
*/
const cars = ["BMW", "Volvo", "Mini"];

let text1 = "";
for (let x of cars) {
  text1 += x;
}

console.log(text1);