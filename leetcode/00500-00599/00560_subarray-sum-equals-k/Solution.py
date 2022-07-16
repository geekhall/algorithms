#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00560
 Title: Subarray Sum Equals K
 Difficulty: Medium
 Description: Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 *
 * Example 1:
 *
 * Input: nums = [1,1,1], k = 2 Output: 2
 *
 * Example 2:
 *
 * Input: nums = [1,2,3], k = 3 Output: 2
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2 * 10 4
 * -1000 <= nums[i] <= 1000
 * -10 7 <= k <= 10 7
'''


class Solution:
    def subarraySum(self, nums: list[int], k: int) -> int:
        count = 0
        sum = 0
        dict = {0: 1}
        for i in nums:
            sum += i
            count += dict.get(sum - k, 0)
            dict[sum] = dict.get(sum, 0) + 1
        return count


def test_00560():
    print(Solution().subarraySum([1, 1, 1], 2))
    print(Solution().subarraySum([1, 2, 3], 3))


if __name__ == '__main__':
    test_00560()
