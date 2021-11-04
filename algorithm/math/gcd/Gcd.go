package main

import "fmt"

// greatest common divisor (GCD) via Euclidean algorithm
func gcd(m, n int) int {
	for n != 0 {
		t := n
		n = m % n
		m = t
	}
	return m
}

// Least Common Multiple (LCM) via GCD
func lcm(a, b int, integers ...int) int {
	result := a * b / gcd(a, b)

	for i := 0; i < len(integers); i++ {
		result = lcm(result, integers[i])
	}
	return result
}

func main() {
	m, n := 22, 12
	fmt.Println(gcd(m, n))
	fmt.Println(lcm(m, n))
	fmt.Println(lcm(4, 3, 8))
}
