for(let i=0;i<matrix.length-1;i++){
    for(let j=i+1;j<matrix.length;j++){
        [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
    }
}
for(let i=0;i<matrix.length;i++){
    matrix[i]=matrix[i].reverse()
}
return matrix