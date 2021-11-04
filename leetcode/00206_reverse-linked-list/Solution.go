package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

// Solution 1
// Sample :
//
// Round1
//   head   next
//    ↓      ↓
//    0  ->  1  ->  2  ->  3  ->  4  ->  5
//
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

func printList(head *ListNode) {
	for head != nil {
		fmt.Println(head.Val)
		head = head.Next
	}
}

func main() {
	l1 := &ListNode{0, nil}
	cur := l1
	for i := 1; i < 10; i++ {
		cur.Next = &ListNode{i, nil}
		cur = cur.Next
	}
	printList(l1)
	fmt.Println("=================")
	res := reverseList(l1)
	printList(res)
}
