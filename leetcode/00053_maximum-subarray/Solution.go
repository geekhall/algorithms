package main

import (
	"fmt"
	"math"
)

// Solution 1
// O($N^3$)
func maxSubArray1(nums []int) int {
	var thisSum, maxSum int
	maxSum = math.MinInt16
	for i := 0; i < len(nums); i++ {
		for j := i; j < len(nums); j++ {
			thisSum = 0
			for k := i; k <= j; k++ {
				thisSum += nums[k]
			}
			if thisSum > maxSum {
				maxSum = thisSum
			}
		}
	}
	return maxSum
}

// Solution2
// O($N^2$)
func maxSubArray2(nums []int) int {
	var thisSum, maxSum int
	maxSum = math.MinInt16
	for i := 0; i < len(nums); i++ {
		thisSum = 0
		for j := i; j < len(nums); j++ {
			thisSum += nums[j]

			if thisSum > maxSum {
				maxSum = thisSum
			}
		}
	}
	return maxSum
}

// Solution 3
// 分治法
func maxSubArray3(nums []int) int {
	return get(nums, 0, len(nums)-1).mSum
}

// 以 [4, -3, 5, -2,         -1, 2, 6, -2] 为例
// l.iSum = 4-3+5-2 = 4     r.iSum = -1+2+6-2 = 5
// l.lSum = 4-3+5 = 6       r.lSum = -1+2+6 = 7
// l.rSum = 4-3+5-2 = 4     r.rSum = 2+6-2 = 6
// l.mSum = 4-3+5 = 6       r.mSum = 2+6 = 8
func pushUp(l, r Status) Status {
	iSum := l.iSum + r.iSum
	lSum := max(l.lSum, l.iSum+r.lSum)
	rSum := max(r.rSum, r.iSum+l.rSum)
	mSum := max(max(l.mSum, r.mSum), l.rSum+r.lSum)
	return Status{lSum, rSum, mSum, iSum}
}

func get(nums []int, l, r int) Status {
	if l == r { // base case，只有一个元素时
		return Status{nums[l], nums[l], nums[l], nums[l]}
	}
	m := (l + r) >> 1 // m 为l和r的中点
	lSub := get(nums, l, m)
	rSub := get(nums, m+1, r)
	return pushUp(lSub, rSub)
}

func max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

// lSum 表示 [l,r] 内以 l 为左端点的最大子段和
// rSum 表示 [l,r] 内以 r 为右端点的最大子段和
// mSum 表示 [l,r] 内的最大子段和
// iSum 表示 [l,r] 的区间和
type Status struct {
	lSum, rSum, mSum, iSum int
}

// Solution 4
func maxSubArray4(nums []int) int {
	thisSum, maxSum := nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		if thisSum > 0 {
			thisSum += nums[i]
		} else {
			thisSum = nums[i]
		}
		if thisSum > maxSum {
			maxSum = thisSum
		}
		fmt.Println(thisSum, maxSum)
	}
	return maxSum
}

// Solution 5
// DP
func maxSubArray5(nums []int) int {
	max := nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i]+nums[i-1] > nums[i] {
			nums[i] += nums[i-1]
		}
		if nums[i] > max {
			max = nums[i]
		}
	}
	return max
}

func main() {
	test_data := [][]int{
		{-2, 1, -3, 4, -1, 2, 1, -5, 4}, // Answer is 6
		{-1},                            // Answer is -1
		{-2, -1},                        // Answer is -1
	}
	for _, v := range test_data {
		res := maxSubArray1(v)
		fmt.Println(res)
	}

	fmt.Println(test_data)

}
