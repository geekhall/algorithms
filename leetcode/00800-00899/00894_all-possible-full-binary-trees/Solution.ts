/**
 * ID:    00894
 * Title: All Possible Full Binary Trees
 * Difficulty: Medium
 * Description: Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.
 *
 * Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.
 *
 * A full binary tree is a binary tree where each node has exactly 0 or 2 children.
 *
 * Example 1:
 *
 * Input: n = 7 Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
 *
 * Example 2:
 *
 * Input: n = 3 Output: [[0,0,0]]
 *
 * Constraints:
 *
 * 1 <= n <= 20
 */
import { TreeNode } from "../../utils/TreeNode"

function allPossibleFBT(n: number): Array<TreeNode | null> {
  let res = new Array()
  if (n % 2 === 0) {
    return []
  } else {
    if (n === 1) {
      res.push(new TreeNode(0, null, null))
      return res
    } else {
      for (let i = 1; i < n; i += 2) {
        let left = allPossibleFBT(i)
        let right = allPossibleFBT(n - i - 1)
        for (let j = 0; j < left.length; j++) {
          for (let k = 0; k < right.length; k++) {
            res.push(new TreeNode(0, left[j], right[k]))
          }
        }
      }
    }
  }
  return res
};

function test_00894() {
  // console.log(allPossibleFBT(7));
  let res = allPossibleFBT(7)
  res.forEach((v, i) => {
    TreeNode.print(v)
  })
}

test_00894()
