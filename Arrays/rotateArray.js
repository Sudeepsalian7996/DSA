//optimized solution
let k=3
let n=7
let arr=[1, 2, 3, 4, 5, 6, 7]
function reverse(arr,start,end){
 
 while(start<end){
   let temp=arr[start]
   arr[start]=arr[end]
   arr[end]=temp
   start++
   end--
 }
 
}

const rotate=(arr,k,n)=>{
 reverse(arr,0,k-1)
 reverse(arr,k,n-1)
 reverse(arr,0,n-1)
 return arr
}
console.log(rotate(arr,k,n))

//Brute force
// let k=2
// let n=7
// let arr=[1, 2, 3, 4, 5, 6, 7]
// let len=k%n
//       for(let i=0;i<len;i++){
//          let temp=arr[0]
//          for(let j=1;j<arr.length;j++){
//            arr[j-1]=arr[j]
//          }
//          arr[arr.length-1]=temp
//       }
//      console.log(arr)