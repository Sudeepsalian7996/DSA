function transitionPoint(arr,n){
    if(arr[0]==1) return 0
    for(let i=0;i<n;i++){
        if(arr[i]===1){
            return i
        }
    }
    return -1
}
let arr=[0,0,0,1,1]
console.log(transitionPoint(arr,5)) //3