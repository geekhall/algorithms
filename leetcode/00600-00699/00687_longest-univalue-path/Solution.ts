/**
 * ID:    00687
 * Title: Longest Univalue Path
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.
 *
 * The length of the path between two nodes is represented by the number of edges between them.
 *
 * Example 1:
 *
 * Input: root = [5,4,5,1,1,5] Output: 2
 *
 * Example 2:
 *
 * Input: root = [1,4,5,4,4,5] Output: 2
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 4 ].
 * -1000 <= Node.val <= 1000
 * The depth of the tree will not exceed 1000.
 */
import { TreeNode } from "../../utils/TreeNode";
function longestUnivaluePath(root: TreeNode | null): number {
  if (!root)
    return 0
  const straightUnivaluePath = (cur: TreeNode | null, uni_val: number): number => {
    if (!cur || cur.val != uni_val)
      return 0
    let left = straightUnivaluePath(cur.left, uni_val)
    let right = straightUnivaluePath(cur.right, uni_val)
    return Math.max(left, right) + 1
  }

  return Math.max(
    longestUnivaluePath(root.left),
    longestUnivaluePath(root.right),
    straightUnivaluePath(root.left, root.val) + straightUnivaluePath(root.right, root.val)
  )
};

function test_00687() {
  let root = TreeNode.create([5, 4, 5, 1, 1, 5])
  let result = longestUnivaluePath(root)
  console.log(result)

  root = TreeNode.create([1, 4, 5, 4, 4, 5])
  result = longestUnivaluePath(root)
  console.log(result)
  root = TreeNode.create([1, 2])
  result = longestUnivaluePath(root)
  console.log(result)
  root = TreeNode.create([1, null, 1, 1, 1, 1, 1, 1])
  console.log(longestUnivaluePath(root))
}

test_00687()
