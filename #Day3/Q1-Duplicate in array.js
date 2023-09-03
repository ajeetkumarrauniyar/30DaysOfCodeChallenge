// Duplicate in array
// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}

function findDuplicates(arr) {
    let seen = {}; 
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            duplicates.push(arr[i]);  
        } else {
            seen[arr[i]] = true;  
        }
    }

    return duplicates;
}

// For A[]
let A = [0, 1, 2, 3, 4, 5];

let duplicatesValueInA = findDuplicates(A);

if (duplicatesValueInA.length > 0) {
    console.log(`Duplicates present in A: ${duplicatesValueInA}`);
} else {
    console.log("Duplicates present in A: 0");
}

// Test Case 2
let B = [5, 4, 3, 2, 1, 0];

let duplicatesValueInB = findDuplicates(B);

if (duplicatesValueInB.length > 0) {
    console.log(`Duplicates present in B: ${duplicatesValueInB}`);
} else {
    console.log("Duplicates present in B: 0");
}

