package main

import "fmt"

// Solution 1 (Bad)
// Over time limit O(N^2)
func rotate1(nums []int, k int) {
	temp := 0
	for k > 0 {
		temp = nums[len(nums)-1]
		for i := len(nums) - 1; i > 0; i-- {
			nums[i] = nums[i-1]
		}
		nums[0] = temp
		k--
	}
}

// Solution 2
func rotate2(nums []int, k int) {
	length := len(nums)
	ans := make([]int, length)
	for i, n := range nums {
		ans[(i+k)%length] = n
	}
	copy(nums, ans)
}

// Solution 3
func rotate(nums []int, k int) {
	n := k % len(nums)
	reverse(nums)
	reverse(nums[:n])
	reverse(nums[n:])
}
func reverse(nums []int) {
	for i, n := 0, len(nums); i < n/2; i++ {
		nums[i], nums[n-i-1] = nums[n-i-1], nums[i]
	}
}
func main() {
	// test_data := []int{2, 3, 7, 9, 11}
	test_data := []int{-1}
	rotate(test_data, 2)
	fmt.Println(test_data)
}
