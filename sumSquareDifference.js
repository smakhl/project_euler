function findSumOfSquares(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += Math.pow(i, 2);
    }

    return sum;
}

function findSquareOfSums(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return Math.pow(sum, 2)
}

console.log(findSquareOfSums(100) - findSumOfSquares(100));