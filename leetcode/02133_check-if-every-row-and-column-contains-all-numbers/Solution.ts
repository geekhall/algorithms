// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

function checkValid(matrix: number[][]): boolean {
  let n = matrix.length
  // check row
  for (let arr of matrix) {
    if (!checkValidArr(arr))
      return false
  }

  // check column
  let s = new Set()
  for (let i = 0; i < n; i++) {
    s.clear()
    for (let j = 0; j < n; j++) {
      if (s.has(matrix[j][i]))
        return false
      s.add(matrix[j][i])
    }
  }
  return true
};

function checkValidArr(arr: number[]): boolean {
  let s = new Set()
  for (let num of arr) {
    if (s.has(num))
      return false
    s.add(num)
  }
  return true
}
function test_02133() {
  // Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
  // Output: true
  // Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
  // Hence, we return true.

  let matrix1 = [[1, 2, 3], [3, 1, 2], [2, 3, 1]]
  console.log(checkValid(matrix1));

  // Input: matrix = [[1, 1, 1], [1, 2, 3], [1, 2, 3]]
  // Output: false
  // Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
  // Hence, we return false.
  let matrix2 = [[1, 1, 1], [1, 2, 3], [1, 2, 3]]
  console.log(checkValid(matrix2));
}

test_02133()
