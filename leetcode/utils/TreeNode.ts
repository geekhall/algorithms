export class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val === undefined ? 0 : val)
    this.children = []
  }
}

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  static create(arr: any[]): TreeNode | null {
    if (!arr || arr.length === 0)
      return null
    let treeNodeQueue = new Array<TreeNode>()
    let numberQueue = new Array<number>()
    for (let i = 1; i < arr.length; i++) {
      numberQueue.push(arr[i])
    }
    let root = new TreeNode(arr[0])
    treeNodeQueue.push(root)
    while (numberQueue.length > 0) {
      let leftValue = numberQueue.length > 0 ? numberQueue.shift() : null
      let rightValue = numberQueue.length > 0 ? numberQueue.shift() : null
      let currentNode = treeNodeQueue.shift()
      if (leftValue !== null) {
        let leftNode = new TreeNode(leftValue, null, null)
        currentNode!.left = leftNode
        treeNodeQueue.push(leftNode)
      }
      if (rightValue !== null) {
        let rightNode = new TreeNode(rightValue, null, null)
        currentNode!.right = rightNode
        treeNodeQueue.push(rightNode)
      }
    }
    return root
  }
  static print(root: TreeNode | null) {
    if (!root)
      return
    let treeNodeQueue = new Array<TreeNode | null>()
    let numberQueue = new Array<number | null>()
    treeNodeQueue.push(root)
    while (treeNodeQueue.length > 0) {
      let size = treeNodeQueue.length
      for (let i = 0; i < size; i++) {
        let cur = treeNodeQueue.shift()
        if (cur) {
          treeNodeQueue.push(cur.left)
          treeNodeQueue.push(cur.right)
          numberQueue.push(cur.val)
        } else {
          numberQueue.push(null)
        }
      }
    }
    while (numberQueue[numberQueue.length - 1] === null) {
      numberQueue.pop()
    }
    console.log(numberQueue);
  }

  static createFullTree(arr: any[]): TreeNode | null {
    if (arr === null || arr.length === 0)
      return null
    const insertLevelOrder = (arr: any[], root: TreeNode | null, i: number): TreeNode | null => {
      // Base case for recursion
      if (i < arr.length) {
        let temp: TreeNode | null
        if (arr[i] === null)
          temp = null
        else
          temp = new TreeNode(arr[i], null, null)
        root = temp
        if (root !== null) {
          root.left = insertLevelOrder(arr, root.left, 2 * i + 1)
          root.right = insertLevelOrder(arr, root.right, 2 * i + 2)
        }
      }
      return root
    }
    return insertLevelOrder(arr, null, 0)
  }

  printFull() {
    const bfs = (root: TreeNode | null): any[] => {
      let res: any[] = new Array()
      let queue = new Array()
      queue.push(root)
      while (queue.length > 0) {
        let current = queue.shift()
        if (current === null) {
          res.push(null)
        } else {
          res.push(current.val)
          queue.push(current.left)
          queue.push(current.right)
        }
      }
      while (res[res.length - 1] === null) {
        res.pop()
      }
      return res
    }
    console.log(bfs(this));
  }

  static morrisPre(root: TreeNode | null) {
    if (root === null)
      return
    // ???????????????
    let cur: TreeNode | null = root
    // cur????????????????????????
    let mostRight = null
    while (cur !== null) {
      mostRight = cur.left
      if (mostRight !== null) {
        // cur ?????????????????????cur?????????????????????
        while (mostRight.right !== null && mostRight.right !== cur) {
          mostRight = mostRight.right
        }

        if (mostRight.right === null) {// ???mostRight????????????????????????????????????cur???cur????????????
          mostRight.right = cur
          console.log(cur.val + " ");
          cur = cur.left
          continue
        } else {// ???mostRight??????????????????cur?????????????????????cur????????????
          mostRight.right = null
          // cur = cur.right
        }
      } else {
        console.log(cur.val + " ");
      }
      cur = cur.right
    }
    console.log("");

  }

  static morrisIn(root: TreeNode | null) {
    if (root === null)
      return
    // ???????????????
    let cur: TreeNode | null = root
    // cur????????????????????????
    let mostRight = null
    while (cur !== null) {
      mostRight = cur.left
      if (mostRight !== null) {
        while (mostRight.right !== null && mostRight.right !== cur) {
          mostRight = mostRight.right;
        }
        if (mostRight.right === null) {
          mostRight.right = cur;
          cur = cur.left;
          continue;
        } else {
          mostRight.right = null;
        }
      }
      console.log(cur.val);
      cur = cur.right
    }
    console.log("");
  }

  static morrisPos(root: TreeNode | null) {
    if (root === null)
      return null
    // ???????????????
    let cur: TreeNode | null = root
    // cur????????????????????????
    let mostRight = null
    while (cur !== null) {
      mostRight = cur.left
      if (mostRight !== null) {
        while (mostRight.right !== null && mostRight.right !== cur) {
          mostRight = mostRight.right;
        }
        if (mostRight.right === null) {
          mostRight.right = cur;
          cur = cur.left;
          continue;
        } else {
          mostRight.right = null;
          this.printEdge(cur.left);
        }
      }
      cur = cur.right
    }
    this.printEdge(root)
    console.log("");
  }

  static printEdge(node: TreeNode | null) {
    let tail = this.reverseEdge(node)
    let cur = tail

    while (cur !== null) {
      console.log(cur.val);
      cur = cur.right
    }
    this.reverseEdge(tail)
  }

  static reverseEdge(node: TreeNode | null): TreeNode | null {
    let pre = null
    let next = null
    while (node !== null) {
      next = node.right
      node.right = pre
      pre = node
      node = next
    }
    return pre
  }

  static getLeftMost(node: TreeNode | null): TreeNode | null {
    if (node === null) {
      return null
    }
    while (node.left !== null) {
      node = node!.left
    }
    return node
  }

  static preOrderSerialization(head: TreeNode | null): string {
    if (head === null)
      return "#_"

    let res: string = head.val + "_"
    res += this.preOrderSerialization(head.left)
    res += this.preOrderSerialization(head.right)
    return res
  }

  static preOrderDeserialization(str: string): TreeNode | null {
    let values = str.split("_")
    let queue = new Array<string>()

    for (let i = 0; i < values.length; i++) {
      queue.unshift(values[i])
    }
    return this.processPreOrderDeserialization(queue)
  }
  static processPreOrderDeserialization(queue: Array<string>): TreeNode | null {
    let value = queue.pop()
    if (value === '#')
      return null
    let head: TreeNode = new TreeNode(parseInt(value!))
    head.left = this.processPreOrderDeserialization(queue)
    head.right = this.processPreOrderDeserialization(queue)
    return head
  }

  static search(root: TreeNode | null, value: number): TreeNode | null {
    if (root === null || root.val === value) {
      return root
    }

    if (root.val < value)
      return this.search(root.right, value)
    return this.search(root.left, value)
  }

  maxDepth(root: TreeNode | null): number {
    let max_depth = 0
    const dfs = (node: TreeNode | null, depth: number) => {
      if (!node)
        return
      max_depth = Math.max(max_depth, depth)
      dfs(node.left, depth + 1)
      dfs(node.right, depth + 1)
    }
    dfs(root, 1)
    return max_depth
  }

  isSymmetric(root: TreeNode | null): boolean {
    if (!root)
      return false
    let res = true
    const dfs = (a: TreeNode | null, b: TreeNode | null) => {
      if (!a && !b)
        return
      if ((a === null && b !== null) ||
        (a !== null && b === null) ||
        a!.val !== b!.val) {
        res = false
        return
      }
      dfs(a!.left, b!.right)
      dfs(a!.right, b!.left)
    }
    dfs(root.left, root.right)
    return res
  }

  hasPathSum(root: TreeNode | null, target_sum: number): boolean {
    if (!root)
      return false
    const dfs = (node: TreeNode | null, current_sum: number): boolean => {
      if (!node)
        return false

      current_sum += node.val
      if (node.left === null && node.right === null) {
        return current_sum === target_sum
      }
      return dfs(node.left, current_sum) || dfs(node.right, current_sum)
    }

    return dfs(root, 0)
  }
}

/**
 * create a TreeNode from an array.
 * create TreeNode by BFS order.
 *
 * @param arr
 * @returns
 */
export function createTree(arr: any[] | null): TreeNode | null {
  if (arr === null || arr.length === 0)
    return null
  const insertLevelOrder = (arr: any[], root: TreeNode | null, i: number): TreeNode | null => {
    // Base case for recursion
    if (i < arr.length) {
      let temp: TreeNode | null
      if (arr[i] === null)
        temp = null
      else
        temp = new TreeNode(arr[i], null, null)
      root = temp
      if (root !== null) {
        root.left = insertLevelOrder(arr, root.left, 2 * i + 1)
        root.right = insertLevelOrder(arr, root.right, 2 * i + 2)
      }
    }
    return root
  }
  return insertLevelOrder(arr, null, 0)
}

/**
 * Prints the binary tree in level order
 * @param node The root element of binary tree
 */
export function printTree(node: TreeNode | null) {
  const bfs = (root: TreeNode | null): any[] => {
    let res: any[] = new Array()
    let queue = new Array()
    queue.push(root)
    while (queue.length > 0) {
      let current = queue.shift()
      if (current === null) {
        res.push(null)
      } else {
        res.push(current.val)
        queue.push(current.left)
        queue.push(current.right)
      }
    }
    while (res[res.length - 1] === null) {
      res.pop()
    }
    return res
  }
  console.log(bfs(node));
}

// BFS ??????1
// ???????????????????????????????????????????????????BFS???????????????
// while queue ?????????
//     cur = queue.pop()
//     for ?????? in cur????????????????????????
//         if ?????????????????????????????????
//             queue.push(?????????)
function traversalTreeWithoutLayer(root: TreeNode) {
  let res = []
  let queue = new Array()
  queue.push(root)
  while (queue.length > 0) {
    let cur = queue.shift()
    // for (cur.)
  }
}

// BFS ??????2
// ????????????????????????????????????????????????BFS???????????????
// level = 0
// while queue ?????????
//     size = queue.size()
//     while (size --) {
//         cur = queue.pop()
//         for ?????? in cur????????????????????????
//             if ????????????????????????????????????
//                 queue.push(?????????)
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
      queue.push(cur.left)
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
 * ????????????????????????
 *    1. ???stack?????????????????????current
 *    2. ??????/??????current
 *    3. current?????????????????????????????????
 *    4. ????????????1-3
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
 * ?????????????????????
 *    1. ???????????????????????????
 *    2. ??????????????????????????????
 *    3. ????????????????????????????????????1-2
 *    4. ????????????1-3
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
      // ???????????????
      st.push(current)
      current = current.left
    } else {
      // current === null && stack.length > 0
      // ?????????????????????/??????XX?????????current?????????????????????
      let tempNode = st.pop()!
      res.push(tempNode.val)
      current = tempNode.right
    }
  }
  return res
};

/**
 * ?????????????????????
 *    1. ??????s1?????????????????????current???????????????s2???
 *    2. current?????????????????????????????????
 *    3. ??????/??????st2
 *    4. ????????????1-3
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
 * ?????????????????????????????????Binary Search Tree????????????
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
 * ?????????????????????????????????Binary Search Tree??????????????????????????????BST
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
 * ?????????????????????????????????Complete Binary Tree???
 *    1. ??????????????????
 *    2. ??????????????????????????????????????????false
 *    3. ?????????1??????????????????????????????????????????????????????????????????????????????????????????????????????
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
 * ????????????????????????????????????????????????????????????????????????(BST)???
 * ???????????????????????? Adelse-Velskil ??? Landis ??? 1962 ???????????????????????????????????????
 * ???????????????????????????????????? AVL ??????
 * ??????????????????????????????????????????????????????????????????????????????????????????
 *     ???1?????????????????????????????????????????????????????????????????????????????????1???
 *     ???2?????????????????????????????????????????????????????????????????????
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
 * ??????????????????????????????????????????: nodes = Math.pow(2, height) - 1
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
  // let node = createTree([1, 2, 3, 4, 5, 6, 7])
  // printTree(node)
  // preOrderNonrecursive(node)             // 1, 2, 4, 5, 3, 6, 7
  // postOrderNonrecursive(node)            // 4, 5, 2, 6, 7, 3, 1
  // console.log(inOrderNonrecursive(node)) // 4, 2, 5, 1, 6, 3, 7
  // console.log(bfsTraversal(node));          // 1, 2, 3, 4, 5, 6, 7
  // console.log(isBST(createTree([4, 2, 6, 1, 3, 5, 7]))); // true
  // console.log(isBST2(createTree([4, 2, 6, 1, 3, 5, 7]))); // true
  // console.log(isBST3(createTree([4, 2, 6, 1, 3, 5, 7]))); // true
  // console.log(inOrderNonrecursive(createTree([4, 2, 6, 1, 3, 5, 7]))); // 1, 2, 3, 4, 5, 6, 7
  // console.log(isCBT(createTree([1, 2, 3, 4, 5]))); // true
  // let root = createTree([1, 2, 3, 4, 5, null, 7])
  // printTree(root);
  // console.log(isCBT(root)); // false
  // console.log(isAVLTree(createTree([4, 2, 6, 1, 3, 5, 7]))); // true
  // console.log(isFullBinaryTree(createTree([1, 2, 3])));
  // console.log(isFullBinaryTree(createTree([1, 2, 3, 4, 5])));
  // console.log(isFullBinaryTree(createTree([1, 2, 3, 4, 5, 6, 7])));
  // console.log(isFullBinaryTree(root));
  let node = TreeNode.create([1, 2, 3, 4, 5, 6, 7])
  // TreeNode.morrisPre(node)
  // TreeNode.morrisIn(node)
  TreeNode.morrisPos(node)
}

// treeNodeTest()
