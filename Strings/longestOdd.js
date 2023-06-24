let num='23953767242388496965328710'

for(let i=num.length-1;i>=0;i--){
  if(Number(num[i])%2!==0){
    console.log(num.split('').splice(0,i+1).join(''))
    return
  }
}
    