// Object Oriented Guide - JavaScript
// Valar Dohaeris

'use strict';

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

console.log(book["  name"]); // "the principles"

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

// In practice, checking the named parameter against undefined is more common than relying on arguments.length .

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

// Removing properties

console.log("name" in person1);
delete person1.name;
console.log("name" in person1);

// Enumeration
console.log(person1.propertyIsEnumerable("sayName")); // true

var properties = Object.keys(person1);

console.log(properties); // ['sayName']

console.log("length" in properties); // true

console.log(properties.propertyIsEnumerable("length")); // false

// Many native properties are not enumerable by default

// TYPES OF PROPERTIES

// Two Types: Data Properties & Accessor Properties

// Data Properties contains a value.
// Accessor properties doesn't, instead define a function to call when the property is read or written

var person1 = {
	_name: "Bejoy",

	get name() {
		console.log("Reading name");
		return this._name;
	},

	set name(value) {
		console.log("Setting name to %s", value);
		this._name = value;
	}
}

console.log(person1.name); // "Reading name" then "Bejoy"
person1.name = "President K"; // "Setting name to President K"

// leading underscore is a common convention to indicate that the property is considered private, but its still public.

// Property Attributes
	// Common Attributes of Data and accessors. 
		// Enumerable and Configurable

// By default all declared properties are enumerable and configurable

var person1 = {
	name: "Bejoy"
}

Object.defineProperty(person1, "name", {
	enumerable: false
});

console.log("name" in person1); // true

console.log(person1.propertyIsEnumerable("name")); // false

console.log(Object.keys(person1)); // []

Object.defineProperty(person1, "name", {
	configurable: false
});

try {
	delete person1.name;
}
catch(err) {
	console.log(err); // Cannot delete property 'name'
}

// When JavaScript is running in strict mode, attempting to delete a nonconfigurable
// property results in an error. In nonstrict mode, the operation silently fails.

console.log("name" in person1); // true

console.log(person1.name); // "Bejoy"

try {
	Object.defineProperty(person1, "name", {
		configurable: true
	});
}
catch(err) {
	console.log(err); // [TypeError: Cannot redfine property: name]
}

// Data Property Attributes

	// Value
	// Writable

var person1 = {
	name: "Bejoy"
};

// OR

var person1 = {};

Object.defineProperty(person1, "name", {
	value: "Bejoy",
	enumerable: true,
	configurable: true,
	writable: true
});

// Defining a new property with Object.defineProperty() , it’s important to specify all 
// of the attributes because Boolean attributes automatically default to false other­wise.

var person1 = {};
Object.defineProperty(person1, "name", {
	value: "Bejoy"
});

console.log("name" in person1); // true

console.log(person1.propertyIsEnumerable("name")); // false

try{
	delete person1.name;
}
catch(err) {
	console.log("Throws err, cannot delete");
}

try{
	person1.name = "George";
}
catch(err) {
	console.log(err); // [TypeError: Cannot assign to read only property 'name']
}

// Accessor Property Attributes
	// Get
	// Set

var person1 = {
	_name: "Bejoy",

	get name() {
		console.log("Reading name");
		return this._name;
	},

	set name(value) {
		console.log("Setting name to %s", value);
		this._name = value;
	}
};

// This code can also be written as

var person1 = {
	_name: "Bejoy"
};

Object.defineProperty(person1, "name", {
	get: function() {
		console.log("Reading name");
		return this._name;
	},
	set: function() {
		console.log("Setting name to %s", value);
		this._name = value;
	},
	enumerable: true,
	configurable: true
});

// The advantage of using accessor property attributes instead of object literal notation to 
// define accessor properties is that you can also define those properties on existing objects. 
// If you want to use object literal notation, you have to define accessor properties when 
// you create the object.

// Defining Multiple Properties

var person1 = {};

Object.defineProperties(person1, {

	// data property to store data
	_name: {
		value: "Nicholas",
		enumerable: true,
		configurable: true,
		writable: true
	},

	// accessor property 
	name: {
		get: function() {
			console.log("Reading name");
			return this._name;
		},
		set: function(value) {
			console.log("Setting name to %s", value);
			this._name = value;
		},
		enumerable: true,
		configurable: true
	}
});

var person1 = {
	name: "Bejoy"
};

var descriptor = Object.getOwnPropertyDescriptor(person1, "name");

console.log(descriptor);

