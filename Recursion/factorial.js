function sum(n){
    if(n==0){
      return 1
    }
    return n*sum(n-1)
  }
   console.log(sum(5)) //120