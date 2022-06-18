/**
 * ID:    01319
 * Title: Number of Operations to Make Network Connected
 * Difficulty: Medium
 * Description: There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [a i, b i ] represents a connection between computers a i and b i. Any computer can reach any other computer directly or indirectly through the network.
 *
 * You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.
 *
 * Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.
 *
 * Example 1:
 *
 * Input: n = 4, connections = [[0,1],[0,2],[1,2]] Output: 1 Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
 *
 * Example 2:
 *
 * Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]] Output: 2
 *
 * Example 3:
 *
 * Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]] Output: -1 Explanation: There are not enough cables.
 *
 * Constraints:
 *
 * 1 <= n <= 10 5
 * 1 <= connections.length <= min(n * (n - 1) / 2, 10 5)
 * connections[i].length == 2
 * 0 <= a i, b i < n
 * a i!= b i
 * There are no repeated connections.
 * No two computers are connected by more than one cable.
 */
function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) {
    return -1
  }
  // count of disjoint-set
  let disjoint_count: number = 0
  let disjoint_set: number[] = Array.from({ length: n }).map((_, i) => i)
  const find = (i: number): number => {
    if (disjoint_set[i] === i) {
      return i
    }
    return find(disjoint_set[i])
  }
  for (let i = 0; i < connections.length; i++) {
    let root_i = find(connections[i][0])
    let root_j = find(connections[i][1])
    if (root_i !== root_j) {
      disjoint_set[root_i] = root_j
    }
  }
  // get the count of disjoint-set
  for (let i = 0; i < disjoint_set.length; i++) {
    if (disjoint_set[i] === i) {
      disjoint_count++
    }
  }
  // the answer is the number of disjoint-set - 1
  return disjoint_count - 1
};

function test_01319() {
  let n = 4, connections = [[0, 1], [0, 2], [1, 2]]
  console.log(makeConnected(n, connections))
  n = 6, connections = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3]]
  console.log(makeConnected(n, connections))
  n = 6, connections = [[0, 1], [0, 2], [0, 3], [1, 2]]
  console.log(makeConnected(n, connections))
}

test_01319()
