
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
function splitStrings(str){
    let pairsArr = [];
    let newStr = str.split('');

    while (newStr.length > 0) {
        let pair = newStr.splice(0, 2);
        if (pair.length == 1) pair[0] = pair[0] + '_';
        let newPair = pair.join('');
        pairsArr.push(newPair);
    }
    
    return pairsArr;
}

console.log('splitStrings: ', splitStrings('abc'));
console.log('splitStrings: ', splitStrings('abcdef'));

