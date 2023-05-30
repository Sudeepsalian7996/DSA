function unionArray(arr1,arr2){
    let res=[...arr1,...arr2]
    let set=new Set(res)
    return Array.from(set).sort((a,b)=>a-b)
}
let arr1=[1, 2, 3, 4, 5]
let arr2=[1,2,3]
console.log(unionArray(arr1,arr2)) //[1,2,3,4,5]