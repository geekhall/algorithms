package main

import (
	"fmt"
	"math"
)

// Dijkstra 算法，不带pre路径版本
func dijkstra(data [][]int) []int {
	var u, v int
	max := math.MaxInt16
	// 初始化最短距离数组
	dist := make([]int, len(data))
	// initialize dist table，0号顶点到其余各个顶点的初始路程
	copy(dist, data[0])

	// 使用book数组表示是否为已知最短路程的顶点，1-已知，0-未知
	book := make([]int, len(data))
	// 初始状态只有0号顶点是已知状态（1）
	book[0] = 1
	// 循环各个顶点（0 -> n-1 ）
	for i := 0; i < len(data)-1; i++ {
		fmt.Println("===============")
		min := math.MaxInt16

		// 找到dist数组中未知最短路程顶点（book[j]为0的）距离起始顶点最近的顶点
		for j := 0; j < len(data); j++ {
			if book[j] == 0 && dist[j] < min {
				min = dist[j]
				u = j // u表示最近顶点的索引值
			}
		}
		// 将找到的距离起始顶点最近的顶点登记为已知顶点（book数组为1）
		fmt.Printf("u = %d \n", u)
		book[u] = 1

		for v = 0; v < len(data); v++ {
			if data[u][v] < max { // 若  u => v 存在路径（松弛操作）
				if dist[v] > dist[u]+data[u][v] { // 查看当前dist数组中保存的最短距离(0 => v)是否大于 (0 => u => v)绕路的距离
					dist[v] = dist[u] + data[u][v] // 若大于，则表示绕路(0 => u => v)更近，更新dist为新的最短距离
				}
			}
		}

		fmt.Print("Book: ")
		fmt.Println(book)
		fmt.Print("Dist: ")
		fmt.Println(dist)
		fmt.Println("===============")
	}
	return dist
}

func main() {
	max := math.MaxInt16
	data := [][]int{
		{0, 1, 12, max, max, max},
		{max, 0, 9, 3, max, max},
		{max, max, 0, max, 5, max},
		{max, max, 4, 0, 13, 15},
		{max, max, max, max, 0, 4},
		{max, max, max, max, max, 0},
	}
	result := dijkstra(data)
	fmt.Print("result = ")
	fmt.Println(result)
}
