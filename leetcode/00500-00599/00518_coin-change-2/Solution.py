#!/usr/bin/env python3
# -*- coding:UTF-8 -*-
'''
 ID:    00518
 Title: Coin Change 2
 Difficulty: Medium
 Description: You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 *
 * Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * The answer is guaranteed to fit into a signed 32-bit integer.
 *
 * Example 1:
 *
 * Input: amount = 5, coins = [1,2,5] Output: 4 Explanation: there are four ways to make up the amount: 5=5 5=2+2+1 5=2+1+1+1 5=1+1+1+1+1
 *
 * Example 2:
 *
 * Input: amount = 3, coins = [2] Output: 0 Explanation: the amount of 3 cannot be made up just with coins of 2.
 *
 * Example 3:
 *
 * Input: amount = 10, coins = [10] Output: 1
 *
 * Constraints:
 *
 * 1 <= coins.length <= 300
 * 1 <= coins[i] <= 5000
 * All the values of coins are unique.
 * 0 <= amount <= 5000
'''

import numpy as np


class Solution:
    def change(self, amount: int, coins: list[int]) -> int:
        dp = np.zeros((amount+1, len(coins)+1), dtype=int)
        for col in range(len(coins)):
            dp[0][col] = 1

        for i in range(1, amount+1):
            for j in range(len(coins)-1, -1, -1):
                if i >= coins[j]:
                    dp[i][j] = dp[i-coins[j]][j] + dp[i][j+1]
                else:
                    dp[i][j] = dp[i][j + 1]
        return dp[amount][0]


def test_00518():
    print(Solution.change(Solution, 5, [1, 2, 5]))  # 4
    print(Solution.change(Solution, 3, [2]))    # 0
    print(Solution.change(Solution, 10, [10]))  # 1
    pass


if __name__ == '__main__':
    test_00518()
