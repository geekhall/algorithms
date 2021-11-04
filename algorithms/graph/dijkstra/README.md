# Dijkstra 算法

_Read this in other languages:_
[_English_](README.en-US.md)

![](https://gitee.com/geekhall/pic/raw/main/img/20211007152349.png)

## 示例图

![](https://gitee.com/geekhall/pic/raw/main/img/20211007142333.png)

**邻接矩阵**：

```go
	data := [][]int{
		{0,   1,   12,  max, max, max},
		{max, 0,   9,   3,   max, max},
		{max, max, 0,   max, 5,   max},
		{max, max, 4,   0,   13,  15},
		{max, max, max, max, 0,   4},
		{max, max, max, max, max, 0},
	}
```

## 执行过程

```txt
===============
u = 1
Book: [1 1 0 0 0 0]
Dist: [0 1 10 4 32767 32767]
===============
===============
u = 3
Book: [1 1 0 1 0 0]
Dist: [0 1 8 4 17 19]
===============
===============
u = 2
Book: [1 1 1 1 0 0]
Dist: [0 1 8 4 13 19]
===============
===============
u = 4
Book: [1 1 1 1 1 0]
Dist: [0 1 8 4 13 17]
===============
===============
u = 5
Book: [1 1 1 1 1 1]
Dist: [0 1 8 4 13 17]
===============
result = [0 1 8 4 13 17]
```
