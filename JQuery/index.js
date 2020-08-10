
// Selecting elements
        // Manipulating styles
$("h1").css("color", "red");

$("h1").addClass("big-title");

// Manipulating Text
$("h1").text("Bye");

//Manipulating Attributes
$("a").attr("href", "https://www.bing.com");

// adding eventListeners
$("h1").click(function () {
    $("h1").css("color", "purple");
});

$("button").click(function () {
    $("h1").css("color", "blue");
});

// Changing the text with the keyboard
$(document).keydown(function(event) {
    $("h1").text(event.key);
});

$("button").click(function () {
    $("h1").slideToggle();
})