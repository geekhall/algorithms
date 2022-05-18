/**
 * ID:    00235
 * Title: Lowest Common Ancestor of a Binary Search Tree
 * Difficulty: Easy
 * Description: Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Example 1:
 *
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8 Output: 6 Explanation: The LCA of nodes 2 and 8 is 6.
 *
 * Example 2:
 *
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4 Output: 2 Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 *
 * Example 3:
 *
 * Input: root = [2,1], p = 2, q = 1 Output: 2
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 10 5 ].
 * -10 9 <= Node.val <= 10 9
 * All Node.val are unique.
 * p != q
 * p and q will exist in the BST.
 */
import { TreeNode } from "../../utils/TreeNode"

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || p === null || q === null)
    return null
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q)
  return root
};

function test_00235() {
  let root = TreeNode.create([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), p = new TreeNode(2, null, null), q = new TreeNode(8, null, null)
  // console.log(lowestCommonAncestor(root, p, q));
  // let root = TreeNode.create([1, 2, 3]), p = new TreeNode(2, null, null), q = new TreeNode(3, null, null)
  // console.log(lowestCommonAncestor(root, p, q));

  root = TreeNode.create([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), p = new TreeNode(3, null, null), q = new TreeNode(5, null, null)
  console.log(lowestCommonAncestor(root, p, q));
}

test_00235()
