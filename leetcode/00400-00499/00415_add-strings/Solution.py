#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00415
 Title: Add Strings
 Difficulty: Easy
 Description: Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 *
 * Example 1:
 *
 * Input: num1 = "11", num2 = "123" Output:"134"
 *
 * Example 2:
 *
 * Input: num1 = "456", num2 = "77" Output:"533"
 *
 * Example 3:
 *
 * Input: num1 = "0", num2 = "0" Output:"0"
 *
 * Constraints:
 *
 * 1 <= num1.length, num2.length <= 10 4
 * num1 and num2 consist of only digits.
 * num1 and num2 don't have any leading zeros except for the zero itself.
'''


class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        if len(num1) < len(num2):
            num1, num2 = num2, num1
        num1 = num1[::-1]
        num2 = num2[::-1]
        carry = 0
        res = ''
        for i in range(len(num2)):
            tmp = int(num1[i]) + int(num2[i]) + carry
            if tmp >= 10:
                carry = 1
                tmp -= 10
            else:
                carry = 0
            res += str(tmp)
        for i in range(len(num1) - len(num2)):
            tmp = int(num1[i + len(num2)]) + carry
            if tmp >= 10:
                carry = 1
                tmp -= 10
            else:
                carry = 0
            res += str(tmp)
        if carry == 1:
            res += '1'
        return res[::-1]


def test_00415():
    print(Solution().addStrings("11", "123"))
    print(Solution().addStrings("456", "77"))
    print(Solution().addStrings("0", "0"))


if __name__ == '__main__':
    test_00415()
