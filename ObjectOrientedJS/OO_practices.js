// Object Oriented Guide - JavaScript


// Both var points to the same object
var object1 = new Object();
var object2 = object1;

// Dereferencing Objects - To free up the memory space

object1 = null;

// Use of string literals in property name when we want spaces or special characters
var book = {
    "  name": "the principles",
    year: 2014
}

console.log(book["  name"]);

// Reg Exp literal - Use over the consturctor form 

var numbers = /\d+/g;

// Use of brackets notation to dynamically decide which property to access

var array = [];
array.push(123);

// OR

var array = [];
array["push"](123);

// OR

var method = "push";
array[method](123);

// the instanceof operator can identify inherited types
var items = [];
var object = {};

console.log(items instanceof Array); // true
console.log(items instanceof Object); // true
console.log(object instanceof Object); // true
console.log(object instanceof Array); // false

// use of Array.isArray() over instanceof Array to check if an object is an Array

var items = [];
console.log(Array.isArray(items)); // true

// An object always evaluates to true even its a boolean false

var found = new  Boolean(false);

if(found) {
	console.log("found");
}

// Most of the time, using primitive wrapper objects instead of primitives only leads to errors.

// Functions are objects. Functions are different from other objects because of an internal property [[Call]]

// arguments is an array like structure. Arguments is not an instance of Array and Array.isArray(arguments) always returns false.

function reflect(a, b) {
	return a;
}

console.log(reflect.length); // returns no. of expected arguements

//In practice, checking the named parameter against undefined is more common than relying on arguments.length .

// The ability to use and manipulate the this value of functions is key to good object-oriented programming in JavaScript.

// Manipulating this

// The call() Method

function sayNameForAll(label) {
	console.log(label + ":" + this.name);
}

var person1 = {
	name: "Bejoy"
}

var person2 = {
	name: "George"
}
var name = "Mathew";

sayNameForAll.call(this, "global"); // this doesn't work in sublime build - but works for browsers and node

sayNameForAll.call(person1, "person1"); // outputs "person1: Bejoy"

// pass an array or array like object when using apply 
// Its just mere representation - can pass array even for call
sayNameForAll.apply(person1, ["person1"]); // outputs "person1: Bejoy"

// bind() method

// create a function just for person1
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1");

// create a function just for person2 with passing the parameter
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
sayNameForPerson2();

// attaching a method to an object doesn't change 'this'
person2.sayName = sayNameForPerson1;
person2.sayName("person2"); 	// outputs "person2:Bejoy"

// Detecting Properties

// unreliable
if (person1.age) {
	// do something with age
}

// reliable 
console.log("name" in person1); // true
console.log("age" in person1); // false

var person1 = {
	name: "Bejoy",
	sayName: function() {
		console.log(this.name);
	}
};

console.log("sayName" in person1); // true

// in operator has the added benefit of not evalutating the value of the property

// for checking if that obejct has specific property use hasOwnProperty

console.log(person1.hasOwnProperty("name")); // true
console.log(person1.hasOwnProperty("toString")); // false

