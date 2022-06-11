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
  let res = ""
  const dfs = (node: TreeNode | null): void => {
    if (!node)
      return
    res += node.val + ","
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return res
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let root = null
  const dfs = (data: string): TreeNode | null => {
    if (data === "")
      return null
    let arr = data.split(",")
    let node = new TreeNode(parseInt(arr[0]))
    let right_index = 0
    for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i]) > parseInt(arr[0])) {
        right_index = i
        break
      }
    }
    node.left = dfs(arr.slice(1, right_index).join(","))
    node.right = dfs(arr.slice(right_index).join(","))
    return node
  }
  root = dfs(data)
  return root
};

function test_00449() {
  let root = TreeNode.create([2, 1, 3])
  console.log(serialize(root))
  console.log(deserialize(serialize(root)))
}

test_00449()
