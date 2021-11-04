# 00206. Reverse Linked list

Given the head of a singly linked list, reverse the list, and return the reversed list.

反转单链表

## Example 1

```txt
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

## Example 2

```txt
Input: head = [1,2]
Output: [2,1]
```

## Constraints

```txt
Input: head = []
Output: []
```

## Solution 1

### Go

```go
func reverseList(head *ListNode) *ListNode {
 var res *ListNode
 for head != nil {
  next := head.Next
  head.Next = res
  res = head
  head = next
 }
 return res
}
```
