/**
 * ID:    00437
 * Title: Path Sum III
 * Difficulty: Medium
 * Description: Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
 *
 * The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
 *
 * Example 1:
 *
 * Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8 Output: 3 Explanation: The paths that sum to 8 are shown.
 *
 * Example 2:
 *
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22 Output: 3
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 1000].
 * -10 9 <= Node.val <= 10 9
 * -1000 <= targetSum <= 1000
 */
import { TreeNode } from "../../utils/TreeNode";
function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root)
    return 0
  let count = 0
  /**
   *
   * @param node 当前节点
   * @param currSum 到当前节点为止的和
   * @param preSum 到上一个节点为止的所有从根节点出发的和
   * @returns
   */
  const helper = (node: TreeNode | null, currSum: number, preSum: Map<number, number>) => {
    if (!node)
      return
    currSum += node.val
    if (preSum.has(currSum - targetSum)) {
      count += preSum.get(currSum - targetSum)!
    }
    if (preSum.has(currSum)) {
      preSum.set(currSum, preSum.get(currSum)! + 1)
    } else {
      preSum.set(currSum, 1)
    }

    helper(node.left, currSum, preSum)
    helper(node.right, currSum, preSum)
    preSum.set(currSum, preSum.get(currSum)! - 1)
  }
  let preSum = new Map()
  preSum.set(0, 1)
  helper(root, 0, preSum)
  return count
};

function test_00437() {
  let root = TreeNode.create([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), targetSum = 8
  console.log(pathSum(root, targetSum));
  root = TreeNode.create([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), targetSum = 22
  console.log(pathSum(root, targetSum));

}

test_00437()
