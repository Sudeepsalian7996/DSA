let n=5
let arr=[1,2,3,4,5]
let indx=-1
for(let i=n-1;i>=0;i--){
    if(arr[i]>arr[i-1]){
        indx=i-1
        break
    }
}
if(indx==-1){
    return arr.reverse()
}
for(let i=n-1;i>=0;i--){
    if(arr[indx]<arr[i]){
        swap(arr,indx,i)
        break
    }
}
function swap(arr,a,b){
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}
 let arr2=arr.splice(indx+1,n-1).reverse()
 let res=[...arr,...arr2]
 console.log(res) 