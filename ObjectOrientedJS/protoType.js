function Person(name) {
    this.name = name;
    this.getName = function() {
        console.log("getName inside Person", this.name)
    }
}

Person.prototype.greet = function() {
    console.log("hey " + this.name);
}


function Employee(name, title) {
    Person.call(this);
    this.specialName = name;
    this.title = title;
}

emp = new Employee("Rohan", "Mr.")
Employee { name: undefined, specialName: "Rohan", title: "Mr." }



function Employee(name, title) {
    Person.call(this, name);
    this.specialName = name;
    this.title = title;
}

emp = new Employee("Rohan", "Mr.")
Employee { name: "Rohan", specialName: "Rohan", title: "Mr." }


emp.__proto__.constructor



function personCaller() {
    var person = {
        name: "Girish",
        greet: function() {
            console.log("hello", this.name);
            console.log("arguments", arguments);
        }
    }
    person.greet.apply(person, arguments);
}


personCaller("Girish", "Gupta", "211");
VM2210: 5 hello Girish
VM2210: 6 arguments["Gupta"]

function personCaller() {
    var person = {
        name: "Girish",
        greet: function() {
            console.log("hello", this.name);
            console.log("arguments", arguments);
        }
    }
    person.greet.apply(person, arguments[1]);
}

personCaller("Girish", "Gupta", "211");
VM2201: 8 Uncaught TypeError: CreateListFromArrayLike called on non - object
at personCaller( < anonymous > : 8: 14)
at < anonymous > : 1: 1





function personCaller() {
    var person = {
        name: "Girish",
        greet: function() {
            console.log("hello", this.name);
            console.log("arguments", arguments);
        }
    }
    person.greet.call(person, arguments[1]);
}


function personCaller() {
    var person = {
        name: "Girish",
        greet: function() {
            console.log("hello", this.name);
            console.log("arguments", arguments);
        }
    }
    person.greet.call(person, arguments);
}

personCaller("Girish","Gupta", "211");
VM2216:5 hello Girish
VM2216:6 arguments [Arguments[3]]




function personCaller() {
    var person = {
        name : "Girish",
        greet : function() {
        console.log("hello" , this.name);
        console.log("arguments", arguments);
    }}
person.greet.apply(person, arguments);
}

arr = ["Hey", "How" , "Are" , "You"];
["Hey", "How", "Are", "You"]
personCaller(arr);
VM2306:5 hello Girish
VM2306:6 arguments [Array[4]]



Every Instance has access to constructor.
