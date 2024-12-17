//JavaScript For In
/*
for in loop iterates over a object and provide key or index of the value
*/
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text);