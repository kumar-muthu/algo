// Completed
class TicTakToe {
    board;
    public constructor(private n: number) {
        this.board = Array(n * n).fill('-');
    }

    public move(player: any, position: any) {
        const x = position[0] * this.n + position[1];
        if (this.board[x] != '-') {
            return;
        }
        this.board[x] = player;
    }

    public isRow(row) {
        let i = row * this.n;
        let x = this.board[i];
        i++;
        while (i < (row + 1) * this.n) {
            if(x !== this.board[i] || this.board[i] === '-') {
                return false;
            }
            i++;
        }
        return true;
    }

    public print() {
        let i = 0;
        let str = '';
        while (i < this.board.length) {
            str = str.concat(this.board[i]);
            if ((i + 1) % this.n === 0) {
                console.log(str);
                str = '';
            }
            i++;
        }

    }
}

const game = new TicTakToe(3);
game.move('X', [1, 1]);
game.move('X', [1, 2]);
game.move('X', [1, 0]);
console.log(game.isRow(0));
console.log(game.isRow(1));

game.print();