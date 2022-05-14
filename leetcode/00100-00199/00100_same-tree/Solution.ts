/**
 * ID:    00100
 * Title: Same Tree
 * Difficulty: Easy
 * Description: Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 *
 * Example 1:
 *
 * Input: p = [1,2,3], q = [1,2,3] Output: true
 *
 * Example 2:
 *
 * Input: p = [1,2], q = [1,null,2] Output: false
 *
 * Example 3:
 *
 * Input: p = [1,2,1], q = [1,1,2] Output: false
 *
 * Constraints:
 *
 * The number of nodes in both trees is in the range [0, 100].
 * -10 4 <= Node.val <= 10 4
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }
  if (p.val !== q.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

};

function test_00100() {
  let p: TreeNode = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  let q: TreeNode = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  console.log(isSameTree(p, q));
  p = new TreeNode(1, new TreeNode(2), null)
  q = new TreeNode(1, null, new TreeNode(2))
  console.log(isSameTree(p, q));
  p = new TreeNode(10, new TreeNode(5), new TreeNode(15))
  q = new TreeNode(10, new TreeNode(5, null, null), new TreeNode(15))
  console.log(isSameTree(p, q));
}

test_00100()
