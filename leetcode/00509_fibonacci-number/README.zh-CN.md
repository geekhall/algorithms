# 00509. Fibonacci Number

  _Read this in other languages:_
    [_English_](README.md)

<p>斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。</p>

<pre>
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n &gt; 1.
</pre>

<p>Given <code>n</code>, calculate <code>F(n)</code>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> 1
<strong>Explanation:</strong> F(2) = F(1) + F(0) = 1 + 0 = 1.
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3
<strong>Output:</strong> 2
<strong>Explanation:</strong> F(3) = F(2) + F(1) = 1 + 1 = 2.
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> 3
<strong>Explanation:</strong> F(4) = F(3) + F(2) = 2 + 1 = 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= n &lt;= 30</code></li>
</ul>

## Solution 1

普通递归

### Go

```go
func fib(n int) int {
 if n == 0 {
  return 0
 } else if n == 1 {
  return 1
 } else {
  return fib(n-1) + fib(n-2)
 }
}
```

## Solution 2

DP
![](https://assets.leetcode-cn.com/solution-static/509/509_fig1.gif)

```go
func fib(n int) int {
 p := 0
 q := 1
 r := 1
 if n == 0 {
  return 0
 } else if n == 1 {
  return 1
 } else {
  for i := 2; i < n; i++ {
   p = q
   q = r
   r = p + q
  }
 }
 return r
}
```

## Solution 3

矩阵快速幂
方法一的时间复杂度是 O(n)O(n)。使用矩阵快速幂的方法可以降低时间复杂度。

![](https://gitee.com/geekhall/pic/raw/main/img/20211005155649.png)

矩阵乘法

![](https://gitee.com/geekhall/pic/raw/main/img/20211005160705.png)

```go
type matrix [2][2]int

func multiply(a, b matrix) (c matrix) {
 for i := 0; i < 2; i++ {
  for j := 0; j < 2; j++ {
   c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j]
  }
 }
 return
}

func pow(a matrix, n int) matrix {
 ret := matrix{{1, 0}, {0, 1}}
 for ; n > 0; n >>= 1 {
  if n&1 == 1 {
   ret = multiply(ret, a)
  }
  a = multiply(a, a)
 }
 return ret
}

func fib(n int) int {
 if n < 2 {
  return n
 }
 res := pow(matrix{{1, 1}, {1, 0}}, n-1)
 return res[0][0]
}
```

## Solution 4

之前的方法我们已经讨论了 f(n)f(n) 是齐次线性递推，
根据递推方程 $f(n) = f(n - 1) + f(n - 2)f(n)=f(n−1)+f(n−2)$，我们可以写出这样的特征方程：

$$x^2 = x + 1$$

求得：$x1=\frac{1+\sqrt{5}}{2}$ ，  $x2=\frac{1-\sqrt{5}}{2}$ ，设通解为：$f(n)=c_1x_1^n + c_2x_2^n$，代入初始条件$f(1) = 1$, $f(2) = 1$， 得 $c_1 = \frac{1}{\sqrt{5}}$ ,$c_2 = -\frac{1}{\sqrt{5}}$， 我们得到了这个递推数列的通项公式：
$$f(n) = \frac{1}{\sqrt{5}}[(\frac{1+\sqrt{5}}{2})^n-(\frac{1-\sqrt{5}}{2})^n]$$

接着我们就可以通过这个公式直接求第n项了。

```go
func fib(n int) int {
    sqrt5 := math.Sqrt(5)
    p1 := math.Pow((1+sqrt5)/2, float64(n))
    p2 := math.Pow((1-sqrt5)/2, float64(n))
    return int(math.Round((p1 - p2) / sqrt5))
}

```
