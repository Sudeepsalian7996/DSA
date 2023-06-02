function reverse(arr,start,end){
    if(start<end){
      [arr[start],arr[end]]=[arr[end],arr[start]]
      reverse(arr,start+1,end-1)
    }
      return arr
}
let arr=[3,7,1,9,2]
let n=5
console.log(reverse(arr,0,n-1)) //[2,9,1,7,3]