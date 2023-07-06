let n=30
let i=2
let ans=[]

function checkPrime(ele){
  for(let j=2;j<ele;j++){
    if(ele%j==0){
      return false
    }
  }
  return true
}

while(i<=n){
  let flag=checkPrime(i)
  if(flag){
    // console.log(i)
    let originaLNumber=i
    let rev=0;
    while(originaLNumber>0){
      let temp=originaLNumber%10
      rev=rev*10+temp
      originaLNumber=Math.floor(originaLNumber/10)
    }
    let circular=checkPrime(rev)
    if(circular){
      ans.push(i)
    }
  }
  i++
}
console.log(ans) 
// [
//     2,  3,  5, 7,
//    11, 13, 17
//  ]