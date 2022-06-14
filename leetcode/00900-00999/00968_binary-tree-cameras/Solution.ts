/**
 * ID:    00968
 * Title: Binary Tree Cameras
 * Difficulty: Hard
 * Description: You are given the root of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.
 *
 * Return the minimum number of cameras needed to monitor all nodes of the tree.
 *
 * Example 1:
 *
 * Input: root = [0,0,null,0,0] Output: 1 Explanation: One camera is enough to monitor all nodes if placed as shown.
 *
 * Example 2:
 *
 * Input: root = [0,0,null,0,null,0,null,null,0] Output: 2 Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * Node.val == 0
 */
import { TreeNode } from "../../utils/TreeNode";
function minCameraCover(root: TreeNode | null): number {
  if (!root) return 0
  let res = 0
  const dfs = (node: TreeNode | null): number => {
    if (!node) return 2 // null node => 2
    const left = dfs(node.left)
    const right = dfs(node.right)
    if (left === 0 || right === 0) { // if one of the child is 0(leaf node), then we need a camera
      res++
      return 1  // has leaf node => 1 (normal node)
    }
    if (left === 1 || right === 1) { // delete the node which has a camera and its child, treat it as a null node
      return 2
    }
    return 0 // both left and right are 2, leaf node => 0
  }

  return (dfs(root) < 1 ? 1 : 0) + res
};

function test_00968() {
  let root = TreeNode.create([0, 0, null, 0, 0])
  let res = minCameraCover(root)
  console.log(res)
  root = TreeNode.create([0, 0, null, 0, null, 0, null, null, 0])
  res = minCameraCover(root)
  console.log(res)
  root = TreeNode.create([0])
  res = minCameraCover(root)
  console.log(res)
  root = TreeNode.create([0, null, 0, null, 0, null, 0])
  res = minCameraCover(root)
  console.log(res)

}

test_00968()
