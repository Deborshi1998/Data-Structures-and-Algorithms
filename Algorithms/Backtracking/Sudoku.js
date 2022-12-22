/*
 *Solve sudoku
 *Backtracking is used
 */

let grid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

//Check if the current position is Safe
const isValid = (grid, row, col, num) => {
  // For same row
  for (let c = 0; c < 9; c++) {
    if (grid[row][c] === num) return false;
  }
  // For same column
  for (let r = 0; r < 9; r++) {
    if (grid[r][col] === num) return false;
  }

  // For same sub box
  let startRow = row - Math.floor(row % 3);
  let startCol = col - Math.floor(col % 3);
  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      if (grid[r][c] === num) return false;
    }
  }
  return true;
};

//Find the next empty place

const findNextPlace = (grid) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
};

//Main Function

const solve = (grid) => {
  const [i, j] = findNextPlace(grid);
  if (i === -1) return true;

  for (let num = 1; num <= 9; num++) {
    if (isValid(grid, i, j, num)) {
      grid[i][j] = num;

      if (solve(grid)) return true;
      grid[i][j] = 0;
    }
  }
  return false;
};


solve(grid)
console.log(grid)
