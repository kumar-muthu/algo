const paths = (matrix, x, y, p, r) => {
    if(x === matrix.length -1 && y === matrix.length - 1) {
       r.push(p)
       return;
    }

    let p1: any = []
    let p2: any = []

    if(x+1 < matrix.length && matrix[x+1][y] === 0) {
        p1 = paths(matrix, x+1,y, [...p, [x+1, y]], r)
    }

    if(y+1 < matrix.length && matrix[x][y+1] === 0) {
        p2 = paths(matrix, x,y+1, [...p, [x, y+1]], r)
    }

   return r;
}

const matrix = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]
const r = paths(matrix, 0, 0, [], [])
console.log(r);

