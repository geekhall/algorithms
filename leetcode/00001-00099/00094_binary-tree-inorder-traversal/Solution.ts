/**
 * ID:    00094
 * Title: Binary Tree Inorder Traversal
 * Difficulty: Easy
 * Description: Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,3] Output: [1,3,2]
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
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
function createTree(arr: number | null[]): TreeNode | null {
  let res: TreeNode | null = new TreeNode()

  return res
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null)
    return []
  let stack: TreeNode[] = new Array()
  let node: TreeNode | null = root
  let res: number[] = new Array()
  while (node !== null || stack.length > 0) {
    if (node !== null) {
      stack.push(node)
      node = node.left
    } else { // node === null && stack.length > 0
      let tempNode = stack.pop()!
      res.push(tempNode.val)
      node = tempNode.right
    }
  }
  return res
};

function test_00094() {
  let root = [1, null, 2, 3]
  let head: TreeNode | null = new TreeNode(1, null, null)
  head.right = new TreeNode(2, null, null)
  head.right.left = new TreeNode(3, null, null)
  console.log(inorderTraversal(head));

}

test_00094()
