// Problerows description below

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, rowsodify board in-place instead.
 */

function life(board) {
  const copy = JSON.parse(JSON.stringify(board));
  const cols = board[0].length;
  const rows = board.length;
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      count = 0;

      if (i - 1 >= 0 && j - 1 >= 0) {
        if (copy[i - 1][j - 1] === 1) count++;
      }

      if (i + 1 < rows && j + 1 < cols) {
        if (copy[i + 1][j + 1] === 1) count++;
      }

      if (i - 1 >= 0 && j + 1 < cols) {
        if (copy[i - 1][j + 1] === 1) count++;
      }

      if (i + 1 < rows && j - 1 >= 0) {
        if (copy[i + 1][j - 1] === 1) count++;
      }

      if (j - 1 >= 0) {
        if (copy[i][j - 1] === 1) count++;
      }

      if (i - 1 >= 0) {
        if (copy[i - 1][j] === 1) count++;
      }

      if (i + 1 < rows) {
        if (copy[i + 1][j] === 1) count++;
      }

      if (j + 1 < cols) {
        if (copy[i][j + 1] === 1) count++;
      }

      if (copy[i][j] === 1) {
        board[i][j] = (count >= 2 && count <= 3) ? 1 : 0;
      }
      if (copy[i][j] === 0) {
        if (count === 3) board[i][j] = 1;
      }
    }
  }
  return board;
}

console.log(life([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]));
// expected: [[0,0,0], [1,0,1], [0,1,1], [0,1,0]]
