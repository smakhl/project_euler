const input = 600851475143;

function findLargestPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return findLargestPrime(number / i);
        }
    }
    return number;
}

const result = findLargestPrime(input)
console.log(result);