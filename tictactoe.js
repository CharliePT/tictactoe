//gameboard
//2 player or vs cpu
//prompts fpr player names
//Assign X or 0
//randomise who goes first
//PLayers take tunrs to select spaces on the grid
//check winning condition
//display messages throughout the game
//winning message
//track results in object
//ask if players want to play again
//table format:

const prompt = require('prompt-sync')();

let [one, two, three, four, five, six, seven, eight, nine] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let board = `${one} | ${two} | ${three}\n----------\n${four} | ${five} | ${six}\n----------\n${seven} | ${eight} | ${nine}`;

let row1 = [one, two, three];
let row2 = [four, five, six];
let row3 = [seven, eight, nine];
let col1 = [one, four, seven];
let col2 = [two, five, eight];
let col3 = [three, six, nine];
let diag1 = [one, four, nine];
let diag2 = [three, four, seven];
let board2 = [row1, row2, row3, col1, col2, col3, diag1, diag2];


const winloss = () => {
    for (i = 0; i < board2.length; i++){
        console.log(board2[i])
        if (board2[i].join("") === "XXX" || board2[i].join("") ===  "OOO") {
            if (board2[i][0] === "X"){
                return "X";
            }
            else {
                return "O";
            }
        }
    }
    return 1;
}
// console.log(winloss());


let gamenum = 1;
let turn = 1;

const turns = () => {
    if (turn = 0){
        if (gamenum % 2 === 1){
            turns++
            return 'X';
        }
        else {
            turns++
            return 'O';
        }
    }
    
}





const game = () => {
    let gameNumber = 1;
    const welcomeMessage = `This is game number ${gameNumber}!`;
    console.log(welcomeMessage);
    
    let lst = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    playerX = prompt("Player 1's name (play with Xs): ")
    playerO = prompt("Player 2's name (play with 0s): ")
    let userChoice;
    let turn = 1;
    let value;
    
    while(winloss() === 1 && lst.length !== 0){
        if (gameNumber % 2 === 0){
            if (turn % 2 === 0){
                currentPlayer = playerX;
            } else {
                currentPlayer = playerO;
            }
        } else{
            if (turn % 2 === 0){
                currentPlayer = playerO;
            } else {
                currentPlayer = playerX;
            }
        }
        const turnMessage = `This is turn number ${turn}, ${currentPlayer} plays!`;
        console.log(turnMessage);
        if (currentPlayer === playerX) {value = "X"}
        else {value = "O"}
        console.log(board);
        userChoice = parseInt(prompt("Choose a postion to play: "))
        if (lst.includes(userChoice)){
            if (userChoice === 1){one = value}
            else if (userChoice === 2) {two = value}
            else if (userChoice === 3) {three = value}
            else if (userChoice === 4) {four = value}
            else if (userChoice === 5) {five = value}
            else if (userChoice === 6) {six = value}
            else if (userChoice === 7) {seven = value}
            else if (userChoice === 8) {eight = value}
            else {nine = value};
            board = `${one} | ${two} | ${three}\n----------\n${four} | ${five} | ${six}\n----------\n${seven} | ${eight} | ${nine}`;
            console.log(board);
            let row1 = [one, two, three];
            let row2 = [four, five, six];
            let row3 = [seven, eight, nine];
            let col1 = [one, four, seven];
            let col2 = [two, five, eight];
            let col3 = [three, six, nine];
            let diag1 = [one, four, nine];
            let diag2 = [three, four, seven];
            board2 = [row1, row2, row3, col1, col2, col3, diag1, diag2];
            // lst = lst.splice(lst.indexOf(userChoice), 1);
        }else{
            console.log("Please input an available number")
            continue;
        }
        turn++
    };

    if (winloss() === 1){
        console.log("Draw")
    }
    else if (winloss === "X"){
        console.log(`${playerX} wins`)
    }
    else{
        console.log(`${playerO} wins`)
    }
    gameNumber ++;

}
game();


