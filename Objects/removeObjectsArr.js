let arr=[
    {a:10,b:20},
    {a:11,b:13},
    {a:10,b:20},
    {a:10,b:20},
    {a:50,sd:40}
    ]
    
    const res=arr.filter((item,index)=>{
      return index===arr.findIndex((ele)=>{
        return JSON.stringify(item)===JSON.stringify(ele)
      })
    })
    console.log(res)