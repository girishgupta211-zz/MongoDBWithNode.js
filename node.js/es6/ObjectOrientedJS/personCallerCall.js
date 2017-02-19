function personCaller() {
    var person = {
        name: "Girish",
        greet: function() {
            console.log("hello", this.name);
            console.log("arguments", arguments);
        }
    }
    person.greet.call(person, arguments[1]);
    person.greet.call(person, arguments);
    person.greet(arguments[1]);
}

personCaller("Girish","Gupta", "211");
