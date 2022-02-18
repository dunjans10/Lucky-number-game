'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener
("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess);
    //no input
    if (!guess) {
       /* document.querySelector(".message").textContent = 
        "⛔ No number!"*/
        displayMessage("⛔ No number!");

        //player wins
    } else if (guess === secretNumber) {
        /*document.querySelector(".message").textContent = " 🎉 Correct number!";*/
        displayMessage(" 🎉 Correct number!");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#e56b6f";
        document.querySelector(".number").style.backgroundColor = "gold";
        document.querySelector(".number").style.color = "#343a40";

        if(score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

        
        //guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            /*document.querySelector(".message").textContent = 
            guess > secretNumber ? "📈 Too high!" : "📉 Too low!";*/
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            document.querySelector(".score").textContent = score;
         } else {
            // document.querySelector(".message").textContent = "💥 You lost the game!"
             displayMessage("💥 You lost the game!");
             document.querySelector(".score").textContent = 0;
         }

    } 
    //guess is too high
   /* else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
         } else {
             document.querySelector(".message").textContent = "💥 You lost the game!"
             document.querySelector(".score").textContent = 0;
         }
      //guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too low!"
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 You lost the game!"
             document.querySelector(".score").textContent = 0;
        }
       
    } */
})

document.querySelector(".again").addEventListener
("click", function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //document.querySelector(".message").textContent = "Start game...";
    displayMessage("Start game...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#343a40";
    document.querySelector(".number").style.backgroundColor = "#343a40";
    document.querySelector(".number").style.color = "#fff";

})