package main

import (
	"fmt"
	"strings"
)

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func reverseWords(s string) string {
	words := strings.Split(s, " ")
	for i, w := range words {
		words[i] = reverseString(w)
	}
	return strings.Join(words, " ")
}

func reverseWords2(s string) string {
	words := strings.Split(s, " ")
	len := len(words)
	for i := 0; i < len/2; i++ {
		tmp := words[len-i-1]
		words[len-i-1] = words[i]
		words[i] = tmp
	}
	return strings.Join(words, " ")
}
func main() {
	test_data := "Let's take LeetCode contest"
	res := reverseWords(test_data)
	fmt.Println(res)
}
