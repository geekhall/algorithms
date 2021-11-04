# 00203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

## 题目大意

给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

## Example 1

![](https://gitee.com/geekhall/pic/raw/main/img/20211102094432.png)

```txt
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
```

## Example 2

```txt
Input: head = [], val = 1
Output: []
```

## Example 3

```txt
Input: head = [7,7,7,7], val = 7
Output: []
```

## Constraints

```txt
The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= val <= 50
```

### Solution 1

迭代

### Go

```go
func removeElements(head *ListNode, val int) *ListNode {
	dummy := &ListNode{Next: head}

	for tmp := dummy; tmp.Next != nil; {
		if tmp.Next.Val == val {
			tmp.Next = tmp.Next.Next
		} else {
			tmp = tmp.Next
		}
	}
	return dummy.Next
}
```

## Solution 2

递归

```go
func removeElements(head *ListNode, val int) *ListNode {
	if head == nil {
		return head
	}
	head.Next = removeElements(head.Next, val)
	if head.Val == val {
		return head.Next
	}
	return head
}
```
