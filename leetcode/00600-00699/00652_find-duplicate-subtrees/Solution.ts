/**
 * ID:    00652
 * Title: Find Duplicate Subtrees
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return all duplicate subtrees.
 *
 * For each kind of duplicate subtrees, you only need to return the root node of any one of them.
 *
 * Two trees are duplicate if they have the same structure with the same node values.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,4,null,2,4,null,null,4] Output: [[2,4],[4]]
 *
 * Example 2:
 *
 * Input: root = [2,1,1] Output: [[1]]
 *
 * Example 3:
 *
 * Input: root = [2,2,2,3,null,3,null] Output: [[2,3],[3]]
 *
 * Constraints:
 *
 * The number of the nodes in the tree will be in the range [1, 10^4]
 * -200 <= Node.val <= 200
 */
import { TreeNode } from "../../utils/TreeNode";
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  if (!root)
    return []

  let res = new Array()
  let map = new Map<string, number>()
  const post_order = (cur: TreeNode | null, map: Map<string, number>, arr: Array<TreeNode>): string => {
    if (cur == null) return "#";
    let serial: string = cur.val + "," + post_order(cur.left, map, arr) + "," + post_order(cur.right, map, arr);
    map.set(serial, (map.has(serial) ? map.get(serial)! : 0) + 1);
    if (map.get(serial) == 2) arr.push(cur);
    return serial;
  }
  post_order(root, map, res)
  return res
};

function test_00652() {
  let root = TreeNode.create([1, 2, 3, 4, null, 2, 4, null, null, 4])
  let result = findDuplicateSubtrees(root)
  result.forEach(node => TreeNode.print(node))
}

test_00652()
