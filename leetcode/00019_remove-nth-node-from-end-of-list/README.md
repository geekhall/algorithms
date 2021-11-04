# 00019. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

## Example 1

```txt
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

## Example 2

```txt
Input: head = [1], n = 1
Output: []
```

## Example 3

```txt
Input: head = [1,2], n = 1
Output: [1]
```

## Constraints

```txt
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
```

## Solution 1

### Go

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
 dummy := &ListNode{0, head}
 left, right := dummy, head
 // move right n step
 for i := 0; i < n; i++ {
  right = right.Next
 }

 // 移动left和right指针
 // 当right指向链表的最末尾后的nil时
 // left则指向了要删除的前一个元素
 // for right != nil {
 //  right = right.Next
 //  left = left.Next
 // }
 for ; right != nil; right = right.Next {
  left = left.Next
 }

 // 删除Head时
 // if left.Next == head {
 //  head = head.Next
 // } else {
 //  left.Next = left.Next.Next
 // }
 left.Next = left.Next.Next

 return dummy.Next
}
```

## Solution 2

### Go

```go
func removeNthFromEnd(head *ListNode, n int) *ListNode {
 nodes := []*ListNode{}
 dummy := &ListNode{0, head}
 for node := dummy; node != nil; node = node.Next {
  nodes = append(nodes, node)
 }
 target := len(nodes) - n
 nodes[target-1].Next = nodes[target].Next
 return dummy.Next
}

```
