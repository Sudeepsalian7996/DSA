
let s="(1+(2*3)+((8)/4))+1"
var maxDepth = function(s) {
    let stack=[]
    let max=0
    for(let i=0;i<s.length;i++){
      if(s[i]=='('){
        stack.push(s[i])
      }else if(s[i]==')'){
        stack.pop()
      }
      if(max<stack.length){
        max=stack.length
      }

    }
    return max
};
console.log(maxDepth(s))
//o/p-->3