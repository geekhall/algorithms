/**
 * ID:    00662
 * Title: Maximum Width of Binary Tree
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the maximum width of the given tree.
 *
 * The maximum width of a tree is the maximum width among all levels.
 *
 * The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
 *
 * It is guaranteed that the answer will in the range of a 32-bit signed integer.
 *
 * Example 1:
 *
 * Input: root = [1,3,2,5,3,null,9] Output: 4 Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
 *
 * Example 2:
 *
 * Input: root = [1,3,2,5,null,null,9,6,null,7] Output: 7 Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
 *
 * Example 3:
 *
 * Input: root = [1,3,2,5] Output: 2 Explanation: The maximum width exists in the second level with length 2 (3,2).
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 3000].
 * -100 <= Node.val <= 100
 */
import { TreeNode, createTree } from "../../utils/TreeNode"

function widthOfBinaryTree(root: TreeNode | null): number {
  if (root === null)
    return 0
  let queue = new Array()
  let m = new Map()
  queue.push(root)
  let currentLevel = 1
  let currentNodeLevel = 1
  let currentMaxWidth = 0
  let max = Number.MIN_VALUE
  let st = new Array()
  m.set(root, 1)

  while (queue.length > 0) {
    let current = queue.shift()
    if (current !== null)
      currentNodeLevel = m.get(current)
    console.log("current", current);
    console.log("currentNodeLevel", currentNodeLevel);

    if (currentLevel !== currentNodeLevel) { // next level
      console.log("st", st);

      if (st.length === 0) {
        currentMaxWidth = 0
      } else {
        while (st[st.length - 1] === null) {
          st.pop()
        }
        currentMaxWidth = st.length
      }

      max = Math.max(max, currentMaxWidth)
      // console.log('==================================');
      // console.log("currentLevel: ", currentLevel);
      // console.log("current: ", current);
      // console.log("max", max);
      // console.log('currentMaxWidth', currentMaxWidth);
      // console.log('st', st);
      // console.log('==================================');
      while (st.length > 0) {
        st.pop()
      }
      if (current !== null) {
        st.push(current)
        currentMaxWidth = 1
      } else {
        currentMaxWidth = 0
      }
      currentLevel++
    } else { // same level
      if (st.length === 0 && current === null) { // skip leading null
        continue
      } else {
        st.push(current)
      }
    }
    if (current !== null) {
      // console.log(current.val);
      queue.push(current.left)
      m.set(current.left, currentNodeLevel + 1)
      queue.push(current.right)
      m.set(current.right, currentNodeLevel + 1)
    }
  }
  return max
};
function test_00662() {
  // let root = createTree([1, 2, 3, 4, 5, 6, 7])
  let root = new TreeNode(1, new TreeNode(2, new TreeNode(4, null, null), null), new TreeNode(3, new TreeNode(6, null, null), null))
  console.log(widthOfBinaryTree(root));


}

test_00662()
