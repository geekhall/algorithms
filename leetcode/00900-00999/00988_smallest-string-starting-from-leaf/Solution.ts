/**
 * ID:    00988
 * Title: Smallest String Starting From Leaf
 * Difficulty: Medium
 * Description: You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.
 *
 * Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.
 *
 * As a reminder, any shorter prefix of a string is lexicographically smaller.
 *
 * For example, "ab" is lexicographically smaller than "aba".
 *
 * A leaf of a node is a node that has no children.
 *
 * Example 1:
 *
 * Input: root = [0,1,2,3,4,3,4] Output:"dba"
 *
 * Example 2:
 *
 * Input: root = [25,1,3,1,3,0,2] Output:"adz"
 *
 * Example 3:
 *
 * Input: root = [2,2,1,null,1,0,null,0] Output:"abc"
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 8500].
 * 0 <= Node.val <= 25
 */
import { TreeNode } from "../../utils/TreeNode"
// wrong answer in case [25, 1, null, 0, 0, 1, null, null, null, 0]
function smallestFromLeaf(root: TreeNode | null): string {

  if (root === null)
    return ""
  let min = ""
  const dfs = (node: TreeNode | null, str: string) => {
    if (!node)
      return
    str = String.fromCharCode(node.val + 97) + str
    if (!node.left && !node.right) {
      min = (min === "" || min > str) ? str : min
    }

    if (node.left)
      dfs(node.left, str)
    if (node.right)
      dfs(node.right, str)
  }
  dfs(root, "")
  return min
}
function smallestFromLeaf2(root: TreeNode | null): string {
  let prev: string = "";
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  function smallest(root: TreeNode | null, prevStr: string) {
    if (!root) return;
    const str = `${alphabets[root.val]}${prevStr}`;
    if (!root.left && !root.right) {
      prev = (!prev || prev > str) ? str : prev;
    }
    if (root.left) {
      smallest(root.left, str);
    }
    if (root.right) {
      smallest(root.right, str);
    }
  }
  smallest(root, '');
  return prev || '';
}
function test_00988() {
  let root = TreeNode.create([0, 1, 2, 3, 4, 3, 4])
  console.log(smallestFromLeaf(root));
  root = TreeNode.create([25, 1, 3, 1, 3, 0, 2])
  console.log(smallestFromLeaf(root));
  root = TreeNode.create([2, 2, 1, null, 1, 0, null, 0])
  console.log(smallestFromLeaf(root));

  root = TreeNode.create([4, 0, 1, 1]) // bae
  console.log(smallestFromLeaf(root));

  root = TreeNode.create([25, 1, null, 0, 0, 1, null, null, null, 0]) // expect ababz
  console.log(smallestFromLeaf(root));  // abz
}

test_00988()
