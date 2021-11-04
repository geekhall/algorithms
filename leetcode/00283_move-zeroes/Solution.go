package main

import "fmt"

// Solution 1
// 这里参考了快速排序的思想，
// 把不等于0的放到左边，等于0的放到右边。
// 我们使用两个指针i和j，只要nums[i]!=0，我们就交换nums[i]和nums[j]

func moveZeroes1(nums []int) {
	length := len(nums)
	if length <= 1 {
		return
	}
	for i, j := 0, 0; i < length; i++ {
		if nums[i] != 0 {
			if i != j {
				nums[i], nums[j] = nums[j], nums[i]
			}
			j++
		}
	}
}

func moveZeroes2(nums []int) {
	if len(nums) <= 1 {
		return
	}
	left, right := 0, 0
	for left < len(nums) && right < len(nums) {
		if nums[right] == 0 {
			right++
		} else {
			nums[left], nums[right] = nums[right], nums[left]
			left++
			right++
		}
	}
}

// Solution3(同Solution1)
func moveZeroes(nums []int) {
	for lastNonZeroFoundAt, current := 0, 0; current < len(nums); current++ {
		if nums[current] != 0 {
			nums[current], nums[lastNonZeroFoundAt] = nums[lastNonZeroFoundAt], nums[current]
			lastNonZeroFoundAt++
		}
	}
}
func main() {
	// test_data := []int{0, 1, 0, 2, 4}
	test_data := []int{1, 2, 0, 1, 0, 2, 4}
	moveZeroes(test_data)
	fmt.Println(test_data)
}
