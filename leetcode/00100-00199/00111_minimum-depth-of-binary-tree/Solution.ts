/**
 * ID:    00111
 * Title: Minimum Depth of Binary Tree
 * Difficulty: Easy
 * Description: Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7] Output: 2
 *
 * Example 2:
 *
 * Input: root = [2,null,3,null,4,null,5,null,6] Output: 5
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 5 ].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from "../../utils/TreeNode"
function minDepth(root: TreeNode | null): number {
  if (!root)
    return 0
  let minDepth = 1
  const bfs = (node: TreeNode | null) => {
    let queue = new Array()
    queue.push(node)
    while (queue.length > 0) {
      let size = queue.length
      for (let i = 0; i < size; i++) {
        let cur = queue.shift()
        // do something
        if (cur.left === null && cur.right === null) {
          return
        }
        if (cur.left)
          queue.push(cur.left)
        if (cur.right)
          queue.push(cur.right)
      }
      minDepth++
    }
  }
  bfs(root)
  return minDepth
};

function test_00111() {
  let root = TreeNode.create([3, 9, 20, null, null, 15, 7])
  console.log(minDepth(root));
  root = TreeNode.create([2, null, 3, null, 4, null, 5, null, 6])
  console.log(minDepth(root));

}

test_00111()
