package main

import (
	"fmt"
	"math/rand"
	"sort"
	"time"
)

// Solution 1
// HashMap
func majorityElement1(nums []int) int {
	m := make(map[int]int)
	for _, v := range nums {
		m[v]++
		if m[v] > len(nums)/2 {
			return v
		}
	}
	for k, v := range m {
		if v > len(nums)/2 {
			return k
		}
	}
	return 0
}

// Solution 2
// 排序后 返回n/2位置的元素
func majorityElement2(nums []int) int {
	sort.Ints(nums)
	return nums[len(nums)/2]
}

// Solution 3 (Randomization)
// 因为超过一半的数组下标被众数占据了，这样我们随机挑选一个下标对应的元素并验证，有很大的概率能找到众数。
func majorityElement3(nums []int) int {
	for true {
		rand.Seed(time.Now().UnixNano())
		index := rand.Int() % len(nums)
		if countElement(nums, nums[index]) > len(nums)/2 {
			return nums[index]
		}
	}
	return 0
}
func countElement(nums []int, n int) int {
	count := 0
	for _, v := range nums {
		if n == v {
			count++
		}
	}
	return count
}

// Solution 4 分治法
func majorityElement4(nums []int) int {
	return majorityElementRec(nums, 0, len(nums)-1)
}
func majorityElementRec(nums []int, lo, hi int) int {
	if lo == hi {
		return nums[lo]
	}
	mid := lo + (hi-lo)>>1
	left := majorityElementRec(nums, lo, mid)
	right := majorityElementRec(nums, mid+1, hi)
	if left == right {
		return left
	} else {
		if countElementFromTo(nums, left, lo, mid) >= countElementFromTo(nums, right, mid+1, hi) {
			return left
		} else {
			return right
		}
	}
}

// Solution 5 Boyer-Moore投票法
//
func majorityElement(nums []int) int {
	count := 0
	var candidate int
	for _, v := range nums {
		if count == 0 {
			candidate = v
		}
		if v == candidate {
			count++
		} else {
			count--
		}
	}
	return candidate
}

func countElementFromTo(nums []int, n int, lo, hi int) int {
	count := 0
	for lo <= hi {
		if nums[lo] == n {
			count++
		}
		lo++
	}
	return count
}

func main() {
	test_data := []int{1, 1, 2, 2, 2, 1, 1, 3, 4, 2, 2, 2, 2, 2}
	fmt.Println(test_data)
	res := majorityElement(test_data)
	fmt.Println(res)
}
