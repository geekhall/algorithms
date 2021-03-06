/**
 * ID:    00606
 * Title: Construct String from Binary Tree
 * Difficulty: Easy
 * Description: Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.
 *
 * Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4] Output:"1(2(4))(3)" Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"
 *
 * Example 2:
 *
 * Input: root = [1,2,3,null,4] Output:"1(2()(4))(3)" Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * -1000 <= Node.val <= 1000  ~
 */

import { TreeNode } from "../../utils/TreeNode"

function tree2str(root: TreeNode | null): string {
  let res = ""
  if (root === null)
    return ""

  res += root.val
  if (root.left || (root.left === null && root.right !== null)) {
    res += "("
    res += tree2str(root.left)
    res += ")"
  }

  if (root.right) {
    res += "("
    res += tree2str(root.right)
    res += ")"
  }
  return res
}
function test_00606() {
  let root = TreeNode.create([1, 2, 3, 4])
  console.log(tree2str(root));
  root = TreeNode.create([1, 2, 3, null, 4])
  console.log(tree2str(root));

}

test_00606()
