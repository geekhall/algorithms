package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

// Solution 1
func deleteNode(node *ListNode) {
	pre := node
	for node.Next != nil {
		node.Val = node.Next.Val
		pre = node
		node = node.Next
	}
	pre.Next = nil
}

func printList(node *ListNode) {
	for node != nil {
		fmt.Println(node.Val)
		node = node.Next
	}
}

func main() {
	var l1, l2, l3, l4 ListNode
	l1.Val = 4
	l2.Val = 5
	l3.Val = 1
	l4.Val = 9
	l1.Next = &l2
	l2.Next = &l3
	l3.Next = &l4
	l4.Next = nil
	head := &l1
	deleteNode(&l4)
	printList(head)
}
