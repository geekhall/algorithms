# 00617. Merge Two Binary Trees

  _Read this in other languages:_
    [_English_](README.md)

<p>给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。
</p>

<p><strong>Note:</strong> The merging process must start from the root nodes of both trees.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/02/05/merge.jpg" style="width: 600px; height: 163px;" />
<pre>
<strong>Input:</strong> root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
<strong>Output:</strong> [3,4,5,5,4,null,7]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> root1 = [1], root2 = [1,2]
<strong>Output:</strong> [2,2]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in both trees is in the range <code>[0, 2000]</code>.</li>
	<li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li>
</ul>
