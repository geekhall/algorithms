/**
 * ID:    00965
 * Title: Univalued Binary Tree
 * Difficulty: Easy
 * Description: A binary tree is uni-valued if every node in the tree has the same value.
 *
 * Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.
 *
 * Example 1:
 *
 * Input: root = [1,1,1,1,1,null,1] Output: true
 *
 * Example 2:
 *
 * Input: root = [2,2,2,5,2] Output: false
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 100].
 * 0 <= Node.val < 100
 */
import { TreeNode, createTree } from "../../utils/TreeNode"
function isUnivalTree(root: TreeNode | null): boolean {
  if (root === null)
    return true
  let cur: TreeNode | null = root
  let mostRight = null
  let val = root.val
  while (cur !== null) {
    mostRight = cur.left
    if (mostRight !== null) {
      while (mostRight.right !== null && mostRight.right !== cur) {
        mostRight = mostRight.right
      }

      if (mostRight.right === null) {
        mostRight.right = cur
        if (cur.val !== val)
          return false
        cur = cur.left
        continue
      } else {
        mostRight.right = null
      }
    } else {
      if (cur.val !== val)
        return false
    }
    cur = cur.right
  }
  return true
};

function test_00965() {
  let root = createTree([1, 1, 1, 1, 1, null, 1])
  console.log(isUnivalTree(root));
  root = createTree([2, 2, 2, 5, 2])
  console.log(isUnivalTree(root));

}

test_00965()
