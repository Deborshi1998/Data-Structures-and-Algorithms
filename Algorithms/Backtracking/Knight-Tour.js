/**
 * Knight tour Problem
 */

const n = 8;
let ans = [];
// Main Function

const knightTour = (board, row, col, move) => {
  if (row < 0 || col < 0 || row >= n || col >= n || board[row][col] !== 0) {
    return;
  } else if (move === n * n) {
    if (ans.length < 1) {
      board[row][col] = move;

      ans.push(...board.map((item) => item));
      console.log(ans);
      board[row][col] = 0;
    }

    return;
  }

  board[row][col] = move;
  knightTour(board, row - 2, col + 1, move + 1);
  knightTour(board, row - 1, col + 2, move + 1);
  knightTour(board, row + 1, col + 2, move + 1);
  knightTour(board, row + 2, col + 1, move + 1);
  knightTour(board, row + 2, col - 1, move + 1);
  knightTour(board, row + 1, col - 2, move + 1);
  knightTour(board, row - 1, col - 2, move + 1);
  knightTour(board, row - 2, col - 1, move + 1);
  board[row][col] = 0;
  return;
};


let chess = new Array(n).fill(0).map((entry) => new Array(n).fill(0));

knightTour(chess, 0, 0, 1);
