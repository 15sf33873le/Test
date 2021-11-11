import prompt from 'prompt-sync';

let rps = ["rock", "paper", "scissors"];
console.log("hello there would you like to play a game of rock paper scissors?");
console.log("choose between rock, paper and scissors then I will reveal my choice");

function Game() {
    let input = prompt();
    let aiChoice = rps[Math.floor(Math.random*3)];
    console.log(aiChoice);
}