//UpperCase the element after the underscore inside an object

let obj={
    first_name_is_so:"sudeep",
    last_name:"salian",
    address_Qw:"house"
  }
  let keys=Object.keys(obj)
  keys.forEach((ele)=>{
    let str=""
    for(let i=0;i<ele.length;i++){
      if(ele[i]=="_"){
        str+=ele[i+1].toUpperCase()
        i++
      }else{
        str+=ele[i]
      }
    }
    obj[str]=obj[ele]
    delete obj[ele]
    str=""
  })
  console.log(obj)
  //o/p-->{ firstNameIsSo: 'sudeep', lastName: 'salian', addressQw: 'house' }