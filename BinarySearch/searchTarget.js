let nums = [-1,0,3,5,9,12]
 let target = 9
 
 let beg=0
 let end=nums.length-1
 while(beg<=end){
   let mid=Math.floor((beg+end)/2)
   if(nums[mid]==target){
     console.log(mid)
     break
   }else if(nums[mid]>target) end=mid-1
  else beg=mid+1
   
 }