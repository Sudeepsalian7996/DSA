let s='sudeep'
let t='salian'

let sArr=[]
let tArr=[]
if(s.length!==t.length){
    return false
}
for(let i=0;i<s.length;i++){
    sArr.push(s.indexOf(s[i]))
    tArr.push(t.indexOf(t[i]))
    if(sArr[i]!=tArr[i]) return false
}
return true