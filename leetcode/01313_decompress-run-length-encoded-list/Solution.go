package main

import "fmt"

// Solution 1
func decompressRLElist(nums []int) []int {
	res := make([]int, 0)
	for i := 0; i < len(nums); i += 2 {
		freq := nums[i]
		val := nums[i+1]
		for j := 0; j < freq; j++ {
			res = append(res, val)
		}
	}
	return res
}

func main() {
	test_data := []int{2, 3, 7, 9}
	res := decompressRLElist(test_data)
	fmt.Println(res)
}
