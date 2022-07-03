#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00435
 Title: Non-overlapping Intervals
 Difficulty: Medium
 Description: Given an array of intervals intervals where intervals[i] = [start i, end i ], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 *
 * Example 1:
 *
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]] Output: 1 Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 *
 * Example 2:
 *
 * Input: intervals = [[1,2],[1,2],[1,2]] Output: 2 Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
 *
 * Example 3:
 *
 * Input: intervals = [[1,2],[2,3]] Output: 0 Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 *
 * Constraints:
 *
 * 1 <= intervals.length <= 10 5
 * intervals[i].length == 2
 * -5 * 10 4 <= start i < end i <= 5 * 10 4
'''


class Solution:
    def solution(self, param: int) -> int:
        pass


def test_00435():
    print(Solution.solution(Solution, 0))
    pass


if __name__ == '__main__':
    test_00435()
