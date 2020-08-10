function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var numberSequence = [];
        if (n === 1) {
            numberSequence = [0];
        }
        else if (n === 2) {
            numberSequence = [0, 1];
        }else {
            numberSequence = [0, 1];
            for (var i = 2; i < n; i++) {
                numberSequence.push(numberSequence[numberSequence.length - 2] + numberSequence[numberSequence.length - 1]);
            }
        }
        return numberSequence;
        
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    