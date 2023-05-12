for(let i=1;i<=4;i++){
  let pattern=""
  for(let k=3;k>=i;k--){
    pattern+=" "
  }
  for(let j=1;j<=i;j++){
    pattern+="*"
  }
  for(let p=2;p<=i;p++){
    pattern+="*"
  }
  console.log(pattern)
}