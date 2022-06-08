/**
 * ID:    00508
 * Title: Most Frequent Subtree Sum
 * Difficulty: Medium
 * Description: Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.
 *
 * The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).
 *
 * Example 1:
 *
 * Input: root = [5,2,-3] Output: [2,-3,4]
 *
 * Example 2:
 *
 * Input: root = [5,2,-5] Output: [2]
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 10 4 ].
 * -10 5 <= Node.val <= 10 5
 */
import { TreeNode } from "../../utils/TreeNode";

function findFrequentTreeSum(root: TreeNode | null): number[] {
  let frequencyMap = new Map<number, number>();
  let maxFrequency = 0;
  let result = new Array();
  const dfs = (node: TreeNode | null): number => {
    if (node === null) {
      return 0;
    }
    let left = dfs(node.left);
    let right = dfs(node.right);
    node.val = node.val + left + right;
    let frequency = frequencyMap.get(node.val) || 0;
    frequencyMap.set(node.val, frequency + 1);
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      result = [node.val];
    } else if (frequency === maxFrequency) {
      result.push(node.val);
    }
    return node.val;
  }
  dfs(root);

  return result
};

function test_00508() {
  let root = TreeNode.create([5, 2, -3])
  console.log(findFrequentTreeSum(root));
  root = TreeNode.create([5, 2, -5])
  console.log(findFrequentTreeSum(root));
}

test_00508()
