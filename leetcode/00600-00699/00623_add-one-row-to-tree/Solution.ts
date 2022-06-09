/**
 * ID:    00623
 * Title: Add One Row to Tree
 * Difficulty: Medium
 * Description: Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.
 *
 * Note that the root node is at depth 1.
 *
 * The adding rule is:
 *
 * Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur 's left subtree root and right subtree root.
 * cur 's original left subtree should be the left subtree of the new left subtree root.
 * cur 's original right subtree should be the right subtree of the new right subtree root.
 * If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.
 *
 * Example 1:
 *
 * Input: root = [4,2,6,3,1,5], val = 1, depth = 2 Output: [4,1,1,2,null,null,6,3,1,5]
 *
 * Example 2:
 *
 * Input: root = [4,2,null,3,1], val = 1, depth = 3 Output: [4,2,null,1,1,3,null,null,1]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * The depth of the tree is in the range [1, 10 4 ].
 * -100 <= Node.val <= 100
 * -10 5 <= val <= 10 5
 * 1 <= depth <= the depth of tree + 1
 */
import { TreeNode } from "../../utils/TreeNode";
function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  let res = null
  if (root === null) {
    return res
  }
  if (depth === 1) {
    res = new TreeNode(val)
    res.left = root
    return res
  }

  let queue = new Array()
  let level = 0
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      if (i === 0) {
        level++
      }
      if (level === depth - 1) {
        let node = queue.shift()
        if (node === null) {
          continue
        }
        let left = new TreeNode(val)
        let right = new TreeNode(val)
        left.left = node.left
        right.right = node.right
        node.left = left
        node.right = right
      } else {
        let cur = queue.shift()

        if (cur.left)
          queue.push(cur.left)
        if (cur.right)
          queue.push(cur.right)
      }
    }
  }

  return root
};

function test_00623() {
  let root = TreeNode.create([4, 2, 6, 3, 1, 5]), val = 1, depth = 2
  let res = addOneRow(root, val, depth)
  TreeNode.print(res)
}

test_00623()
