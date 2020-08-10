var text = prompt("Compose your Tweet: ");
var textCount = text.length;
var wordRemain = 140 - textLength;
alert("You have written " + textCount + " characters. you have " + wordRemain + " characters remaining.");

// Clean code
var tweet = prompt("Compose your Tweet: ");
alert("You have written " + tweet.length + " characters. you have " + (140 - tweet.length) + " characters remaining.");
