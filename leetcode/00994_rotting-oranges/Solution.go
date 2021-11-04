package main

import "fmt"

// Solution 1 ：DFS
func orangesRotting(grid [][]int) int {
	round := -1
	queue := make([][]int, 0)
	for i, row := range grid {
		for j, e := range row {
			if e == 2 {
				queue = append(queue, []int{i, j})
			}
		}
	}
	round = 0
	for len(queue) > 0 {
		queue = spread(grid, queue)
		round++
	}

	if has_good(grid) {
		return -1
	} else if round == 0 {
		return 0
	} else {
		return round - 1
	}
}

func spread(grid [][]int, queue [][]int) [][]int {
	r, c := len(grid), len(grid[0])
	res := make([][]int, 0)
	directions := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	for _, node := range queue {
		i := node[0]
		j := node[1]
		if grid[i][j] == 2 {
			for _, direction := range directions {
				x := i + direction[0]
				y := j + direction[1]
				if x < 0 || x > r-1 || y < 0 || y > c-1 || grid[x][y] == 0 || grid[x][y] == 2 {
					continue
				} else {
					grid[x][y] = 2
					res = append(res, []int{x, y})
				}
			}
		}
	}
	return res
}
func has_good(grid [][]int) bool {
	for _, row := range grid {
		for _, e := range row {
			if e == 1 {
				return true
			}
		}
	}
	return false
}

// func get_rot(grid [][]int) [][]int {
// 	queue := make([][]int, 0)
// 	for i, row := range grid {
// 		for j, e := range row {
// 			if e == 2 {
// 				queue = append(queue, []int{i, j})
// 			}
// 		}
// 	}
// 	return queue
// }

func main() {
	test_data1 := [][]int{
		{2, 1, 1},
		{0, 1, 1},
		{1, 0, 1},
	}
	test_data2 := [][]int{
		{2, 1, 1},
		{1, 1, 0},
		{0, 1, 1},
	}
	res := orangesRotting(test_data1)
	fmt.Println(res)
	res2 := orangesRotting(test_data2)
	fmt.Println(res2)
}
