# 排序

_Read this in other languages:_
[_English_](README.md)

![](https://gitee.com/geekhall/pic/raw/main/img/20210918_algo_all.png)

## 1 冒泡排序

依次比较相邻的两个数，较小数放前面，较大数放后面，直到最大数放在最后， 然后重复操作，最后排序为升序。

演示：

![](https://gitee.com/geekhall/pic/raw/main/img/bubbleSort.gif)

第一层循环为重复的次数，循环次数为array.length-1

第二次循环为依次比较相邻的数，循环次数为array.length-1-i

```java
for (int i = 0; i < arr.length - 1; i++){
  for (int j = 0; j<arr.length - i -1; j++){
    if (arr[j] > arr[j+1]){
      swap(arr, j, j+1);
    }
  }
}
```

## 2 选择排序

选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。

* 算法步骤

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。

* 动图演示
![](https://gitee.com/geekhall/pic/raw/main/img/selectionSort.gif)

```java
public void sort(int[] arr) {
  // 总共需要N-1轮比较
  for(int i = 0; i <arr.length - 1; i++){
    int min = i;    // 最小值位置

    // 每轮需要比较的次数（N-i）
    for (int j = i+1; j<arr.length; j++) {
      if (arr[j]< arr[min]){
        min = j;    // 记录最小值索引
      }
    }

    // 每轮将找到的最小值和i位置所在的值进行交换
    if (i != min){
      swap(arr, i, min);
    }
  }
}
```

## 3 插入排序

插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，

插入排序是一种最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

演示：
![](https://gitee.com/geekhall/pic/raw/main/img/insertionSort.gif)

```java
public void sort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {   // 从第2个元素开始遍历，默认第一个元素为有序的。
        int key = arr[i];   // 记录要插入的数据

        // 从已经排序的序列的最右边开始比较，找到比其小的数
        int j = i;
        while (j > 0 && key < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }
        // 存在比其小的数，插入
        if (j != i)
            arr[j] = key;
    }
}
```

[6, 1, 2, 7, 9, 3, 4, 5, 10, 8]

1. 第一轮：

```txt
i = 1
key = arr(1) = 1

j 由 1 循环至 0
[[6], (1), 2, 7, 9, 3, 4, 5, 10, 8]
满足j>0并且key<6, 则：
arr[j] = arr[j-1]
[[6], (6), 2, 7, 9, 3, 4, 5, 10, 8]
j--;(执行后j=0)

j(0)<i(1) ,说明存在比其小的数，则执行插入
arr[j] = key;
[[1], (6), 2, 7, 9, 3, 4, 5, 10, 8]
```

2. 第二轮

```txt
i = 2;
key = arr(2) = 2
j初始=i=2，由右侧向左遍历
[[1, 6], (2), 7, 9, 3, 4, 5, 10, 8]

满足key < arr[j - 1] ，即2<arr(1) = 6, 则：
arr[j] = arr[j-1]
[[1, 6], (6), 7, 9, 3, 4, 5, 10, 8]
继续向左遍历j=1时，不满足key < arr[j - 1] ，即2< arr(0) = 1 条件不成立，因此本轮循环结束后j=1
插入：
[[1, 2, 6], 7, 9, 3, 4, 5, 10, 8]

```

## 4 希尔排序

通过增量(gap)将元素两两分组，对每组使用直接插入排序算法排序；增量(gap)逐渐减少，当增量(gap)减至1时，整个数据恰被分成一组，最后进行一次插入排序，整个数组就有序了。

演示：

第一轮：

![](https://gitee.com/geekhall/pic/raw/main/img/shellSort1.gif)

第二轮：

![](https://gitee.com/geekhall/pic/raw/main/img/shellSort2.gif)

第三轮：

![](https://gitee.com/geekhall/pic/raw/main/img/shellSort3.gif)

参考[https://zhuanlan.zhihu.com/p/122472667](https://zhuanlan.zhihu.com/p/122472667)

代码：

```java
public void sort(int[] arr) {
    int length = arr.length;
    int temp;
    for (int step = length / 2; step >= 1; step /= 2) {
        for (int i = step; i < length; i++) {
            temp = arr[i];
            int j = i - step;
            while (j >= 0 && arr[j] > temp) {
                arr[j + step] = arr[j];
                j -= step;
            }
            arr[j + step] = temp;
        }
    }
}
```

## 5 归并排序

演示：
![](https://gitee.com/geekhall/pic/raw/main/img/mergeSort.gif)

## 6 快速排序

算法思想：选择序列中一个元素作为基准元素base，维护两个指针front和back分别指向序列的首尾，

首先用front指向的元素和base进行比较，如果大于base，则与back指向的元素进行交换，否则指针右移；

然后比较back指向的元素是否小于base，返回为true则与front指向的元素进行交换，否则指针左移。

前后交替这样就能保证较小数都放在base的左边，较大数在base的右边，然后递归调用对各部分继续排序，直到最后排好序。

```java
public void sort(int[] sourceArray) {
    quickSort(sourceArray, 0, sourceArray.length - 1);
}

private void quickSort(int[] arr, int left, int right) {

    if (left > right)
        return;

    int i = left;
    int j = right;
    int pivot = arr[left];  // 取第一个元素作为基准

    while (i!=j){
        while (i<j && arr[j] >= pivot)  // 这里需要注意：一定要右侧先开始移动！
            j--;
        while (i<j && arr[i] <= pivot)
            i++;
        if (i<j)
            swap(arr, i, j);
    }
    arr[left] = arr[i];
    arr[i] = pivot;
    System.out.println(Arrays.toString(arr));
    quickSort(arr, left, i - 1);
    quickSort(arr, i+1, right);
}
```

```txt
[6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
```

1. 第一轮：

![](https://gitee.com/geekhall/pic/raw/main/img/20210918_alog_1.png)

```txt
基准为6：左边找个大的，右边找个小的：
[6, 1, 2, (7), 9, 3, 4, (5), 10, 8]
交换后：
[6, 1, 2, (5), 9, 3, 4, (7), 10, 8]
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210918_algo_2.png)

```txt
继续左边找个大的，右边找个小的：
[6, 1, 2, 5, (9), 3, (4), 7, 10, 8]
交换后：
[6, 1, 2, 5, (4), 3, (9), 7, 10, 8]
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210918_algo_3.png)

```txt
交换pivot和patation index
[（6）, 1, 2, 5, 4, (3), 9, 7, 10, 8]
交换后：
[（3）, 1, 2, 5, 4, (6), 9, 7, 10, 8]
这样交换之后，就以pivot（6）为分界，左边都比6小，右边都比6大
[3, 1, 2, 5, 4]  6, [9, 7, 10, 8]
```

![](https://gitee.com/geekhall/pic/raw/main/img/20210918_algo_4.png)

然后两边再次递归使用快速排序，知道每个patation都只有一个元素为止。

2. 第二轮(左边)：

```txt
[3, 1, 2, 5, 4]

右边找个小的，左边没找到，i和j碰头在元素2上面
[3, 1, (2), 5, 4]
则交换（2）和pivot（3）后：
[2, 1, 3, 5, 4]
分成
[2, 1], 3, [5, 4]
```

3. 第三轮(左边)：

```txt
[2, 1]
交换后：
[1, 2]
```

4. 第四轮(左边)：

```txt
[5, 4]
交换后：
[4, 5]
```

至此，第一轮左边patition部分均已排序完成

5. 第五轮（右边）：

```txt
[9, 7, 10, 8]

[9, 7, (10), (8)]
交换后
[9, 7, (8), (10)]
右侧继续移动后，找到patition index元素，与pivot进行交换
[(9), 7, (8), 10]
交换后：
[(8), 7, (9), 10]

[8, 7], 9 [10]
```

6. 第六轮（右边）：

```txt
[8, 7]
交换后：
[7, 8]
```

至此，数组排序完成：
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

## 7 堆排序

演示：
![](https://gitee.com/geekhall/pic/raw/main/img/heapSort.gif)

## 8 计数排序

![](https://gitee.com/geekhall/pic/raw/main/img/countingSort.gif)

## 9 桶排序![](https://gitee.com/geekhall/pic/raw/main/img/bucketSort.png)

![](https://gitee.com/geekhall/pic/raw/main/img/bucketSort.png)

## 10 基数排序

![](https://gitee.com/geekhall/pic/raw/main/img/radixSort.gif)
