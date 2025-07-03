class TicTacToe {
    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'X';
        this.winner = null;
        this.isGameOver = false;

        this.fields = document.querySelectorAll('.field');
        this.statusText = document.getElementById('status');

        this.initializeGame();
    }

    initializeGame() {
        this.fields.forEach((field, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            field.addEventListener('click', () => this.handleCellClick(row, col));
        });

        this.updateStatus(`Current Player: ${this.currentPlayer}`);
    }

    handleCellClick(row, col) {
        if (this.board[row][col] || this.isGameOver) return;

        this.board[row][col] = this.currentPlayer;
        this.renderBoard();

        if (this.checkWinner()) {
            this.updateStatus(`Player ${this.currentPlayer} wins!`);
            this.isGameOver = true;
            return;
        }

        if (this.isDraw()) {
            this.updateStatus("It's a draw!");
            this.isGameOver = true;
            return;
        }

        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateStatus(`Current Player: ${this.currentPlayer}`);
    }

    renderBoard() {
        this.fields.forEach((field, index) => {
            const row = Math.floor(index / 3);
            const col = index % 3;
            field.textContent = this.board[row][col] || '';
        });
    }

    checkWinner() {
        const b = this.board;

        const lines = [
            // Rows
            [b[0][0], b[0][1], b[0][2]],
            [b[1][0], b[1][1], b[1][2]],
            [b[2][0], b[2][1], b[2][2]],
            // Columns
            [b[0][0], b[1][0], b[2][0]],
            [b[0][1], b[1][1], b[2][1]],
            [b[0][2], b[1][2], b[2][2]],
            // Diagonals
            [b[0][0], b[1][1], b[2][2]],
            [b[0][2], b[1][1], b[2][0]]
        ];

        return lines.some(line => {
            return line[0] && line[0] === line[1] && line[1] === line[2];
        });
    }

    isDraw() {
        return this.board.flat().every(cell => cell !== null);
    }

    updateStatus(message) {
        this.statusText.textContent = message;
    }

    reset() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'X';
        this.winner = null;
        this.isGameOver = false;

        this.renderBoard();
        this.updateStatus(`Current Player: ${this.currentPlayer}`);
    }
}

const game = new TicTacToe();
