/**
 * ID:    01305
 * Title: All Elements in Two Binary Search Trees
 * Difficulty: Medium
 * Description: Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.
 *
 * Example 1:
 *
 * Input: root1 = [2,1,4], root2 = [1,0,3] Output: [0,1,1,2,3,4]
 *
 * Example 2:
 *
 * Input: root1 = [1,null,8], root2 = [8,1] Output: [1,1,8,8]
 *
 * Constraints:
 *
 * The number of nodes in each tree is in the range [0, 5000].
 * -10 5 <= Node.val <= 10 5
 */
import { TreeNode } from "../../utils/TreeNode"

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  if (!root1 && !root2)
    return []
  const inOrder = (node: TreeNode | null): number[] => {
    if (node === null)
      return []
    let res: number[] = new Array()
    let st: TreeNode[] = new Array()
    let current: TreeNode | null = node
    while (current !== null || st.length > 0) {
      if (current !== null) {
        st.push(current)
        current = current.left
      } else {
        let tempNode = st.pop()!
        res.push(tempNode.val)
        current = tempNode.right
      }
    }
    return res
  }

  const merge = (left: number[], right: number[]): number[] => {
    let res = new Array()
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        res.push(left.shift())
      } else {
        res.push(right.shift())
      }
    }
    while (left.length)
      res.push(left.shift())
    while (right.length)
      res.push(right.shift())
    return res
  }
  return merge(inOrder(root1), inOrder(root2))
}

function test_01305() {
  let root1 = TreeNode.create([2, 1, 4]), root2 = TreeNode.create([1, 0, 3])
  console.log(getAllElements(root1, root2));

}

test_01305()
