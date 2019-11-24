
function findLargestPalindrome() {
    const palindromes = [];
    for (let i = 999; i > 0; i--) {
        for (let j = 999; j > 0; j--) {
            const product = i * j;
            if (isPalindrome(product)){
                palindromes.push(product);
            }
        }
    }

    return Math.max.apply(Math, palindromes);
}

function isPalindrome(number) {
    const str = number.toString();
    for (let i = 0; i < (str.length / 2); i++) {
        if (str[i] === str[str.length - i - 1]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

console.log(findLargestPalindrome());