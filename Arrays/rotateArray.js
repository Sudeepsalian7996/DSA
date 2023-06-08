let k=2
let n=7
let arr=[1, 2, 3, 4, 5, 6, 7]
let len=k%n
      for(let i=0;i<len;i++){
         let temp=arr[0]
         for(let j=1;j<arr.length;j++){
           arr[j-1]=arr[j]
         }
         arr[arr.length-1]=temp
      }
     console.log(arr)