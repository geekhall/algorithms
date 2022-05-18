/**
 * ID:    00653
 * Title: Two Sum IV - Input is a BST
 * Difficulty: Easy
 * Description: Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.
 *
 * Example 1:
 *
 * Input: root = [5,3,6,2,4,null,7], k = 9 Output: true
 *
 * Example 2:
 *
 * Input: root = [5,3,6,2,4,null,7], k = 28 Output: false
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * -10 4 <= Node.val <= 10 4
 * root is guaranteed to be a valid binary search tree.
 * -10 5 <= k <= 10 5
 */
import { TreeNode } from "../../utils/TreeNode"

function findTarget(root: TreeNode | null, k: number): boolean {
  if (root === null)
    return false
  let found = false
  let s = new Set<number>()
  const find = (node: TreeNode | null) => {
    if (node === null || found)
      return
    s.add(node.val)
    if (s.has(k - node.val) && node.val !== k - node.val) {
      found = true
      return
    }
    find(node.left)
    find(node.right)
  }
  find(root)
  return found
};

function test_00653() {
  let root = TreeNode.create([5, 3, 6, 2, 4, null, 7]), k = 9
  console.log(findTarget(root, k));

  root = TreeNode.create([5, 3, 6, 2, 4, null, 7]), k = 28
  console.log(findTarget(root, k));

  root = TreeNode.create([1]), k = 2
  console.log(findTarget(root, k));

}

test_00653()
