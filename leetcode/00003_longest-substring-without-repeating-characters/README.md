# 00000. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

## Example 1

```txt
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

## Example 2

```txt
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

## Example 3

```txt
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## Example 4

```txt
Input: s = ""
Output: 0
```

## Constraints

```txt
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
```

## Solution 1

### Go

```go
func lengthOfLongestSubstring(s string) int {
 // HashMap 记录每个字符是否出现过
 m := map[byte]int{}
 // 右指针初始化为-1
 ans, right := 0, -1
 n := len(s)
 // 左指针向右遍历
 for i := 0; i < n; i++ {
        // 删除Map中左侧的元素
  if i != 0 {
   delete(m, s[i-1])
  }
        // 右指针向右移动直到遇到重复元素，并向map中添加元素
  for ; right+1 < n && m[s[right+1]] == 0; right++ {
   m[s[right+1]]++
  }

        // 保存每轮的最大无重复次数
  if ans < right-i+1 {
   ans = right - i + 1
  }
 }
 return ans
}
```
