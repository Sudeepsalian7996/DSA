let arr=[2,3,4,5,1,3,2,5,6,7,0,9]

if(arr.length==0) return 0 
    let sortNum=arr.sort((a,b)=>a-b)
    let low=Math.max()
    let count=0
    let larger=1
    for(let i=0;i<sortNum.length;i++){
        if(arr[i]-1==low){
            // console.log('-->',arr[i])
            count++
            low=arr[i]
        }else if(arr[i]!=low){
            count=1
            low=arr[i]
        }
         larger=Math.max(larger,count)
    }
    console.log(larger) 