package main

import "fmt"

// Solution 1
func solve(board [][]byte) {
	directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	fmt.Println(directions)
}

func main() {
	test_data := [][]byte{{'X', 'X', 'X', 'X'}, {'X', 'O', 'O', 'X'}, {'X', 'X', 'O', 'X'}, {'X', 'O', 'X', 'X'}}
	fmt.Println(test_data)
	solve(test_data)
	fmt.Println(test_data)
}
