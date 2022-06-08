/**
 * ID:    00230
 * Title: Kth Smallest Element in a BST
 * Difficulty: Medium
 * Description: Given the root of a binary search tree, and an integer k, return the k th smallest value (1-indexed) of all the values of the nodes in the tree.
 *
 * Example 1:
 *
 * Input: root = [3,1,4,null,2], k = 1 Output: 1
 *
 * Example 2:
 *
 * Input: root = [5,3,6,2,4,null,null,1], k = 3 Output: 3
 *
 * Constraints:
 *
 * The number of nodes in the tree is n.
 * 1 <= k <= n <= 10 4
 * 0 <= Node.val <= 10 4
 *
 * Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?
 */
import { TreeNode } from "../../utils/TreeNode"
function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;
  let result = 0;
  const traverse = (node: TreeNode | null) => {
    if (node == null) {
      return;
    }
    traverse(node.left);
    count++;
    if (count == k) {
      result = node.val;
      return
    }
    traverse(node.right);
  }
  traverse(root);
  return result;
};

function test_00230() {
  let root = TreeNode.create([3, 1, 4, null, 2]);
  console.log(kthSmallest(root, 1)); // expect 1

  root = TreeNode.create([5, 3, 6, 2, 4, null, null, 1]);
  console.log(kthSmallest(root, 3)); // expect 3



}

test_00230()
