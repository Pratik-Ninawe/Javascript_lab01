function findLongestString(arr) {
    let longestString = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString;
}

let stringsArray = ["elephant", "giraffe", "hippopotamus", "crocodile", "zebra", "lion", "tiger", "cheetah", "rhinoceros", "monkey"];

let longestString = findLongestString(stringsArray);


console.log("Longest string:", longestString);
