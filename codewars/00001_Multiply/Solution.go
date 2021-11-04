package main

import "fmt"

func Multiply(a, b int) int {
	return a * b
}

func main() {
	res := Multiply(2, 3)
	fmt.Println(res)
}
