var isPalindrome = function(s) {
    let ch="abcdefghijklmnopqrstuvwxyz1234567890"
    let set1=new Set(ch)
    let str=s.toLowerCase()
    let result=""
    for(let i=str.length-1;i>=0;i--){
        if(set1.has(str[i])){
            result+=str[i]
        }
    }
    let result2=""
    for(let i=0;i<str.length;i++){
        if(set1.has(str[i])){
            result2+=str[i]
        }
    }
    if(result==result2){
        return true
    }else{
        return false
    }
};
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))