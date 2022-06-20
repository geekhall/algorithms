/**
 * ID:    00116
 * Title: Populating Next Right Pointers in Each Node
 * Difficulty: Medium
 * Description: You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:
 *
 * struct Node { int val; Node *left; Node *right; Node *next; }
 *
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
 *
 * Initially, all next pointers are set to NULL.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5,6,7] Output: [1,#,2,3,#,4,5,6,7,#] Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 *
 * Example 2:
 *
 * Input: root = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 2 12 - 1].
 * -1000 <= Node.val <= 1000
 *
 * Follow-up:
 *
 * You may only use constant extra space.
 * The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.
 */

// Definition for Node.
class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}
function connect(root: Node | null): Node | null {
  if (!root) return null
  root.next = null
  const dfs = (current: Node) => {
    if (current.right) { // 由于是满二叉树，所以不需要校验Left
      current.left.next = current.right
      if (!current.next) {
        current.right.next = null
      } else {
        current.right.next = current.next.left
      }

      dfs(current.left)
      dfs(current.right)
    }
  }
  dfs(root)
  return root
};

function test_00116() {

}

test_00116()
