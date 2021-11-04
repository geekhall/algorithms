# 01313. Decompress Run-Length Encoded List

We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

## 题目大意

给你一个以行程长度编码压缩的整数列表 nums 。

考虑每对相邻的两个元素 [freq, val] = [nums[2*i], nums[2*i+1]] （其中 i >= 0 ），每一对都表示解压后子列表中有 freq 个值为 val 的元素，你需要从左到右连接所有子列表以生成解压后的列表。

请你返回解压后的列表。

## Example 1

```txt
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
```

## Example 2

```txt
Input: nums = [1,1,2,3]
Output: [1,3,3]
```

## Constraints

```txt
2 <= nums.length <= 100
nums.length % 2 == 0
1 <= nums[i] <= 100
```

## Solution 1

### Go

```go
func decompressRLElist(nums []int) []int {
 res := make([]int, 0)
 for i := 0; i < len(nums); i += 2 {
  freq := nums[i]
  val := nums[i+1]
  for j := 0; j < freq; j++ {
   res = append(res, val)
  }
 }
 return res
}
```
