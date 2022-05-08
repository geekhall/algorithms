package main

import (
	"fmt"
)

// Solution 1
func distributeCandies(candyType []int) int {
	m := make(map[int]int)

	for _, c := range candyType {
		if len(m) < len(candyType)/2 {
			if m[c] == 0 {
				m[c]++
			}
		}
	}
	return len(m)
}

func main() {
	test_data := []int{1, 1, 2, 2, 3, 3}
	// test_data := []int{1, 1, 1, 2}
	res := distributeCandies(test_data)
	fmt.Println(res)
}
