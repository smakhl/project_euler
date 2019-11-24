const { isEvenlyDivided } = require("./multiplesOf3and5");

console.log(findSmallestMultiple())

function isEvenlyDividedBy1To20(number) {
    for (let i = 1; i <= 20; i++) {
        if (!isEvenlyDivided(number, i))
            return false;
    }

    return true;
}

function findSmallestMultiple() {
    let number = 2520;
    while (true) {
        if (isEvenlyDividedBy1To20(number))
            return number;

        number++;
    }
}