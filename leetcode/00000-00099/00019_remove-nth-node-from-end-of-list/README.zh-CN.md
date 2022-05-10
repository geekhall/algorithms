# 00019. Remove Nth Node From End of List

  _Read this in other languages:_
    [_English_](README.md)

<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], n = 2
<strong>Output:</strong> [1,2,3,5]
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> head = [1], n = 1
<strong>Output:</strong> []
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> head = [1,2], n = 1
<strong>Output:</strong> [1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>sz</code>.</li>
	<li><code>1 &lt;= sz &lt;= 30</code></li>
	<li><code>0 &lt;= Node.val &lt;= 100</code></li>
	<li><code>1 &lt;= n &lt;= sz</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow up:</strong> Could you do this in one pass?</p>


## Solution 1

### Go

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
 dummy := &ListNode{0, head}
 left, right := dummy, head
 // move right n step
 for i := 0; i < n; i++ {
  right = right.Next
 }

 // 移动left和right指针
 // 当right指向链表的最末尾后的nil时
 // left则指向了要删除的前一个元素
 // for right != nil {
 //  right = right.Next
 //  left = left.Next
 // }
 for ; right != nil; right = right.Next {
  left = left.Next
 }

 // 删除Head时
 // if left.Next == head {
 //  head = head.Next
 // } else {
 //  left.Next = left.Next.Next
 // }
 left.Next = left.Next.Next

 return dummy.Next
}
```

## Solution 2

### Go

```go
func removeNthFromEnd(head *ListNode, n int) *ListNode {
 nodes := []*ListNode{}
 dummy := &ListNode{0, head}
 for node := dummy; node != nil; node = node.Next {
  nodes = append(nodes, node)
 }
 target := len(nodes) - n
 nodes[target-1].Next = nodes[target].Next
 return dummy.Next
}

```
