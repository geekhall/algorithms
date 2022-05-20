/**
 * ID:    00107
 * Title: Binary Tree Level Order Traversal II
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7] Output: [[15,7],[9,20],[3]]
 *
 * Example 2:
 *
 * Input: root = [1] Output: [[1]]
 *
 * Example 3:
 *
 * Input: root = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from "../../utils/TreeNode"

function levelOrderBottom1(root: TreeNode | null): number[][] {
  if (root === null)
    return []
  let res: number[][] = new Array()
  let m = new Map<number, Array<TreeNode>>()


  let level = 1
  m.set(level, [root])
  let current = root
  while (current.left !== null || current.right !== null) {
    level++
    let tempArr = new Array()
    if (current.left !== null)
      tempArr.push(current.left)
    if (current.right !== null)
      tempArr.push(current.right)
    m.set(level, tempArr)
  }
  return res
};

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root)
    return []
  let res: number[][] = new Array()
  let queue = new Array()
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    let level = new Array()
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()
      level.push(cur.val)
      if (cur.left)
        queue.push(cur.left)
      if (cur.right)
        queue.push(cur.right)
    }
    res.unshift(level)
  }
  return res
}

function test_00107() {
  let root = TreeNode.create([3, 9, 20, null, null, 15, 7])
  console.log(levelOrderBottom(root));
  root = TreeNode.create([])
  console.log(levelOrderBottom(root));
}

test_00107()
