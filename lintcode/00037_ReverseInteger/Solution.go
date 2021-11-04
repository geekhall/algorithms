package main

import "fmt"

/**
 * @param number: A 3-digit number.
 * @return: Reversed number.
 */
func reverseInteger(number int) int {
	// write your code here
	last := number % 10
	middle := (number % 100) / 10
	high := number / 100
	return last*100 + middle*10 + high
}

func main() {
	test_data := 123
	res := reverseInteger(test_data)
	fmt.Println(res)
}
