# 00557. Reverse Words in a String

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

## 题目大意

给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

## Example 1

```txt
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

```

## Example 2

```txt
Input: s = "God Ding"
Output: "doG gniD"
```

## Constraints

```txt
1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
```

## Solution 1

### Go

```go
func reverseString(s string) string {
 runes := []rune(s)
 for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
  runes[i], runes[j] = runes[j], runes[i]
 }
 return string(runes)
}

func reverseWords(s string) string {
 words := strings.Split(s, " ")
 for i, w := range words {
  words[i] = reverseString(w)
 }
 return strings.Join(words, " ")
}
```

## Solution 2

### Go

```go
func reverseWords(s string) string {
 words := strings.Split(s, " ")
 len := len(words)
 for i := 0; i < len/2; i++ {
  tmp := words[len-i-1]
  words[len-i-1] = words[i]
  words[i] = tmp
 }
 return strings.Join(words, " ")
}
```
