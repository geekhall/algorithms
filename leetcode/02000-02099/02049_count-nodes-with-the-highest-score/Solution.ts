/**
 * ID:    02049
 * Title: Count Nodes With the Highest Score
 * Difficulty: Medium
 * Description: There is a binary tree rooted at 0 consisting of n nodes. The nodes are labeled from 0 to n - 1. You are given a 0-indexed integer array parents representing the tree, where parents[i] is the parent of node i. Since node 0 is the root, parents[0] == -1.
 *
 * Each node has a score. To find the score of a node, consider if the node and the edges connected to it were removed. The tree would become one or more non-empty subtrees. The size of a subtree is the number of the nodes in it. The score of the node is the product of the sizes of all those subtrees.
 *
 * Return the number of nodes that have the highest score.
 *
 * Example 1:
 *
 * Input: parents = [-1,2,0,2,0] Output: 3 Explanation: - The score of node 0 is: 3 * 1 = 3 - The score of node 1 is: 4 = 4 - The score of node 2 is: 1 * 1 * 2 = 2 - The score of node 3 is: 4 = 4 - The score of node 4 is: 4 = 4 The highest score is 4, and three nodes (node 1, node 3, and node 4) have the highest score.
 *
 * Example 2:
 *
 * Input: parents = [-1,2,0] Output: 2 Explanation: - The score of node 0 is: 2 = 2 - The score of node 1 is: 2 = 2 - The score of node 2 is: 1 * 1 = 1 The highest score is 2, and two nodes (node 0 and node 1) have the highest score.
 *
 * Constraints:
 *
 * n == parents.length
 * 2 <= n <= 10 5
 * parents[0] == -1
 * 0 <= parents[i] <= n - 1 for i != 0
 * parents represents a valid binary tree.
 */
/**
 * The value of a node is the product of:
 * 1. number of nodes in the left subtree,
 * 2. number of nodes in the right subtree,
 * 3. number of all other nodes, excluding the current one (n - left - right - 1)
 * We can just use DFS to count child nodes for (1) and (2), and we can then compute (3) as we know the total nubers of nodes.
 *
 * @param parents
 */

function countHighestScoreNodes1(parents: number[]): number {
  let n = parents.length;
  let max_score = 0;
  let count = 0;
  let arr = new Array(parents.length);

  for (let i = 0; i < parents.length; i++) {
    arr[i] = new Array();
  }
  for (let i = 1; i < parents.length; i++) {
    arr[parents[i]].push(i);
  }
  console.log(arr);

  const dfs = (u: number, arr: number[][], n: number): number => {
    let total = 0
    let prod = 1
    let rem: number, val: number
    for (let v of arr[u]) {
      let val = dfs(v, arr, n)
      total += val
      prod *= val
    }
    rem = n - total - 1
    if (rem > 0) {
      prod *= rem
    }
    if (prod > max_score) {
      max_score = prod
      count = 1
    } else if (prod === max_score) {
      count++
    }

    return total + 1
  }
  dfs(0, arr, n)
  return count
};

function countHighestScoreNodes(parents: number[]): number {
  let res = 0

  return res
}

function test_02049() {
  let parents = [-1, 2, 0, 2, 0]
  console.log(countHighestScoreNodes(parents));
}

test_02049()
