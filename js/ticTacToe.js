///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];
///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let xWins = 0;
let yWins = 0;
let ties = 0;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");
const score = document.querySelector("h4");
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset").onclick = init;
document.getElementById("start").onclick = changeStart;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
        board = [
                "", "", "",
                "", "", "",
                "", "", ""
        ];
        turn = "X";
        win = null;

        render();
}

function render() {
        board.forEach(function(mark, index) {
                squares[index].textContent = mark;    // writes an X or an O on board
        });

        message.textContent =
                win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
        if (win === "X") {
                xWins += 1;
        } else if (win === "O") {
                yWins += 1;
        } else if (win === "T") {
                ties += 1;
        }
        score.textContent = `X Wins: ${xWins}   O Wins: ${yWins}   Ties: ${ties}`;
}

function takeTurn(e) {
        if (!win) {
                let index = squares.findIndex(function(square) {
                        return square === e.target;
                });

                if (board[index] === "") {
                        board[index] = turn;
                        turn = turn === "X" ? "O" : "X";
                        win = getWinner();

                        render();
                }
        }
}

function getWinner() {
        let winner = null;

        winningConditions.forEach(function(condition, index) {
                if (
                        board[condition[0]] &&
                        board[condition[0]] === board[condition[1]] &&
                        board[condition[1]] === board[condition[2]]
                ) {
                        winner = board[condition[0]];
                }
        });

        return winner ? winner : board.includes("") ? null : "T";
}
