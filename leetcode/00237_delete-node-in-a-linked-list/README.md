# 00237. Delete Node in a Linked List

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

## 题目大意

请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。

题目数据保证需要删除的节点 不是末尾节点 。

## Example 1

![](https://gitee.com/geekhall/pic/raw/main/img/20211102085620.png)

```txt
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

## Example 2

```txt
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
```

## Example 3

```txt
Input: head = [1,2,3,4], node = 3
Output: [1,2,4]
```

## Example 4

```txt
Input: head = [0,1], node = 0
Output: [1]
```

## Example 5

```txt
Input: head = [-3,5,-99], node = -3
Output: [5,-99]
```

## Constraints

```txt
The number of the nodes in the given list is in the range [2, 1000].
-1000 <= Node.val <= 1000
The value of each node in the list is unique.
The node to be deleted is in the list and is not a tail node
```

### Solution 1

由于无法取得删除节点前的Node，所以使删除节点Node后的节点依次前移。

### Go

```go
type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteNode(node *ListNode) {
	pre := node
	for node.Next != nil {
		node.Val = node.Next.Val
		pre = node
		node = node.Next
	}
	pre.Next = nil
}
```
