let arr=[1,2,3,4,5,7]

let length=arr.length-1

let sum=Math.floor((length+1)*(length+2)/2)

for(let i=0;i<arr.length-1;i++){
  sum-=arr[i]
}
console.log(sum)