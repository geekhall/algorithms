/**
 * ID:    00144
 * Title: Binary Tree Preorder Traversal
 * Difficulty: Easy
 * Description: Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,3] Output: [1,2,3]
 *
 * Example 2:
 *
 * Input: root = [] Output: []
 *
 * Example 3:
 *
 * Input: root = [1] Output: [1]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */
import { TreeNode } from "../../utils/TreeNode"

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null)
    return []
  let res = new Array()
  // 当前节点，
  let cur: TreeNode | null = root
  // cur左孩子的最右节点
  let mostRight = null
  while (cur !== null) {
    mostRight = cur.left
    if (mostRight !== null) {
      // cur 有左孩子，找到cur左子树最右节点
      while (mostRight.right !== null && mostRight.right !== cur) {
        mostRight = mostRight.right
      }

      if (mostRight.right === null) {// 若mostRight的右孩子指向空，让其指向cur，cur向左移动
        mostRight.right = cur
        res.push(cur.val)
        cur = cur.left
        continue
      } else {// 若mostRight的右孩子指向cur，让其指向空，cur向右移动
        mostRight.right = null
        // cur = cur.right
      }
    } else {
      res.push(cur.val)
    }
    cur = cur.right
  }
  return res
};

function test_00144() {

}

test_00144()
