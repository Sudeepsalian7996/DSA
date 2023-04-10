//camel case letter count

let s="saveChangesInTheEditor"
let count=0;
    for(let i=0;i<s.length;i++){
     
        if(s[i]>="A" && s[i]<="Z"){
            count=Number(count)+1
        }
    }
    console.log(count+1)
//  o/p-->
// save
// Changes
// In
// The
// Editor