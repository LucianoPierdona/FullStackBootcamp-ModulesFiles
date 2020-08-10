var name = prompt("Whats Your Name: ");

var nameSlice = name.slice(0,1);

var restOfName = name.slice(1);

restOfName = restOfName.toLowerCase();

var nameCapitalized = nameSlice.toUpperCase();

alert("Hello, " + nameCapitalized + restOfName + "!");
