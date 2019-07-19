const rotate = (matrix) => {
    for (let i = 0; i < matrix.length/2; i++) {
        for (let j = i; j < matrix.length - i - 1; j++) {
            const k = matrix.length - i - 1
            const l = matrix.length - j - 1

            const t = matrix[i][j]
            matrix[i][j] = matrix[j][k]
            matrix[j][k] = matrix[k][l]
            matrix[k][l] = matrix[l][i]
            matrix[l][i] = t;
        }
    }

    console.log(matrix)
}


const m = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

rotate(m);