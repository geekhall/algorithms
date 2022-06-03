/**
 * ID:    01791
 * Title: Find Center of Star Graph
 * Difficulty: Easy
 * Description: There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.
 *
 * You are given a 2D integer array edges where each edges[i] = [u i, v i ] indicates that there is an edge between the nodes u i and v i. Return the center of the given star graph.
 *
 * Example 1:
 *
 * Input: edges = [[1,2],[2,3],[4,2]] Output: 2 Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
 *
 * Example 2:
 *
 * Input: edges = [[1,2],[5,1],[1,3],[1,4]] Output: 1
 *
 * Constraints:
 *
 * 3 <= n <= 10 5
 * edges.length == n - 1
 * edges[i].length == 2
 * 1 <= u i, v i <= n
 * u i!= v i
 * The given edges represent a valid star graph.
 */
// too slow
function findCenter1(edges: number[][]): number {
  let map = new Map<number, number>();
  for (let edge of edges) {
    if (map.has(edge[0])) {
      map.set(edge[0], map.get(edge[0])! + 1);
    } else {
      map.set(edge[0], 1);
    }
    if (map.has(edge[1])) {
      map.set(edge[1], map.get(edge[1])! + 1);
    } else {
      map.set(edge[1], 1);
    }
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1])[0][0]
};
function findCenter2(edges: number[][]): number {
  let s = new Set()
  s.add(edges[0][0])
  s.add(edges[0][1])
  for (let i = 1; i < edges.length; i++) {
    if (!s.has(edges[i][0])) {
      return edges[i][1]
    } else if (!s.has(edges[i][1])) {
      return edges[i][0]
    }
  }
  return -1
}

function findCenter(edges: number[][]): number {
  return edges[0][0] === edges[1][0] ? edges[0][0] : edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1]
}
function test_01791() {
  let edges = [[1, 2], [2, 3], [4, 2]];
  console.log(findCenter(edges));
  edges = [[1, 2], [5, 1], [1, 3], [1, 4]];
  console.log(findCenter(edges));
}

test_01791()
