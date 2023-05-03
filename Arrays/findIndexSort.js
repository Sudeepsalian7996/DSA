let arr=[1,2,3,5,6,7]
let k=5
for(let i=0;i<arr.length;i++){
  if(arr[arr.length-1]<k){
    console.log(arr.length)
    break
  }
  if(arr[i]==k){
    console.log(i)
    break
  }else if(arr[i]>k){
    console.log(i)
    break
  }
  
}