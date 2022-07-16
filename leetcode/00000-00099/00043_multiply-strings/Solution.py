#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00043
 Title: Multiply Strings
 Difficulty: Medium
 Description: Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Example 1:
 *
 * Input: num1 = "2", num2 = "3" Output:"6"
 *
 * Example 2:
 *
 * Input: num1 = "123", num2 = "456" Output:"56088"
 *
 * Constraints:
 *
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
'''


class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        if not num1 or not num2:
            return ''
        if num1 == '0' or num2 == '0':
            return '0'
        num1 = num1[::-1]
        num2 = num2[::-1]
        res = [0] * (len(num1) + len(num2))
        for i in range(len(num1)):
            for j in range(len(num2)):
                res[i + j] += int(num1[i]) * int(num2[j])
        for i in range(len(res) - 1):
            res[i + 1] += res[i] // 10
            res[i] %= 10
        while res[-1] == 0:
            res.pop()
        return ''.join(map(str, res[::-1]))


def test_00043():
    print(Solution().multiply("2", "3"))
    print(Solution().multiply("123", "456"))


if __name__ == '__main__':
    test_00043()
