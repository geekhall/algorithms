# 10000. Admission Score

给定一个浮点数数组 scores，其中 scores[i] 表示第 i 个考生的高考分数。
现在请你求出某大学的录取分数线，该大学的录取分数线恰好为将所有考生按高考分数由高到低排序后第 k 名考生的高考分数。

## Example 1

```txt
输入：
k = 5, scores = [150,300,400,500,600,700,550,450,450,500,555.5]

输出：500

解释：
将所有考生按高考分数由高到低排序后第 5 名考生的高考分数为 500。
```

## Example 2

```
输入：
k = 4, scores = [723,699,510,488.5]

输出：488.5

解释：
将所有考生按高考分数由高到低排序后第 4 名考生的高考分数为 488.5。
```

## Constraints

```txt
1 <= k <= scores.lengths <= 10^5
0 <= scores[i] <=750
```

## Solution 1

### C

```c
int partition(double arr[], int low, int high){
    double key;
    key = arr[low];
    while(low<high){
        while(low <high && arr[high]>= key )
            high--;
        if(low<high)
            arr[low++] = arr[high];
        while( low<high && arr[low]<=key )
            low++;
        if(low<high)
            arr[high--] = arr[low];
    }
    arr[low] = key;
    return low;
}
void quick_sort(double arr[], int start, int end){
    int pos;
    if (start<end){
        pos = partition(arr, start, end);
        quick_sort(arr,start,pos-1);
        quick_sort(arr,pos+1,end);
    }
    return;
}


double getAdmissionLine(int k, double* scores, int scoresSize){
    double temp = 0.0;
    quick_sort(scores,0, scoresSize-1);
    return scores[scoresSize - k];
}

```
