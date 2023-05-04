let arr=[1,2,3,4]
let left=[]
let product=1

for(let i=0;i<arr.length;++i){
  product*=arr[i]
  left.push(product)
}

let right=[]
 product=1
for(let i=arr.length-1;i>=0;i--){
  product*=arr[i]
  right[i]=product
}

let output=[]
for(let i=0;i<arr.length;i++){
  output[i]=left[i-1]*right[i+1]
}
output[0]=right[1]
output[arr.length-1]=left[left.length-2]
console.log(output)