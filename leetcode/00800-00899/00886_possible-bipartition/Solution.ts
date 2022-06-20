/**
 * ID:    00886
 * Title: Possible Bipartition
 * Difficulty: Medium
 * Description: We want to split a group of n people (labeled from 1 to n) into two groups of any size. Each person may dislike some other people, and they should not go into the same group.
 *
 * Given the integer n and the array dislikes where dislikes[i] = [a i, b i ] indicates that the person labeled a i does not like the person labeled b i, return true if it is possible to split everyone into two groups in this way.
 *
 * Example 1:
 *
 * Input: n = 4, dislikes = [[1,2],[1,3],[2,4]] Output: true Explanation: group1 [1,4] and group2 [2,3].
 *
 * Example 2:
 *
 * Input: n = 3, dislikes = [[1,2],[1,3],[2,3]] Output: false
 *
 * Example 3:
 *
 * Input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]] Output: false
 *
 * Constraints:
 *
 * 1 <= n <= 2000
 * 0 <= dislikes.length <= 10 4
 * dislikes[i].length == 2
 * 1 <= dislikes[i][j] <= n
 * a i < b i
 * All the pairs of dislikes are unique.
 */
// DFS, too slow, not efficient
function possibleBipartition1(n: number, dislikes: number[][]): boolean {
  // convert dislikes to graph matrix
  const graph = Array.from({ length: n }).fill(0).map(() => Array.from({ length: n }).fill(0))
  for (const [a, b] of dislikes) {
    graph[a - 1][b - 1] = 1
    graph[b - 1][a - 1] = 1
  }

  // group:
  //   0 : not visited,
  //   1 : group 1,
  //  -1 : group -1
  const group = Array.from({ length: n }).fill(0)

  const dfs = (index: number, g: number) => {
    group[index] = g
    for (let i = 0; i < graph.length; i++) {
      if (graph[index][i] === 1) {  // if there is a edge from index to i
        if (group[i] === g) { // if i is in the same group
          return false
        }
        if (group[i] === 0) { // i is not visited
          if (!dfs(i, -g)) {
            return false
          }
        }
      }
    }
    return true
  }
  for (let i = 0; i < n; i++) {
    if (group[i] === 0 && !dfs(i, 1)) {
      return false
    }
  }
  return true
};
// wrong answer for test case [1, 2], [1, 3], [2, 4]
function possibleBipartition2(n: number, dislikes: number[][]): boolean {
  const find = (p: number, colors: number[]): number[] => {
    let color = 0
    while (colors[p] != p) {
      p = colors[p]
      color = color === 0 ? 1 : 0;
    }
    return [p, color]
  }

  const colors = Array.from({ length: n + 1 }).map((_, i) => i + 1)
  // console.log("colors: ", colors)
  for (const [a, b] of dislikes) {
    if (colors[b] === b) colors[b] = a
    else {
      let uf1 = find(a, colors)
      let uf2 = find(b, colors)
      if (uf1[0] === uf2[0] && uf1[1] === uf2[1]) return false
    }
  }
  return true
}
// OK
function possibleBipartition(n: number, dislikes: number[][]): boolean {
  if (!dislikes.length) return true;
  const graph = new Map();
  const marked = Array(n + 1).fill(0);
  const stack = new Array();

  // create adjacency list
  for (let [a, b] of dislikes) {
    graph.set(a, (graph.get(a) || new Set()).add(b));
    graph.set(b, (graph.get(b) || new Set()).add(a));
  }

  marked[0] = 1;
  stack.push([dislikes[0][0], 1]);

  while (stack.length) {
    const cur = stack.pop()!
    let node = cur[0];
    let mark = cur[1];
    marked[node] = mark;

    if (graph.has(node)) {
      const neighbors = graph.get(node);

      for (let vertex of neighbors) {
        if (marked[vertex] === mark) return false;
        if (marked[vertex] === 0) stack.push([vertex, ~mark]);
      }
    }

    if (stack.length === 0 && marked.includes(0)) {
      for (let i = 1; i < marked.length; i++) {
        if (graph.has(i) && marked[i] === 0) {
          stack.push([i, 1]);
          break;
        }
      }
    }
  }
  return true;
}
function test_00886() {
  let n = 4, dislikes = [[1, 2], [1, 3], [2, 4]]
  console.log(possibleBipartition(n, dislikes))
  n = 3, dislikes = [[1, 2], [1, 3], [2, 3]]
  console.log(possibleBipartition(n, dislikes))
  n = 5, dislikes = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]
  console.log(possibleBipartition(n, dislikes))
  n = 1, dislikes = []
  console.log(possibleBipartition(n, dislikes))
  n = 10, dislikes = [[1, 2], [3, 4], [5, 6], [6, 7], [8, 9], [7, 8]]
  console.log(possibleBipartition(n, dislikes))

}

test_00886()
