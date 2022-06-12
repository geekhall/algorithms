/**
 * ID:    00337
 * Title: House Robber III
 * Difficulty: Medium
 * Description: The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.
 *
 * Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.
 *
 * Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.
 *
 * Example 1:
 *
 * Input: root = [3,2,3,null,3,null,1] Output: 7 Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
 *
 * Example 2:
 *
 * Input: root = [3,4,5,1,3,null,1] Output: 9 Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * 0 <= Node.val <= 10 4
 */
import { TreeNode } from "../../utils/TreeNode";
function rob(root: TreeNode | null): number {
  if (!root)
    return 0
  if (!root.left && !root.right) {
    return root.val
  }
  interface ReturnType {
    max_val: number,
    max_val_without_root: number
  }
  const dfs = (node: TreeNode | null): ReturnType => {
    if (!node)
      return { max_val: 0, max_val_without_root: 0 }

    if (!node.left && !node.right) {
      return { max_val: node.val, max_val_without_root: 0 }
    }
    const left = dfs(node.left)
    const right = dfs(node.right)
    let max_val = 0
    let max_val_without_root = 0
    max_val = Math.max(left.max_val_without_root + right.max_val_without_root + node.val,
      left.max_val + right.max_val)
    max_val_without_root = Math.max(left.max_val_without_root + right.max_val_without_root,
      left.max_val + right.max_val,
      left.max_val + right.max_val_without_root,
      left.max_val_without_root + right.max_val)
    return { max_val, max_val_without_root }
  }
  let res = dfs(root)

  return Math.max(res.max_val, res.max_val_without_root)
};

function test_00337() {
  let root = TreeNode.create([3, 2, 3, null, 3, null, 1]) // expect 7
  let result = rob(root)
  console.log(result)
  root = TreeNode.create([3, 4, 5, 1, 3, null, 1]) // expect 9
  result = rob(root)
  console.log(result)
  root = TreeNode.create([4, 1, null, 2, null, 3])
  result = rob(root)
  console.log(result) // expect 7

}

test_00337()
