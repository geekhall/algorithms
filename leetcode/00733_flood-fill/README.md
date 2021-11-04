# 00733. FloodFill

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

## 题目大意

有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。

给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。

为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。

最后返回经过上色渲染后的图像。

Description

## Example 1

```txt
输入: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
输出: [[2,2,2],[2,2,0],[2,0,1]]
解析: 
在图像的正中间，(坐标(sr,sc)=(1,1)),
在路径上所有符合条件的像素点的颜色都被更改成2。
注意，右下角的像素没有更改为2，
因为它不是在上下左右四个方向上与初始点相连的像素点。
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210929_leetcode_1.png)

## Example 2

```txt
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]
```

## Constraints

```txt
m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], newColor < 216
0 <= sr < m
0 <= sc < n
```

## Solution 1

深度优先算法递归遍历上下左右方向。

### Go

```go
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
```
