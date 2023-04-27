const arr = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

let result=[]
let obj={}

for(let i=0;i<arr.length;i++){
  if(!obj[arr[i]]){
    obj[arr[i]]=1
    result.push(arr[i])
  }
}
console.log(result)