/*
 * N-Queen Problem.
 * Given a chess board with "n" X "n" rows and columns
 * Find the ways in which n Queens can be placed on the board
 * In way where the Queens can not attack each others
 */

// Function to find the solution

const nQueen = (n) => {
  let board = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let solution = [];
  // Check if the current position(row,col) is Safe
  const isSafe = (row, col) => {
    //checking the same column
    for (let r = 0; r <= row; r++) {
      if (board[r][col] === 1) return false;
    }
    //checking the same diagonals
    for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
      if (board[r][c] === 1) return false;
    }
    //checking the same diagonals
    for (let r = row, c = col; r >= 0 && c < n; r--, c++) {
      if (board[r][c] === 1) return false;
    }

    //if nothing found
    return true;
  };

  //place Queen
  const placeQueen = (row) => {
    if (row === n) {
      solution.push(board.map((row) => row.slice()));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        //set the current position
        board[row][col] = 1;
        //recursively call the next row, next position        
        placeQueen(row + 1);
        //backtrack and set the current position 0
        board[row][col] = 0;
      }
    }
  };

  //starting from 1st row
  placeQueen(0);
  return solution;
};

console.log(nQueen(4));
