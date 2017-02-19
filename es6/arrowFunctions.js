let evens = [ 0 , 2 ,4 ,6, 8 ]
odds  = evens.map(function (v) { return v + 1; });
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
nums  = evens.map(function (v, i) { return v + i; });
console.log( ` "evens : " ${evens}  "\n"  "odds : " ${odds} "\n"  "pairs : " ${pairs}  "\n"  nums : ${nums}  ` );
let  [ a , b, c] = `${pairs}`
console.log(a)
console.log(b)
console.log(c)
