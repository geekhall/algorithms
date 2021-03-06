# 00020. Valid Parentheses

  _Read this in other languages:_
    [_English_](README.md)

<p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
</ol>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;()&quot;
<strong>Output:</strong> true
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;()[]{}&quot;
<strong>Output:</strong> true
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;(]&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li>
</ul>


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
