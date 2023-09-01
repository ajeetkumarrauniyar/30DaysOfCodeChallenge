// Reverse an String

//TestCase :
//string s = "abc"
//string new = "cba"

let s = "abc";
let newS ="";

for (let i = s.length -1; i >= 0; i--) {
  newS += s[i];
}

console.log(newS);
