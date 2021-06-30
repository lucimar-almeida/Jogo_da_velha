let board = ["", "", "", "", "", "", "", "", ""]
let playerTime = 0
let gameOver = false
let symbols = ["o", "x"]

function handleMove(position){

    if (board[position] == ""){

        gameOver()

        board[position] = symbols[playerTime]
    }
    if (playerTime == 0){
        playerTime = 1
    } else {
        playerTime = 0
    }
}

function gameOver(){

    stats

}