package main

import "fmt"

// Solution 1
func trapRainWater(heightMap [][]int) int {
	return 0
}

func main() {
	heightMap := [][]int{{1, 4, 3, 1, 3, 2}, {3, 2, 1, 3, 2, 4}, {2, 3, 3, 2, 3, 1}}
	heightMap2 := [][]int{{3, 3, 3, 3, 3}, {3, 2, 2, 2, 3}, {3, 2, 1, 2, 3}, {3, 2, 2, 2, 3}, {3, 3, 3, 3, 3}}
	fmt.Println(trapRainWater(heightMap))
	fmt.Println(trapRainWater(heightMap2))
}
