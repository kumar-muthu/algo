const setMatrix = (matrix) => {
    const col = new  Array(matrix.length).fill(1);
    const row = new  Array(matrix.length).fill(1);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
           if(matrix[i][j] ===0) {
               row[i] = 0;
               col[j] = 0;
               break;
           }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
           if(row[i] === 0 || col[j] === 0) {
               matrix[i][j] = 0;
           }
        }
    }

    console.log(matrix);
}

const m = [
    [1,2,3],
    [1,0,3],
    [1,2,3]
]

setMatrix(m);