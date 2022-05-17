/**
 * ID:    00700
 * Title: Search in a Binary Search Tree
 * Difficulty: Easy
 * Description: You are given the root of a binary search tree (BST) and an integer val.
 *
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
 *
 * Example 1:
 *
 * Input: root = [4,2,7,1,3], val = 2 Output: [2,1,3]
 *
 * Example 2:
 *
 * Input: root = [4,2,7,1,3], val = 5 Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 5000].
 * 1 <= Node.val <= 10 7
 * root is a binary search tree.
 * 1 <= val <= 10 7
 */
import { TreeNode } from "../../utils/TreeNode"
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null)
    return null
  while (root && root.val !== val) {
    root = root.val < val ? root.right : root.left
  }
  return root
};

function test_00700() {
  let root = [4, 2, 7, 1, 3], val = 2
  let node = TreeNode.create(root)
  console.log(searchBST(node, val));


}

test_00700()
