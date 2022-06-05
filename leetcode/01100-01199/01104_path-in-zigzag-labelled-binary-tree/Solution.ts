/**
 * ID:    01104
 * Title: Path In Zigzag Labelled Binary Tree
 * Difficulty: Medium
 * Description: In an infinite binary tree where every node has two children, the nodes are labelled in row order.
 *
 * In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.
 *
 * Given the label of a node in this tree, return the labels in the path from the root of the tree to the node with that label.
 *
 * Example 1:
 *
 * Input: label = 14 Output: [1,3,4,14]
 *
 * Example 2:
 *
 * Input: label = 26 Output: [1,2,6,10,26]
 *
 * Constraints:
 *
 * 1 <= label <= 10^6
 */
import { TreeNode } from "../../utils/TreeNode"
function pathInZigZagTree(label: number): number[] {
  let res = new Array()
  let cur = label
  let level = Math.floor(Math.log2(label))
  let max = Math.pow(2, level) - 1
  let min = Math.pow(2, level - 1)

  while (cur >= 1) {
    res.unshift(cur)
    cur = max - (Math.floor(cur / 2) - min)
    level = Math.floor(Math.log2(cur))
    max = Math.pow(2, level) - 1
    min = Math.pow(2, level - 1)
  }

  return res
};

function test_01104() {
  console.log(pathInZigZagTree(14)); // [1,3,4,14]
  console.log(pathInZigZagTree(26)); // [1,3,4,14]
}

test_01104()
