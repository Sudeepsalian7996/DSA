var longestPalindrome = function(s) {
    let obj={}
    let ans=0
    for(let char of s){
        obj[char]=!obj[char]?1:obj[char]+1
        if(obj[char]%2==0) ans+=2
    }
    return s.length>ans?ans+1:ans
};
console.log(longestPalindrome("palindrrp"))