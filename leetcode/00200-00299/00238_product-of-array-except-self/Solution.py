#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00238
 Title: Product of Array Except Self
 Difficulty: Medium
 Description: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4] Output: [24,12,8,6]
 *
 * Example 2:
 *
 * Input: nums = [-1,1,0,-3,3] Output: [0,0,9,0,0]
 *
 * Constraints:
 *
 * 2 <= nums.length <= 10 5
 * -30 <= nums[i] <= 30
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
'''


class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        if not nums:
            return []
        n = len(nums)
        res = [1] * n
        for i in range(1, n):
            res[i] = res[i - 1] * nums[i - 1]
        right = 1
        for i in range(n - 1, -1, -1):
            res[i] *= right
            right *= nums[i]
        return res


def test_00238():
    print(Solution.productExceptSelf(Solution, [1, 2, 3, 4]))
    pass


if __name__ == '__main__':
    test_00238()
