function filterUniqueNumbers(arr) {
    let unique = [];
    for (let num of arr) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }
    return unique;
}

let numbersArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1, 3, 4];
let uniqueNumbersArray = filterUniqueNumbers(numbersArray).join(", ");  //OR let uniqueNumbersArray = filterUniqueNumbers(numbersArray);
console.log("Array containing only unique numbers:", uniqueNumbersArray);


// OR
// let numbersArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1, 3, 4];
// let uniqueNumbersArray = [...new Set(numbersArray)];
// console.log("Array containing only unique numbers:", uniqueNumbersArray);
