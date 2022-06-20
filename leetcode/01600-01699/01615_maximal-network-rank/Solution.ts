/**
 * ID:    01615
 * Title: Maximal Network Rank
 * Difficulty: Medium
 * Description: There is an infrastructure of n cities with some number of roads connecting these cities. Each roads[i] = [a i, b i ] indicates that there is a bidirectional road between cities a i and b i.
 *
 * The network rank of two different cities is defined as the total number of directly connected roads to either city. If a road is directly connected to both cities, it is only counted once.
 *
 * The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.
 *
 * Given the integer n and the array roads, return the maximal network rank of the entire infrastructure.
 *
 * Example 1:
 *
 * Input: n = 4, roads = [[0,1],[0,3],[1,2],[1,3]] Output: 4 Explanation: The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.
 *
 * Example 2:
 *
 * Input: n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]] Output: 5 Explanation: There are 5 roads that are connected to cities 1 or 2.
 *
 * Example 3:
 *
 * Input: n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]] Output: 5 Explanation: The network rank of 2 and 5 is 5. Notice that all the cities do not have to be connected.
 *
 * Constraints:
 *
 * 2 <= n <= 100
 * 0 <= roads.length <= n * (n - 1) / 2
 * roads[i].length == 2
 * 0 <= a i, b i <= n-1
 * a i!= b i
 * Each pair of cities has at most one road connecting them.
 */
function maximalNetworkRank(n: number, roads: number[][]): number {
  const m = new Map<number, number>()
  // connect is used to store the number of roads connecting two cities
  const connected = Array.from({ length: n }).fill(0).map(() => Array.from({ length: n }).fill(0))

  for (const [a, b] of roads) {
    connected[a][b] = 1
    connected[b][a] = 1
    m.set(a, (m.get(a) || 0) + 1)
    m.set(b, (m.get(b) || 0) + 1)
  }
  let max = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let a = m.get(i) || 0
      let b = m.get(j) || 0
      if (connected[i][j] === 1) {
        max = Math.max(max, a + b - 1)
      } else {
        max = Math.max(max, a + b)
      }
    }
  }

  return max
};

function test_01615() {
  let n = 4, roads = [[0, 1], [0, 3], [1, 2], [1, 3]]
  console.log(maximalNetworkRank(n, roads))
  n = 5, roads = [[0, 1], [0, 3], [1, 2], [1, 3], [2, 3], [2, 4]]
  console.log(maximalNetworkRank(n, roads))
  n = 8, roads = [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]]
  console.log(maximalNetworkRank(n, roads))
  n = 6, roads = [[2, 4]]
  console.log(maximalNetworkRank(n, roads))

}

test_01615()
