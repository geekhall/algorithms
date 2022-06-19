/**
 * ID:    01466
 * Title: Reorder Routes to Make All Paths Lead to the City Zero
 * Difficulty: Medium
 * Description: There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
 *
 * Roads are represented by connections where connections[i] = [a i, b i ] represents a road from city a i to city b i.
 *
 * This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
 *
 * Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
 *
 * It's guaranteed that each city can reach city 0 after reorder.
 *
 * Example 1:
 *
 * Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]] Output: 3 Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
 *
 * Example 2:
 *
 * Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]] Output: 2 Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).
 *
 * Example 3:
 *
 * Input: n = 3, connections = [[1,0],[2,0]] Output: 0
 *
 * Constraints:
 *
 * 2 <= n <= 5 * 10 4
 * connections.length == n - 1
 * connections[i].length == 2
 * 0 <= a i, b i <= n - 1
 * a i!= b i
 */
function minReorder(n: number, connections: number[][]): number {
  const dfs = (graph: number[][], visited: boolean[], from: number): number => {
    let change = 0
    visited[from] = true
    for (let i = 0; i < graph[from].length; i++) {
      const to = Math.abs(graph[from][i])
      if (!visited[to]) {
        change += (dfs(graph, visited, to) + (graph[from][i] > 0 ? 1 : 0))
      }
    }
    return change
  }
  let graph = Array.from({ length: n }, () => new Array())
  for (let c of connections) {
    graph[c[0]].push(c[1])
    graph[c[1]].push(-c[0])
  }
  let checked = Array.from({ length: n }, () => false)
  return dfs(graph, checked, 0)
}

function test_01466() {
  let n = 6, connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]
  console.log(minReorder(n, connections))
  n = 3, connections = [[1, 2], [2, 0]]
  console.log(minReorder(n, connections)) // expect 0

}

test_01466()
