/**
 * ID:    00449
 * Title: Serialize and Deserialize BST
 * Difficulty: Medium
 * Description: Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.
 *
 * The encoded string should be as compact as possible.
 *
 * Example 1:
 *
 * Input: root = [2,1,3] Output: [2,1,3]
 *
 * Example 2:
 *
 * Input: root = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 4 ].
 * 0 <= Node.val <= 10 4
 * The input tree is guaranteed to be a binary search tree.
 */
/*
 * Encodes a tree to a single string.
 */
import { TreeNode } from "../../utils/TreeNode";
function serialize(root: TreeNode | null): string {
  if (root === null) return '';
  const serializeHelper = function (node: TreeNode | null, result: number[]) {
    if (node) {
      result.push(node.val);
      serializeHelper(node.left, result);
      serializeHelper(node.right, result);
    }
  };
  let result = new Array();
  serializeHelper(root, result);
  return result.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (!data)
    return null;

  const deserializeHelper = function (array: string[], min: number, max: number) {
    if (array.length === 0) return null;
    let val = parseInt(array[0]);
    if (val < min || val > max) return null;
    array.shift();
    let root = new TreeNode(val);
    root.left = deserializeHelper(array, min, val);
    root.right = deserializeHelper(array, val, max);
    return root;
  };
  const array = data.split(',');
  return deserializeHelper(array, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function test_00449() {
  let root = TreeNode.create([2, 1, 3])
  console.log(serialize(root))
  TreeNode.print(deserialize(serialize(root)))
}

test_00449()
