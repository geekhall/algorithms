/**
 * ID:    00095
 * Title: Unique Binary Search Trees II
 * Difficulty: Medium
 * Description: Given an integer n, return all the structurally unique BST' s (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 *
 * Example 1:
 *
 * Input: n = 3 Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
 *
 * Example 2:
 *
 * Input: n = 1 Output: [[1]]
 *
 * Constraints:
 *
 * 1 <= n <= 8
 */
import { TreeNode } from "../../utils/TreeNode";
function generateTrees(n: number): Array<TreeNode | null> {
  const generateSubtrees = (s: number, e: number) => {
    let res = new Array()
    if (s > e) {
      res.push(null)
      return res
    }
    for (let i = s; i <= e; i++) {
      let left = generateSubtrees(s, i - 1)
      let right = generateSubtrees(i + 1, e)
      for (let l of left) {
        for (let r of right) {
          let root = new TreeNode(i)
          root.left = l
          root.right = r
          res.push(root)
        }
      }
    }
    return res
  }
  return generateSubtrees(1, n);
};

function test_00095() {
  let n = 4
  let res = generateTrees(n)
  res.forEach(node => {
    TreeNode.print(node)
    console.log()
  })
}

test_00095()
