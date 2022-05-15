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
function createTree(arr: number[] | null): TreeNode | null {
  if (arr === null || arr.length === 0)
    return null
  let queue = new Array()
  let res: TreeNode | null = new TreeNode(arr[0], null, null)
  queue.push(res)
  if (arr[1] !== null) {
    res.left = new TreeNode(arr[1], null, null)
    if (arr[3] !== null) {
      res.left.left = new TreeNode(arr[3], null, null)
    }
    if (arr[4] !== null) {
      res.left.right = new TreeNode(arr[4], null, null)
    }
  }

  if (arr[2] !== null) {
    res.right = new TreeNode(arr[2], null, null)
    if (arr[5] !== null) {
      res.right.left = new TreeNode(arr[5], null, null)
    }
    if (arr[6] !== null) {
      res.right.right = new TreeNode(arr[6], null, null)
    }
  }

  return res
}
function printTreeNode(node: TreeNode) {
  let printList = new Array()
  let st = new Array()

}

function testTreeNode() {
  createTree([1, 2, 3, 4, 5, 6, 7])

}
testTreeNode()
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

/**
 * 非递归中序遍历
 *    1. 每棵子树左边界进栈
 *    2. 依次弹出的过程中打印
 *    3. 打印/处理st2
 *    4. 重复步骤1-3
 * @param root
 * @returns
 */
function inOrderNonrecursive(root: TreeNode | null): number[] {
  if (root === null)
    return []
  let st: TreeNode[] = new Array()
  let node: TreeNode | null = root
  let res: number[] = new Array()
  while (node !== null || st.length > 0) {
    if (node !== null) { // 左边界入栈
      st.push(node)
      node = node.left
    } else { // node === null && stack.length > 0
      let tempNode = st.pop()!
      res.push(tempNode.val)
      node = tempNode.right
    }
  }
  return res
};


function traversalTest() {
  let node = createTree([1, 2, 3, 4, 5, 6, 7])
  preOrderNonrecursive(node)      // 1, 2, 4, 5, 3, 6, 7
  // postOrderNonrecursive(node) // 4, 5, 2, 6, 7, 3, 1
  // console.log(inOrderNonrecursive(node)) // 4, 2, 5, 1, 6, 3, 7
}

traversalTest()
