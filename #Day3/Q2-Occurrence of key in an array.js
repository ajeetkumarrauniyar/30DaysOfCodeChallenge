// Occurrence of key in an Array
// key = 1
// A[] = {0,1,2,3,4,5}
// B[] = {5,4,3,2,1,0}

let key = 1;
let A = [0, 1, 2, 3, 4, 5];
let B = [5, 4, 3, 2, 1, 0];

let occurrencesOfKeyA = A.filter(item => item === key).length;
console.log(`Key ${key} found ${ occurrencesOfKeyA} time in  A`);

let  occurrencesOfKeyB = B.filter(item => item === key).length;
console.log(`Key ${key} found ${ occurrencesOfKeyB} time in  B`);