class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
/**
 * Algorithm Preorder(tree)
 *  1. Visit the root.
 *  2. Traverse the left subtree, i.e., call Preorder(left-subtree)
 *  3. Traverse the right subtree, i.e., call Preorder(right-subtree)
 * @param root
 */
function Preorder(root: TreeNode | null) {
  if (root === null)
    return
  console.log(root.val);
  Preorder(root.left)
  Preorder(root.right)
}
/**
 * Algorithm Inorder(tree)
 *  1. Traverse the left subtree, i.e., call Preorder(left-subtree)
 *  2. Visit the root.
 *  3. Traverse the right subtree, i.e., call Preorder(right-subtree)
 * @param root
 */
function Inorder(root: TreeNode) {
  if (root === null)
    return
  Preorder(root.left)
  console.log(root.val)
  Preorder(root.right)
}

/**
 * Algorithm Postorder(tree)
 *  1. Traverse the left subtree, i.e., call Preorder(left-subtree)
 *  2. Traverse the right subtree, i.e., call Preorder(right-subtree)
 *  3. Visit the root.
 * @param root
 */
function Postorder(root: TreeNode) {
  if (root === null)
    return
  Preorder(root.left)
  Preorder(root.right)
  console.log(root.val);
}

/**
 * Non-recursive function
 * @param root
 * @returns
 */
function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null)
    return []
  let stack: TreeNode[] = new Array()
  let node: TreeNode | null = root
  let res: number[] = new Array()
  while (node !== null || stack.length > 0) {
    if (node !== null) {
      stack.push(node)
      node = node.left
    } else { // node === null && stack.length > 0
      let tempNode = stack.pop()!
      res.push(tempNode.val)
      node = tempNode.right
    }
  }
  return res
};


function traversalTest() {
  let root = new TreeNode(1, null, null)
  root.left = new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null))
  root.right = new TreeNode(3, new TreeNode(6, null, null), new TreeNode(7, null, null))

  Inorder(root)
}

traversalTest()
