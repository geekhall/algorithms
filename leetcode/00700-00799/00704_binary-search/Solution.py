#!/usr/bin/env python3
# -*- coding:UTF-8 -*-

class Solution:

    # Solution 1
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1
        while left <= right:    # 易错点：这里条件不能是 '<'， 当数组只有一个元素，且元素等于target时，返回不正确
            middle = left + ((right - left) >> 1) # 使用 >> 效率更高一些
            if nums[middle] == target:
                return middle
            elif nums[middle] > target:
                right = middle - 1
            else:
                left = middle + 1
        return -1

    # Solution 2
    def solution2(self, numbers: list[int], target: int) -> list[int]:
        return []

if __name__ == '__main__':
    test_data = [2,6,7,9,13,15,19]
    target = 20
    solution = Solution()
    print(solution.solution1(test_data, target))

