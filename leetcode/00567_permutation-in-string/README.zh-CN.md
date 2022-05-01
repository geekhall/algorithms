# 00567. Permutation in String

  _Read this in other languages:_
    [_English_](README.md)

<p>
给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

换句话说，s1 的排列之一是 s2 的 子串 。
</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidbaooo&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> s2 contains one permutation of s1 (&quot;ba&quot;).
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s1 = &quot;ab&quot;, s2 = &quot;eidboaoo&quot;
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s1.length, s2.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li>
</ul>
