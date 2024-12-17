async function async2() {
  console.log("FROM async 2");
}

async function async1() {
  console.log("Async 1");
  await async2(); // *
  console.log("AFter Async 1");
  console.log("AFter Async 2");
  console.log("AFter Async 3");
  console.log("AFter Async 4");
  console.log("AFter Async 5");
}

async1();
console.log("Synchronous"); //**
console.log("Synchronous1"); //**
console.log("Synchronous2"); //**
console.log("Synchronous3"); //**

/*
An async function is synchronous until the first await, uncaught exception, or return (including an implicit return where code execution just
   "falls off" the end of the function). At that point, the function returns a promise and synchronous execution continues from the point at 
   which the function was called. If it was an exception or a return or implicit return (not an await), a microtask is queued to settle the 
   promise from the function (rejecting it on exception or fulfilling it on return).
*/

const getData = async () => {
  var data = "Hello World";
  return data;
};

getData().then((data) => console.log(data));
