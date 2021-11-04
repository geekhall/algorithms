#!/usr/bin/env python3
# -*- coding:UTF-8 -*-

class Solution:

    # Solution 1
    # O(nlogn) time, O(1) space
    # 使用双指针
    # 将原数组排序后使用双指针向内遍历查找
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        i = 0
        j = len(numbers) - 1
        while i < j:
            if numbers[i] + numbers[j] == target:
                return [i+1, j+1]
            elif numbers[i] + numbers[j] < target:
                i += 1
            elif numbers[i] + numbers[j] > target:
                j -= 1
        return []

    # Solution 2
    def twoSum2(self, numbers: list[int], target: int) -> list[int]:
        dct = {}
        for i,v in enumerate(numbers, start=1):
            if target-v in dct :
                return [dct[target-v],i]
            dct[v]=i

if __name__ == '__main__':
    test_arr = [2,6,7,9,13,15,19]
    target = 20
    solution = Solution()
    print(solution.twoSum(test_arr, target))

