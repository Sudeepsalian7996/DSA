for(let i=1;i<=5;i++){
    let str=''
     let flag=true
    for(let j=1;j<=i;j++){
      if(i%2!==0){
        if(flag){
          str+=1
          flag=false
        }else {
          str+=0
          flag=true
        }
      }else 
      {
          if(flag){
          str+=0
          flag=false
        }else {
          str+=1
          flag=true
        }
      }
    }
    console.log(str)
  }
  
  
//o/p-->
// 1
// 01
// 101
// 0101
// 10101  