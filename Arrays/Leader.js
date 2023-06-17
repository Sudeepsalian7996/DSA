// code here
let arr=[10,4,16,4,7,2,1]
let n=7
        let max=Math.max()
        let ans=[]
        for(let i=n-1;i>=0;i--){
            if(arr[i]>max){
                ans.push(arr[i])
            }
                max=Math.max(arr[i],max)
            
        }
        console.log(ans)