const board = ['_', '_', '_', '_', '_', '_', '_', '_', '_']

const printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}
const evaluateWin = () => {
    if (board[0] == board[3] && board[0] == board[6] && board[0] != '_') {
        return true;
    } else if (board[1] == board[4] && board[1] == board[7] && board[1] != '_') {
        return true;
    } else if (board[2] == board[5] && board[2] == board[8] && board[2] != '_') {
        return true;
    } else if (board[0] == board[1] && board[0] == board[2] && board[0] != '_') {
        return true;
    } else if (board[3] == board[4] && board[3] == board[5] && board[3] != '_') {
        return true;
    } else if (board[6] == board[7] && board[6] == board[8] && board[6] != '_') {
        return true;
    } else if (board[0] == board[4] && board[0] == board[8] && board[0] != '_') {
        return true;
    } else if (board[2] == board[4] && board[2] == board[6] && board[2] != '_') {
        return true;
    }
    return false;
}

let jugador1 = true;
let haGanadoAlguien = false;

while (!haGanadoAlguien) {
    const player = jugador1 ? 'X' : 'O';
    const respuesta = prompt("Introduzca un número del 0 al 8, player " + player + ':')
    board[respuesta] = player;

    if (evaluateWin()) {
        alert('Enhorabuena player ' + player);
        haGanadoAlguien = true;
    } else {
        jugador1 = !jugador1;
        printBoard();
    }
}