/**
 * ID:    00863
 * Title: All Nodes Distance K in Binary Tree
 * Difficulty: Medium
 * Description: Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.
 *
 * You can return the answer in any order.
 *
 * Example 1:
 *
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2 Output: [7,4,1] Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.
 *
 * Example 2:
 *
 * Input: root = [1], target = 1, k = 3 Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 500].
 * 0 <= Node.val <= 500
 * All the values Node.val are unique.
 * target is the value of one of the nodes in the tree.
 * 0 <= k <= 1000
 */
import { TreeNode } from "../../utils/TreeNode"
function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  let queue = new Array()

  let resultSet = new Set()
  let parentMap = new Map()
  parentMap.set(root, null)
  const markParents = (node: TreeNode | null) => {
    if (node) {
      if (node.left) {
        parentMap.set(node.left, node)
        markParents(node.left)
      }
      if (node.right) {
        parentMap.set(node.right, node)
        markParents(node.right)
      }
    }
  }
  markParents(root)

  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      if (node!.left) {
        queue.push(node!.left)
        parentMap.set(node!.left, node)
      }
      if (node!.right) {
        queue.push(node!.right)
        parentMap.set(node!.right, node)
      }
    }
  }


  const downDistanceK = (node: TreeNode | null, distance: number) => {
    if (node == null) return

    if (distance === k && node !== target) {
      resultSet.add(node.val)
      result.push(node.val)
    }
    if (distance > k) return
    downDistanceK(node.left, distance + 1)
    downDistanceK(node.right, distance + 1)
  }
  downDistanceK(target, 0)

  let current = target
  for (let i = 0; i < k; i++) {
    downDistanceK(current, i)
    current = parentMap.get(current)
  }
  return result
};

function test_00863() {
  let root = TreeNode.create([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), target = root!.left, k = 2
  console.log(distanceK(root, target, k))
  root = TreeNode.create([1]), target = root, k = 3
  console.log(distanceK(root, target, k))
  root = TreeNode.create([0, 1, null, 3, 2]), target = root!.left!.right, k = 1
  console.log(distanceK(root, target, k))


}

test_00863()
