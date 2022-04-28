// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i >= 1 && j >= 1 && matrix[i][j] !== matrix[i - 1][j - 1])
        return false
    }
  }
  return true;
};

function test_00766() {
  // Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
  // Output: true
  // Explanation:
  // In the above grid, the diagonals are:
  // "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
  // In each diagonal all elements are the same, so the answer is True.
  let matrix1 = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]
  console.log(isToeplitzMatrix(matrix1));

  // Input: matrix = [[1,2],[2,2]]
  // Output: false
  // Explanation:
  // The diagonal "[1, 2]" has different elements.
  let matrix2 = [[1, 2], [2, 2]]
  console.log(isToeplitzMatrix(matrix2));
}

test_00766()
