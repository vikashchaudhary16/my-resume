//setTimeout(()=>console.log('hi'),1000)
//console.log("Welcome to Programiz!");

const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
    console.log("Welcome to Programiz!");
}

function myStopFunction() {
  clearTimeout(myTimeout);
}

myStopFunction();

const myInterval = setInterval(myGreeting,1000);

clearInterval(myInterval);