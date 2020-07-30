// https://www.codewars.com/kata/52685f7382004e774f0001f7

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    let m = '00';
    let h = '00'; 
    let s = '00';
    if (seconds > 9) {
        if (seconds > 59) {
            m = Math.floor(seconds / 60);
            s = seconds % 60;
            if (m > 59) {
                h = Math.floor(m / 60);
                m = m % 60;
                if (h < 10) h = `0${h.toString()}`;
            }
            if (s < 10) s = `0${s.toString()}`;
            if (m < 10) m = `0${m.toString()}`;
        }  
        else s = seconds;  
    }
    else s = `0${seconds.toString()}`;
    let time = `${h.toString()}:${m.toString()}:${s.toString()}`
    return time;
}

console.log('humanReadable: ', humanReadable(123124));
