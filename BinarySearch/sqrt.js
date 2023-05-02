let n=10

let beg=0
let end=n
let mid;
while(beg<=end){
   mid=(beg+end)/2
  if(mid==beg || mid==end) break
   if(mid*mid==n) break
  if(mid*mid>n) end=mid
  else beg=mid
  
}
console.log(mid)