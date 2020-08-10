// Create a random number for the first Dice
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
// Create a random number for the second Dice
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Set the dice for the first Image
var dice1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
// Set the dice for the Second Image
var dice2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Show the results in the header
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else {
    document.querySelector("h1").textContent = "Draw!";
}