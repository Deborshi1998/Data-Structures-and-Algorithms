/*
 * Rat in a Maze Problem
 *  In a matrix find the path of rat from start at (0,0) to (n-1, n-1)
 */

// Maze
let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
// matrix to keep of the visited places
let visited = new Array(4).fill(0).map((item) => new Array(4).fill(0));
let output = [];
//size of the maze
const n = 4;
const ratInMaze = (x, y, str) => {
  if (x === n - 1 && y === n - 1) {
    output.push(str);
    return;
  }

  //check down
  if (x + 1 < n && maze[x + 1][y] === 1 && visited[x + 1][y] === 0) {
    visited[x + 1][y] = 1;
    ratInMaze(x + 1, y, str + "D");
    visited[x + 1][y] = 0;
  }
  // check Right
  if (y + 1 < n && maze[x][y + 1] === 1 && visited[x][y + 1] === 0) {
    visited[x][y + 1] = 1;
    ratInMaze(x, y + 1, str + "R");
    visited[x][y + 1] = 0;
  }
  // check Left
  if (y - 1 >= 0 && maze[x][y - 1] === 1 && visited[x][y - 1] === 0) {
    visited[x][y - 1] = 1;
    ratInMaze(x, y - 1, str + "L");
    visited[x][y - 1] = 0;
  }
  //check Up
  if (x - 1 >= 0 && maze[x - 1][y] === 1 && visited[x - 1][y] === 0) {
    visited[x - 1][y] = 1;
    ratInMaze(x - 1, y, str + "U");
    visited[x - 1][y] = 0;
  }
};

ratInMaze(0, 0, "");
console.log(output);
