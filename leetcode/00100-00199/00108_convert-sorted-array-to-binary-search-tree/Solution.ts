/**
 * ID:    00108
 * Title: Convert Sorted Array to Binary Search Tree
 * Difficulty: Easy
 * Description: Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 *
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 *
 * Example 1:
 *
 * Input: nums = [-10,-3,0,5,9] Output: [0,-3,9,-10,null,5] Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 *
 * Example 2:
 *
 * Input: nums = [1,3] Output: [3,1] Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 10 4
 * -10 4 <= nums[i] <= 10 4
 * nums is sorted in a strictly increasing order.
 */
import { TreeNode, createTree } from "../../utils/TreeNode"
function sortedArrayToBST(nums: number[]): TreeNode | null {

  let size = nums.length
  if (nums === null || size === 0)
    return null
  if (size === 1)
    return new TreeNode(nums[0], null, null)

  let mid = Math.trunc(size / 2)
  let root = new TreeNode(nums[mid], null, null)
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root
};

function test_00108() {
  let nums = [-10, -3, 0, 5, 9]
  console.log(sortedArrayToBST(nums));

}

test_00108()
