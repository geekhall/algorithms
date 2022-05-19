/**
 * ID:    01315
 * Title: Sum of Nodes with Even-Valued Grandparent
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.
 *
 * A grandparent of a node is the parent of its parent if it exists.
 *
 * Example 1:
 *
 * Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5] Output: 18 Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
 *
 * Example 2:
 *
 * Input: root = [1] Output: 0
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * 1 <= Node.val <= 100
 */
import { TreeNode } from "../../utils/TreeNode"
function sumEvenGrandparent(root: TreeNode | null): number {
  if (!root)
    return 0
  let res = 0

  const preOrder = (node: TreeNode | null) => {
    if (!node)
      return
    let st = new Array()
    st.push(node)
    while (st.length > 0) {
      let cur = st.pop()
      if (cur.val % 2 === 0) {
        if (cur.left) {
          if (cur.left.left)
            res += cur.left.left.val
          if (cur.left.right)
            res += cur.left.right.val
        }
        if (cur.right) {
          if (cur.right.left)
            res += cur.right.left.val
          if (cur.right.right)
            res += cur.right.right.val
        }
      }
      if (cur.right)
        st.push(cur.right)
      if (cur.left)
        st.push(cur.left)
    }
  }
  preOrder(root)
  return res
};

function test_01315() {
  let root = TreeNode.create([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5])
  console.log(sumEvenGrandparent(root));
  root = TreeNode.create([1])
  console.log(sumEvenGrandparent(root));

}

test_01315()
