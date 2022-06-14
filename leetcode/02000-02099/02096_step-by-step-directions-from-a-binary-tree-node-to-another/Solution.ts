/**
 * ID:    02096
 * Title: Step-By-Step Directions From a Binary Tree Node to Another
 * Difficulty: Medium
 * Description: You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. You are also given an integer startValue representing the value of the start node s, and a different integer destValue representing the value of the destination node t.
 *
 * Find the shortest path starting from node s and ending at node t. Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. Each letter indicates a specific direction:
 *
 * 'L' means to go from a node to its left child node.
 * 'R' means to go from a node to its right child node.
 * 'U' means to go from a node to its parent node.
 *
 * Return the step-by-step directions of the shortest path from node s to node t.
 *
 * Example 1:
 *
 * Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6 Output:"UURL" Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
 *
 * Example 2:
 *
 * Input: root = [2,1], startValue = 2, destValue = 1 Output:"L" Explanation: The shortest path is: 2 → 1.
 *
 * Constraints:
 *
 * The number of nodes in the tree is n.
 * 2 <= n <= 10 5
 * 1 <= Node.val <= n
 * All the values in the tree are unique.
 * 1 <= startValue, destValue <= n
 * startValue != destValue
 */
import { TreeNode } from '../../utils/TreeNode';
function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
  let start_str = new Array()
  let end_str = new Array()
  const dfs = (node: TreeNode | null, cur_str: string) => {
    if (!node) return
    if (node.val === startValue) {
      start_str = cur_str.split('')
    }
    if (node.val === destValue) {
      end_str = cur_str.split('')
    }
    dfs(node.left, cur_str + 'L')
    dfs(node.right, cur_str + 'R')
    return
  }
  dfs(root, '')
  let start_pos = 0
  for (; start_pos < Math.min(start_str.length, end_str.length); start_pos++) {
    if (start_str[start_pos] !== end_str[start_pos]) {
      break
    }
  }
  return start_str.slice(start_pos).map(v => 'U').concat(end_str.slice(start_pos)).join('')
};

function test_02096() {
  let root = [5, 1, 2, 3, null, 6, 4], startValue = 3, destValue = 6
  console.log(getDirections(TreeNode.create(root), startValue, destValue))
  root = [2, 1], startValue = 2, destValue = 1
  console.log(getDirections(TreeNode.create(root), startValue, destValue))
}

test_02096()
