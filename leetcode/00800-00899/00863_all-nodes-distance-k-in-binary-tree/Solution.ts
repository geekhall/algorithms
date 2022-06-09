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
import { TreeNode } from "../../utils/TreeNode";
function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  if (!root || !target)
    return []
  if (k == 0) {
    return [target.val]
  }
  const queue = new Array<TreeNode>()
  const result = new Set<number>()
  const parentMap = new Map()
  parentMap.set(root, null)

  queue.push(root)
  while (queue.length > 0) {
    let cur = queue.shift()!
    if (cur.left) {
      parentMap.set(cur.left, cur)
      queue.push(cur.left)
    }
    if (cur.right) {
      parentMap.set(cur.right, cur)
      queue.push(cur.right)
    }
  }
  const getUpDistance = (node: TreeNode, distance: number) => {
    if (!node)
      return
    let cur = node
    while (cur) {
      if (distance === 0 && target.val !== node.val) {
        result.add(node.val)
        return
      }
      cur = parentMap.get(cur)
      distance--
    }
  }
  const getDownDistance = (node: TreeNode, distance: number, direction: number) => {
    if (!node)
      return
    if (distance === 0 && target.val !== node.val) {
      result.add(node.val)
      return
    }

    if (node.left && distance > 0 && (direction & 2)) {
      getDownDistance(node.left, distance - 1, 3)
    }
    if (node.right && distance > 0 && (direction & 1)) {
      getDownDistance(node.right, distance - 1, 3)
    }
  }

  let distance = k
  let cur = target
  let parent = parentMap.get(cur)
  if (target === root) {
    getDownDistance(target, distance, 3)
  } else {
    getDownDistance(cur, distance, 3)
    while (distance >= 0) {
      distance = distance - 1
      if (parent && parent.left === cur) {
        getDownDistance(parent, distance, 1)
      } else if (parent && parent.right === cur) {
        getDownDistance(parent, distance, 2)
      }
      cur = parent
      parent = parentMap.get(cur)

    }
  }

  return [...result]
}

function test_00863() {
  let root = TreeNode.create([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), target = root!.left, k = 2
  console.log(distanceK(root, target, k))
  root = TreeNode.create([1]), target = root, k = 3
  console.log(distanceK(root, target, k))
  root = TreeNode.create([0, 1, null, 3, 2]), target = root!.left!.right, k = 1
  console.log(distanceK(root, target, k))
  root = TreeNode.create([0, 2, 1, null, null, 3]), target = root!.right!.left, k = 3
  console.log(distanceK(root, target, k))


}

test_00863()
