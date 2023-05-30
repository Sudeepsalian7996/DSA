for(let i=0;i<=2;i++){
    let ans=''
    for(let j=1;j<3-i;j++){
      ans+=' '
    }
    for(let k=-2;k<2*i-1;k++){
      ans+='*'
    }
    for(let j=1;j<3-i;j++){
      ans+=' '
    }
    console.log(ans)
  }
  for(let i=1;i<=2;i++){
    let ans=''
    for(let j=1;j<=i;j++){
      ans+=' '
    }
    for(let j=-1;j<4-2*i;j++){
      ans+='*'
    }
    console.log(ans)
  }
 