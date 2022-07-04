#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00343
 Title: Integer Break
 Difficulty: Medium
 Description: Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.
 *
 * Return the maximum product you can get.
 *
 * Example 1:
 *
 * Input: n = 2 Output: 1 Explanation: 2 = 1 + 1, 1 × 1 = 1.
 *
 * Example 2:
 *
 * Input: n = 10 Output: 36 Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
 *
 * Constraints:
 *
 * 2 <= n <= 58
'''


class Solution:
    def integerBreak(self, n: int) -> int:
        if n == 2:
            return 1
        if n == 3:
            return 2
        res = 1
        while n > 4:
            res *= 3
            n -= 3
        return res * n



def test_00343():
    print(Solution.integerBreak(Solution, 2))
    print(Solution.integerBreak(Solution, 10))
    pass


if __name__ == '__main__':
    test_00343()

