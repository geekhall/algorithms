/**
 * ID:    02196
 * Title: Create Binary Tree From Descriptions
 * Difficulty: Medium
 * Description: You are given a 2D integer array descriptions where descriptions[i] = [parent i, child i, isLeft i ] indicates that parent i is the parent of child i in a binary tree of unique values. Furthermore,
 *
 * If isLeft i == 1, then child i is the left child of parent i.
 * If isLeft i == 0, then child i is the right child of parent i.
 *
 * Construct the binary tree described by descriptions and return its root.
 *
 * The test cases will be generated such that the binary tree is valid.
 *
 * Example 1:
 *
 * Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]] Output: [50,20,80,15,17,19] Explanation: The root node is the node with value 50 since it has no parent. The resulting binary tree is shown in the diagram.
 *
 * Example 2:
 *
 * Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]] Output: [1,2,null,null,3,4] Explanation: The root node is the node with value 1 since it has no parent. The resulting binary tree is shown in the diagram.
 *
 * Constraints:
 *
 * 1 <= descriptions.length <= 10 4
 * descriptions[i].length == 3
 * 1 <= parent i, child i <= 10 5
 * 0 <= isLeft i <= 1
 * The binary tree described by descriptions is valid.
 */
import { TreeNode } from "../../utils/TreeNode"
function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const map = new Map<number, TreeNode>()
  const parentMap = new Map<number, number>()
  for (const [parent, child, isLeft] of descriptions) {
    const childNode = map.has(child) ? map.get(child)! : new TreeNode(child)
    const parentNode = map.has(parent) ? map.get(parent)! : new TreeNode(parent)

    if (isLeft) {
      parentNode.left = childNode
    } else {
      parentNode.right = childNode
    }
    map.set(child, childNode)
    map.set(parent, parentNode)
    parentMap.set(child, parent)
  }
  let rootVal = descriptions[0][0]
  while (parentMap.has(rootVal)) {
    rootVal = parentMap.get(rootVal)!
  }

  return map.get(rootVal)!
};

function test_02196() {
  let descriptions = [[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]
  let root = createBinaryTree(descriptions)
  TreeNode.print(root);
  descriptions = [[1, 2, 1], [2, 3, 0], [3, 4, 1]]
  root = createBinaryTree(descriptions)
  TreeNode.print(root);

  descriptions = [[39, 70, 1], [13, 39, 1], [85, 74, 1], [74, 13, 1], [38, 82, 1], [82, 85, 1]]
  root = createBinaryTree(descriptions)
  TreeNode.print(root); // expect [38,82,null,85,null,74,null,13,null,39,null,70]

}

test_02196()
