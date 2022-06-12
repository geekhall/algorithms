/**
 * ID:    00331
 * Title: Verify Preorder Serialization of a Binary Tree
 * Difficulty: Medium
 * Description: One way to serialize a binary tree is to use preorder traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as '#'.
 *
 * For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where '#' represents a null node.
 *
 * Given a string of comma-separated values preorder, return true if it is a correct preorder traversal serialization of a binary tree.
 *
 * It is guaranteed that each comma-separated value in the string must be either an integer or a character '#' representing null pointer.
 *
 * You may assume that the input format is always valid.
 *
 * For example, it could never contain two consecutive commas, such as "1,,3".
 *
 * Note: You are not allowed to reconstruct the tree.
 *
 * Example 1:
 *
 * Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#" Output: true
 *
 * Example 2:
 *
 * Input: preorder = "1,#" Output: false
 *
 * Example 3:
 *
 * Input: preorder = "9,#,#,1" Output: false
 *
 * Constraints:
 *
 * 1 <= preorder.length <= 10 4
 * preorder consist of integers in the range [0, 100] and '#' separated by commas ','.
 */
/**
 * In a binary tree, if we consider null as leaves, it is a full-binary tree. then
 * 1. all non-null node provides 2 out-degree and 1 in-degree (2 children and 1 parent), except root
 * 2. all null node provides 0 out-degree and 1 in-degree (0 child and 1 parent).
 * @param preorder
 * @returns
 */
function isValidSerialization(preorder: string): boolean {
  let nodes = preorder.split(",")
  let diff = 1  // 1 for root
  for (let node of nodes) {
    if (--diff < 0) return false; // in-degree--
    if (node !== "#") diff += 2;  // out-degree+=2
  }
  return diff == 0;
};

function test_00331() {
  let preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
  console.log(isValidSerialization(preorder))
  preorder = "1,#"
  console.log(isValidSerialization(preorder))
  preorder = "9,#,#,1"
  console.log(isValidSerialization(preorder))
}

test_00331()
