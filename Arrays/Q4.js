
var arr = [1, 5, 7, -1];
let map= new Map()
let sum=6
let ans=0
for(let i=0;i<arr.length;i++){
   let b=sum-arr[i]
   if(map.has(b)){

     ans+=map.get(b)
   }
   if(map.get(arr[i])==undefined) map.set(arr[i],1)
   else map.set(arr[i],map.get(arr[i])+1)
}

console.log(ans)