package main

import "fmt"

// Solution 1
func floodFill(image [][]int, sr int, sc int, newColor int) [][]int {
	orgColor := image[sr][sc]
	m, n := len(image), len(image[0])
	if orgColor != newColor {
		dfs(image, sr, sc, orgColor, newColor, m, n)
	}
	return image
}

func dfs(image [][]int, r int, c int, orgColor int, newColor int, m int, n int) {
	if image[r][c] == orgColor {
		image[r][c] = newColor
		// 上
		if r-1 >= 0 {
			dfs(image, r-1, c, orgColor, newColor, m, n)
		}
		// 左
		if c-1 >= 0 {
			dfs(image, r, c-1, orgColor, newColor, m, n)
		}
		// 下
		if r+1 < m {
			dfs(image, r+1, c, orgColor, newColor, m, n)
		}
		// 右
		if c+1 < n {
			dfs(image, r, c+1, orgColor, newColor, m, n)
		}
	}
}
func main() {
	test_data := [][]int{{1, 1, 1}, {1, 1, 0}, {1, 0, 1}}
	// test_data := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {10, 11, 12}}
	res := floodFill(test_data, 1, 1, 2)
	fmt.Println(res)
}
