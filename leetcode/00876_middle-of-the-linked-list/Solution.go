package main

import (
	"fmt"
	"math/rand"
)

type ListNode struct {
	val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNode(head *ListNode) *ListNode {
	fast := head
	slow := head
	for fast != nil && fast.Next != nil {
		if fast.Next.Next == nil {
			fast = fast.Next
			slow = slow.Next
		} else {
			fast = fast.Next.Next
			slow = slow.Next
		}
	}

	return slow
}

func main() {

	head, last := &ListNode{}, &ListNode{}

	for i := 0; i < 10; i++ {
		current := &ListNode{rand.Intn(10), nil}
		if i == 0 {
			head.Next = current
		} else {
			last.Next = current
		}
		last = current
	}

	curr := head
	for curr.Next != nil {
		fmt.Println(curr.val)
		curr = curr.Next
	}

	fmt.Println(middleNode(head).val)
}
