# 希尔排序

_Read this in other languages:_
[_English_](README.md)

希尔排序是希尔（Donald Shell）于1959年提出的一种排序算法，

希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序。


## 算法步骤

希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；

随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。

## 图解

![](https://gitee.com/geekhall/pic/raw/main/img/20220503145742.png)
