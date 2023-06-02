const palindrome=(str,start)=>{
    let len=Math.ceil((str.length)/2)
    if(start>=len){
      return 'its palindrome'
    }
    if(str[start]!==str[str.length-1-start]){
      return 'not palindrome'
    }
     return palindrome(str,start+1)
    
  }
  let str='iaai'
  console.log(palindrome(str,0)) //its plandrome