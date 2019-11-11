// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var currentTurn = "X";

document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";

var squares = document.getElementsByClassName("square");

for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener('click', onClick);
}

function onClick(event)
{
    event.preventDefault();

    if (!event.target.innerText) {
        event.target.innerHTML = currentTurn;
        nextTurn();
        checkForWin();
    }

}

function nextTurn()
{
    if (currentTurn === 'X') 
        currentTurn = 'O';
    else
        currentTurn = 'X';

    document.getElementById("turn").innerText = "It is player " + currentTurn + "'s turn";
}

function checkForWin()
{
    // Check Rows
    for (i = 0; i < squares.length; i = i + 3) {
        if (squares[i].innerText === squares[i + 1] && squares[i].innerText === squares[i + 2] && squares[i].innerText) {
            declareWinner();
            return true;
        }
    }

    //Check Columns
    for (j = 0; j < squares.length; j++) {
        if (squares[j].innerText === squares[j + 3] && squares[j].innerText === squares[j + 6] && squares[i].innerText) {
            declareWinner();
            return true;
        }
    }
}

function declareWinner{
    document.getElementById("turn").innerText = "Player " + currentTurn + " wins!";
}