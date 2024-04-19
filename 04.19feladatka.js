function transzponal(matrix) {
    const eredmeny = [];               

    for (let j = 0; j < matrix[0].length; j++) {    
        const sor = [];                

        for (let i = 0; i < matrix.length; i++)     
            sor.push(matrix[i][j]);     
        eredmeny.push(sor);             
    }

    return eredmeny;
}