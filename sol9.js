const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur", "Mumbai"];

rl.question("Enter a city:", function(userInput) {
    let index = cities.indexOf(userInput);

    if (index !== -1) {
        console.log(`Index of ${userInput} in the array is: ${index}`);
    } else {
        console.log("Not Found");
    }

    rl.close();
});
