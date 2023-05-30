function equilibriumPoint(a,n){
    let i=0,j=n-1,leftSum=0,rightSum=0;
    while(i<=j){
        if(leftSum==rightSum && i==j){
            return i+1
        }else if(leftSum<rightSum){
            leftSum+=a[i]
            i++
        }else{
            rightSum+=a[j]
            j--
        }
    }
    return -1
}
let arr=[1,3,5,2,2]
console.log(equilibriumPoint(arr,5))