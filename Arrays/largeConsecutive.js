if(arr.length==0) return 0 
    let sortNum=arr.sort((a,b)=>a-b)
    let low=Math.max()
    let count=0
    let larger=1
    for(let i=0;i<sortNum.length;i++){
        if(arr[i]-1==low){
            console.log('-->',arr[i])
            count++
            low=arr[i]
        }else if(arr[i]!=low){
            count=1
            low=arr[i]
        }
         larger=Math.max(larger,count)
    }
    return larger