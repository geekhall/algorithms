# 00567. Permutation in String

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

## 题目大意

给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

换句话说，s1 的排列之一是 s2 的 子串 。

## Example 1

```txt
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```

## Example 2

```txt
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```

## Constraints

```txt
1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
```

## Solution 1

滑动窗口

### Go

```go
func checkInclusion(s1 string, s2 string) bool {
 n1, n2 := len(s1), len(s2)
 if n1 > n2 {
  return false
 }
 var m1, m2 [26]int
 for i := 0; i < n1; i++ {
  m1[s1[i]-'a']++
  m2[s2[i]-'a']++
 }
 if m1 == m2 {
  return true
 }
 for i := n1; i < n2; i++ {
  m2[s2[i]-'a']++
  m2[s2[i-n1]-'a']--
  if m1 == m2 {
   return true
  }
 }
 return false
}

```
