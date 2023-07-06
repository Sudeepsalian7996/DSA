let matrix=[[1,2,3,4],[7,8,9,0]]

let cols=[]
    let rows=[]
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==0){
                cols[i]=1
                rows[j]=1
            }
        }
    }
    console.log('cols,rows',cols,rows)
   for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(rows[j] || cols[i]){
                matrix[i][j]=0
            }
        }
   }
   console.log('matrix',matrix)