let nums=[1,2,-2,3]
let max=nums[0]
let sum=0
for(let i=0;i<nums.length;i++){
    sum+=nums[i]
    if(sum>max)  max=sum
    if(sum<0) sum=0
}
console.log(max)