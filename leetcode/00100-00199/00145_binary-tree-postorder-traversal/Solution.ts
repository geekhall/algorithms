/**
 * ID:    00145
 * Title: Binary Tree Postorder Traversal
 * Difficulty: Easy
 * Description: Given the root of a binary tree, return the postorder traversal of its nodes' values.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,3] Output: [3,2,1]
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
 * The number of the nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */
import { TreeNode } from "../../utils/TreeNode"
function postorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = new Array()
  let posOrder = (root: TreeNode | null) => {
    if (root === null)
      return
    posOrder(root.left)
    posOrder(root.right)

    res.push(root.val)
  }
  posOrder(root)
  return res
};

function test_00145() {
  let root = TreeNode.create([1, null, 2, null, null, 3])
  console.log(postorderTraversal(root));

}

test_00145()
