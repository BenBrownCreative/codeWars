// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  return str
    .split(' ')
    .map((word) => {
      // use regex to check if word length is 1 and is not a letter
      if (word.length === 1 && !word.match(/[a-z]/i)) return word;
      return `${word.substring(1)}${word.charAt(0)}ay`;
    })
    .join(' ');
}

console.log('pigIt', pigIt('Pig latin is cool $'));
