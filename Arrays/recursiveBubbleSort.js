let arr=[4,2,7,3,1,2]

function bubble(arr,n){
  if(n==1) return
console.log(arr)
  for(let i=0;i<n-1;i++){
    if(arr[i]>arr[i+1]){
      [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
    }
  }
  bubble(arr,n-1)
  return arr
}
console.log(bubble(arr,6))