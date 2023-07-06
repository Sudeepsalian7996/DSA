let str='abcdef'
let sum=0
for(let i=0;i<str.length;i++){
  
  sum+=str[i].charCodeAt()
}
// console.log(sum)
let ans=sum/str.length
// console.log(ans)

console.log(String.fromCharCode(Math.ceil(ans)))

//output is d become nearest of 99.5 is 100 thats d