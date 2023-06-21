let arr=[1,4,3,5,2,2,5,8,1,6,3,0,5,3,88,2]

function merge(arr,low,mid,high){
  let temp=[]
  let left=low
  let right=mid+1
  
  while(left<=mid &&right<=high){
   if(arr[left]<=arr[right]){
     temp.push(arr[left])
     left++
   }
    else{
      temp.push(arr[right])
      right++
    }
  }
  while(left<=mid){
    temp.push(arr[left])
    left++
  }
   while(right<=high){
    temp.push(arr[right])
    right++
  }
  for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    return arr
}

function mergeSort(arr,low,high){
  if(low>=high) return
  let mid=Math.floor((low+high)/2)
  mergeSort(arr,low,mid)
  mergeSort(arr,mid+1,high)
  let sortedArray=merge(arr,low,mid,high)
  return sortedArray
}
console.log(mergeSort(arr,0,arr.length-1))
