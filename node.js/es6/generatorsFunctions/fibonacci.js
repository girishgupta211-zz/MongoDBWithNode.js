let fibonacci = function* (numbers) {
    let pre = 0, cur = 1
    while (numbers-- > 0) {
        [ pre, cur ] = [ cur, pre + cur ]
        yield cur
    }
}

for (let n of fibonacci(10))
    console.log(n)

let numbers = [ ...fibonacci(10) ]

console.log(numbers);
let [ n1, n2, n3, ...others ] = fibonacci(10)
console.log(others);
