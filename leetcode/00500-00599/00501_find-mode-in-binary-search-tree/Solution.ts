/**
 * ID:    00501
 * Title: Find Mode in Binary Search Tree
 * Difficulty: Easy
 * Description: Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
 *
 * Assume a BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,2] Output: [2]
 *
 * Example 2:
 *
 * Input: root = [0] Output: [0]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * -10 5 <= Node.val <= 10 5
 *
 * Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
 */
import { TreeNode } from "../../utils/TreeNode"
function findMode1(root: TreeNode | null): number[] {
  if (root === null)
    return []
  let res = new Array<number>()
  let maxFreq = 1
  let pre = root.val
  let freq = 1
  let m = new Map<number, Array<number>>()
  m.set(freq, [root.val])
  const traverse = (node: TreeNode) => {
    if (node.val === pre) {
      freq++
    } else {
      freq = 1
    }
    maxFreq = Math.max(maxFreq, freq)
    if (!m.get(freq)) {
      m.set(freq, [node.val])
    } else {
      let arr = m.get(freq)!
      arr.push(node.val)
      m.set(freq, arr)
    }
    console.log(node.val, freq, m);
    pre = node.val
    if (node.left) {
      traverse(node.left)
    }
    if (node.right) {
      traverse(node.right)
    }
  }
  traverse(root)
  if (m.get(maxFreq) === undefined) {
    res = []
  } else {
    res = m.get(maxFreq)!
  }
  return res
};
function findMode(root: TreeNode | null): number[] {
  let modeList = new Array<number>()
  let preValue: number
  let curCount = 0
  let maxCount = 0

  const inOrder = (node: TreeNode | null) => {
    if (!node)
      return
    if (node.left)
      inOrder(node.left)
    addMode(node)
    if (node.right)
      inOrder(node.right)
  }
  const addMode = (node: TreeNode) => {
    if (preValue !== node.val) {
      curCount = 0
      preValue = node.val
    }
    curCount++
    if (curCount > maxCount) {
      maxCount = curCount
      modeList = []
      modeList.push(node.val)
    } else if (curCount === maxCount) {
      modeList.push(node.val)
    }
  }
  inOrder(root)

  return modeList
}
function test_00501() {
  let root = TreeNode.create([2, 1, 3, 0, 2, 3])
  console.log(findMode(root));


}

test_00501()
