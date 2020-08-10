var output = [];

function fizzBuzz() {
    for(var count = 1; count <= 100; count++) {
        if(count % 3 !== 0 && count % 5 !== 0) {
            output.push(count);
            console.log(output);
        }
        if(count % 3 === 0) {
            output.push("Fizz");
            console.log(output);
        }
        if(count % 5 === 0) {
            output.push("Buzz");
            console.log(output);
        }
        if(count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
            console.log(output);
        }
    }  
}