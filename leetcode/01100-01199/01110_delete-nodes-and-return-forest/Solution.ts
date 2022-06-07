/**
 * ID:    01110
 * Title: Delete Nodes And Return Forest
 * Difficulty: Medium
 * Description: Given the root of a binary tree, each node in the tree has a distinct value.
 *
 * After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
 *
 * Return the roots of the trees in the remaining forest. You may return the result in any order.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,5,6,7], to_delete = [3,5] Output: [[1,2,null,4],[6],[7]]
 *
 * Example 2:
 *
 * Input: root = [1,2,4,null,3], to_delete = [3] Output: [[1,2,4]]
 *
 * Constraints:
 *
 * The number of nodes in the given tree is at most 1000.
 * Each node has a distinct value between 1 and 1000.
 * to_delete.length <= 1000
 * to_delete contains distinct values between 1 and 1000.
 */
import { TreeNode } from "../../utils/TreeNode"
function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  let result: Array<TreeNode | null> = [];
  const toDeleteSet = new Set(to_delete);
  const makeTree = (node: TreeNode | null, is_root: boolean): TreeNode | null => {
    if (!node) {
      return null;
    }
    let deleted = toDeleteSet.has(node.val);
    if (is_root && !deleted) {
      result.push(node);
    }

    node.left = makeTree(node.left, deleted);
    node.right = makeTree(node.right, deleted);
    return deleted ? null : node;
  };
  makeTree(root, true);
  return result;
};

function test_01110() {
  let root = TreeNode.create([1, 2, 3, 4, 5, 6, 7]), to_delete = [3, 5]
  let result = delNodes(root, to_delete)
  console.log(result);
  root = TreeNode.create([1, 2, null, 4, 3]), to_delete = [2, 3]
  result = delNodes(root, to_delete)
  console.log(result);  // [[1], [4]]
}

test_01110()
