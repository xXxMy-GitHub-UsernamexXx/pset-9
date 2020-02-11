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
