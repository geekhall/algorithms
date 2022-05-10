package main

import "fmt"

// Solution 1
func plusOne(digits []int) []int {
	i := len(digits) - 1
	res := make([]int, len(digits))
	copy(res, digits)
	for i >= 0 {
		if res[i] == 9 {
			res[i] = 0
			i--
			continue
		} else {
			res[i]++
			i--
			break
		}
	}
	if i == -1 && res[0] == 0 {
		new_res := make([]int, len(digits)+1)
		for i := 0; i < len(res)-1; i++ {
			new_res[i+1] = res[i]
		}
		new_res[0] = 1
		return new_res
	}
	return res
}

func main() {
	test_data := []int{9, 9, 9, 9, 9}
	res := plusOne(test_data)
	fmt.Println(res)
}
