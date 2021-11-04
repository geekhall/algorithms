# 00344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

## Example 1

```txt
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

## Example 2

```txt
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

## Constraints

```txt
1 <= s.length <= 105
s[i] is a printable ascii character.
```

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

## 题目大意

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符

## Solution 1

使用异或可以实现交换操作，但是需要注意的一点是当异或的两个操作数处在同一块内训地址时，
会将改地址清零。

### Go

```go
func reverseString(s []byte) {
 length := len(s)
 for i := 0; i < length/2; i++ {
  s[i] = s[i] ^ s[length-1-i]
  s[length-1-i] = s[i] ^ s[length-1-i]
  s[i] = s[i] ^ s[length-1-i]
 }
}
```

## Solution 2

双指针

### Go

```go
func reverseString(s []byte)  {
    for l, r := 0, len(s)-1; l < r; l, r = l+1, r-1 {
  s[l], s[r] = s[r], s[l]
 } 
}
```
