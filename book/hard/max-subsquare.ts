// completed
const max_sub_square = (square) => {
    const continuous_data = continuous(square);
    let max_so_far = 0;
    let x = 0,
        y = 0;
    for (let i = square.length - 1; i >= 0; i--) {
        for (let j = square.length - 1; j >= 0; j--) {
            const real_min = Math.min(continuous_data.pre_col[i][j], continuous_data.pre_row[i][j]);
            if (square_complete(i, j, real_min, square)) {
                if (max_so_far < real_min) {
                    max_so_far = real_min;
                    x = i;
                    y = j;
                }
            }
        }
    }
    if (max_so_far > 0) {
        console.log(`Row: ${x}, Col: ${y}, Length: ${max_so_far}`);
    } else {
        console.log('Failed')
    }
}

const square_complete = (row, col, count, square) => {
    for (let i = 0; i < count; i++) {
        if (square[row][col - i] === 0 || square[row - i][col - i] === 0 ||
            square[row - i][col] === 0 || square[row][col - i] === 0) {
            return false;
        }
    }
    return true;
}

const create_array = (size) => {
    const result: any = []
    for (let i = 0; i < size; i++) {
        result.push(new Array(size))
    }
    return result;
}

const continuous = (square) => {
    const pre_row = create_array(square.length);
    const pre_col = create_array(square.length);
    for (let i = 0; i < square.length; i++) {
        let r = 0;
        let c = 0;
        for (let j = 0; j < square.length; j++) {
            const row_wise = square[i][j];
            row_wise === 1 ? r++ : r = 0
            pre_row[i][j] = r;

            const col_wise = square[j][i];
            col_wise === 1 ? c++ : c = 0
            pre_col[j][i] = c;
        }
    }
    return {
        pre_row,
        pre_col
    };
}

const square = [
    [1, 0, 0, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 1, 1]
]

max_sub_square(square);