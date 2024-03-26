const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(number) {
    number = parseInt(number);

    if (!isNaN(number))
        console.log(number + (number % 2 === 0 ? " is even." : " is odd."));
    else
        console.log("Invalid input. Please enter a valid number.");

    rl.close();
});
