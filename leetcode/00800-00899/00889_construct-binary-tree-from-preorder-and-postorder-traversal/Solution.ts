/**
 * ID:    00889
 * Title: Construct Binary Tree from Preorder and Postorder Traversal
 * Difficulty: Medium
 * Description: Given two integer arrays, preorder and postorder where preorder is the preorder traversal of a binary tree of distinct values and postorder is the postorder traversal of the same tree, reconstruct and return the binary tree.
 *
 * If there exist multiple answers, you can return any of them.
 *
 * Example 1:
 *
 * Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1] Output: [1,2,3,4,5,6,7]
 *
 * Example 2:
 *
 * Input: preorder = [1], postorder = [1] Output: [1]
 *
 * Constraints:
 *
 * 1 <= preorder.length <= 30
 * 1 <= preorder[i] <= preorder.length
 * All the values of preorder are unique.
 * postorder.length == preorder.length
 * 1 <= postorder[i] <= postorder.length
 * All the values of postorder are unique.
 * It is guaranteed that preorder and postorder are the preorder traversal and postorder traversal of the same binary tree.
 */
import { TreeNode } from "../../utils/TreeNode";
function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  const postorderMap = new Map<number, number>();
  for (let i = 0; i < postorder.length; i++) {
    postorderMap.set(postorder[i], i);
  }
  let preIndex = 0;
  const makeTree = (startIndex: number, endIndex: number): TreeNode | null => {
    if (startIndex > endIndex) {
      return null;
    }
    const node = new TreeNode(preorder[preIndex++]);
    if (startIndex == endIndex) {
      return node;
    }

    const postIndex = postorderMap.get(preorder[preIndex])!;
    node.left = makeTree(startIndex, postIndex);
    node.right = makeTree(postIndex + 1, endIndex - 1);
    return node;
  };

  return makeTree(0, postorder.length - 1);
}

function test_00889() {
  let preorder = [1, 2, 4, 5, 3, 6, 7], postorder = [4, 5, 2, 6, 7, 3, 1]
  let root = constructFromPrePost(preorder, postorder)
  TreeNode.print(root);
  preorder = [4, 2, 1, 3], postorder = [3, 1, 2, 4]
  root = constructFromPrePost(preorder, postorder)
  TreeNode.print(root); // expect [4,2,null,1,null,3]
}

test_00889()
