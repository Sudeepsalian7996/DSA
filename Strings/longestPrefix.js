var longestCommonPrefix = function(strs) {
    let arr=strs.sort()
    let ans=""
    let first=arr[0]
    let last=arr[arr.length-1]
    let p=0
    while(p<first.length){
      if(first[p]!==last[p]) break
      ans+=first[p]
      p++ 
    }
    return ans
    };
console.log(longestCommonPrefix(["flower","flaw","flate"])) //fl