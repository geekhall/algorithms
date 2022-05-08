package main

import "fmt"

// Solution 1
// HashMap
//
func intersect(nums1 []int, nums2 []int) []int {
	if len(nums1) > len(nums2) {
		return intersect(nums2, nums1)
	}
	m := make(map[int]int, len(nums1))
	res := make([]int, 0)

	for _, v := range nums1 {
		m[v]++
	}
	for _, v := range nums2 {
		if m[v] > 0 {
			res = append(res, v)
			m[v]--
		}
	}
	return res
}

func main() {
	nums1 := []int{2, 3, 7, 9, 9, 11}
	nums2 := []int{1, 3, 9, 9, 10, 11, 11, 12}
	res := intersect(nums1, nums2)
	fmt.Println(res)
}
