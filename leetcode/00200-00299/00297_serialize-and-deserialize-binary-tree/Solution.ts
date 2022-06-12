/**
 * ID:    00297
 * Title: Serialize and Deserialize Binary Tree
 * Difficulty: Hard
 * Description: Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 *
 * Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 *
 * Example 1:
 *
 * Input: root = [1,2,3,null,null,4,5] Output: [1,2,3,null,null,4,5]
 *
 * Example 2:
 *
 * Input: root = [] Output: []
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 10 4 ].
 * -1000 <= Node.val <= 1000
 */
import { TreeNode } from "../../utils/TreeNode";
function serialize(root: TreeNode | null): string {
  let string = '';

  function buildString(node: TreeNode | null) {
    if (!node) {
      string += '#,';
    } else {
      string += node.val + ',';
      buildString(node.left);
      buildString(node.right);
    }
  }

  buildString(root);

  return string;
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let nodes = data.split(',');

  function buildTree() {
    let val = nodes.shift();

    if (val === '#') {
      return null;
    } else {
      let node = new TreeNode(parseInt(val!));
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }
  }

  return buildTree();
};

function test_00297() {
  let root = TreeNode.create([1, 2, 3, null, null, 4, 5]);
  let serialized = serialize(root);
  let deserialized = deserialize(serialized);
  console.log(serialized);
  TreeNode.print(deserialized);
}

test_00297()
