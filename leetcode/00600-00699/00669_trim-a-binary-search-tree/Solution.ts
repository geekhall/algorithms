/**
 * ID:    00669
 * Title: Trim a Binary Search Tree
 * Difficulty: Medium
 * Description: Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.
 *
 * Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.
 *
 * Example 1:
 *
 * Input: root = [1,0,2], low = 1, high = 2 Output: [1,null,2]
 *
 * Example 2:
 *
 * Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3 Output: [3,2,null,1]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * 0 <= Node.val <= 10 4
 * The value of each node in the tree is unique.
 * root is guaranteed to be a valid binary search tree.
 * 0 <= low <= high <= 10 4
 */
import { TreeNode } from "../../utils/TreeNode"

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (root === null)
    return null
  if (root.val < low)
    return trimBST(root.right, low, high)
  if (root.val > high)
    return trimBST(root.left, low, high)
  root.left = trimBST(root.left, low, high)
  root.right = trimBST(root.right, low, high)
  return root
};

function test_00669() {
  let root = TreeNode.create([1, 0, 2]), low = 1, high = 2
  TreeNode.print(trimBST(root, low, high))
  root = TreeNode.create([3, 0, 4, null, 2, null, null, 1]), low = 1, high = 3
  TreeNode.print(trimBST(root, low, high))
}

test_00669()
