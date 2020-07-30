// https://www.codewars.com/kata/5412509bd436bd33920011bc

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your 
// most secret question is still correct. However, since someone could look over your shoulder, you don't want that 
// shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    if (cc.length > 4) {
        let ccArray = cc.split('');
        const cutoff = cc.length - 4;
        let last4 = ccArray.splice(cutoff);
        let newcc = '';
        for (i = 0; i < ccArray.length; i++) {
            newcc = newcc + '#';
        }
        newcc = newcc + last4.join('');
        return newcc;
    }
    else return cc;
}

console.log('maskify', maskify("4556364607935616"));

