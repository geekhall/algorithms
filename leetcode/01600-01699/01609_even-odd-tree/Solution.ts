/**
 * ID:    01609
 * Title: Even Odd Tree
 * Difficulty: Medium
 * Description: A binary tree is named Even-Odd if it meets the following conditions:
 *
 * The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
 * For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
 * For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
 *
 * Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.
 *
 * Example 1:
 *
 * Input: root = [1,10,4,3,null,7,9,12,8,6,null,null,2] Output: true Explanation: The node values on each level are: Level 0: [1] Level 1: [10,4] Level 2: [3,7,9] Level 3: [12,8,6,2] Since levels 0 and 2 are all odd and increasing and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.
 *
 * Example 2:
 *
 * Input: root = [5,4,2,3,3,7] Output: false Explanation: The node values on each level are: Level 0: [5] Level 1: [4,2] Level 2: [3,3,7] Node values in level 2 must be in strictly increasing order, so the tree is not Even-Odd.
 *
 * Example 3:
 *
 * Input: root = [5,9,1,3,5,7] Output: false Explanation: Node values in the level 1 should be even integers.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 5 ].
 * 1 <= Node.val <= 10 6
 */
import { TreeNode } from "../../utils/TreeNode";
function isEvenOddTree(root: TreeNode | null): boolean {
  if (!root)
    return true

  let res = true
  let cur_level = 0
  let cur = root
  let pre = null
  let queue = new Array()
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length

    for (let i = 0; i < size; i++) {
      if (i === 0) {
        pre = null
      } else {
        pre = cur
      }
      cur = queue.shift()
      if (cur_level % 2 === 0) {
        if (cur.val % 2 === 0 || (pre && cur.val <= pre.val)) {
          res = false
          break
        }
      } else {
        if (cur.val % 2 !== 0 || (pre && cur.val >= pre.val)) {
          res = false
          break
        }
      }

      if (cur.left)
        queue.push(cur.left)
      if (cur.right)
        queue.push(cur.right)
    }
    cur_level++
  }
  return res
};

function test_01609() {
  let root = TreeNode.create([1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2])
  console.log(isEvenOddTree(root))
  root = TreeNode.create([5, 4, 2, 3, 3, 7])
  console.log(isEvenOddTree(root))
  root = TreeNode.create([5, 9, 1, 3, 5, 7])
  console.log(isEvenOddTree(root))


}

test_01609()
