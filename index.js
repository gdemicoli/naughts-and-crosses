const gameBoard = (function () {
    const rows = 3;
    const columns = 3;
    const board = []

    for(let i = 0; i < 9; i++){
        board[i] = ' '
    }

    console.log("board is " + board)

    const getBoard = () => board

    const clearBoard = () => {for(let i = 0; i < 9; i++){
        board[i] = ' '
       };
    }

    const freezeBoard = () => {for(let i = 0; i < 9; i++){
        board[i] = '*'
       };

    }

    return{board, getBoard, clearBoard, freezeBoard};
}) ();

const game = ( function() {
    const players = [
        {name: 'Player 1', symbol: 'x', squaresClaimed: []}, 
        {name: 'Player 2', symbol: 'o', squaresClaimed: []}     
    ]

    let playerTurn = players[0]

    const subheader = document.querySelector(".subheader");
   

    const newTurn = () => {
        if (playerTurn === players[0]) {
            playerTurn = players[1]
            subheader.textContent = `${playerTurn.name}'s turn `
        }
        else {
            playerTurn = players[0]
            subheader.textContent = `${playerTurn.name}'s turn `
        }
    }

    const getPlayerTurn = () => playerTurn

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
    

    const hasWon = () => {
        for (let combo of winningCombos) {
            if (combo.every(val => playerTurn.squaresClaimed.includes(val))) {
                subheader.textContent = `${playerTurn.name} wins!`
                return true; // Exits the loop and the function
            }
        }
        return false; // If no combo satisfies the condition
    };

    const resetPlayers = () => {
        players.forEach(player => {
            player.squaresClaimed.length = 0;
        });
    };
    


    
      return{players, playerTurn, winningCombos, newTurn, getPlayerTurn, hasWon, resetPlayers}
    }) ();

    const clickHandler = (e) => {
        const selectedCell = e.target
        console.log(selectedCell)

    }

    console.log(gameBoard)

    const buttons = document.querySelectorAll(".cell-button")

    console.log("Game board: " + gameBoard.getBoard())


   
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cell = Number(e.target.id)

            if(gameBoard.getBoard()[cell] === ' ') {

                e.target.textContent = game.getPlayerTurn().symbol;
                gameBoard.getBoard()[cell] = game.getPlayerTurn().symbol;
                game.getPlayerTurn().squaresClaimed.push(cell);

                if(game.hasWon()){
                    gameBoard.freezeBoard()
                    console.log("finished")
                }

                else {
                    game.newTurn()
                }
            }

        })

    })

    const newGameButton = document.querySelector(".newgame-button")
    newGameButton.addEventListener('click', () => {
        gameBoard.clearBoard();
        buttons.forEach(button => button.textContent = '');
        game.resetPlayers();


     })

    