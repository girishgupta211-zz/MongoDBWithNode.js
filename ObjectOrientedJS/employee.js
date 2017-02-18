function Person(name) {
    this.name = name;
    this.getName = function() {
        console.log("getName inside Person", this.name)
    }
}


//Person.prototype.constructor = Person;

Person.prototype.greet = function() {
    console.log("hey " + this.name);
}


function Employee(name, title) {
    console.log("begiining:  ",   this );
    Person.call(this ,name);
    console.log("After Person call:  ",   this );
    this.specialName = name;
    this.title = title;
    console.log("After setting member variables  ",   this );
    console.log(this);
}

girish = new Person("Girisg", "Mr.")
girish.greet();
emp = new Employee("Rohan", "Mr.")
emp.getName();
console.log(emp);
//Employee { name: undefined, specialName: "Rohan", title: "Mr." }

