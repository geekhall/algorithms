package main

import (
	"fmt"
)

// Solution 1
// 使用双指针，左右分别取绝对值比较后依次插入。
func sortedSquares(nums []int) []int {
	answer := make([]int, len(nums))
	for left, right, i := 0, len(nums)-1, len(answer)-1; i >= 0; i-- {
		// if math.Abs(float64(nums[left])) > math.Abs(float64(nums[right])) { // also ok
		if nums[left]*nums[left] > nums[right]*nums[right] {
			answer[i] = nums[left] * nums[left]
			left++
		} else {
			answer[i] = nums[right] * nums[right]
			right--
		}
	}
	return answer
}

func main() {
	test_data := []int{-4, 1, 0, 3, 4, 10}
	res := sortedSquares(test_data)
	fmt.Println(res)
}
