/**
 * ID:    00872
 * Title: Leaf-Similar Trees
 * Difficulty: Easy
 * Description: Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
 *
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 *
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 *
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 *
 * Example 1:
 *
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8] Output: true
 *
 * Example 2:
 *
 * Input: root1 = [1,2,3], root2 = [1,3,2] Output: false
 *
 * Constraints:
 *
 * The number of nodes in each tree will be in the range [1, 200].
 * Both of the given trees will have values in the range [0, 200].
 */
import { TreeNode, createTree } from "../../utils/TreeNode"

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let arr1 = new Array()
  let arr2 = new Array()
  const dfs = (root: TreeNode | null, arr: number[]) => {
    if (root === null)
      return
    if (root.left === null && root.right === null) {
      arr.push(root.val)
    } else {
      dfs(root.left, arr)
      dfs(root.right, arr)
    }
  }
  dfs(root1, arr1)
  dfs(root2, arr2)
  if (arr1.length !== arr2.length)
    return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
};

function test_00872() {
  let root1 = createTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4])
  let root2 = createTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8])
  console.log(leafSimilar(root1, root2));
  root1 = createTree([1, 2, 3]), root2 = createTree([1, 3, 2])
  console.log(leafSimilar(root1, root2));


}

test_00872()
