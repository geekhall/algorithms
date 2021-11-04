# 1. 关于算法的时间/空间复杂度

_Read this in other languages:_
[_English_](README.en-US.md)

|Big-O|名称|描述|
|---|---|---|
|O(1)|恒定（Constant）|**最好**，程序执行的结果与输入数据量大小无关，总是需要相同的时间/空间量，例如：用索引查找数组元素。|
|O(logN)|对数（Constant）|**非常好**，时间或空间性能与输入呈对数比例增长。即使对于大量的数据，这也是非常快的。例子：二进制搜索。|
|O(n)|线性（Linear）|**良好**，时间或空间性能与输入呈对数比例增长。例子：顺序搜索。|
|O(NlogN)|线性化（Linearithmic）|**不错**，比线性略差，但也不坏。|
|O(N^2))|平方（Quadratic）|**较慢**，时间或空间性能与输入呈平方比例增长。通常使用两层嵌套循环的算法都属于此类，如：插入排序、冒泡排序。|
|O(N^3)|立方（Cubic）|**不佳**，时间或空间性能与输入呈平方比例增长。如：矩阵乘法。|
|O(2^N)|指数级（Exponential）|**非常差**，输入的少量增加即可使得运行事件加倍。如：旅行推销员问题。|
|O(N!)|阶乘（Factorial）|**不能忍受**，做任何事情都需要一百万年的时间。|

## 1.1 O(1) - 固定时间/空间（Constant）

O(1)表示无论输入的大小怎样，一个算法都将在相同的时间或空间内完成。

```java
int n = 1000;
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210919_o_01.png)

## 1.2 O(n) - 线性

O(1)表示一个算法的时间或空间与输入呈线性比例增长。

```java
for (int i =0; i < n; i++) {
    // some constant time operation
}
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210919_o_02.png)

## 1.3 O(n^2) - 平方

O(n^2)表示一个算法的时间或空间性能与输入呈平方比例增长。

```java
for (int i = 0; i < n; i++) {
  for (int j = 0; j < n; j++) {
    // some constant time operation
  }
}
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210919_o_03.png)

## 1.4 O(log n) - 对数

O(log n) 表示一个算法的时间或空间性能与输入呈对数比例增长。

```java
for (int i = 0; i < n; i *= 2) {
    // some constant time operation
}
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210919_O_04.png)

## 1.5 O(NlogN) 线性化（linearithmic）

线性化算法对于非常大的数据量来说但是比较好的，比如快速排序、归并排序、堆排序等。

```java
for (int i = 0; i < n; i++ )
    for (int j = 1; j < n; j *= 2) {
        // some constant time operation
    }
}
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210919_O_05.png)

总结：
算法的复杂度分析可以帮助你理解一个算法的事件或者空间性能，上面各种复杂度放在一起比较可以有一个直观的认识：

![](https://gitee.com/geekhall/pic/raw/main/img/20210919_O_06.png)
