function alternateNumber(arr,n){
    let positive=[]
    let negative=[]
    
    for(let i=0;i<n;i++){
        if(arr[i]<0){
            negative.push(arr[i])
        }else{
            positive.push(arr[i])
        }
    }
    let i=0
    let j=0
    let k=0
    while(i<positive.length && j<negative.length){
        arr[k]=positive[i]
        k++
        i++
        arr[k]=negative[j]
        k++
        j++
    }
    if(i<positive.length){
        while(i<positive.length){
            arr[k]=positive[i]
            k++
            i++
        }
    }
    if(j<negative.length){
        while(j<negative.length){
            arr[k]=negative[j]
            k++
            j++
        }
    }
    return arr
}
let arr=[9, 4 ,-2 ,-1 ,5 ,0 ,-5 ,-3 ,2]
console.log(alternateNumber(arr,9))