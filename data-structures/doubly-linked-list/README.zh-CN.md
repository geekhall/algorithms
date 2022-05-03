# 双向链表

_Read this in other languages:_
[_English_](README.md)

## 定义

双向链表是在单链表的每个结点中，再设置一个指向其前驱结点的指针。所以在双向链表中的结点都有两个指针域：一个指向直接后继，一个指向直接前驱。

## 代码实现

### C

```c
typedef struct DulNode{
    ElemType data;
    struct DulNode *prior;  /* 直接前驱指针 */
    struct DulNode *next;   /* 直接后继指针 */
}DulNode, *DuLinkList;
```

### Go

```go
type ListNode struct {
	Val  int
	Next *ListNode
    Prev *ListNode
}
```

## 图示

![](https://gitee.com/geekhall/pic/raw/main/img/20211111115357.png)

## 常用操作

### 插入

双向链表的插入操作并不复杂，但是顺序很重要：

```c
s->prev = p;            /* S的prev指向P */
s->next = p-next;       /* S的next指向P->next */
s->next->prev = s;      /* P指向的next节点的prev指向P */
p->next = s;            /* P的next指向s */
```

![](https://gitee.com/geekhall/pic/raw/main/img/20211111132050.png)

### 删除

核心代码

```c
p->prev->next = p->next;
p->next->prev = p->prev;
free(p);
```

![](https://gitee.com/geekhall/pic/raw/main/img/20211111133449.png)
