var consoleLogThunk = function(msg) {
    return function() {
        console.log(msg);
      }
}
 
var generator = function*() {
    yield consoleLogThunk("Yo");
    yield consoleLogThunk("Dawg");
    yield consoleLogThunk("!!!");
}
 
var delegator_function = function* () {
    yield consoleLogThunk("I yielded before delegated yield");
    yield* generator();
    yield consoleLogThunk("I yielded after delegated yield");
}
 
var k = delegator_function();
k.next().value();
k.next().value();
k.next().value();
k.next().value();
k.next().value();
k.next(); // There will be no output for this  

// Here value will be undefined and done will be true 
console.log(k.next()); // If you call k.next().value() now  , it will throw an Type error , as value is undefined which is not a function

/** Output 
I yielded before delegated yield
Yo
Dawg
!!!
I yielded after delegated yield
{ value: undefined, done: true }
{ value: undefined, done: true }
**/

//var j =  generator(); 
//j.next().value();
//j.next().value();
//j.next().value();
//j.next().value();
