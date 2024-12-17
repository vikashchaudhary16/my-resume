//Call: The call() method invokes a function with a given this value and arguments provided one by one

var employee1 = { firstName: "John", lastName: "Rodson" };
//var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
//invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

//*****************************************************************************************************************/
//Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

var employee1 = { firstName: "John", lastName: "Rodson" };
//var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
//invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

//*****************************************************************************************************************/
//bind: returns a new function, allowing you to pass any number of arguments

var employee1 = { firstName: "John", lastName: "Rodson" };
//var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
//var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
//inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

/*
Call and apply are pretty interchangeable. Both execute the current function immediately. 
You need to decide whether it’s easier to send in an array or a comma separated list of arguments. 
You can remember by treating Call is for comma (separated list) and Apply is for Array.

Whereas Bind creates a new function that will have this set to the first parameter passed to bind().

Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() 
when you want to invoke the function immediately, and modify the context.


Call/apply call the function immediately, whereas bind returns a function
*/