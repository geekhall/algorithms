/**
 * ID:    00979
 * Title: Distribute Coins in Binary Tree
 * Difficulty: Medium
 * Description: You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. There are n coins in total throughout the whole tree.
 *
 * In one move, we may choose two adjacent nodes and move one coin from one node to another. A move may be from parent to child, or from child to parent.
 *
 * Return the minimum number of moves required to make every node have exactly one coin.
 *
 * Example 1:
 *
 * Input: root = [3,0,0] Output: 2 Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.
 *
 * Example 2:
 *
 * Input: root = [0,3,0] Output: 3 Explanation: From the left child of the root, we move two coins to the root [taking two moves]. Then, we move one coin from the root of the tree to the right child.
 *
 * Constraints:
 *
 * The number of nodes in the tree is n.
 * 1 <= n <= 100
 * 0 <= Node.val <= n
 * The sum of all Node.val is n.
 */
import { TreeNode } from "../../utils/TreeNode"
function distributeCoins(root: TreeNode | null): number {
  let res = 0
  const dfs = (node: TreeNode | null): number => {
    if (node === null)
      return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    res += Math.abs(left) + Math.abs(right)
    return node.val + left + right - 1
  }
  dfs(root)
  return res
};

function test_00979() {
  let root = TreeNode.create([3, 0, 0])
  console.log(distributeCoins(root));
  root = TreeNode.create([0, 3, 0])
  console.log(distributeCoins(root));
}

test_00979()
