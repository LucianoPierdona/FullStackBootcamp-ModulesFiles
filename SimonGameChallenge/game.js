// Button Colours
var buttonColours = ["red", "blue", "green", "yellow"];

// Game Color Pattern
var gamePattern = [];

// User Color Pattern
var userClickedPattern = [];

// Game is not started
var started = false;

// Initial Level
var level = 0;

// Start the Game
$(document).keydown(function () {
    if(!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Check if Answer is True or False
function checkAnswer(currentLevel) {

    // Take the User Pattern
    var lastAnswer = userClickedPattern[currentLevel];
    // Take the Game Pattern
    var checkLastColor = gamePattern[currentLevel];
    // Check if the conditions is true
    if(lastAnswer === checkLastColor) {
        console.log("success")
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
    
        }
    }else { // if it's false, then restart the game
        console.log("wrong");
        
        var audioWrong = new Audio("sounds/wrong.mp3");
        audioWrong.play();
        
        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over")
        }, 100);
        
        $("h1").text("Game Over - Press Any Key to Try Again")
        
        startOver();
    }
}

// Add the Clicked Buttons to the User Pattern
$(".btn").click(function () {
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

// Starts a new Sequence of Colours Everytime it's called
function nextSequence() {
    // restart the user pattern everytime the function is called
    userClickedPattern = [];

    $("h1").text("Level " + level);
    // Increase the level everytime the function is called
    level++;

    // Create a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColours = buttonColours[randomNumber];
    
    // push the random color to the game Array
    gamePattern.push(randomChosenColours);

    // Animate the button of the sequence
    
    $("#" + randomChosenColours).fadeOut(100).fadeIn(100);
    // Playing the sound according to the color
    playSound(randomChosenColours);
}

// Play the sounds of the game
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Animate when a button is pressed
function animatePress(color) {
    $("#" + color).addClass("pressed");

    setTimeout(function () {
        $("#" + color).removeClass("pressed")
    }, 100);
}

// Restart the game
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}