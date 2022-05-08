package main

import (
	"fmt"
	"math/rand"
	"time"
)

// Solution 1
func containsDuplicate1(nums []int) bool {
	if len(nums) <= 1 {
		return false
	}

	res := quickSort(nums)
	for i := 1; i < len(nums); i++ {
		if res[i] == res[i-1] {
			return true
		}
	}
	return false
}

func quickSort(nums []int) []int {
	if len(nums) < 2 {
		return nums
	}
	left, right := 0, len(nums)-1
	rand.Seed(time.Now().UnixNano()) // 取纳秒时间戳，可以保证每次的随机数种子都不同
	pivot := rand.Int() % len(nums)
	nums[pivot], nums[right] = nums[right], nums[pivot]

	for i, _ := range nums {
		if nums[i] < nums[right] {
			nums[left], nums[i] = nums[i], nums[left]
			left++
		}
	}

	nums[left], nums[right] = nums[right], nums[left]
	quickSort(nums[:left])
	quickSort(nums[left+1:])

	return nums
}

// Solution 2
// 使用Map
func containsDuplicate(nums []int) bool {
	if len(nums) < 2 {
		return false
	}
	num_map := make(map[int]int, 0)
	for _, v := range nums {
		num_map[v]++
	}
	for _, v := range num_map {
		if v > 1 {
			return true
		}
	}
	return false
}

func main() {
	test_data := [][]int{
		{1, 2, 3, 1},
		{1, 2, 3, 4},
		{3, 3},
		{1, 1, 1, 3, 3, 4, 3, 2, 4, 2},
	}
	for _, v := range test_data {
		fmt.Println(containsDuplicate(v))
	}
}
