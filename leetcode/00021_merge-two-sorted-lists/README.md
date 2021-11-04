# 00021. Merge Two Lists

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

## Example 1

```txt
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

![](https://gitee.com/geekhall/pic/raw/main/img/leetcode_00021.png)

## Example 2

```txt
输入：l1 = [], l2 = []
输出：[]
```

## Example 3

```txt
输入：l1 = [], l2 = [0]
输出：[0]
```

## Constraints

```txt
两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
```

## Solution 1

递归，按照题目意思解即可。

### Go

```go
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
 if l1 == nil {
  return l2
 }
 if l2 == nil {
  return l1
 }
 if l1.Val < l2.Val {
  l1.Next = mergeTwoLists(l1.Next, l2)
  return l1
 }
 l2.Next = mergeTwoLists(l1, l2.Next)
 return l2
}
```
