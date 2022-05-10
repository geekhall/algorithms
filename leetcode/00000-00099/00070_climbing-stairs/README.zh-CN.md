# 00070. Climbing Stairs

  _Read this in other languages:_
    [_English_](README.md)

<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 45</code></li>
</ul>


<p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p>

<p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<strong>Explanation:</strong> There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 45</code></li>
</ul>

## Solution 1

递归

### Go

```go
func climbStairs(n int) int {
 if n <= 2 {
  return n
 }
 return climbStairs(n-1) + climbStairs(n-2)
}

```

## Solution 2

因为最后一步可以上一级或者上两级台阶，

所以，不难得出：f(n) = f(n-1) + f(n-2)

类比 000509 斐波那契数列的所有解法本题均适用

```go
func climbStairs(n int) int {
 if n == 0 {
  return 0
 }
 if n == 1 {
  return 1
 }
 p := 1
 q := 1
 r := 2
 for i := 2; i < n; i++ {
  p = q
  q = r
  r = p + q
 }
 return r
}
```

## Solution 3

矩阵乘法

![](https://gitee.com/geekhall/pic/raw/main/img/20211005155649.png)

```go
func climbStairs(n int) int {
 if n == 0 {
  return 0
 }
 if n == 1 {
  return 1
 }
 p := 1
 q := 1
 r := 2
 for i := 2; i < n; i++ {
  p = q
  q = r
  r = p + q
 }
 return r
}
```

## Solution 4

之前的方法我们已经讨论了 f(n)f(n) 是齐次线性递推，
根据递推方程 $f(n) = f(n - 1) + f(n - 2)f(n)=f(n−1)+f(n−2)$，我们可以写出这样的特征方程：

$$x^2 = x + 1$$

求得：$x1=\frac{1+\sqrt{5}}{2}$ ，  $x2=\frac{1-\sqrt{5}}{2}$ ，设通解为：$f(n)=c_1x_1^n + c_2x_2^n$，代入初始条件$f(1) = 1$, $f(2) = 1$， 得 $c_1 = \frac{1}{\sqrt{5}}$ ,$c_2 = -\frac{1}{\sqrt{5}}$， 我们得到了这个递推数列的通项公式：
$$f(n) = \frac{1}{\sqrt{5}}[(\frac{1+\sqrt{5}}{2})^{n+1}-(\frac{1-\sqrt{5}}{2})^{n+1}]$$

接着我们就可以通过这个公式直接求第n项了。

```go
func climbStairs(n int) int {
 sqrt5 := math.Sqrt(5)
 pow1 := math.Pow((1+sqrt5)/2, float64(n+1))
 pow2 := math.Pow((1-sqrt5)/2, float64(n+1))
 return int(math.Round((pow1 - pow2) / sqrt5))
}
```
