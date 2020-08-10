function getMilk(money, costPerBottle) {
    console.log("Leave house");
    console.log("Move Right");
    console.log("Move Up");
    console.log("Move Up");
    console.log("Move Up");
    console.log("Move Up");
    console.log("Move Right");
    console.log("Enter the Store");
    console.log("Buy " + calcBottles(money, 1.5) + " Bottles of Milk");
    console.log("Leave the Store");
    console.log("Move Left");
    console.log("Move Down");
    console.log("Move Down");
    console.log("Move Down");
    console.log("Move Down");
    console.log("Move Left");
    console.log("Enter House");
    return console.log(calcChange(money, costPerBottle));
}
function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}
function calcChange(startingMoney, costPerBottle) {
    var change = startingMoney % costPerBottle;
    return change;
}

getMilk(19,3);