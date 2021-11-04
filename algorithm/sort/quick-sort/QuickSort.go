package main

import (
	"fmt"
	"math/rand"
	"time"
)

func quickSort(nums []int) []int {
	if len(nums) < 2 {
		return nums
	}
	left, right := 0, len(nums)-1
	rand.Seed(time.Now().UnixNano()) // 取纳秒时间戳，可以保证每次的随机数种子都不同
	pivot := rand.Int() % len(nums)
	nums[pivot], nums[right] = nums[right], nums[pivot]

	for i := range nums {
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
func generateSlice(size int) []int {

	slice := make([]int, size)
	rand.Seed(time.Now().UnixNano())
	for i := 0; i < size; i++ {
		slice[i] = rand.Intn(1000) - rand.Intn(999)
	}
	return slice
}

func main() {
	slice := generateSlice(20)
	fmt.Println("\n--- Unsorted --- \n\n", slice)
	quickSort(slice)
	fmt.Println("\n--- Sorted ---\n\n", slice)
}
