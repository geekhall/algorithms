# 00020. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

## 题目大意

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。

## Example 1

```txt
Input: s = "()"
Output: true
```

## Example 2

```txt
Input: s = "()[]{}"
Output: true
```

## Example 3

```txt
Input: s = "(]"
Output: false
```

## Example 4

```txt
Input: s = "([)]"
Output: false
```

## Example 5

```txt
Input: s = "{[]}"
Output: true
```

## Constraints

```txt
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
```

## Solution 1

使用Stack

### Go

```go
func isValid(s string) bool {
 stack := make([]byte, 0)
 for _, v := range []byte(s) {
  if v == '{' {
   stack = append(stack, '}')
  } else if v == '[' {
   stack = append(stack, ']')
  } else if v == '(' {
   stack = append(stack, ')')
  } else {
   // 第一种情况 是遍历字符串匹配的过程中，栈已经为空了，没有匹配的字符了，说明右括号没有找到对应的左括号 return false
   if len(stack) == 0 {
    return false
   }
   // 第二种情况 遍历字符串匹配的过程中，发现栈里没有我们要匹配的字符。所以return false
   if v != stack[len(stack)-1] {
    return false
   }
   // 出栈
   stack = stack[:len(stack)-1]
  }
 }
 // 第三种情况 此时我们已经遍历完了字符串，但是栈不为空，说明有相应的左括号没有右括号来匹配，所以return false，否则就return true
 if len(stack) > 0 {
  return false
 }
 return true
}
```
