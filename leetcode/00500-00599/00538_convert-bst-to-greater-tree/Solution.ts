/**
 * ID:    00538
 * Title: Convert BST to Greater Tree
 * Difficulty: Medium
 * Description: Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.
 *
 * As a reminder, a binary search tree is a tree that satisfies these constraints:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 *
 * Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8] Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 *
 * Example 2:
 *
 * Input: root = [0,null,1] Output: [1,null,1]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 4 ].
 * -10 4 <= Node.val <= 10 4
 * All the values in the tree are unique.
 * root is guaranteed to be a valid binary search tree.
 *
 * Note: This question is the same as 1038: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
 */
import { TreeNode } from "../../utils/TreeNode"
function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0
  function dfs(node: TreeNode | null) {
    if (!node) {
      return
    }
    dfs(node.right)
    sum += node.val
    node.val = sum
    dfs(node.left)
  }
  dfs(root)
  return root
};

function test_00538() {
  let root = TreeNode.create([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8])
  TreeNode.print(convertBST(root));
  root = TreeNode.create([0, null, 1])
  TreeNode.print(convertBST(root));

}

test_00538()
