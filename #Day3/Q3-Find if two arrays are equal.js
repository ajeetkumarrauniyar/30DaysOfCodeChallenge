// Find if two arrays are equal

// TestCase 1 : 
// A[] = {1,2,5,4,0}
// B[] = {1,2,5,4,0}

// TestCase 2:
// A[] = {1,2,3,4,5}
// B[] = {11, 22, 33 ,44}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// Test Case 1
let a = [1, 2, 5, 4, 0];
let b = [1, 2, 5, 4, 0];

if (arraysAreEqual(a, b)) {
    console.log("Case 1: Equal");
} else {
    console.log("Case 1: Not Equal");
}

// Test Case 2
let a1 = [1, 2, 3, 4, 5];
let b1 = [11, 22, 33, 44];

if (arraysAreEqual(a1, b1)) {
    console.log("Case 2: Equal");
} else {
    console.log("Case 2: Not Equal");
}