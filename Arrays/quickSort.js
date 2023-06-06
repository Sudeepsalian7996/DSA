const partition=(arr,low,high)=>{
    // Your code here
         let p=arr[low]
         let i=low
         let j=high
         while(i<j){
             while(p>=arr[i] && i<=high-1)
             {
                 i++
             }
             while(p<arr[j] && j>=low+1){
                 j--
             }
             if(i<j){
                 [arr[i],arr[j]]=[arr[j],arr[i]]
             }
         }
         [arr[low],arr[j]]=[arr[j],arr[low]]
         return j
 }
 const quickSort=(arr,low,high)=>{
   if(low>high) return
    
         let pivot=partition(arr,low,high)
           quickSort(arr,pivot+1,high)
         quickSort(arr,low,pivot-1)
       
         return arr
   
 }
 const arr=[99,4,5,7,55,3,22,99,22,88,44,22,88,6,6,3]
 console.log(quickSort(arr,0,arr.length-1))