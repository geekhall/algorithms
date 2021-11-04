package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	if root1 == nil {
		return root2
	}
	if root2 == nil {
		return root1
	}
	root := &TreeNode{root1.Val + root2.Val, nil, nil}
	root.Left = mergeTrees(root1.Left, root2.Left)
	root.Right = mergeTrees(root1.Right, root2.Right)
	return root
}

func printTrees(root *TreeNode) {
	fmt.Println(root.Val)
	if root.Left != nil {
		printTrees(root.Left)
	}
	if root.Right != nil {
		printTrees(root.Right)
	}
}

func main() {
	// 			1
	//		   / \
	//        3   2
	//       /
	//      5
	//
	ta := &TreeNode{1, nil, nil}
	ta.Left = &TreeNode{3, nil, nil}
	// ta.Right = &TreeNode{2, nil, nil}
	ta.Left.Left = &TreeNode{5, nil, nil}

	// 			 2
	//		   /   \
	//        1     3
	//         \     \
	//          4     7
	//
	tb := &TreeNode{2, nil, nil}
	// tb.Left = &TreeNode{1, nil, nil}
	tb.Right = &TreeNode{3, nil, nil}
	// tb.Left.Right = &TreeNode{4, nil, nil}
	tb.Right.Right = &TreeNode{7, nil, nil}

	// res := mergeTrees(ta, tb)
	printTrees(ta)
	fmt.Println("==================")
	printTrees(tb)
	res := mergeTrees(ta, tb)
	fmt.Println("==================")
	printTrees(res)
}
