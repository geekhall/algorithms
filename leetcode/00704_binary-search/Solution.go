package main

import "fmt"

// Solution 1
func search(nums []int, target int) int {
	for left, right := 0, len(nums)-1; left <= right; {
		middle := left + ((right - left) >> 1)
		if nums[middle] == target {
			return middle
		} else if nums[middle] > target {
			right = middle - 1
		} else {
			left = middle + 1
		}
	}
	return -1
}

func main() {
	test_data := []int{2, 3, 7, 9, 11}
	res := search(test_data, 9)
	fmt.Println(res)
}
