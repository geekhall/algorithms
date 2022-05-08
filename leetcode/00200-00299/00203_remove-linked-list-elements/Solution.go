package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

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

func removeElements1(head *ListNode, val int) *ListNode {
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

func printList(node *ListNode) {
	for node != nil {
		fmt.Println(node.Val)
		node = node.Next
	}
}

func main() {
	var l1, l2, l3, l4 ListNode
	l1.Val = 5
	l2.Val = 1
	l3.Val = 5
	l4.Val = 9
	l1.Next = &l2
	l2.Next = &l3
	l3.Next = &l4
	l4.Next = nil
	head := &l1
	new_head := removeElements(head, 5)
	new_head1 := removeElements1(head, 1)
	printList(new_head)
	printList(new_head1)
}
