var r = 3;
function* finite_ap(a){
	for(var i=0; i<3 ; i++)
	{
		a = a + r;
		yield a;
	}
}

var sum = finite_ap(5);
console.log(sum.next()); // returns { value : 8, done : false }
console.log(sum.next()); // returns { value : 11, done: false }
console.log(sum.next()); // returns { value : 14, done: false }
console.log(sum.next()); //return { value: undefined, done: true }
console.log(sum.next()); //return { value: undefined, done: true }

/*
Notes:

next()
This is used to resume the execution along with passing an argument. If nothing is passed, then undefined gets passed as the first argument.
Example: sum.next(5);


Delegating yield
Generator delegation is used to yield a generator from within an existing generator and can be used to compose generators or even iterate over a generator.

On delegating to another generator, the current generator stops producing a value itself and starts yielding values of the delegated generator until it is exhausted. Upon exhaustion of the delegated generator, the generator resumes returning its own value.
*/
