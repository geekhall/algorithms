/**
 * ID:    01448
 * Title: Count Good Nodes in Binary Tree
 * Difficulty: Medium
 * Description: Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 *
 * Return the number of good nodes in the binary tree.
 *
 * Example 1:
 *
 * Input: root = [3,1,4,3,null,1,5] Output: 4 Explanation: Nodes in blue are good. Root Node (3) is always a good node. Node 4 -> (3,4) is the maximum value in the path starting from the root. Node 5 -> (3,4,5) is the maximum value in the path Node 3 -> (3,1,3) is the maximum value in the path.
 *
 * Example 2:
 *
 * Input: root = [3,3,null,4,2] Output: 3 Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
 *
 * Example 3:
 *
 * Input: root = [1] Output: 1 Explanation: Root is considered as good.
 *
 * Constraints:
 *
 * The number of nodes in the binary tree is in the range [1, 10^5].
 * Each node's value is between [-10^4, 10^4].
 */
import { TreeNode } from "../../utils/TreeNode"

function goodNodes(root: TreeNode | null): number {
  if (root === null)
    return 0
  let res = 0
  // can not use MIN_VALUE here, will return false when compare with -1
  // let max = Number.MIN_VALUE
  let max = Number.MIN_SAFE_INTEGER
  const dfs = (node: TreeNode | null, max: number) => {
    if (node === null)
      return

    if (max <= node.val) {
      max = node.val
      res++
    }
    dfs(node.left, max)
    dfs(node.right, max)
  }
  dfs(root, max)
  return res
};
function test_01448() {
  let root = TreeNode.create([3, 1, 4, 3, null, 1, 5])
  console.log(goodNodes(root));
  root = TreeNode.create([-1, 5, -2, 4, 4, 2, -2, null, null, -4, null, -2, 3, null, -2, 0, null, -1, null, -3, null, -4, -3, 3, null, null, null, null, null, null, null, 3, -3])
  console.log(goodNodes(root)); // expect 5

}

test_01448()
