/**
 * ID:    00572
 * Title: Subtree of Another Tree
 * Difficulty: Easy
 * Description: Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
 *
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
 *
 * Example 1:
 *
 * Input: root = [3,4,5,1,2], subRoot = [4,1,2] Output: true
 *
 * Example 2:
 *
 * Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2] Output: false
 *
 * Constraints:
 *
 * The number of nodes in the root tree is in the range [1, 2000].
 * The number of nodes in the subRoot tree is in the range [1, 1000].
 * -10 4 <= root.val <= 10 4
 * -10 4 <= subRoot.val <= 10 4
 */
import { TreeNode } from "../../utils/TreeNode"
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null || subRoot === null)
    return false
  let res = false
  const preOrder = (node: TreeNode | null) => {
    if (!node)
      return
    let st = new Array()
    let stSub = new Array()
    let subFlag = false
    st.push(node)
    while (st.length > 0) {
      let cur = st.pop()
      if (cur.val === subRoot.val && isTreeEqual(cur, subRoot)) {
        res = true
        return
      }
      if (cur.right)
        st.push(cur.right)
      if (cur.left)
        st.push(cur.left)
    }
  }
  const isTreeEqual = (a: TreeNode | null, b: TreeNode | null): boolean => {
    if (a === null && b === null)
      return true
    else if (a === null || b === null) {
      return false
    } else {
      return a.val === b.val && isTreeEqual(a.left, b.left) && isTreeEqual(a.right, b.right)
    }
  }
  preOrder(root)

  return res
};

function test_00572() {
  let root = TreeNode.create([3, 4, 5, 1, 2]), subRoot = TreeNode.create([4, 1, 2])
  console.log(isSubtree(root, subRoot));
  root = TreeNode.create([3, 4, 5, 1, 2, null, null, null, null, 0]), subRoot = TreeNode.create([4, 1, 2])
  console.log(isSubtree(root, subRoot));

}

test_00572()
