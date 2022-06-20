package main

type Node struct {
	Val   int
	Left  *Node
	Right *Node
	Next  *Node
}

func connect(root *Node) *Node {
	if root == nil {
		return nil
	}
	root.Next = nil
	dfs(root)
	return root
}

func dfs(current *Node) {
	if current.Right != nil { // 由于是满二叉树，所以不需要校验Left
		current.Left.Next = current.Right
		if current.Next == nil {
			current.Right.Next = nil
		} else {
			current.Right.Next = current.Next.Left
		}

		dfs(current.Left)
		dfs(current.Right)
	}
}

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */
// Solution 1
// loop
func main() {
	//          1
	//        /   \
	//       2     3
	//      / \   / \
	//     4   5 6   7
	//
	test_data := &Node{1, nil, nil, nil}
	test_data.Left = &Node{2, nil, nil, nil}
	test_data.Right = &Node{3, nil, nil, nil}
	test_data.Left.Left = &Node{4, nil, nil, nil}
	test_data.Left.Right = &Node{5, nil, nil, nil}
	test_data.Right.Left = &Node{6, nil, nil, nil}
	test_data.Right.Right = &Node{7, nil, nil, nil}

	// res := connect(test_data)
	// fmt.Println(res)

}
