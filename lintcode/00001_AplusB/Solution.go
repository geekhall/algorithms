package main

import "fmt"

/**
 * @param a: An integer
 * @param b: An integer
 * @return: The sum of a and b
 */
func aplusb(a int, b int) int {
	// write your code here
	return a + b
}

func main() {
	res := aplusb(1, 9)
	fmt.Println(res)
}
