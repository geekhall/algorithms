/**
 * ID:    00236
 * Title: Lowest Common Ancestor of a Binary Tree
 * Difficulty: Medium
 * Description: Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Example 1:
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 Output: 3 Explanation: The LCA of nodes 5 and 1 is 3.
 *
 * Example 2:
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4 Output: 5 Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
 *
 * Example 3:
 *
 * Input: root = [1,2], p = 1, q = 2 Output: 1
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 10 5 ].
 * -10 9 <= Node.val <= 10 9
 * All Node.val are unique.
 * p != q
 * p and q will exist in the tree.
 */
import { createTree, TreeNode } from "../../utils/TreeNode"

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null)
    return null
  let parentMap = new Map()
  let s = new Set()
  parentMap.set(root, root)
  lcaProcess(root, parentMap)
  let current = p
  while (parentMap.get(current) !== current) {
    s.add(current)
    current = parentMap.get(current)
  }
  s.add(root)
  while (q !== root) {
    if (s.has(q)) {
      return q
    }
    q = parentMap.get(q)
  }
  return root
};

function lcaProcess(root: TreeNode | null, parentMap: Map<TreeNode, TreeNode>) {
  if (root === null)
    return
  if (root.left !== null) {
    parentMap.set(root.left, root)
    lcaProcess(root.left, parentMap)
  }
  if (root.right !== null) {
    parentMap.set(root.right, root)
    lcaProcess(root.right, parentMap)
  }
}

function test_00236() {
  let n1 = new TreeNode(-1, null, null)
  let n2 = new TreeNode(0, null, null)
  let n3 = new TreeNode(3, null, null)
  let n4 = new TreeNode(-2, null, null)
  let n5 = new TreeNode(4, null, null)
  let n6 = new TreeNode(6, null, null)
  let n7 = new TreeNode(7, null, null)
  let n8 = new TreeNode(8, null, null)

  n1.left = n2
  n1.right = n3
  n2.left = n4
  n2.right = n5
  n4.left = n8

  console.log(lowestCommonAncestor(n1, n8, n2));

}

test_00236()
