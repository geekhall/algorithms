#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00334
 Title: Increasing Triplet Subsequence
 Difficulty: Medium
 Description: Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 *
 * Example 1:
 *
 * Input: nums = [1,2,3,4,5] Output: true Explanation: Any triplet where i < j < k is valid.
 *
 * Example 2:
 *
 * Input: nums = [5,4,3,2,1] Output: false Explanation: No triplet exists.
 *
 * Example 3:
 *
 * Input: nums = [2,1,5,0,4,6] Output: true Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 5 * 10 5
 * -2 31 <= nums[i] <= 2 31 - 1
 *
 * Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
'''


class Solution:
    def increasingTriplet(self, nums: list[int]) -> bool:
        if not nums:
            return False
        m1 = m2 = float('inf')
        for num in nums:
            if num <= m1:
                m1 = num
            elif num <= m2:
                m2 = num
            else:
                return True
        return False


def test_00334():
    print(Solution.increasingTriplet(Solution, [1, 2, 3, 4, 5]))
    print(Solution.increasingTriplet(Solution, [5, 4, 3, 2, 1]))
    print(Solution.increasingTriplet(Solution, [2, 1, 5, 0, 4, 6]))
    pass


if __name__ == '__main__':
    test_00334()
