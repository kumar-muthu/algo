const place_queen = (board, col) => {
    if (col >= board.length) {
        return true;
    }

    for (let i = 0; i < board.length; i++) {
        const isSafe = is_safe_move(board, i, col);
        if (isSafe) {
            board[i][col] = '*';
            if (place_queen(board, col + 1)) {
                return true;
            }
            board[i][col] = '.';
        }
    }
    return false;
}

const is_safe_move = (board, x, y) => {
    for (let i = 0; i < y; i++) {
        if (board[x][i] === '*') {
            return false; // left part of row
        }
    }

    for (let i = x, j = y; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === '*') {
            return false; // left part of row
        }
    }

    for (let i = x, j = y; i < board.length && j >= 0; i++, j--) {
        if (board[i][j] === '*') {
            return false; // left part of row
        }
    }

    return true;
}


const grid = [...Array(20)].map(e => Array(20).fill('.'));

place_queen(grid, 0)

grid.forEach(r => console.log(r.join(' ')));


