/**
 * ID:    01382
 * Title: Balance a Binary Search Tree
 * Difficulty: Medium
 * Description: Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.
 *
 * A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.
 *
 * Example 1:
 *
 * Input: root = [1,null,2,null,3,null,4,null,null] Output: [2,1,3,null,null,null,4] Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
 *
 * Example 2:
 *
 * Input: root = [2,1,3] Output: [2,1,3]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * 1 <= Node.val <= 10 5
 */
import { TreeNode } from "../../utils/TreeNode"
function balanceBST(root: TreeNode | null): TreeNode | null {
  if (!root)
    return null
  const bst2arr = (bst: TreeNode | null): number[] => {
    if (bst === null)
      return []
    let arr: number[] = new Array()
    let cur: TreeNode | null = bst
    let mostRight = null
    while (cur !== null) {
      mostRight = cur.left
      if (mostRight !== null) {
        while (mostRight.right !== null && mostRight.right !== cur) {
          mostRight = mostRight.right;
        }
        if (mostRight.right === null) {
          mostRight.right = cur;
          cur = cur.left;
          continue;
        } else {
          mostRight.right = null;
        }
      }
      arr.push(cur.val);
      cur = cur.right
    }
    return arr
  }
  let arr = bst2arr(root)
  const createBST = (left: number, right: number): TreeNode | null => {
    if (left > right)
      return null
    let mid = left + Math.trunc((right - left) / 2)
    let node = new TreeNode(arr[mid], null, null)
    node.left = createBST(left, mid - 1)
    node.right = createBST(mid + 1, right)
    return node
  }
  // more space used.
  const buildTree = (arr: number[]): TreeNode | null => {
    if (!arr || arr.length === 0) {
      return null
    }
    let mid = Math.trunc(arr.length / 2)
    let res = new TreeNode(arr[mid], null, null)
    res.left = buildTree(arr.slice(0, mid))
    res.right = buildTree(arr.slice(mid + 1))
    return res
  }

  // return buildTree(bst2arr(root))
  return createBST(0, arr.length - 1)
};
function test_01382() {
  let root = TreeNode.create([1, null, 2, null, 3, null, 4, null, null])
  console.log(balanceBST(root));

}

test_01382()
