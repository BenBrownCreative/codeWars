
// https://www.codewars.com/kata/514b92a657cdc65150000006

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function multiplesOf(number){
    let total = 0;
    let n = number - 1;
    while(n > 0) {
        if ((n % 3) === 0 || (n % 5) === 0) {
            total = total + n;
        }
        n--
    }
    return total
}
console.log('multiplesOf: ', multiplesOf(4));

