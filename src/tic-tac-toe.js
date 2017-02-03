class TicTacToe {
    constructor() {
        this.field = [[null, null, null],
                      [null, null, null], 
                      [null, null, null]];
        this.currentPlayerSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this._checkWinGame();
            this._changePlayer();
        }
    }

    _checkWinGame() {
        if (((this.field[0][0] === this.field[0][1] && this.field[0][2] === this.field[0][0]  && this.field[0][0]) ||
            (this.field[1][0] === this.field[1][1] && this.field[1][2] === this.field[1][0]  && this.field[1][0]) ||
            (this.field[2][0] === this.field[2][1] && this.field[2][2] === this.field[2][0]  && this.field[2][0]) ||
            (this.field[0][0] === this.field[1][0] && this.field[2][0] === this.field[0][0]  && this.field[0][0]) ||
            (this.field[0][1] === this.field[1][1] && this.field[2][1] === this.field[0][1]  && this.field[0][1]) ||
            (this.field[0][2] === this.field[1][2] && this.field[2][2] === this.field[0][2]  && this.field[0][2]) ||
            (this.field[0][0] === this.field[1][1] && this.field[2][2] === this.field[0][0]  && this.field[0][0]) ||
            (this.field[2][0] === this.field[1][1] && this.field[0][2] === this.field[2][0]  && this.field[2][0])) && !this.winner) {
            this.winner = this.currentPlayerSymbol;
        }
    }

    _changePlayer() {
        if (this.currentPlayerSymbol === 'o') {
            this.currentPlayerSymbol = 'x';
        } else {
            this.currentPlayerSymbol = 'o';
        }
    }

    isFinished() {
        return !!this.winner || this.isDraw();
    }

    getWinner() {
        return this.winner; 
    }

    noMoreTurns() {
        var check = true;

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (!this.field[i][j]) {
                    check = false;
                }
            }
        }  

        return check;
    }

    isDraw() {
        return this.noMoreTurns() && !this.winner;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
