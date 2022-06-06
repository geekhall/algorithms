/**
 * ID:    01339
 * Title: Maximum Product of Splitted Binary Tree
 * Difficulty: Medium
 * Description: Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.
 *
 * Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 10 9 + 7.
 *
 * Note that you need to maximize the answer before taking the mod and not after taking it.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5,6] Output: 110 Explanation: Remove the red edge and get 2 binary trees with sum 11 and 10. Their product is 110 (11*10)
 *
 * Example 2:
 *
 * Input: root = [1,null,2,3,4,null,null,5,6] Output: 90 Explanation: Remove the red edge and get 2 binary trees with sum 15 and 6.Their product is 90 (15*6)
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 5 * 10 4 ].
 * 1 <= Node.val <= 10 4
 */
import { TreeNode } from "../../utils/TreeNode"
function maxProduct(root: TreeNode | null): number {
  const getSum = (node: TreeNode | null): number => {
    if (node === null)
      return 0
    node.val = getSum(node.left) + getSum(node.right) + node.val
    return node.val
  }
  let res = 0
  const total = getSum(root)
  const dfs = (node: TreeNode | null) => {
    if (node === null)
      return 0
    if (node.left) {
      res = Math.max(res, node.left.val * (total - node.left.val))
      dfs(node.left)
    }
    if (node.right) {
      res = Math.max(res, node.right.val * (total - node.right.val))
      dfs(node.right)
    }
  }

  dfs(root)
  return res % 1000000007
};

function test_01339() {
  let root = TreeNode.create([1, 2, 3, 4, 5, 6])
  console.log(maxProduct(root));
  root = TreeNode.create([1, null, 2, 3, 4, null, null, 5, 6])
  console.log(maxProduct(root));

}

test_01339()
