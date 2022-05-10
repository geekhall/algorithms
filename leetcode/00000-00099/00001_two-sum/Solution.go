package main

import (
	"fmt"
	"sort"
)

// Solution 1
// We can use two for loops to loop through the array
// and find the indices of the two numbers that add up to the target number.
// 使用双循环，不推荐。
func twoSum1(nums []int, target int) []int {
	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return nil
}

// Solution 2
// O(n) time, O(n) space
// We can use a hash table to store the numbers as keys and the indices as values.
// Then we check to see if the difference (target - number) is in the hash table.
// If it is, return both the index of the number and the index of the difference.//
// 使用一个HashTable来存储原数组（值作为Key，索引作为Value）
// 然后查看target - number是否在HashTable中存在，
// 存在则直接返回HashTable的值，和原数组的索引值，否则继续处理。
func twoSum2(nums []int, target int) []int {
	m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		another := target - nums[i]
		if _, ok := m[another]; ok {
			return []int{m[another], i}
		}
		m[nums[i]] = i
	}
	return nil
}

// Solution 3
// O(nlogn) time, O(1) space
// You can use the two pointer method.
// After sorting the array and creating an array of the numbers and their indices,
// create two pointers i and j where i = 0 and j = len(array)-1.
// If the sum is smaller than target, increment i, if larger, increment j.
// If equal, return the indices.。
// 使用双指针
// 将原数组排序后使用双指针向内遍历查找
func twoSum3(nums []int, target int) []int {
	// [index, num]
	sortedNums := make([][]int, len(nums))
	for i, n := range nums {
		sortedNums[i] = []int{i, n}
	}

	sort.Slice(sortedNums, func(i, j int) bool { return sortedNums[i][1] < sortedNums[j][1] })

	for left, right := 0, len(nums)-1; left < right; {
		currSum := sortedNums[left][1] + sortedNums[right][1]
		if currSum == target {
			return []int{sortedNums[left][0], sortedNums[right][0]}
		} else if currSum < target {
			left++
		} else if currSum > target {
			right--
		}
	}
	return []int{}
}

func main() {

	nums := []int{2, 6, 7, 9, 1, 3, 14, 8}
	res := twoSum3(nums, 9)
	fmt.Println(res)
}
