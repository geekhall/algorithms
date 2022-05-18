/**
 * ID:    00404
 * Title: Sum of Left Leaves
 * Difficulty: Easy
 * Description: Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7] Output: 24 Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
 *
 * Example 2:
 *
 * Input: root = [1] Output: 0
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from "../../utils/TreeNode"

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root)
    return 0
  let res = 0
  const postOrder = (node: TreeNode | null) => {
    if (node === null)
      return

    if (node.left) {
      if (node.left.left === null && node.left.right === null) {
        res += node.left.val
      } else {
        postOrder(node.left)
      }
    }
    if (node.right)
      postOrder(node.right)
  }
  postOrder(root)
  return res
};

function test_00404() {
  let root = TreeNode.create([3, 9, 20, null, null, 15, 7])
  // console.log(sumOfLeftLeaves(root));
  // root = TreeNode.create([1])
  // console.log(sumOfLeftLeaves(root));
  root = TreeNode.create([9, null, 2, 0, null, -7, null, -1])
  console.log(sumOfLeftLeaves(root));
}

test_00404()
