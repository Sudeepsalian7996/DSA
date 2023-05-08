//solution--1
let s = "eepeusd"
let t = "sudeeep"

function anagramCheck(s,t){
  const arr1=s.split("").sort().join("")
  const arr2=t.split("").sort().join("")

  return arr1===arr2
}
console.log(anagramCheck(s,t))

//solution --2

let s = "eepeusd"
let t = "sudeeep"


var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let obj = {};
    for (const c of s) {
      obj[c]=!obj[c]?1:obj[c]+1
      
    }
    for (const c of t) {
        if(!obj[c]) return false;
        obj[c]--;
    }
    return true;
};
console.log(isAnagram(s,t))