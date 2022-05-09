# Algorithms

_Read this in other languages:_
[_简体中文_](README.zh-CN.md)

Algorithm and datastructure tutorial。

## Data Structure

是计算机中存储、组织数据的方式。 数据结构是一种具有一定逻辑关系，在计算机中应用某种存储结构，并且封装了相应操作的数据元素集合。 它包含三方面的内容，逻辑关系、存储关系及操作。 不同种类的数据结构适合于不同种类的应用，而部分甚至专门用于特定的作业任务。

* [array](data-structures/array)
* [linked-list](data-structures/linked-list)
* [doubly-linked-list](data-structures/doubly-linked-list)
* [queue](data-structures/queue)
* [stack](data-structures/stack)
* [hash-table](data-structures/hash-table)
* [heap](data-structures/heap)
* [priority-queue](data-structures/priority-queue)
* [trie](data-structures/trie)
* [tree](data-structures/tree)
  * [binary-search-tree](data-structures/tree/binary-search-tree)
  * [avl-tree](data-structures/tree/avl-tree)
  * [red-black-tree](data-structures/tree/red-black-tree)
  * [segment-tree](data-structures/tree/segment-tree)
  * [fenwick-tree](data-structures/tree/fenwick-tree)
* [graph](data-structures/graph)
* [disjoint-sets](disjoint-sets)

## Algorithms

### Maths

* bit - set/get/update/clear bit、multiply/divide binary, minus
* factorial
* fibonacci
* prime
* GCD
* LCM
* 素数筛 - 查找任意给定范围内的所有素数
* 判断 2 次方数 - 检查数字是否为 2 的幂 (原生和按位算法)
* binomial array
* 复数 - 复数及其基本运算
* 弧度和角 - 弧度与角的相互转换
* 快速算次方
* 整数拆分
* 割圆术 - 基于 N-gons 的近似 π 计算
* 离散傅里叶变换 - 把时间信号解析成构成它的频率

### 集合

* 笛卡尔积 - 多集合结果
* 洗牌算法 - 随机置换有限序列
* 幂集 - 该集合的所有子集
* 排列 (有/无重复)
* 组合 (有/无重复)
* 最长公共子序列 (LCS)
* 最长递增子序列
* 最短公共父序列 (SCS)
* 背包问题 - 0/1 和 无边界 问题
* 最大子数列问题 - BF 算法 和 动态规划
* 组合求和 - 查找形成特定总和的所有组合

### 字符串

* 汉明距离 - 符号不同的位置数
* 莱温斯坦距离 - 两个序列之间的最小编辑距离
* Knuth–Morris–Pratt 算法 KMP 算法 - 子串搜索 (模式匹配)
* 字符串快速查找 - 子串搜索 (模式匹配)
* Rabin Karp 算法 - 子串搜索
* 最长公共子串
* 正则表达式匹配

### 搜索

* 线性搜索
* 跳转搜索/块搜索 - 搜索有序数组
* 二分查找 - 搜索有序数组
* 插值搜索 - 搜索均匀分布的有序数组

### 排序

* 冒泡排序
* 选择排序
* 插入排序
* 堆排序
* 归并排序
* 快速排序 - in-place (原地) 和 non-in-place 版本
* 希尔排序
* 计数排序
* 基数排序

### 链表

* 正向遍历
* 反向遍历

### 树

* 深度优先搜索 (DFS)
* 广度优先搜索 (BFS)

### 图

* 深度优先搜索 (DFS)
* 广度优先搜索 (BFS)
* 克鲁斯克尔演算法 - 寻找加权无向图的最小生成树 (MST)
* 戴克斯特拉算法 - 找到图中所有顶点的最短路径
* 贝尔曼-福特算法 - 找到图中所有顶点的最短路径
* 弗洛伊德算法 - 找到所有顶点对 之间的最短路径
* 判圈算法 - 对于有向图和无向图 (基于 DFS 和不相交集的版本)
* 普林演算法 - 寻找加权无向图的最小生成树 (MST)
* 拓扑排序 - DFS 方法
* 关节点 - Tarjan 算法 (基于 DFS)
* 桥 - 基于 DFS 的算法
* 欧拉回径与一笔画问题 - Fleury 的算法 - 一次访问每个边
* 哈密顿图 - 恰好访问每个顶点一次
* 强连通分量 - Kosaraju 算法
* 旅行推销员问题 - 尽可能以最短的路线访问每个城市并返回原始城市

### 加解密

* 多项式 hash - 基于多项式的 rolling hash 函数

### 机器学习

* NanoNeuron -7个简单的JS函数，说明机器如何实际学习（向前/向后传播）

## 算法范式

算法范式是一种通用方法，基于一类算法的设计。这是比算法更高的抽象，就像算法是比计算机程序更高的抽象。

### BF算法 - 查找所有可能性并选择最佳解决方案

* 线性搜索
* 雨水收集
* 递归楼梯
* 最大子数列
* 旅行推销员问题
* 离散傅里叶变换

### 贪心 - 在当前选择最佳选项，不考虑以后情况

* 跳跃游戏
* 背包问题
* 迪杰斯特拉算法 - 找到所有图顶点的最短路径
* 普里姆算法 - 寻找加权无向图的最小生成树 (MST)
* 克鲁斯卡尔算法 - 寻找加权无向图的最小生成树 (MST)

### 分治 - 将问题分成较小的部分，然后解决这些部分

* 二分查找
* 汉诺塔
* 杨辉三角形
* 欧几里得算法 - 计算最大公约数 (GCD)
* 归并排序
* 快速排序
* 树深度优先搜索 (DFS)
* 图深度优先搜索 (DFS)
* 跳跃游戏
* 快速算次方
* 排列 (有/无重复)
* 组合 (有/无重复)

### 动态规划（DP） - 使用以前找到的子解决方案构建解决方案

* 斐波那契数
* 跳跃游戏
* 独特路径
* 雨水收集 - 疏导雨水问题
* 递归楼梯 - 计算有共有多少种方法可以到达顶层 (4 种解题方案)
* 莱温斯坦距离 - 两个序列之间的最小编辑距离
* 最长公共子序列 (LCS)
* 最长公共子串
* 最长递增子序列
* 最短公共子序列
* 0-1背包问题
* 整数拆分
* 最大子数列
* 贝尔曼-福特算法 - 找到所有图顶点的最短路径
* 弗洛伊德算法 - 找到所有顶点对之间的最短路径
* 正则表达式匹配

### 回溯 （Backtracking）

类似于 BF 算法 试图产生所有可能的解决方案，但每次生成解决方案测试如果它满足所有条件，那么只有继续生成后续解决方案。否则回溯并继续寻找不同路径的解决方案。

* 跳跃游戏
* 独特路径
* 幂集 - 该集合的所有子集
* 哈密顿图 - 恰好访问每个顶点一次
* 八皇后问题
* 骑士巡逻
* 组合求和 - 从规定的总和中找出所有的组合

### Branch & Bound

记住在回溯搜索的每个阶段找到的成本最低的解决方案，并使用到目前为止找到的成本最小值作为下限。以便丢弃成本大于最小值的解决方案。通常，使用 BFS 遍历以及状态空间树的 DFS 遍历。

## 刷题网站题目列表

Leetcode、LintCode、Codewars Algorithm problem solution written by golang.

### LeetCode

| id    | Name(Github)                                                                                                                                                     | Name(Gitee)                                                                                                                                                     |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00001 | [two-sum](https://github.com/geekhall/algorithms/tree/main/leetcode/00001_two-sum)                                                                               | [two-sum](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00001_two-sum)                                                                               |
| 00003 | [longest-substring-without-repeating-characters](https://github.com/geekhall/algorithms/tree/main/leetcode/00003_longest-substring-without-repeating-characters) | [longest-substring-without-repeating-characters](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00003_longest-substring-without-repeating-characters) |
| 00007 | [reverse-integer](https://github.com/geekhall/algorithms/tree/main/leetcode/00007_reverse-integer)                                                               | [reverse-integer](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00007_reverse-integer)                                                               |
| 00009 | [palindrome-number](https://github.com/geekhall/algorithms/tree/main/leetcode/00009_palindrome-number)                                                           | [palindrome-number](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00009_palindrome-number)                                                           |
| 00013 | [roman-to-integer](https://github.com/geekhall/algorithms/tree/main/leetcode/00013_roman-to-integer)                                                             | [roman-to-integer](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00013_roman-to-integer)                                                             |
| 00019 | [remove-nth-node-from-end-of-list](https://github.com/geekhall/algorithms/tree/main/leetcode/00019_remove-nth-node-from-end-of-list)                             | [remove-nth-node-from-end-of-list](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00019_remove-nth-node-from-end-of-list)                             |
| 00020 | [valid-parentheses](https://github.com/geekhall/algorithms/tree/main/leetcode/00020_valid-parentheses)                                                           | [valid-parentheses](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00020_valid-parentheses)                                                           |
| 00021 | [merge-two-sorted-lists](https://github.com/geekhall/algorithms/tree/main/leetcode/00021_merge-two-sorted-lists)                                                 | [merge-two-sorted-lists](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00021_merge-two-sorted-lists)                                                 |
| 00029 | [divide-two-integers](https://github.com/geekhall/algorithms/tree/main/leetcode/00029_divide-two-integers)                                                       | [divide-two-integers](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00029_divide-two-integers)                                                       |
| 00035 | [search-insert-position](https://github.com/geekhall/algorithms/tree/main/leetcode/00035_search-insert-position)                                                 | [search-insert-position](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00035_search-insert-position)                                                 |
| 00046 | [permutations](https://github.com/geekhall/algorithms/tree/main/leetcode/00046_permutations)                                                                     | [permutations](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00046_permutations)                                                                     |
| 00050 | [powx-n](https://github.com/geekhall/algorithms/tree/main/leetcode/00050_powx-n)                                                                                 | [powx-n](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00050_powx-n)                                                                                 |
| 00053 | [maximum-subarray](https://github.com/geekhall/algorithms/tree/main/leetcode/00053_maximum-subarray)                                                             | [maximum-subarray](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00053_maximum-subarray)                                                             |
| 00066 | [plus-one](https://github.com/geekhall/algorithms/tree/main/leetcode/00066_plus-one)                                                                             | [plus-one](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00066_plus-one)                                                                             |
| 00070 | [climbing-stairs](https://github.com/geekhall/algorithms/tree/main/leetcode/00070_climbing-stairs)                                                               | [climbing-stairs](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00070_climbing-stairs)                                                               |
| 00077 | [combinations](https://github.com/geekhall/algorithms/tree/main/leetcode/00077_combinations)                                                                     | [combinations](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00077_combinations)                                                                     |
| 00088 | [merge-sorted-array](https://github.com/geekhall/algorithms/tree/main/leetcode/00088_merge-sorted-array)                                                         | [merge-sorted-array](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00088_merge-sorted-array)                                                         |
| 00116 | [populating-next-right-pointers-in-each-node](https://github.com/geekhall/algorithms/tree/main/leetcode/00116_populating-next-right-pointers-in-each-node)       | [populating-next-right-pointers-in-each-node](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00116_populating-next-right-pointers-in-each-node)       |
| 00120 | [triangle](https://github.com/geekhall/algorithms/tree/main/leetcode/00120_triangle)                                                                             | [triangle](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00120_triangle)                                                                             |
| 00121 | [best-time-to-buy-and-sell-stock](https://github.com/geekhall/algorithms/tree/main/leetcode/00121_best-time-to-buy-and-sell-stock)                               | [best-time-to-buy-and-sell-stock](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00121_best-time-to-buy-and-sell-stock)                               |
| 00130 | [surrounded-regions](https://github.com/geekhall/algorithms/tree/main/leetcode/00130_surrounded-regions)                                                         | [surrounded-regions](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00130_surrounded-regions)                                                         |
| 00167 | [two-sum-ii-input-array-is-sorted](https://github.com/geekhall/algorithms/tree/main/leetcode/00167_two-sum-ii-input-array-is-sorted)                             | [two-sum-ii-input-array-is-sorted](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00167_two-sum-ii-input-array-is-sorted)                             |
| 00169 | [majority-element](https://github.com/geekhall/algorithms/tree/main/leetcode/00169_majority-element)                                                             | [majority-element](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00169_majority-element)                                                             |
| 00189 | [rotate-array](https://github.com/geekhall/algorithms/tree/main/leetcode/00189_rotate-array)                                                                     | [rotate-array](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00189_rotate-array)                                                                     |
| 00198 | [house-robber](https://github.com/geekhall/algorithms/tree/main/leetcode/00198_house-robber)                                                                     | [house-robber](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00198_house-robber)                                                                     |
| 00203 | [remove-linked-list-elements](https://github.com/geekhall/algorithms/tree/main/leetcode/00203_remove-linked-list-elements)                                       | [remove-linked-list-elements](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00203_remove-linked-list-elements)                                       |
| 00206 | [reverse-linked-list](https://github.com/geekhall/algorithms/tree/main/leetcode/00206_reverse-linked-list)                                                       | [reverse-linked-list](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00206_reverse-linked-list)                                                       |
| 00217 | [contains-duplicate](https://github.com/geekhall/algorithms/tree/main/leetcode/00217_contains-duplicate)                                                         | [contains-duplicate](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00217_contains-duplicate)                                                         |
| 00237 | [delete-node-in-a-linked-list](https://github.com/geekhall/algorithms/tree/main/leetcode/00237_delete-node-in-a-linked-list)                                     | [delete-node-in-a-linked-list](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00237_delete-node-in-a-linked-list)                                     |
| 00278 | [first-bad-version](https://github.com/geekhall/algorithms/tree/main/leetcode/00278_first-bad-version)                                                           | [first-bad-version](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00278_first-bad-version)                                                           |
| 00283 | [move-zeroes](https://github.com/geekhall/algorithms/tree/main/leetcode/00283_move-zeroes)                                                                       | [move-zeroes](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00283_move-zeroes)                                                                       |
| 00344 | [reverse-string](https://github.com/geekhall/algorithms/tree/main/leetcode/00344_reverse-string)                                                                 | [reverse-string](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00344_reverse-string)                                                                 |
| 00350 | [intersection-of-two-arrays-ii](https://github.com/geekhall/algorithms/tree/main/leetcode/00350_intersection-of-two-arrays-ii)                                   | [intersection-of-two-arrays-ii](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00350_intersection-of-two-arrays-ii)                                   |
| 00407 | [trapping-rain-water-ii](https://github.com/geekhall/algorithms/tree/main/leetcode/00407_trapping-rain-water-ii)                                                 | [trapping-rain-water-ii](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00407_trapping-rain-water-ii)                                                 |
| 00443 | [string-compression](https://github.com/geekhall/algorithms/tree/main/leetcode/00443_string-compression)                                                         | [string-compression](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00443_string-compression)                                                         |
| 00509 | [fibonacci-number](https://github.com/geekhall/algorithms/tree/main/leetcode/00509_fibonacci-number)                                                             | [fibonacci-number](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00509_fibonacci-number)                                                             |
| 00542 | [01-matrix](https://github.com/geekhall/algorithms/tree/main/leetcode/00542_01-matrix)                                                                           | [01-matrix](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00542_01-matrix)                                                                           |
| 00557 | [reverse-words-in-a-string-iii](https://github.com/geekhall/algorithms/tree/main/leetcode/00557_reverse-words-in-a-string-iii)                                   | [reverse-words-in-a-string-iii](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00557_reverse-words-in-a-string-iii)                                   |
| 00566 | [reshape-the-matrix](https://github.com/geekhall/algorithms/tree/main/leetcode/00566_reshape-the-matrix)                                                         | [reshape-the-matrix](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00566_reshape-the-matrix)                                                         |
| 00567 | [permutation-in-string](https://github.com/geekhall/algorithms/tree/main/leetcode/00567_permutation-in-string)                                                   | [permutation-in-string](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00567_permutation-in-string)                                                   |
| 00575 | [distribute-candies](https://github.com/geekhall/algorithms/tree/main/leetcode/00575_distribute-candies)                                                         | [distribute-candies](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00575_distribute-candies)                                                         |
| 00617 | [merge-two-binary-trees](https://github.com/geekhall/algorithms/tree/main/leetcode/00617_merge-two-binary-trees)                                                 | [merge-two-binary-trees](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00617_merge-two-binary-trees)                                                 |
| 00695 | [max-area-of-island](https://github.com/geekhall/algorithms/tree/main/leetcode/00695_max-area-of-island)                                                         | [max-area-of-island](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00695_max-area-of-island)                                                         |
| 00704 | [binary-search](https://github.com/geekhall/algorithms/tree/main/leetcode/00704_binary-search)                                                                   | [binary-search](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00704_binary-search)                                                                   |
| 00733 | [flood-fill](https://github.com/geekhall/algorithms/tree/main/leetcode/00733_flood-fill)                                                                         | [flood-fill](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00733_flood-fill)                                                                         |
| 00784 | [letter-case-permutation](https://github.com/geekhall/algorithms/tree/main/leetcode/00784_letter-case-permutation)                                               | [letter-case-permutation](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00784_letter-case-permutation)                                               |
| 00876 | [middle-of-the-linked-list](https://github.com/geekhall/algorithms/tree/main/leetcode/00876_middle-of-the-linked-list)                                           | [middle-of-the-linked-list](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00876_middle-of-the-linked-list)                                           |
| 00977 | [squares-of-a-sorted-array](https://github.com/geekhall/algorithms/tree/main/leetcode/00977_squares-of-a-sorted-array)                                           | [squares-of-a-sorted-array](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00977_squares-of-a-sorted-array)                                           |
| 00994 | [rotting-oranges](https://github.com/geekhall/algorithms/tree/main/leetcode/00994_rotting-oranges)                                                               | [rotting-oranges](https://gitee.com/geekhall/algorithms/tree/main/leetcode/00994_rotting-oranges)                                                               |
| 01313 | [decompress-run-length-encoded-list](https://github.com/geekhall/algorithms/tree/main/leetcode/01313_decompress-run-length-encoded-list)                         | [decompress-run-length-encoded-list](https://gitee.com/geekhall/algorithms/tree/main/leetcode/01313_decompress-run-length-encoded-list)                         |
| 02022 | [convert-1d-array-into-2d-array](https://github.com/geekhall/algorithms/tree/main/leetcode/02022_convert-1d-array-into-2d-array)                                 | [convert-1d-array-into-2d-array](https://gitee.com/geekhall/algorithms/tree/main/leetcode/02022_convert-1d-array-into-2d-array)                                 |
| 10000 | [get-admision-scores](https://github.com/geekhall/algorithms/tree/main/leetcode/10000_get-admision-scores)                                                       | [get-admision-scores](https://gitee.com/geekhall/algorithms/tree/main/leetcode/10000_get-admision-scores)                                                       |

### LintCode

| id    | Name(Github)                                                                                     | Name(Gitee)                                                                                     |
| ----- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 00001 | [AplusB](https://github.com/geekhall/algorithms/tree/main/lintcode/00001_AplusB)                 | [AplusB](https://gitee.com/geekhall/algorithms/tree/main/lintcode/00001_AplusB)                 |
| 00037 | [ReverseInteger](https://github.com/geekhall/algorithms/tree/main/lintcode/00037_ReverseInteger) | [ReverseInteger](https://gitee.com/geekhall/algorithms/tree/main/lintcode/00037_ReverseInteger) |

### codewars

| id    | Name(Github)                                                                         | Name(Gitee)                                                                         |
| ----- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| 00001 | [Multiply](https://github.com/geekhall/algorithms/tree/main/codewars/00001_Multiply) | [Multiply](https://gitee.com/geekhall/algorithms/tree/main/codewars/00001_Multiply) |
