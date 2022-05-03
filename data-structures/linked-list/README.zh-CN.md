# 链表

_Read this in other languages:_
[_English_](README.md)

## 定义

链表是由一组不必连续的内存结构，按特定的顺序链接在一起的抽象数据类型。

## 代码实现

### C

```c
typedef struct Node{
    ElemType data;
    struct Node *next;   /* 后继指针 */
}Node, *LinkedList;
```

### Go

```go
type ListNode struct {
	Val  int
	Next *ListNode
}
```

## 图示

![](https://gitee.com/geekhall/pic/raw/main/img/20211111115330.png)

## 链表基本操作

链表的核心操作集有 3 种：插入、删除、查找/遍历。

### 插入

![](https://gitee.com/geekhall/pic/raw/main/img/20211111122827.png)

#### 核心代码

```C
    s->prior = p;          /* 把 p 赋值给 s 的前驱 */
    s->next = p->next;     /* 把 p->next 赋值给 s 的后继 */
    p->next->prior = s;    /* 把 s 赋值给 p->next 的前驱 */
    p->next = s;           /* 把 s 赋值给 p 的后继 */
```

### 删除

#### 核心代码

```C
p->prior->next = p->next;    /* 把 p->next 赋值给 p->prior 的后继 */
p->next->prior = p->prior;   /* 把 p->prior 赋值给 p->next 的前驱 */
free(p);
```

![](https://gitee.com/geekhall/pic/raw/main/img/20211111122845.png)

### 查找、遍历

核心代码

```c
while(p->next != null) {
    // do something
}
```

## 应用

LRU Cache
