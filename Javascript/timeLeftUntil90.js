function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        // days with 90 years = 32850
        //Write your code here.
        var daysYouHave = age * 365;
        var daysLeft = 32850 - daysYouHave;
        var monthsYouHave = age * 12;
        var monthsLeft = 1080 - monthsYouHave;
        var weeksYouHave = age * 52;
        var weeksLeft = 4680 - weeksYouHave;
        console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.");
        
        
    /*************Don't change the code below**********/
    }

    lifeInWeeks(51);