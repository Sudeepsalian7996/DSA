var canConstruct = function(ransomNote, magazine) {
    let obj1={}
    let obj2={}
    for(const ele of ransomNote){
        obj1[ele]=!obj1[ele]?1:obj1[ele]+1
    }
    for(const ele of magazine){
       obj2[ele]=!obj2[ele]?1:obj2[ele]+1
    }
   for(let key in obj1){
       if(obj1[key]>obj2[key] ||obj2[key]==undefined) return false
   }
   return true
};
console.log(canConstruct("ab","abc"))  //true