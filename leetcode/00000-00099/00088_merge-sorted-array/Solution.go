package main

import "fmt"

// Solution 1
// 逆向双指针，使i，j，k分别指向nums1的有数据部分的末位，nums2的末尾和nums1的末尾
func merge(nums1 []int, m int, nums2 []int, n int) {
	for i, j, k := m-1, n-1, m+n-1; i >= 0 || j >= 0; k-- {
		if i == -1 {
			nums1[k] = nums2[j]
			j--
		} else if j == -1 {
			nums1[k] = nums1[i]
			i--
		} else if nums1[i] > nums2[j] {
			nums1[k] = nums1[i]
			i--
		} else {
			nums1[k] = nums2[j]
			j--
		}
	}
}
func test_case1() {
	nums1 := []int{1, 2, 3, 0, 0, 0}
	nums2 := []int{2, 5, 6}
	merge(nums1, 3, nums2, 3)
	fmt.Println(nums1)
}
func test_case2() {
	nums1 := []int{1}
	nums2 := []int{}
	merge(nums1, 1, nums2, 0)
	print(nums1)
}
func main() {
	test_case1()
	test_case2()
}
