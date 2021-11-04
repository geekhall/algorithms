package main

import (
	"fmt"
	"strings"
)

// Solution 1
func letterCasePermutation(s string) []string {

	res := make([]string, 0)
	lower_s := strings.ToLower(s)
	bytes := []byte(lower_s)
	pos := make([]int, 0)
	for i, v := range bytes {
		if isLetter(v) {
			pos = append(pos, i)
		}
	}
	for _, v := range pos {
		getLetterPermutation(lower_s, pos, v, &res)
	}

	return res
}
func getLetterPermutation(s string, pos []int, target int, res *[]string) {
	if len(*res) == 0 {
		*res = append(*res, s)
		*res = append(*res, toUpperCase(s, target))
	}
}

// isLetter function
func isLetter(c byte) bool {
	if c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' {
		return true
	}
	return false
}
func isLower(c byte) bool {
	if c >= 'a' && c <= 'z' {
		return true
	}
	return false
}

func isUpper(c byte) bool {
	if c >= 'A' && c <= 'Z' {
		return true
	}
	return false
}

// change s[i] to upper case
func toUpperCase(s string, i int) string {
	bytes := []byte(s)
	for i, _ := range bytes {
		bytes[i] -= 'a' - 'A'
	}
	return string(bytes)
}

func main() {
	test_data := []string{"a1b2", "3z4", "12345", "0"}
	for _, data := range test_data {
		res := letterCasePermutation(data)
		fmt.Println(res)
	}
}
