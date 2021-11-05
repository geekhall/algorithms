public class HeapShiftDown<T extends Comparable> {
    protected T[] data;
    protected int count;
    protected int capacity;

    // 构造函数，构造一个空堆，可容纳capacity个元素
    public HeapShiftDown(int capacity){
        // 这里加1是指原来能装的元素的个数，那去掉0位，只能装capacity个元素。
        data = (T[]) new Comparable[capacity + 1];
        count = 0;
        this.capacity = capacity;
    }

    public int size(){
        return count;
    }

    public boolean isEmpty(){
        return count == 0;
    }

    /**
     * 向大根堆中插入元素item
     */
    public void insert(T item){
        assert count + 1 <= capacity;
        data[count + 1] = item;
        count++;
        shiftUp(count);
    }

    // 从大根堆中取出堆顶元素
    public T extractMax(){
        assert count>0;
        T ret = data[1];
        swap(1, count);
        count--;
        shiftDown(1);
        return ret;
    }

    // 获取大根堆中的堆顶元素
    public T getMax(){
        assert(count>0);
        return data[1];
    }

    /**
     * 交换堆中索引为i和j的两个元素。
     */
    public void swap(int i, int j){
        T t = data[i];
        data[i] = data[j];
        data[j] = t;
    }

    /**
     * shift up
     */
    private void shiftUp(int k){
        while (k>1 && data[k/2].compareTo(data[k])<0){
            swap(k, k/2);
            k /= 2;
        }
    }

    /**
     * shift down
     */
    private void shiftDown(int k){
        while( 2*k <= count){
            int j = 2*k;    // 在此轮循环中，data[k]和data[j]交换位置
            if ( j+1 <=count && data[j+1].compareTo(data[j])>0)
                j++;
            // data[j] 是 data[2*k]和data[2*k+1]中的最大值
            if( data[k].compareTo(data[j])>=0) break;
            swap(k, j);
            k = j;
        }
        System.out.println("shiftDown 结束");
    }

    public static void main(String[] args){
        HeapShiftDown<Integer> heapShiftDown = new HeapShiftDown<Integer>(100);
        int N = 100;    // 堆中元素的个数
        int M = 100;    // 堆中元素取值的范围（0，M）
        for (int i = 0; i<100; i++){
            heapShiftDown.insert( new Integer((int)(Math.random()*M)));
        }
        Integer[] arr = new Integer[N];
        // 将最大堆中的数据逐渐使用extractMax取出来
        // 取出来的顺序应该是按照从大到小的顺序取出来的
        for (int i = 0; i<N; i++){
            arr[i] = heapShiftDown.extractMax();
            System.out.print(arr[i] + " ");
        }

        // 确保arr数组是从大到小排列的
        for (int i=1; i<N; i++){
            assert arr[i-1] >= arr[i];
        }
    }
}