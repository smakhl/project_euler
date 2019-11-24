const limit = 4000000;
// const limit = 10;
const lastTwo = [1, 2]
let sumOfEvenFibonacciNumbers = 2;

while (lastTwo[1] < limit) {
    const nextTerm = lastTwo[0] + lastTwo[1];
    if (isEven(nextTerm))
        sumOfEvenFibonacciNumbers += nextTerm;

    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextTerm;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log(sumOfEvenFibonacciNumbers)