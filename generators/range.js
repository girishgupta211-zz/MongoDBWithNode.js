function* range (start, end, step) {
    while (start < end) {
        yield start
        start += step
    }
}

for (let i of range(0, 10, 2)) {
    console.log(i) // 0, 2, 4, 6, 8
}

var results = range(0 , 10, 2);
console.log( results.next() );
console.log( results.next().value );
console.log( results.next() );
console.log( results.next() );
console.log( results.next() );
console.log( results.next() );
console.log( results.next() );
