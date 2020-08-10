function isLeap(year) {
    if (year % 4 !== 0) {
        console.log("Not leap year.")
    }
    if(year % 4 === 0 && year % 100 !== 0) {
        console.log("Leap year.");
    }
    if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        console.log("Leap year.")
    }
    if(year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
        console.log("Not leap year.");
    }
}

isLeap(2020);