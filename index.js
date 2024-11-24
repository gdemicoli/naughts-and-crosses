const gameBoard = function gameBoard()  {
    const rows = 3;
    const columns = 3;
    const board = []

    for(let i = 0; i < rows; i++){
        board[i] = []
        for (let j = 0; j < columns; j++) {
            board[i][j]= []
        }
    }

    const getBoard = () => board

    const clearBoard = () => {for(let i = 0; i < rows; i++){
        board[i] = []
        for (let j = 0; j < columns; j++) {
            board[i][j]= []
        }
    }};

    const printBoard = () => {
        let string = "";
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                cell = values[i][j] || "_";
                string += cell + " ";
                if (j === 2) string += "\n";
            }
        }
        console.log(string);
    };

    return{board, getBoard, clearBoard, printBoard};
}

const game = ( function() {
    const players = [
        {name: 'player1', symbol: 'x'}, 
        {name: 'player2', symbol: 'o'}     
    ]

    let playerTurn = players[0]

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    }
)








// const calculator = (function () {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return { add, sub, mul, div };
//   })();
  
//   calculator.add(3,5); // 8
//   calculator.sub(6,2); // 4
//   calculator.mul(14,5534); // 77476
  
// )

