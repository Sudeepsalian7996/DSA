let arr=[1,13,17,55,66]
let k=3
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