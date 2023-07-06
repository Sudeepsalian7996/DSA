let nums=[1,2,3,2,5]

let obj={}
for(let i=0;i<nums.length;i++){
if(!obj[nums[i]]){
   obj[nums[i]]=1
}else delete obj[nums[i]]
}
console.log(Object.keys(obj).join(''))

