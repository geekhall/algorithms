export class TreeNode {
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
 * create a TreeNode from an array.
 * @param arr length <= 7
 * @returns
 */
export function createTree(arr: number[] | null): TreeNode | null {
  if (arr === null || arr.length === 0)
    return null
  let queue = new Array()
  let res: TreeNode | null = new TreeNode(arr[0], null, null)
  queue.push(res)
  if (arr[1] !== null) {
    res.left = new TreeNode(arr[1], null, null)
    res.left.left = new TreeNode(arr[3], null, null)
    res.left.right = new TreeNode(arr[4], null, null)
  }

  if (arr[2] !== null) {
    res.right = new TreeNode(arr[2], null, null)
    res.right.left = new TreeNode(arr[5], null, null)
    res.right.right = new TreeNode(arr[6], null, null)
  }

  return res
}
function printTreeNode(node: TreeNode) {
  let printList = new Array()
  let st = new Array()
}

// BFS 模板1
// 如果不需要确定当前遍历到了哪一层，BFS模板如下。
// while queue 不空：
//     cur = queue.pop()
//     for 节点 in cur的所有相邻节点：
//         if 该节点有效且未访问过：
//             queue.push(该节点)
function traversalTreeWithoutLayer(root: TreeNode) {
  let res = []
  let queue = new Array()
  queue.push(root)
  while (queue.length > 0) {
    let cur = queue.shift()
    // for (cur.)
  }
}

// BFS 模板2
// 如果需要确定当前遍历到了哪一层，BFS模板如下。
// level = 0
// while queue 不空：
//     size = queue.size()
//     while (size --) {
//         cur = queue.pop()
//         for 节点 in cur的所有相邻节点：
//             if 该节点有效且未被访问过：
//                 queue.push(该节点)
//     }
//     level ++;

function traversalTreeWithLayer(root: TreeNode) {
  let queue = new Array()
  queue.push(root)
  let res = new Array()
  while (queue.length > 0) {
    let size = queue.length
    let level = []
    for (let i = 0; i < size; i++) {
      let cur = queue.shift()
      if (!cur && cur !== undefined)
        continue
      level.push(cur.val)
      queue.push(cur.leaf)
      queue.push(cur.right)
    }
    if (level.length > 0) {
      res.push(level)
    }
  }
  return res
}


/**
 * Algorithm preOrder(tree)
 *  1. Visit the root.
 *  2. Traverse the left subtree, i.e., call Preorder(left-subtree)
 *  3. Traverse the right subtree, i.e., call Preorder(right-subtree)
 * @param root
 */
function preOrder(root: TreeNode | null) {
  if (root === null)
    return
  console.log(root.val);
  preOrder(root.left)
  preOrder(root.right)
}
/**
 * Algorithm inOrder(tree)
 *  1. Traverse the left subtree, i.e., call Preorder(left-subtree)
 *  2. Visit the root.
 *  3. Traverse the right subtree, i.e., call Preorder(right-subtree)
 * @param root
 */
function inOrder(root: TreeNode | null) {
  if (root === null)
    return
  inOrder(root.left)
  console.log(root.val)
  inOrder(root.right)
}

/**
 * Algorithm postOrder(tree)
 *  1. Traverse the left subtree, i.e., call Preorder(left-subtree)
 *  2. Traverse the right subtree, i.e., call Preorder(right-subtree)
 *  3. Visit the root.
 * @param root
 */
function postOrder(root: TreeNode | null) {
  if (root === null)
    return
  postOrder(root.left)
  postOrder(root.right)
  console.log(root.val);
}


/**
 * 非递归先序遍历：
 *    1. 从stack中弹出一个节点current
 *    2. 打印/处理current
 *    3. current的子节点压栈，先右再左
 *    4. 重复步骤1-3
 * @param root
 */
function preOrderNonrecursive(root: TreeNode | null) {
  if (root === null)
    return
  let st = new Array()
  st.push(root)
  while (st.length > 0) {
    let current = st.pop()
    console.log(current.val);
    if (current.right !== null)
      st.push(current.right)
    if (current.left !== null)
      st.push(current.left)
  }
}

/**
 * 非递归中序遍历
 *    1. 每棵子树左边界进栈
 *    2. 依次弹出的过程中打印
 *    3. 对弹出节点的右树重复步骤1-2
 *    4. 重复步骤1-3
 * @param root
 * @returns
 */
function inOrderNonrecursive(root: TreeNode | null): number[] {
  if (root === null)
    return []
  let st: TreeNode[] = new Array()
  let current: TreeNode | null = root
  let res: number[] = new Array()
  while (current !== null || st.length > 0) {
    if (current !== null) {
      // 左边界入栈
      st.push(current)
      current = current.left
    } else {
      // current === null && stack.length > 0
      // 弹出一个并打印/执行XX，然后current移动到其右子树
      let tempNode = st.pop()!
      res.push(tempNode.val)
      current = tempNode.right
    }
  }
  return res
};

/**
 * 非递归后序遍历
 *    1. 从栈s1中弹出一个节点current放入收集栈s2中
 *    2. current的子节点压栈，先左再右
 *    3. 打印/处理st2
 *    4. 重复步骤1-3
 * @param root
 */
function postOrderNonrecursive(root: TreeNode | null) {
  if (root === null)
    return
  let st1 = new Array()
  let st2 = new Array()
  st1.push(root)
  while (st1.length > 0) {
    let current = st1.pop()
    st2.push(current)
    if (current.left !== null)
      st1.push(current.left)
    if (current.right !== null)
      st1.push(current.right)
  }
  while (st2.length > 0) {
    console.log(st2.pop().val);
  }
}

function bfsTraversal(root: TreeNode | null): number[] {
  let res: number[] = new Array()
  let queue = new Array()
  queue.push(root)
  while (queue.length > 0) {
    let current = queue.shift()
    res.push(current.val)
    if (current.left !== null)
      queue.push(current.left)
    if (current.right !== null)
      queue.push(current.right)
  }
  return res
}

/**
 * 判断是否是二叉搜索树（Binary Search Tree），递归
 * @param root
 * @returns
 */
function isBST(root: TreeNode | null): boolean {
  if (root === null)
    return true
  if (root.left === null && root.right === null)
    return true
  if (root.left !== null && root.left.val > root.val)
    return false
  if (root.right !== null && root.right.val < root.val)
    return false
  return isBST(root.left) && isBST(root.right)
}

/**
 * 判断是否是二叉搜索树（Binary Search Tree），中序遍历后升序是BST
 * @param root
 * @returns
 */
function isBST2(root: TreeNode | null): boolean {
  let arr = inOrderNonrecursive(root)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i])
      return false
  }
  return true
}
interface BSTReturnType {
  isBST: boolean
  max: number
  min: number
}

function bstProcess(root: TreeNode | null): BSTReturnType | null {
  if (root === null)
    return null

  let leftData = bstProcess(root.left)
  let rightData = bstProcess(root.right)
  let min = root.val
  let max = root.val
  let isBST = true
  if (leftData !== null) {
    min = Math.min(leftData.min, min)
    max = Math.max(leftData.max, max)
  }
  if (rightData !== null) {
    min = Math.min(rightData.min, min)
    max = Math.max(rightData.max, max)
  }
  if (leftData !== null && (!leftData.isBST || leftData.max > root.val)) {
    isBST = false
  }

  if (rightData !== null && (!rightData.isBST || rightData.min < root.val)) {
    isBST = false
  }

  return { isBST: isBST, max: max, min: min }
}

function isBST3(root: TreeNode | null): boolean {
  if (root === null)
    return false
  return bstProcess(root)!.isBST
}
/**
 * 判断是否是完全二叉树（Complete Binary Tree）
 *    1. 宽度优先遍历
 *    2. 任意节点有右孩子没有左孩子，false
 *    3. 在条件1满足的情况下，如果遇到了第一个有左无右的节点，则后续都应该是叶节点。
 * @param root
 * @returns
 */
function isCBT(root: TreeNode | null): boolean {
  if (root === null)
    return false
  let queue = new Array<TreeNode>()
  let leaf = false
  queue.push(root)
  while (queue.length > 0) {
    let current = queue.shift()
    if (current!.left === null && current!.right !== null) {
      return false
    }
    if (current!.left !== null && current!.right === null) {
      if (leaf) {
        return false
      } else {
        leaf = true
      }
    }
    if (current!.left !== null)
      queue.push(current!.left)
    if (current!.right !== null)
      queue.push(current!.right)
  }
  return true
}

interface AVLReturnType {
  isBalanced: boolean
  height: number
}
/**
 * 平衡二叉树本质上是特殊的二叉搜索树（二叉排序树）(BST)，
 * 由前苏联的数学家 Adelse-Velskil 和 Landis 在 1962 年提出的高度平衡的二叉树，
 * 根据科学家的英文名也称为 AVL 树。
 * 它具有二叉搜索树所有的特点，此外它有自己的特别的性质，如下：
 *     （1）它是一棵空树或它的左右两个子树的高度差的绝对值不超过1；
 *     （2）平衡二叉树的左右两个子树都是一棵平衡二叉树。
 *
 * @param root
 * @returns
 */
function isAVLTree(root: TreeNode | null): boolean {
  return avlProcess(root).isBalanced
}

function avlProcess(node: TreeNode | null): AVLReturnType {
  let res = { isBalanced: true, height: 0 }
  if (node === null)
    return res

  let leftData = avlProcess(node.left)
  let rightData = avlProcess(node.right)
  let height = Math.max(leftData.height, rightData.height) + 1
  let isBalanced = leftData.isBalanced && rightData.isBalanced

  return { height, isBalanced }
}

interface FBTReturnType {
  height: number
  nodes: number
}
/**
 * 判断一个二叉树是否是满二叉树: nodes = Math.pow(2, height) - 1
 * @param root
 */
function isFullBinaryTree(root: TreeNode | null): boolean {
  if (root === null)
    return true
  let res = fbtProcess(root)
  console.log(res);
  console.log((1 << res.height) - 1);
  console.log(res.nodes);


  return res.nodes === ((1 << res.height) - 1)
}

/**
 *
 * @param root
 * @returns
 */
function fbtProcess(root: TreeNode | null): FBTReturnType {
  if (root === null)
    return { height: 0, nodes: 0 }
  let leftData = fbtProcess(root.left)
  let rightData = fbtProcess(root.right)
  let height = Math.max(leftData.height, rightData.height) + 1
  let nodes = leftData.nodes + rightData.nodes + 1

  return { height: height, nodes: nodes }
}
function treeNodeTest() {
  let node = createTree([1, 2, 3, 4, 5, 6, 7])
  // preOrderNonrecursive(node)             // 1, 2, 4, 5, 3, 6, 7
  // postOrderNonrecursive(node)            // 4, 5, 2, 6, 7, 3, 1
  // console.log(inOrderNonrecursive(node)) // 4, 2, 5, 1, 6, 3, 7
  // console.log(bfsTraversal(node));          // 1, 2, 3, 4, 5, 6, 7
  // console.log(isBST(createTree([4, 2, 6, 1, 3, 5, 7]))); // true
  // console.log(isBST2(createTree([4, 2, 6, 1, 3, 5, 7]))); // true
  // console.log(isBST3(createTree([4, 2, 6, 1, 3, 5, 7]))); // true
  // console.log(inOrderNonrecursive(createTree([4, 2, 6, 1, 3, 5, 7]))); // 1, 2, 3, 4, 5, 6, 7
  // console.log(isCBT(createTree([1, 2, 3, 4, 5]))); // true
  let root = new TreeNode(1, null, null)
  let left = new TreeNode(2, null, null)
  let right = new TreeNode(3, null, null)
  root.left = left
  root.right = right
  left.left = new TreeNode(4, null, null)
  left.right = new TreeNode(5, null, null)
  // right.right = new TreeNode(7, null, null)
  console.log(isCBT(root)); // false
  // console.log(isAVLTree(createTree([4, 2, 6, 1, 3, 5, 7]))); // true
  // console.log(isFullBinaryTree(createTree([1, 2, 3])));
  // console.log(isFullBinaryTree(createTree([1, 2, 3, 4, 5])));
  // console.log(isFullBinaryTree(createTree([1, 2, 3, 4, 5, 6, 7])));
  console.log(isFullBinaryTree(root));

}

// treeNodeTest()
