/**
 * ID:    01128
 * Title: Number of Equivalent Domino Pairs
 * Difficulty: Easy
 * Description: Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
 *
 * Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].
 *
 * Example 1:
 *
 * Input: dominoes = [[1,2],[2,1],[3,4],[5,6]] Output: 1
 *
 * Example 2:
 *
 * Input: dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]] Output: 3
 *
 * Constraints:
 *
 * 1 <= dominoes.length <= 4 * 10 4
 * dominoes[i].length == 2
 * 1 <= dominoes[i][j] <= 9
 */
function numEquivDominoPairs(dominoes: number[][]): number {
  let res = 0
  let map = new Map()
  for (let i = 0; i < dominoes.length; i++) {
    let key = dominoes[i][0] * 10 + dominoes[i][1] * 1
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
    key = dominoes[i][1] * 10 + dominoes[i][0] * 1
    if (map.has(key)) {
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }
  for (let [key, value] of map) {
    res += value * (value - 1) / 2
  }
  return res
};

function test_01128() {
  let dominoes = [[1, 2], [2, 1], [3, 4], [5, 6]]
  console.log(numEquivDominoPairs(dominoes))
  dominoes = [[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]]
  console.log(numEquivDominoPairs(dominoes))
  dominoes = [[2, 1], [5, 4], [3, 7], [6, 2], [4, 4], [1, 8], [9, 6], [5, 3], [7, 4], [1, 9], [1, 1], [6, 6], [9, 6], [1, 3], [9, 7], [4, 7], [5, 1], [6, 5], [1, 6], [6, 1], [1, 8], [7, 2], [2, 4], [1, 6], [3, 1], [3, 9], [3, 7], [9, 1], [1, 9], [8, 9]]
  console.log(numEquivDominoPairs(dominoes))
}

test_01128()
