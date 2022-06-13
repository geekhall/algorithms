/**
 * ID:    00733
 * Title: Flood Fill
 * Difficulty: Easy
 * Description: An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.
 *
 * Return the modified image after performing the flood fill.
 *
 * Example 1:
 *
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2 Output: [[2,2,2],[2,2,0],[2,0,1]] Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color. Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
 *
 * Example 2:
 *
 * Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2 Output: [[2,2,2],[2,2,2]]
 *
 * Constraints:
 *
 * m == image.length
 * n == image[i].length
 * 1 <= m, n <= 50
 * 0 <= image[i][j], newColor < 2 16
 * 0 <= sr < m
 * 0 <= sc < n
 */
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  let oldColor = image[sr][sc]
  if (oldColor === newColor) {
    return image
  }
  let queue = new Array()
  queue.push([sr, sc])
  while (queue.length) {
    let [i, j] = queue.shift()
    if (image[i][j] === oldColor) {
      image[i][j] = newColor
    }
    if (i > 0 && image[i - 1][j] === oldColor) {// up
      queue.push([i - 1, j])
    }
    if (i < image.length - 1 && image[i + 1][j] === oldColor) { // down
      queue.push([i + 1, j])
    }
    if (j > 0 && image[i][j - 1] === oldColor) {  // left
      queue.push([i, j - 1])
    }
    if (j < image[0].length - 1 && image[i][j + 1] === oldColor) {  // right
      queue.push([i, j + 1])
    }
  }
  return image
};

function test_00733() {
  let image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2
  console.log(floodFill(image, sr, sc, newColor))

}

test_00733()
