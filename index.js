const board = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
]

solve(board)
printResult()

function checkSpot(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3)
    const n = 3 * Math.floor(col / 3) + i % 3
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false
    }
  }
  return true
}

function printResult(){
  let result = ""
  for (let a = 0; a < 9; a++){
    for (let b = 0; b < 9; b++){
      result = result + " " + board[a][b] + " "
    }
    result = result + "\n"
  }
  console.log(result)
}

function solve(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '.') {
        for (let k = 1; k <= 9; k++) {
          if (checkSpot(data, i, j, k)) {
            data[i][j] = `${k}`
          if (solve(data)) {
           return true
          } else {
           data[i][j] = '.'
          }
         }
       }
       return false
     }
   }
 }
 return true
}