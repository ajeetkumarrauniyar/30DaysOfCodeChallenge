// Find key in array

// TestCases : 
// k = 4
// A[] = {1,2,5,4,0}

// k = 33
// B[] = {11, 22, 33 ,44}

//For A
let k1 = 4;
const a = [1,2,5,4,0];

switch (true) {
    case a.includes(k1):
        console.log (`${k1} is present in A`);
        break;
        default:
            console.log(`${k1} is not present in A`);   
}

//For B
let k2 = 33;
const b = [11, 22, 33 ,44];

switch (true) {
    case b.includes(k2):
        console.log (`${k2} is present in B`);
        break;
        default:
            console.log(`${k2} is not present in B`);   
}




