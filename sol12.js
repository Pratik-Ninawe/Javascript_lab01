function findIntersection(arr1, arr2) {
    let intersection = [];
    for (let num of arr1) {
        if (arr2.includes(num)) {
            intersection.push(num);
        }
    }
    return intersection;
}

let array1 = [1, 5, 3, 4,16];
let array2 = [5, 16, 6, 17, 68];

let intersectionArray = findIntersection(array1, array2);

console.log("Intersection array:", intersectionArray);
