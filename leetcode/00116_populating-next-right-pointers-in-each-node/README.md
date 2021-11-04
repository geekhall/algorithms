# 00116. NextPointer

给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

```c
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

## Example 1

```txt
输入：[1,2,3,4,5,6,7]
输出：[1,#,2,3,#,4,5,6,7,#]
```

![](https://gitee.com/geekhall/pic/raw/main/img/leetcode_00116_1.png)

## Constraints

```txt
树中节点的数量少于 4096
-1000 <= node.val <= 1000
```

## Solution 1

递归DFS方法

### Go

```go
// Solution 1
// loop
func connect(root *Node) *Node {
 if root == nil {
  return nil
 }
 root.Next = nil
 dfs(root)
 return root
}

func dfs(current *Node) {
 if current.Right != nil { // 由于是满二叉树，所以不需要校验Left
  current.Left.Next = current.Right
  if current.Next == nil {
   current.Right.Next = nil
  } else {
   current.Right.Next = current.Next.Left
  }

  dfs(current.Left)
  dfs(current.Right)
 }
}
```
