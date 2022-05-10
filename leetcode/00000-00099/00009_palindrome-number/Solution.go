package main

import "fmt"

// Solution 1
func isPalindrome(x int) bool {
	fmt.Println(x)
	return false
}

func main() {
	fmt.Println(isPalindrome(121))
	fmt.Println(isPalindrome(-121))
	fmt.Println(isPalindrome(1231))
	fmt.Println(isPalindrome(12321))
}
