/**
 * ID:    01302
 * Title: Deepest Leaves Sum
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the sum of values of its deepest leaves.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8] Output: 15
 *
 * Example 2:
 *
 * Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5] Output: 19
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * 1 <= Node.val <= 100
 */
import { TreeNode } from "../../utils/TreeNode"
function deepestLeavesSum(root: TreeNode | null): number {
  let res = 0
  const bfs = (node: TreeNode | null) => {
    let queue = new Array()
    queue.push(node)

    while (queue.length > 0) {
      let size = queue.length
      console.log("size:", size);

      res = 0
      for (let i = 0; i < size; i++) {
        let cur = queue.shift()
        res += cur.val

        if (cur.left)
          queue.push(cur.left)
        if (cur.right)
          queue.push(cur.right)
      }
    }
  }
  bfs(root)
  return res
};


function test_01302() {
  let root = TreeNode.create([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, null, null, 8])
  console.log(deepestLeavesSum(root));

}

test_01302()
