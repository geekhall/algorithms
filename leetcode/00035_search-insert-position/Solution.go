package main

import "fmt"

func searchInsert(nums []int, target int) int {
	start, end := 0, len(nums)-1
	for start <= end {
		middle := start + (end-start)/2
		if nums[middle] >= target {
			end = middle - 1
		} else {
			// middle == end 是考虑当target比数组中所有元素都大时，防止访问middle+1元素越界
			if middle == end || nums[middle+1] >= target {
				return middle + 1
			}
			start = middle + 1
		}
	}
	return start
}

func main() {
	test_data := []int{1, 2, 3, 5, 8, 10}

	res := searchInsert(test_data, 9)
	fmt.Println(res)
}
