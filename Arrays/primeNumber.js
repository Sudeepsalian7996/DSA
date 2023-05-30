let n=1000
let arr=[]
let count=0
let num=2
while(count<n){
  let flag=0
  for(let i=2;i<num;i++){
    if(num%i==0){
      flag=1
      break
    }
  }
  if(flag==0){
    arr.push(num)
    count++
  }
  num++
}
console.log(arr)
