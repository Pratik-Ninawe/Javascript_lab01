let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let squaredNumbers = numbers.map(function(num) {
    return num ** 2;
}).join(", ");

console.log("Squared numbers:", squaredNumbers);