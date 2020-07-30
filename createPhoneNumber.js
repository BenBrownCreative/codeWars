// https://www.codewars.com/kata/525f50e3b73515a6db000b83

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
    let num = '';
    numbers.splice(6,0,'-');
    numbers.splice(3, 0,') ');
    numbers.splice(0,0,'(');
    numbers.forEach(function(i) {
      num = num + i
    });
    return num;
}

console.log('createPhoneNumber', createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"
