let str="sudeepps"
let ans=""
let obj={}
for(let i=0;i<str.length;i++){
  if(obj[str[i]]){
   if(obj[str[i]]!==2){
      ans+=str[i]
   }
   obj[str[i]]=2
  }
  obj[str[i]]=1
}
console.log(ans)