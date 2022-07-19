#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00179
 Title: Largest Number
 Difficulty: Medium
 Description: Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.
 *
 * Since the result may be very large, so you need to return a string instead of an integer.
 *
 * Example 1:
 *
 * Input: nums = [10,2] Output:"210"
 *
 * Example 2:
 *
 * Input: nums = [3,30,34,5,9] Output:"9534330"
 *
 * Constraints:
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 10 9
'''

class Solution:
    def largestNumber(self, nums: list[int]) -> str:

        pass


def test_00179():
    print(Solution.largestNumber(Solution, nums=[10,2]))
    print(Solution.largestNumber(Solution, nums=[3,30,34,5,9]))
    pass


if __name__ == '__main__':
    test_00179()

