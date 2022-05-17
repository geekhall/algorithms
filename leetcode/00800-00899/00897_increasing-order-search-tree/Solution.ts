/**
 * ID:    00897
 * Title: Increasing Order Search Tree
 * Difficulty: Easy
 * Description: Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
 *
 * Example 1:
 *
 * Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9] Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 *
 * Example 2:
 *
 * Input: root = [5,1,7] Output: [1,null,5,null,7]
 *
 * Constraints:
 *
 * The number of nodes in the given tree will be in the range [1, 100].
 * 0 <= Node.val <= 1000
 */
import { TreeNode, createTree, printTree } from "../../utils/TreeNode"


function increasingBST1(root: TreeNode | null): TreeNode | null {
  if (root === null)
    return null
  let st = new Array()
  let current: TreeNode | null = root
  let arr: TreeNode[] = new Array()
  while (current !== null || st.length > 0) {
    if (current !== null) {
      st.push(current)
      current = current.left
    } else {
      let temp = st.pop()
      arr.push(temp)
      current = temp.right
    }
  }

  let head = new TreeNode(arr[0].val, null, null)
  let cur = head
  for (let i = 1; i < arr.length; i++) {
    cur.right = new TreeNode(arr[i].val, null, null)
    cur = cur.right
  }

  return head
};
function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const newRoot = new TreeNode()

  let cur = newRoot;
  const dfs = (node: TreeNode | null) => {
    if (!node) return;

    dfs(node.left);
    cur.right = new TreeNode(node.val);
    cur = cur.right
    dfs(node.right);
  }

  dfs(root);
  return newRoot.right;
}

function test_00897() {
  // let root = TreeNode.create([5, 3, 6, 2, 4, null, 8, 1, null, null, null, null, null, 7, 9])
  // let res = increasingBST(root)
  // let root = TreeNode.create([5, 1, 7])
  // let res = increasingBST(root)
  // res?.print()
  // console.log(res);
  let root = createTree([5, 3, 6])
  let res = increasingBST(root)
  // console.log(res);
  printTree(res)


  let arr1: any[] | null = null
  let arr2: any[] | null = []
  console.log(!arr1);
  console.log(!arr2);


}

test_00897()
