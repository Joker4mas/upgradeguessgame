//!A program to Guessing Games
var luckyGuess = Math.random() * 20; //the line of code generatesa random number from 1 to20!
luckyGuess = Math.floor(luckyGuess); //this line of code removes remaining decimal over flow

// ! here is to store variable of score.
var scoreNumber = 20;
var highScore = 0;

// !below code is to take input from player by Id

var guessbox = document.getElementById('guessbox');
var btn_check = document.getElementById('btn_check');
var strtGuessing = document.getElementById('strtGuessing');
var score = document.getElementById('score');
var highscore = document.getElementById('highscore');
var again_btn = document.getElementById('again_btn');
var main_bottom = document.getElementById('main_bottom');


// ! here i'm going to declare a function to check for the number inserted for correctness

function checkNumber() {
    var userNumber = guessbox.value; //` Here we are grabbing the value of the input field.

    if (luckyGuess < userNumber) {
        strtGuessing.innerHTML = 'Your number is too high';
        main_bottom.style.backgroundColor = '#e30d00';
        scoreNumber = scoreNumber - 1;
        score.innerHTML = scoreNumber;

    }
    if (luckyGuess > userNumber) {
        strtGuessing.innerHTML = 'Your number is too low';
        main_bottom.style.backgroundColor = '#f9d3b8';
        scoreNumber = scoreNumber - 1;
        score.innerHTML = scoreNumber;

    }
    if (luckyGuess == userNumber) {
        strtGuessing.innerHTML = 'You got it! Huuuurrrayyy!!!! ';
        main_bottom.style.backgroundColor = '#019267';
        highscore.innerHTML = scoreNumber;
        scoreNumber = 20;
        score.innerHTML = scoreNumber;
    }

}

// function startAgain() {
//     luckyGuess = Math.random() * 20; //
//     luckyGuess = Math.floor(luckyGuess);
//     scoreNumber = 20;
//     score.innerHTML = scoreNumber;
//     console.log(luckyGuess);
//     main_bottom.style.backgroundColor = '#222';
// }


// ! here the function onclick event executes
btn_check.onclick = checkNumber;
// again_btn.onclick = startAgain;
console.log(luckyGuess);

function refreshPage() {
    window.location.reload();
}