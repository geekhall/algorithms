/**
 * ID:    00590
 * Title: N-ary Tree Postorder Traversal
 * Difficulty: Easy
 * Description: Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
 *
 * Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
 *
 * Example 1:
 *
 * Input: root = [1,null,3,2,4,null,5,6] Output: [5,6,3,2,4,1]
 *
 * Example 2:
 *
 * Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14] Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
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

function postorder(root: Node | null): number[] {
  if (!root)
    return []

  let res: number[] = new Array()
  let st1 = new Array()
  let st2 = new Array()
  st1.push(root)
  while (st1.length > 0) {
    let current = st1.pop()
    st2.push(current)
    if (current.children)
      st1.push(...current.children)
  }
  while (st2.length > 0) {
    res.push(st2.pop().val);
  }
  return res
};

function test_00590() {
  // let root = [1, null, 3, 2, 4, null, 5, 6]
  let root = new Node(1)
  let n2 = new Node(3)
  let n3 = new Node(2)
  let n4 = new Node(4)
  let n5 = new Node(5)
  let n6 = new Node(6)
  n2.children = [n5, n6]
  root.children = [n2, n3, n4]
  console.log(postorder(root));

}

test_00590()
