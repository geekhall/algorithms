/**
 * ID:    01026
 * Title: Maximum Difference Between Node and Ancestor
 * Difficulty: Medium
 * Description: Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.
 *
 * A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.
 *
 * Example 1:
 *
 * Input: root = [8,3,10,1,6,null,14,null,null,4,7,13] Output: 7 Explanation: We have various ancestor-node differences, some of which are given below : |8 - 3| = 5 |3 - 7| = 4 |8 - 1| = 7 |10 - 13| = 3 Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
 *
 * Example 2:
 *
 * Input: root = [1,null,2,null,0,3] Output: 3
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 5000].
 * 0 <= Node.val <= 10 5
 */
import { TreeNode } from "../../utils/TreeNode"
function maxAncestorDiff(root: TreeNode | null): number {
  if (root === null)
    return 0
  let res = 0
  let max = root.val
  let min = root.val
  const dfs = (node: TreeNode | null, max: number, min: number) => {
    if (!node)
      return
    max = Math.max(max, node.val)
    min = Math.min(min, node.val)
    if (max - min > res)
      res = max - min
    dfs(node.left, max, min)
    dfs(node.right, max, min)
  }
  dfs(root, max, min)
  return res
};

function test_01026() {
  let root = TreeNode.create([8, 3, 10, 1, 6, null, 14, null, null, 4, 7, 13])
  console.log(maxAncestorDiff(root)); // 7
  root = TreeNode.create([1, null, 2, null, 0, 3])
  console.log(maxAncestorDiff(root)); // 3

}

test_01026()
