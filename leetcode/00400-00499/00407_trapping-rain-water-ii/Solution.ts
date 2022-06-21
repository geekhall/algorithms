/**
 * ID:    00407
 * Title: Trapping Rain Water II
 * Difficulty: Hard
 * Description: Given an m x n integer matrix heightMap representing the height of each unit cell in a 2D elevation map, return the volume of water it can trap after raining.
 *
 * Example 1:
 *
 * Input: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] Output: 4 Explanation: After the rain, water is trapped between the blocks. We have two small ponds 1 and 3 units trapped. The total volume of water trapped is 4.
 *
 * Example 2:
 *
 * Input: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]] Output: 10
 *
 * Constraints:
 *
 * m == heightMap.length
 * n == heightMap[i].length
 * 1 <= m, n <= 200
 * 0 <= heightMap[i][j] <= 2 * 10 4
 */
import { PriorityQueue, PriorityQueueTemplate } from '../../utils/PriorityQueue'
function trapRainWater(heightMap: number[][]): number {
  let res = 0
  let m = heightMap.length
  let n = (m === 0 ? 0 : heightMap[0].length)
  // 按照height排序的小根堆（优先队列）
  let pq = new PriorityQueueTemplate<number[]>((a, b) => a[2] - b[2])
  let visited = Array.from({ length: m }, () => Array.from({ length: n }, () => false))
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  // 将矩阵最外围的柱子加入小根堆（第一列和最后一列）
  for (let i = 0; i < m; i++) {
    pq.enqueue([i, 0, heightMap[i][0]])
    pq.enqueue([i, n - 1, heightMap[i][n - 1]])
    visited[i][0] = true
    visited[i][n - 1] = true
  }
  // 将矩阵最外围的柱子加入小根堆（第一行和最后一行）
  for (let j = 1; j < n - 1; j++) {
    pq.enqueue([0, j, heightMap[0][j]])
    pq.enqueue([m - 1, j, heightMap[m - 1][j]])
    visited[0][j] = true
    visited[m - 1][j] = true
  }

  while (pq.size() > 0) {
    let cell = pq.dequeue()! // 取出小根堆中最小的柱子

    for (let dir of dirs) { // 遍历四个方向
      let i = cell[0] + dir[0]
      let j = cell[1] + dir[1]
      if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
        continue
      }
      // 小根堆可以保证按照高度从小到大的顺序来取出柱子逐个判断，
      // 因此只要当前柱子四个方向邻居的高度小于当前柱子（cell）的高度，
      // 就可以确定当前柱子（i,j）的高度是可以存储水的，
      // 因为当前柱子（i,j）的高度小于它的四个方向邻居的高度，
      // cell是小根堆中最先出来的，它的邻居（i，j）的其他方向的高度都比它大。（因为都在大根堆中还没访问）
      res += Math.max(0, cell[2] - heightMap[i][j])
      pq.enqueue([i, j, Math.max(cell[2], heightMap[i][j])])
      visited[i][j] = true
    }
    console.log(`cell: ${cell}, res: ${res}`)
  }
  return res
};

function test_00407() {
  let heightMap = [[1, 4, 3, 1, 3, 2], [3, 2, 1, 3, 2, 4], [2, 3, 3, 2, 3, 1]]
  console.log(trapRainWater(heightMap))
  heightMap = [[3, 3, 3, 3, 3], [3, 2, 2, 2, 3], [3, 2, 1, 2, 3], [3, 2, 2, 2, 3], [3, 3, 3, 3, 3]]
  console.log(trapRainWater(heightMap))
}

test_00407()
