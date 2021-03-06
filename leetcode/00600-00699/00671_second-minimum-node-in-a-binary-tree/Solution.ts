/**
 * ID:    00671
 * Title: Second Minimum Node In a Binary Tree
 * Difficulty: Easy
 * Description: Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.
 *
 * Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
 *
 * If no such second minimum value exists, output -1 instead.
 *
 * Example 1:
 *
 * Input: root = [2,2,5,null,null,5,7] Output: 5 Explanation: The smallest value is 2, the second smallest value is 5.
 *
 * Example 2:
 *
 * Input: root = [2,2,2] Output: -1 Explanation: The smallest value is 2, but there isn't any second smallest value.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 25].
 * 1 <= Node.val <= 2 31 - 1
 * root.val == min(root.left.val, root.right.val) for each internal node of the tree.
 */
import { TreeNode } from "../../utils/TreeNode"
function findSecondMinimumValue(root: TreeNode | null): number {
  if (root === null)
    return -1
  let res = -1
  let minimum = root.val
  const morrisPre = (node: TreeNode | null) => {
    if (root === null)
      return
    let cur: TreeNode | null = root
    let mostRight = null
    while (cur !== null) {
      mostRight = cur.left
      if (mostRight !== null) {
        while (mostRight.right !== null && mostRight.right !== cur) {
          mostRight = mostRight.right
        }
        if (mostRight.right === null) {
          mostRight.right = cur
          if (cur.val < minimum) {
            res = minimum
            minimum = cur.val
          } else if (cur.val === minimum) {
            // do nothing
          } else if (cur.val < res || res === -1) {
            res = cur.val
          }
          cur = cur.left
          continue
        } else {
          mostRight.right = null
        }
      } else {
        if (cur.val < minimum) {
          res = minimum
          minimum = cur.val
        } else if (cur.val === minimum) {
          // do nothing
        } else if (cur.val < res || res === -1) {
          res = cur.val
        }
      }
      cur = cur.right
    }
  }
  morrisPre(root)
  return res
};

function test_00671() {
  let root = TreeNode.create([2, 2, 5, null, null, 5, 7])
  console.log(findSecondMinimumValue(root));
  root = TreeNode.create([2, 2, 2])
  console.log(findSecondMinimumValue(root));

}

test_00671()
