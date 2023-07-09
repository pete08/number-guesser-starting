let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// generate a random int from 1-9
const generateTarget = () => {
    return (Math.ceil(Math.random() * 9));
}

// compares guesses with secret Target Integer
const compareGuesses = (guess, compGuess, secretInt) => {
    const distGuess = Math.abs(guess - secretInt);
    // console.log(`distGuess: ${distGuess}`);
    const distCompGuess = Math.abs(compGuess - secretInt);
    // console.log(`distCompGuess: ${distCompGuess}`);
    if (distGuess === distCompGuess || distGuess < distCompGuess) {
        return true;
    } else {
        return false;
    }
}

// update the winner's score for the current round of Guessing
const updateScore = winner => {
    if (winner === 'human') {
        // console.log(`updating score... ${winner} receives: +1`)
        humanScore +=1;
    } if (winner === 'computer') {
        // console.log(`updating score... ${winner} receives: +1`)
        computerScore +=1;
    }
}

// increase Round by 1
const advanceRound = () => {
    return currentRoundNumber += 1
}

// console.log(compareGuesses(4, 2, 2));
// if (compareGuesses(4, 2, 2) === true) {
//     updateScore('human');
//     advanceRound();
// } else {
//     updateScore('computer');
//     advanceRound();
// }
// // console.log(compareGuesses(4, 8, 2));
// if (compareGuesses(4, 8, 2) === true) {
//     updateScore('human');
//     advanceRound();
// } else {
//     updateScore('computer');
//     advanceRound();
// }
// // console.log(compareGuesses(4, 2, 2));
// if (compareGuesses(4, 2, 2) === true) {
//     updateScore('human');
//     advanceRound();
// } else {
//     updateScore('computer');
//     advanceRound();
// }

// console.log(`Following round ${currentRoundNumber - 1}, the scores are as follows.`)
// console.log(`computer score: ${computerScore}\nhuman score: ${humanScore}`)