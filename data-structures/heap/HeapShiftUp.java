
public class HeapShiftUp<T extends Comparable> {
    protected T[] data;
    protected int count;
    protected int capacity;

    public HeapShiftUp(int capacity) {
        data = (T[])new Comparable[capacity + 1];
        count = 0;
        this.capacity = capacity;
    }

    public int size(){
        return count;
    }

    public boolean isEmpty() {
        return count == 0;
    }

    // 向大根堆中插入一个新的元素 item
    public void insert(T item) {
        assert count + 1 <= capacity;
        data[count+1] = item;
        count++;
        shiftUp(count);
    }

    // 交换堆中索引为i和j的两个元素
    private void swap(int i, int j) {
        T t = data[i];
        data[i] = data[j];
        data[j] = t;
    }

    // 大根堆 Shift Up
    private void shiftUp(int k) {
        while (k>1 && data[k/2].compareTo(data[k]) < 0) {
            swap(k, k/2);
            k /= 2;
        }
    }
    // 某个数在index位置， 能否往下移动
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

    public static void swap(int[] arr, int i, int j){
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    public static void main(String[] args){
        HeapShiftUp<Integer> heapShiftUp = new HeapShiftUp<Integer>(100);
        int N = 50;
        int M = 100;
        for (int i = 0; i<50; i++) {
            heapShiftUp.insert( Integer.valueOf((int)(Math.random() * 100)));
        }
        System.out.println(heapShiftUp.size());
    }

}