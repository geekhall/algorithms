/**
 * ID:    01008
 * Title: Construct Binary Search Tree from Preorder Traversal
 * Difficulty: Medium
 * Description: Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.
 *
 * It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.
 *
 * A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.
 *
 * A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.
 *
 * Example 1:
 *
 * Input: preorder = [8,5,1,7,10,12] Output: [8,5,10,1,7,null,12]
 *
 * Example 2:
 *
 * Input: preorder = [1,3] Output: [1,null,3]
 *
 * Constraints:
 *
 * 1 <= preorder.length <= 100
 * 1 <= preorder[i] <= 1000
 * All the values of preorder are unique.
 */
import { TreeNode } from "../../utils/TreeNode"
function bstFromPreorder(preorder: number[]): TreeNode | null {
  if (!preorder || preorder.length === 0)
    return null
  if (preorder.length === 1)
    return new TreeNode(preorder[0], null, null)

  let res = new TreeNode(preorder[0], null, null)

  let mid = 0 // mid is the first element index which is bigger than preorder[0]
  for (let i = 1; i < preorder.length; i++) {
    if (preorder[0] < preorder[i]) {
      mid = i
      break
    }
  }
  if (mid === 0) { // preorder[0] is the biggest element of array.
    res.left = bstFromPreorder(preorder.slice(1))
  } else { // first element must be the root element in pre-order.
    res.left = bstFromPreorder(preorder.slice(1, mid))
    res.right = bstFromPreorder(preorder.slice(mid))
  }

  return res
};

function test_01008() {
  let res = bstFromPreorder([4, 2])
  TreeNode.print(res)
  res = bstFromPreorder([8, 5, 1, 7, 10, 12])
  TreeNode.print(res)
}

test_01008()
