/**
 * ID:    00099
 * Title: Recover Binary Search Tree
 * Difficulty: Medium
 * Description: You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
 *
 * Example 1:
 *
 * Input: root = [1,3,null,null,2] Output: [3,1,null,null,2] Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
 *
 * Example 2:
 *
 * Input: root = [3,1,4,null,null,2] Output: [2,1,4,null,null,3] Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 1000].
 * -2 31 <= Node.val <= 2 31 - 1
 *
 * Follow up: A solution using O(n) space is pretty straight-forward. Could you devise a constant O(1) space solution?
 */
import { TreeNode } from "../../utils/TreeNode"
function recoverTree(root: TreeNode | null): void {
  let st: TreeNode[] = new Array()
  let current: TreeNode | null = root
  let pre: TreeNode | null = null
  let first: TreeNode | null = null
  let second: TreeNode | null = null
  // InOrder traverse
  while (current !== null || st.length > 0) {
    if (current !== null) {
      st.push(current)
      current = current.left
    } else {
      let tempNode = st.pop()!
      // value of current node is smaller than previous one.
      if (pre !== null && tempNode.val < pre.val) {
        if (first === null)
          first = pre
        second = tempNode
      }
      pre = tempNode
      current = tempNode.right
    }
  }
  let temp = first!.val
  first!.val = second!.val
  second!.val = temp
}

function test_00099() {
  let root = TreeNode.create([1, 3, null, null, 2])
  TreeNode.print(root);
  recoverTree(root)
  TreeNode.print(root)
  root = TreeNode.create([3, 1, 4, null, null, 2])


  TreeNode.print(root)
  recoverTree(root)
  TreeNode.print(root)


}

test_00099()
