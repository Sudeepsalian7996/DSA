//reverse the vowels

let str="my name is sudeep salian"
let vowels=["a","e","i","o","u"]
let s=str.split("")
let rev=[]
for(let i=0;i<s.length;i++){
  if(vowels.includes(s[i])){
    rev.push(s[i])
  }
}
for(let i=0;i<s.length;i++){
  if(vowels.includes(s[i])){
    s[i]=rev.pop()
  }
}
console.log(s.join(""))