package main

import "fmt"

// Solution 1
func maxAreaOfIsland(grid [][]int) int {
	var max int
	r, c := len(grid), len(grid[0])
	for i := 0; i < r; i++ {
		for j := 0; j < c; j++ {
			if grid[i][j] == 1 {
				area := get_area(grid, r, c, i, j)
				if area > max {
					max = area
				}
			}
		}
	}
	return max
}

func get_area(grid [][]int, r int, c int, i int, j int) int {
	var area int = 0
	if grid[i][j] == 1 {
		area += 1
		grid[i][j] = 0
		if i-1 >= 0 && grid[i-1][j] == 1 {
			area += get_area(grid, r, c, i-1, j)
		}
		if i+1 < r && grid[i+1][j] == 1 {
			area += get_area(grid, r, c, i+1, j)
		}
		if j-1 >= 0 && grid[i][j-1] == 1 {
			area += get_area(grid, r, c, i, j-1)
		}
		if j+1 < c && grid[i][j+1] == 1 {
			area += get_area(grid, r, c, i, j+1)
		}
	}
	return area
}
func main() {
	grid := [][]int{
		{0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
		{0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
		{0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0},
		{0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0},
	}
	res := maxAreaOfIsland(grid)
	fmt.Println(res)
}
