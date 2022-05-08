package main

import "fmt"

// Solution 1
func reverseString(s []byte) {
	length := len(s)
	for i := 0; i < length/2; i++ {
		s[i] = s[i] ^ s[length-1-i]
		s[length-1-i] = s[i] ^ s[length-1-i]
		s[i] = s[i] ^ s[length-1-i]
	}
}

// Solution 2 双指针
func reverseString2(s []byte) {
	for l, r := 0, len(s)-1; l < r; l, r = l+1, r-1 {
		s[l], s[r] = s[r], s[l]
	}
}

func main() {
	test_data := []byte{'h', 'e', 'l', 'l', 'o'}
	reverseString(test_data)
	fmt.Println(test_data)
}
