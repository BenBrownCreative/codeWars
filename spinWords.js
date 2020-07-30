// https://www.codewars.com/kata/5264d2b162488dc400000001

// Write a function that takes in a string of one or more words, and returns the same string, 
//but with all five or more letter words reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" 

function spinWords(words){
    const wordsArr = words.split(' ');
    for(let i=0; i < wordsArr.length; i++) {
        let word = wordsArr[i];
        if (word.length > 4) {
            let wordArr = word.split('');
            let reversedWord = '';
            
            for(let a=0; a < wordArr.length; a++) {
                reversedWord = wordArr[a] + reversedWord
            }
            wordsArr.splice(i, 1, reversedWord);
        }
    }
    return wordsArr.join(' ');
}
console.log('spinWords: ', spinWords("This is another test"));
console.log('spinWords: ', spinWords("Hey fellow warriors"));

