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
        return false;
    };

    const resetPlayers = () => {
        players.forEach(player => {
            player.squaresClaimed.length = 0;
        });
    };
    
    const buttons = document.querySelectorAll(".cell-button")

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {


            const cell = Number(e.target.id)

            if(gameBoard.getBoard()[cell] === ' ') {

                e.target.textContent = getPlayerTurn().symbol;
                gameBoard.getBoard()[cell] = getPlayerTurn().symbol;
                getPlayerTurn().squaresClaimed.push(cell);

                if(hasWon()){
                    gameBoard.freezeBoard()
                    console.log("finished")
                }

                else {
                    newTurn()
                }
            }

        })

    })

    const newGameButton = document.querySelector(".newgame-button")
    newGameButton.addEventListener('click', () => {
        gameBoard.clearBoard();
        buttons.forEach(button => button.textContent = '');
        resetPlayers();
     })



    
    //   return{players, playerTurn, winningCombos, newTurn, getPlayerTurn, hasWon, resetPlayers}
}) ();

    


    

    

    