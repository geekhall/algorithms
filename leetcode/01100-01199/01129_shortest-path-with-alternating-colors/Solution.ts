/**
 * ID:    01129
 * Title: Shortest Path with Alternating Colors
 * Difficulty: Medium
 * Description: You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.
 *
 * You are given two arrays redEdges and blueEdges where:
 *
 * redEdges[i] = [a i, b i ] indicates that there is a directed red edge from node a i to node b i in the graph, and
 * blueEdges[j] = [u j, v j ] indicates that there is a directed blue edge from node u j to node v j in the graph.
 *
 * Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.
 *
 * Example 1:
 *
 * Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = [] Output: [0,1,-1]
 *
 * Example 2:
 *
 * Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]] Output: [0,1,-1]
 *
 * Constraints:
 *
 * 1 <= n <= 100
 * 0 <= redEdges.length, blueEdges.length <= 400
 * redEdges[i].length == blueEdges[j].length == 2
 * 0 <= a i, b i, u j, v j < n
 */

class Graph {
  nodes: number[]
  red_edges: number[][]
  blue_edges: number[][]
  constructor(n: number) {
    this.nodes = new Array(n).map((_, i) => i)
    this.red_edges = new Array(n).fill(0).map(() => new Array())
    this.blue_edges = new Array(n).fill(0).map(() => new Array())
  }
  addEdge(a: number, b: number, color: string) {
    if (color === 'R') {
      this.red_edges[a].push(b)
    } else {
      this.blue_edges[a].push(b)
    }
  }
  getNeighbors(node: number, color: string): number[] {
    if (color === 'R') {
      return this.red_edges[node]
    } else {
      return this.blue_edges[node]
    }
  }

}
function shortestAlternatingPaths1(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
  let graph = new Graph(n)
  for (let i = 0; i < redEdges.length; i++) {
    graph.addEdge(redEdges[i][0], redEdges[i][1], 'R')
  }
  for (let i = 0; i < blueEdges.length; i++) {
    graph.addEdge(blueEdges[i][0], blueEdges[i][1], 'B')
  }
  let res = new Array(n).fill(-1)
  let queue = new Array<number>()
  queue.push(0)
  res[0] = 0
  for (let i = 0; i < 2 * n; i++) {
    let size = queue.length
    for (let j = 0; j < size; j++) {
      let node = queue.shift()!
      let neighbors = graph.getNeighbors(node, i % 2 === 0 ? 'R' : 'B')
      for (let k = 0; k < neighbors.length; k++) {
        if (res[neighbors[k]] === -1) {
          res[neighbors[k]] = res[node] + 1
          queue.push(neighbors[k])
        }
      }
    }
  }
  return res
};
function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
  let graph = Array.from({ length: 2 }).fill(0).map(() => new Array(n).fill(0).map(() => new Set<number>()))
  for (let i = 0; i < redEdges.length; i++) {
    graph[0][redEdges[i][0]].add(redEdges[i][1])
  }
  for (let i = 0; i < blueEdges.length; i++) {
    graph[1][blueEdges[i][0]].add(blueEdges[i][1])
  }
  let res = Array.from({ length: 2 }).map(() => new Array(n).fill(2 * n))
  res[0][0] = 0
  res[1][0] = 0
  let queue = new Array<Array<number>>()
  queue.push([0, 0])
  queue.push([0, 1])
  while (queue.length > 0) {
    let cur = queue.shift()!
    let node = cur[0]
    let color = cur[1]
    for (let next of graph[1 - color][node]) {
      if (res[1 - color][next] === 2 * n) {
        res[1 - color][next] = res[color][node] + 1
        queue.push([next, 1 - color])
      }
    }
  }
  let ans = Array.from({ length: n }).map(() => -1)
  for (let i = 0; i < n; i++) {
    let t = Math.min(res[0][i], res[1][i])
    ans[i] = t === 2 * n ? -1 : t
  }
  return ans
}

function test_01129() {
  let n = 3, redEdges = [[0, 1], [1, 2]], blueEdges: number[][] = []
  let result = shortestAlternatingPaths(n, redEdges, blueEdges)
  console.log(result)
  n = 3, redEdges = [[0, 1]], blueEdges = [[2, 1]]
  result = shortestAlternatingPaths(n, redEdges, blueEdges)
  console.log(result)
  n = 5, redEdges = [[0, 1], [1, 2], [2, 3], [3, 4]], blueEdges = [[1, 2], [2, 3], [3, 1]]
  result = shortestAlternatingPaths(n, redEdges, blueEdges)
  console.log(result)

}

test_01129()
