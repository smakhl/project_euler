// console.log(getSumOfMultiplesOf3And5(1000))

function isEvenlyDivided(a, b) {
    return a % b === 0;
}

function getSumOfMultiplesOf3And5(limit) {
    let sum = 0;
    for (let i = 0; i < limit; i++) {
        if (isEvenlyDivided(i, 3) || isEvenlyDivided(i, 5))
            sum += i;
    }
    return sum;
}

module.exports = { isEvenlyDivided }