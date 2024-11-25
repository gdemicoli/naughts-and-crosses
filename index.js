const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    const board = []

    for(let i = 0; i < 9; i++){
        board[i] = null
    }

    console.log("board is " + board)

    const getBoard = () => board

    const clearBoard = () => {for(let i = 0; i < 9; i++){
        board[i] = []
       };
    }

    return{board, getBoard, clearBoard};
}) ();

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

    
      return{players, playerTurn, winningCombos}
    })

    const clickHandler = (e) => {
        const selectedCell = e.target
        console.log(selectedCell)

    }

    console.log(gameBoard)

    const buttons = document.querySelectorAll(".cell-button")


    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cell = Number(e.target.id)

            if(gameBoard.getBoard[cell] === undefined) {
                e.target.textContent = game.playerTurn.symbol;
            }
        })

    })

    // buttons.addEventListener("click", (e) =>{
    //    console.log(e.target);
    // })

    // const button = document.querySelector(".newgame-button");
    // console.log(button)


    // button.addEventListener("mouseover", (something) => {
    //     console.log(something)
    //     console.log("e.target below")
    //     console.log(something.target)
    // })

    // button.textContent = "we have picked up button"











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

