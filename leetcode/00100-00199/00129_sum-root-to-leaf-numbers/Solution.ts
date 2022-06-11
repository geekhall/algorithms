/**
 * ID:    00129
 * Title: Sum Root to Leaf Numbers
 * Difficulty: Medium
 * Description: You are given the root of a binary tree containing digits from 0 to 9 only.
 *
 * Each root-to-leaf path in the tree represents a number.
 *
 * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 *
 * Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * A leaf node is a node with no children.
 *
 * Example 1:
 *
 * Input: root = [1,2,3] Output: 25 Explanation: The root-to-leaf path 1->2 represents the number 12. The root-to-leaf path 1->3 represents the number 13. Therefore, sum = 12 + 13 = 25.
 *
 * Example 2:
 *
 * Input: root = [4,9,0,5,1] Output: 1026 Explanation: The root-to-leaf path 4->9->5 represents the number 495. The root-to-leaf path 4->9->1 represents the number 491. The root-to-leaf path 4->0 represents the number 40. Therefore, sum = 495 + 491 + 40 = 1026.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * 0 <= Node.val <= 9
 * The depth of the tree will not exceed 10.
 */
import { TreeNode } from "../../utils/TreeNode";
function sumNumbers(root: TreeNode | null): number {
  let sum = 0
  let arr = new Array<number>()
  const dfs = (node: TreeNode | null, path: number): number => {
    let res = 0
    if (!node)
      return 0
    if (node.left === null && node.right === null) {
      arr.push(path * 10 + node.val)
      return path * 10 + node.val
    }
    let left = dfs(node.left, path * 10 + node.val)
    let right = dfs(node.right, path * 10 + node.val)
    return left + right
  }
  dfs(root, 0)
  return arr.reduce((pre, cur) => pre + cur)
};

function test_00129() {
  let root = TreeNode.create([1, 2, 3])
  console.log(sumNumbers(root));
  root = TreeNode.create([4, 9, 0, 5, 1])
  console.log(sumNumbers(root));
}

test_00129()
