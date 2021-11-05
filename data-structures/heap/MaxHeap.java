
class MaxHeap<T> {
    private T[] data;
    private int count;

    // 构造函数，构造一个空堆，可容纳capacity个元素
    public MaxHeap(int capacity){
        data = (T[]) new Object[capacity + 1];
        count = 0;
    }

    // 返回堆中元素的个数
    public int size(){
        return count;
    }

    public boolean isEmpty(){
        return count == 0;
    }

    public static void main(String[] args) {
        MaxHeap<Integer> maxHeap = new MaxHeap<Integer>(100);
        System.out.println(maxHeap.size());
    }
}