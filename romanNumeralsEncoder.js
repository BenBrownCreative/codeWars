// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
// 1666 uses each Roman symbol in descending order: MDCLXVI.

function romansOutput(num){
    // convert the number to a roman numeral
    let n = num;
    let romans = '';

    while (n > 0) {

        switch(true) {
            case (n > 999): 
            n = n - 1000;
            romans = romans + 'M';
            break;

            case (n > 499): 
            if (n > 899) {
                n = n - 900;
                romans = romans + 'CM';
            } else {
                n = n - 500;
                romans = romans + 'D';
            }
            break;

            case (n > 99): 
            if (n > 399) {
                n = n - 400;
                romans = romans + 'CD';
            } else {
                n = n - 100;
                romans = romans + 'C';
            }
            break;

            case (n > 49): 
            if (n > 89) {
                n = n - 90;
                romans = romans + 'XC';
            } else {
                n = n - 50;
                romans = romans + 'L';
            }
            break;
    
            case (n > 9): 
            if (n > 39) {
                n = n - 40;
                romans = romans + 'XL';
            } else {
                n = n - 10;
                romans = romans + 'X';
            }
            break;
    
            case (n > 4): 
            if (n === 9) {
                n = n - 9;
                romans = romans + 'IX';
            } else {
                n = n - 5;
                romans = romans + 'V';
            }
            break;
    
            case (n > 0): 

            if (n === 4) {
                n = n - 4;
                romans = romans + 'IV';
            } else {
                n = n - 1;
                romans = romans + 'I';
            }
            break;

            default: break;
    
        }

    }


    return romans
}

console.log('romansOutput', romansOutput(349));
console.log('romansOutput', romansOutput(12));
console.log('romansOutput', romansOutput(73));