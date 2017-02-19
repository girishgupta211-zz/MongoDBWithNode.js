function personCaller() {
    var person = {
        name: "Girish",
        greet: function() {
            console.log("hello", this.name);
            console.log("arguments", arguments);
        }
    }
	person.greet.apply(person, arguments);
	//person.greet.apply(person, arguments[1]); // this will be error
}


personCaller("Girish", "Gupta", "211");
