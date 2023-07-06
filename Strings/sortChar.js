
let s='tree'
let obj=new Map()
for(let i=0;i<s.length;i++){
   if(obj.get(s[i])==undefined) obj.set(s[i],1)
   else obj.set(s[i],obj.get(s[i])+1)
}
let arr=[...obj]

arr.sort((a,b)=>b[1]-a[1])
let str=arr.map(([a,b])=>a.repeat(b))
console.log(str.join('')) //eert