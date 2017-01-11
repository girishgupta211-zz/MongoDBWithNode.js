var r = 3;
 
function* infinite_ap(a) {
     for( ; ; ) {
        a = a + r;
        yield a;
      }
}
 
var sum = infinite_ap(5);
 
console.log(sum.next()); // returns { value : 8, done : false }
console.log(sum.next()); // returns { value : 11, done: false }
