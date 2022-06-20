/**
 * ID:    00847
 * Title: Shortest Path Visiting All Nodes
 * Difficulty: Hard
 * Description: You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.
 *
 * Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.
 *
 * Example 1:
 *
 * Input: graph = [[1,2,3],[0],[0],[0]] Output: 4 Explanation: One possible path is [1,0,2,0,3]
 *
 * Example 2:
 *
 * Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]] Output: 4 Explanation: One possible path is [0,1,4,2,3]
 *
 * Constraints:
 *
 * n == graph.length
 * 1 <= n <= 12
 * 0 <= graph[i].length < n
 * graph[i] does not contain i.
 * If graph[a] contains b, then graph[b] contains a.
 * The input graph is always connected.
 */
// Solution: BFS , bit mask, too slow, 10 seconds for test case
function shortestPathLength1(graph: number[][]): number {
  interface Node {
    bitMask: number
    curr: number
    cost: number

  }
  let N = graph.length
  let queue: Node[] = []
  let set: Set<Node> = new Set()
  for (let i = 0; i < N; i++) {
    let tmp = (1 << i)
    set.add({ bitMask: tmp, curr: i, cost: 0 })
    queue.push({ bitMask: tmp, curr: i, cost: 1 })
  }
  while (queue.length) {
    let curr = queue.shift()!
    console.log("curr:", curr)
    if (curr.bitMask === ((1 << N) - 1)) {
      return curr.cost - 1
    } else {
      let neighbors = graph[curr.curr]
      for (let v of neighbors) {
        let bitMask = curr.bitMask
        bitMask = bitMask | (1 << v)
        let t = { bitMask: bitMask, curr: v, cost: 0 }
        if (!set.has(t)) {
          queue.push({ bitMask: bitMask, curr: v, cost: curr.cost + 1 })
          set.add(t)
        }
      }
    }
  }
  return -1
};
function shortestPathLength(graph: number[][]): number {
  const n = graph.length;
  if (n == 1) return 0;
  let sp = Array(n).fill(0).map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 0; i < n; i++) {
    for (let j of graph[i]) {
      sp[i][j] = 1;
    }
  }

  for (let k = 0; k < n; k++)
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (sp[i][k] < 10000 && sp[k][j] < 10000 &&
          sp[i][k] + sp[k][j] < sp[i][j])
          sp[i][j] = sp[i][k] + sp[k][j];

  //scdp
  let dp = Array(1 << n).fill(null).map(() => Array(n).fill(null));

  for (let i = 0; i < n; i++) {
    dp[1 << i][i] = 0;
  }

  let rtn = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < (1 << n); i++)
    for (let j = 0; j < n; j++) {
      if (dp[i][j] != null) continue;
      if ((i & (1 << j)) == 0) continue;
      let ans = Number.MAX_SAFE_INTEGER;
      for (let k = 0; k < n; k++) {
        if (((i & (1 << k)) != 0) && sp[j][k] < 10000 && dp[(i & ~(1 << j))][k] != null) {
          ans = Math.min(ans, sp[j][k] + dp[(i & ~(1 << j))][k]);

        }
      }

      if (ans != Number.MAX_SAFE_INTEGER) {
        dp[i][j] = ans;
        if (i == ((1 << n) - 1))
          rtn = Math.min(rtn, dp[i][j]);
      }
    }

  return rtn;
}
function test_00847() {
  let graph = [[1, 2, 3], [0], [0], [0]]
  console.log(shortestPathLength(graph))
  graph = [[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]
  console.log(shortestPathLength(graph))
  graph = [[1, 5], [0, 3], [3, 5], [1, 2, 5], [7], [0, 7, 6, 2, 3], [5], [5, 4, 8], [7]]
  console.log(shortestPathLength(graph))

}

test_00847()
