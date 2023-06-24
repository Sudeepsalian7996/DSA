
let ans=''
let count=0
for(let i=0;i<s.length;i++){
    if(s[i]=='('){
        if(count){
            ans+=s[i]
        }
        count++
    }else if(s[i]==')'){
        count--
        if(count){
            ans+=s[i]
        }
        
    }
}
return ans