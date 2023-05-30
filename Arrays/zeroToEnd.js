nums = [0,2,1,3,4,0,6]
  let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) j++
        else [nums[i-j],nums[i]]=[nums[i],nums[i-j]]
    }
    
   console.log(nums)
   
//   // [
//   1, 4, 3, 12, 15,
//   0, 0, 0,  0,  0
// ]