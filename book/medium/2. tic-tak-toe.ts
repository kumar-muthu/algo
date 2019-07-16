// Completed
class TicTakToe {
    board;
    public constructor(private n: number) {
        this.board = []
        for (let i = 0; i < n; i++) {
            this.board.push(Array(n).fill('-'))
        }
    }

    public move(player: any, x: any, y: any) {
        if (this.board[x][y] != '-') {
            return;
        }
        this.board[x][y] = player;
    }

    public hasWon(char) {
        if (this.hasColumns(char) || this.hasRows(char) || this.hasLeftDiagonal(char) || this.hasRightDiagonal(char)) {
            return true;
        }
        return false;
    }

    public hasColumns(char) {
        // columns
        for (let i = 0; i < this.board.length; i++) {
            let charCount = 0;
            for (let j = 0; j < this.board.length; j++) {
                if (this.board[j][i] === char) {
                    charCount++;
                }
            }
            if (charCount === this.board.length) {
                return true;
            }
        }
        return false;
    }

    public hasRows(char) {
        // columns
        for (let i = 0; i < this.board.length; i++) {
            let charCount = 0;
            for (let j = 0; j < this.board.length; j++) {
                if (this.board[i][j] === char) {
                    charCount++;
                }
            }
            if (charCount === this.board.length) {
                return true;
            }
        }
        return false;
    }

    public hasLeftDiagonal(char) {

        let charCount = 0;
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][i] === char) {
                charCount++;
            }
        }
        if (charCount === this.board.length) {
            return true;
        }
        return false;
    }

    public hasRightDiagonal(char) {
        let charCount = 0;
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[i][this.board.length - 1 - i] === char) {
                charCount++;
            }
        }
        if (charCount === this.board.length) {
            return true;
        }
        return false;
    }

    public print() {
        console.log(this.board);
    }
}

const game = new TicTakToe(5);
game.move('X', 0, 4);
game.move('X', 1, 3);
game.move('X', 2, 2);
game.move('X', 3, 1);
game.move('X', 4, 4);

console.log(game.hasWon('X'));
game.print();