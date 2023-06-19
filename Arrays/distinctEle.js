let arr=[1, 2, 1, 3, 4, 2, 3]
//o/p-->23333
let k=3
function windowSlide(arr,k){
  let ans=[]
  for(let i=0;i<arr.length-k+1;i++){

    let random=arr.slice(i,k+i)
    let set=new Set(random)
    ans.push(set.size)
  }
  console.log(ans)
}
windowSlide(arr,k)