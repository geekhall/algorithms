/**
 * ID:    00589
 * Title: N-ary Tree Preorder Traversal
 * Difficulty: Easy
 * Description: Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
 *
 * Example 1:
 *
 * Input: root = [1,null,3,2,4,null,5,6] Output: [1,3,5,6,2,4]
 *
 * Example 2:
 *
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14] Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 4 ].
 * 0 <= Node.val <= 10 4
 * The height of the n-ary tree is less than or equal to 1000.
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
 */
import { Node } from "../../utils/TreeNode"
function preorder(root: Node | null): number[] {

  if (!root)
    return []
  let res: number[] = new Array()
  let st = new Array()
  st.push(root)
  while (st.length > 0) {
    let cur = st.pop()
    res.push(cur.val)
    for (let i = cur.children.length - 1; i >= 0; i--) {
      st.push(cur.children[i])
    }
  }
  return res
};

function test_00589() {
  // let root = [1, null, 3, 2, 4, null, 5, 6]
  let root = new Node(1)
  let n2 = new Node(3)
  let n3 = new Node(2)
  let n4 = new Node(4)
  let n5 = new Node(5)
  let n6 = new Node(6)
  n2.children = [n5, n6]
  root.children = [n2, n3, n4]
  console.log(preorder(root));
}

test_00589()
