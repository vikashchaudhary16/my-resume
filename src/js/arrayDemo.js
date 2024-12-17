/*
toString()
join()
pop()
push()
shift()
unshift()
length 
delete()
concat()
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.
*/

//splice

/* 
Definition and Usage
The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array.
*/
var array=[1,2,3,4,5];
console.log(array.splice(2));

//slice

/*
The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
*/
var array2=[1,2,3,4,5]
console.log(array2.slice(2));


console.log("----after-----");
console.log(array);
console.log(array2);