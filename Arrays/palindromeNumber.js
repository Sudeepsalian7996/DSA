// //solution--1
// var isPalindrome = function(x) {
//     let n=x.toString().split("").reverse().join("")
//     if(x==Number(n)){
//         return true 
//     }else return false
// };

var isPalindrome = function(x) {
    let rev=0
    let num=x
    while(x>0){
        let rem=x%10
        rev=rev*10+rem
        x=Math.floor(x/10)
    }
    return rev===num
};

console.log(isPalindrome(121))

