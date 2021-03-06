/**
 * ID:    00547
 * Title: Number of Provinces
 * Difficulty: Medium
 * Description: There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
 *
 * A province is a group of directly or indirectly connected cities and no other cities outside of the group.
 *
 * You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the i th city and the j th city are directly connected, and isConnected[i][j] = 0 otherwise.
 *
 * Return the total number of provinces.
 *
 * Example 1:
 *
 * Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]] Output: 2
 *
 * Example 2:
 *
 * Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]] Output: 3
 *
 * Constraints:
 *
 * 1 <= n <= 200
 * n == isConnected.length
 * n == isConnected[i].length
 * isConnected[i][j] is 1 or 0.
 * isConnected[i][i] == 1
 * isConnected[i][j] == isConnected[j][i]
 */
function findCircleNum(isConnected: number[][]): number {
  let res: number = 0
  let disjoint_set: number[] = Array.from({ length: isConnected.length }).map((_, i) => i)
  const find = (i: number): number => {
    if (disjoint_set[i] === i) {
      return i
    }
    return find(disjoint_set[i])
  }
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[0].length; j++) {
      if (isConnected[i][j] === 1) {
        let root_i = find(i)
        let root_j = find(j)
        if (root_i !== root_j) {
          disjoint_set[root_i] = root_j
        }
      }
    }
  }
  for (let i = 0; i < disjoint_set.length; i++) {
    if (disjoint_set[i] === i) {
      res++
    }
  }
  return res
};

function test_00547() {
  let isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
  console.log(findCircleNum(isConnected))
  isConnected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
  console.log(findCircleNum(isConnected))

}

test_00547()
