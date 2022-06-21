# 堆

_Read this in other languages:_
[_English_](README.md)

堆(Heap)是计算机科学中一类特殊的数据结构的统称。 堆通常是一个可以被看做一棵完全二叉树的数组对象。
堆中某个节点的值总是不大于或不小于其父节点的值。 堆总是一棵完全二叉树。

堆满足下列性质：

* 堆中某个节点的值总是不大于或不小于其父节点的值。
* 堆总是一棵完全二叉树。

堆是利用完全二叉树的结构来维护一组数据，然后进行相关操作，一般的操作进行一次的时间复杂度在 O(1)~O(logn) 之间，堆通常用于动态分配和释放程序所使用的对象。

若为优先队列的使用场景，普通数组或者顺序数组，最差情况为 O(n^2)，堆这种数据结构也可以提高入队和出队的效率。

## 堆结构

![Heap Structure](https://gitee.com/geekhall/pic/raw/main/img/20211111145532.png)

优先级队列，就是堆

## Heapfy

堆化（Heapfy）的过程，就是将新的元素插入大根堆或者小根堆并且维持堆结构的过程。

核心代码

```java
// 某个数在index位置， 能否往下移动(ShiftDown)
public static void heapify(int[] arr, int index, int heapSize) {
    int left = index * 2 + 1; // 左孩子的下标
    while (left < heapSize) { // 下方还有孩子的时候
        // 两个孩子中，谁的值大，把下标给largest
        int largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
        // 父和孩子之间，谁的值大，把下标给largest
        largest = arr[largest] > arr[index] ? largest : index;
        if (largest == index) {
            break;
        }
        swap(arr, largest, index);
        index = largest;
        left = index * 2 + 1;
    }
}

```
## 相关题目
* 1642. Furthest Building You Can Reach
