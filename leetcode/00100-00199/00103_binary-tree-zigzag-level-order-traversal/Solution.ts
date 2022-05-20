/**
 * ID:    00103
 * Title: Binary Tree Zigzag Level Order Traversal
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7] Output: [[3],[20,9],[15,7]]
 *
 * Example 2:
 *
 * Input: root = [1] Output: [[1]]
 *
 * Example 3:
 *
 * Input: root = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 2000].
 * -100 <= Node.val <= 100
 */
import { TreeNode } from "../../utils/TreeNode"
function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root)
    return []
  let res: number[][] = new Array()
  let fromLeft: boolean = true
  const bfs = (node: TreeNode | null) => {
    let queue = new Array()
    queue.push(node)
    while (queue.length > 0) {
      let size = queue.length
      let level: number[] = new Array()
      for (let i = 0; i < size; i++) {
        let cur: TreeNode
        if (fromLeft) {
          cur = queue.shift()
          if (cur.left)
            queue.push(cur.left)
          if (cur.right)
            queue.push(cur.right)
        } else {
          cur = queue.pop()
          if (cur.right)
            queue.unshift(cur.right)
          if (cur.left)
            queue.unshift(cur.left)
        }
        level.push(cur.val)
      }
      fromLeft = !fromLeft
      res.push(level)
    }
  }
  bfs(root)
  return res
};

function test_00103() {
  let root = TreeNode.create([3, 9, 20, null, null, 15, 7])
  console.log(zigzagLevelOrder(root));
  root = TreeNode.create([1])
  console.log(zigzagLevelOrder(root));
  root = TreeNode.create([])
  console.log(zigzagLevelOrder(root));
  root = TreeNode.create([1, 2, 3, 4, 5])
  console.log(zigzagLevelOrder(root));

}

test_00103()
