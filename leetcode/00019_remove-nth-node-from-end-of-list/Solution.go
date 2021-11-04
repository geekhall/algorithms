package main

import (
	"fmt"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Solution 1 :
 * 使用快慢指针，Head前添加一个dummy元素，其Next指向Head，中间间隔n个：
 * 初始状态：
 *       dummy  ->  Head ->  1 ->  2 -> ...  ->  n ->  nil
 *
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd1(head *ListNode, n int) *ListNode {

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
	// 	right = right.Next
	// 	left = left.Next
	// }
	for ; right != nil; right = right.Next {
		left = left.Next
	}

	// 删除Head时
	// if left.Next == head {
	// 	head = head.Next
	// } else {
	// 	left.Next = left.Next.Next
	// }
	left.Next = left.Next.Next

	return dummy.Next
}

// Solution 2 use stack
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

func main() {
	head, last := &ListNode{}, &ListNode{}

	for i := 1; i < 5; i++ {
		current := &ListNode{i, nil}
		if i == 1 {
			head = current
		} else {
			last.Next = current
		}
		last = current
	}

	curr := head
	for curr != nil {
		fmt.Println(curr.Val)
		curr = curr.Next
	}

	fmt.Println(removeNthFromEnd(head, 2))

	curr = head
	for curr != nil {
		fmt.Println(curr.Val)
		curr = curr.Next
	}
}
