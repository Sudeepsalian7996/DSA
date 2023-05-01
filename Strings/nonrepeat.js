let str="sudeeosalian"

let map=new Map()

for(let i=0;i<str.length;i++){
  if(map.get(str[i])==undefined)
    map.set(str[i],1)
  else map.set(str[i],2)
  
}

for(let [key,values] of map){
  if(values==1){
    console.log(key)
    break
  }
}