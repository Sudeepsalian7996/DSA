for(let i=1;i<=4;i++){
    let str=''
    if(i==1 ||i==4){
      for(let j=1;j<=4;j++){
      str+='*'
      }
    }else{
      for(let j=1;j<=4;j++){
        if(j==1 ||j==4){
          str+='*'
        }else{
          str+=' '
        }
      }
    }
    console.log(str)
  }

//   o/p-->
// ****
// *  *
// *  *
// ****