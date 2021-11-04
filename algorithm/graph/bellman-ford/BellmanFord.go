package main

import (
	"fmt"
	"math"
)

/**
 * Bellman-Ford 算法
 * data  : 输入数据（邻接矩阵）
 * point : 顶点个数
 * side  : 边的个数
 */
func bellman(data [][]int, point, side int) []int {
	// 初始化dist数组
	dist := make([]int, point+1)
	for i := 0; i < len(dist); i++ {
		dist[i] = math.MaxInt16
	}
	dist[0], dist[1] = 0, 0

	// 算法核心语句
	for i := 0; i < point-1; i++ {
		for j := 0; j < side-1; j++ {
			if dist[data[i][1]] > dist[data[i][0]]+data[i][2] {
				dist[data[i][1]] = dist[data[i][0]] + data[i][2]
			}
		}
	}

	return dist
}

func main() {
	point, side := 5, 5
	data := [][]int{
		{2, 3, 2},
		{1, 2, -3},
		{1, 5, 5},
		{4, 5, 2},
		{3, 4, 3},
	}
	result := bellman(data, point, side)
	fmt.Print("result = ")
	fmt.Println(result)
}
