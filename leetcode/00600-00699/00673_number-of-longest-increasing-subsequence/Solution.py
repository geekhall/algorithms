#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00673
 Title: Number of Longest Increasing Subsequence
 Difficulty: Medium
 Description: Given an integer array nums, return the number of longest increasing subsequences.
 *
 * Notice that the sequence has to be strictly increasing.
 *
 * Example 1:
 *
 * Input: nums = [1,3,5,4,7] Output: 2 Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
 *
 * Example 2:
 *
 * Input: nums = [2,2,2,2,2] Output: 5 Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2000
 * -10 6 <= nums[i] <= 10 6
'''
import bisect


class Solution:

    def findNumberOfLIS(self, nums):
        if not nums:
            return 0
        n = len(nums) + 1

        decks, ends_decks, paths = [[] for _ in range(
            n)], [float("inf")]*n, [[0] for _ in range(n)]
        for num in nums:
            idx = bisect.bisect_left(ends_decks, num)
            n_paths = 1
            if idx > 0:
                l = bisect.bisect(decks[idx-1], -num)
                n_paths = paths[idx-1][-1] - paths[idx-1][l]

            decks[idx].append(-num)
            ends_decks[idx] = num
            paths[idx].append(n_paths + paths[idx][-1])

        return paths[paths.index([0]) - 1][-1]


def test_00673():
    print(Solution().findNumberOfLIS([1, 3, 5, 4, 7]))
    print(Solution().findNumberOfLIS([2, 2, 2, 2, 2]))


if __name__ == '__main__':
    test_00673()
