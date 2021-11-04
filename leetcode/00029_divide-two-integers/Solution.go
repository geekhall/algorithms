package main

import "fmt"

// Solution 1
func divide(dividend int, divisor int) int {
	res := 0
	if dividend >= 0 {
		for dividend >= 0 {
			dividend -= divisor
			res++
		}
	}
	return 0
}

func main() {
	res := divide(7, 2)
	fmt.Println(res)
}
