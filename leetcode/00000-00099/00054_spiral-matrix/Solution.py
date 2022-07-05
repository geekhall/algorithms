#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00054
 Title: Spiral Matrix
 Difficulty: Medium
 Description: Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1:
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [1,2,3,6,9,8,7,4,5]
 *
 * Example 2:
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
'''


from curses.ascii import SO


class Solution:
    def spiralOrder(self, matrix: list[list[int]]) -> list[int]:
        if not matrix:
            return []
        m, n = len(matrix), len(matrix[0])
        res = []
        i, j = 0, 0
        while m > 0 and n > 0:
            if m == 1:
                for k in range(n):
                    res.append(matrix[i][j + k])
                break
            if n == 1:
                for k in range(m):
                    res.append(matrix[i + k][j])
                break
            for k in range(n - 1):
                res.append(matrix[i][j + k])
            for k in range(m - 1):
                res.append(matrix[i + k][j + n - 1])
            for k in range(n - 1):
                res.append(matrix[i + m - 1][j + k])
            for k in range(m - 1):
                res.append(matrix[i + k][j])
            i += 1
            j += 1
            m -= 2
            n -= 2
        return res


def test_00054():
    print(Solution.spiralOrder(Solution, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
    print(Solution.spiralOrder(
        Solution, [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
    pass


if __name__ == '__main__':
    test_00054()
