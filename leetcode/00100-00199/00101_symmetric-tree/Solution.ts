/**
 * ID:    00101
 * Title: Symmetric Tree
 * Difficulty: Easy
 * Description: Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 *
 * Example 1:
 *
 * Input: root = [1,2,2,3,4,4,3] Output: true
 *
 * Example 2:
 *
 * Input: root = [1,2,2,null,3,null,3] Output: false
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 * Follow up: Could you solve it both recursively and iteratively?
 */
import { TreeNode } from "../../utils/TreeNode"
function isSymmetric(root: TreeNode | null): boolean {
  if (!root)
    return false
  let res = true
  const dfs = (a: TreeNode | null, b: TreeNode | null) => {
    if (!a && !b)
      return
    if ((a === null && b !== null) ||
      (a !== null && b === null) ||
      a!.val !== b!.val) {
      res = false
      return
    }
    dfs(a!.left, b!.right)
    dfs(a!.right, b!.left)
  }
  dfs(root.left, root.right)
  return res
};

function test_00101() {
  let root = TreeNode.create([1, 2, 2, 3, 4, 4, 3])
  console.log(isSymmetric(root));
  root = TreeNode.create([1, 2, 2, null, 3, null, 3])
  console.log(isSymmetric(root));
}

test_00101()
