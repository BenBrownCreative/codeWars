// Greed is a dice game played with five six-sided dice. 
// Your mission, should you choose to accept it, is to score a throw according to these rules. 
// You will always be given an array with five six-sided dice values.

// A single die can only be counted once in each roll. 
// For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

function score( dice ) {

    // Fill me in!
    let groups = [];
    let score = 0;
        
    function addScore(num) {
        switch (num) {
            case 1: return 1000
            case 2: return 200
            case 3: return 300
            case 4: return 400
            case 5: return 500
            case 6: return 600
            default: return 0
        }
    }
    
    // group dice
    dice.map(e => {
        let position = groups.findIndex(x => x[0] === e);
        if (position === -1) {
            groups.push([e, 1]);
        } 
        else {
            groups[position][1]++
        }
    });

    // get score
    groups.forEach(x => {
        if (x[0] === 1 || x[0] === 5) {
            if (x[1] > 2) {
                score+= addScore(x[0]);
                x[1]-= 3;
            }
            if (x[0] === 1) {
                score+= x[1] * 100
            }
            else if (x[0] === 5) {
                score+= x[1] * 50
            }
            
        }
        if (x[1] > 2) {
            score+= addScore(x[0]);
        }
    });

    return score
  }

console.log('score', score( [5, 1, 5, 5, 2] ))