
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

    public static void heapInsert(int[] arr, int index){
        while(arr[index] > arr[(index - 1) / 2]){ // 子节点大于父节点
            swap(arr, index, (index - 1) / 2); // 交换子节点和父节点
            index = (index - 1) / 2;
        }
    }

    public static void heapSort(int[] arr){
        if (arr == null || arr.length < 2) {
            return;
        }

        for (int i = 0; i<arr.length; i++){
            heapInsert(arr, i);
        }

        int heapSize = arr.length;
        swap(arr, 0, --heapSize);
        while(heapSize > 0) {
            heapify(arr, 0, heapSize);
            swap(arr, 0, --heapSize);
        }
    }
    public static void swap(int[] arr, int i, int j){
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    public static void printArray(int[] arr){
        for (int i = 0; i<arr.length; i++){
            if (i==0) {
                System.out.print("[");
            }
            System.out.print(arr[i]);
            if ( i == arr.length - 1 ) {
                System.out.println("]");
            } else {
                System.out.print(", ");
            }
        }
    }
    public static void main(String[] args) {
        MaxHeap<Integer> maxHeap = new MaxHeap<Integer>(100);
        System.out.println(maxHeap.size());
        int[] arr = {7,2,5,6,12,3,8};
        printArray(arr);
        heapSort(arr);
        printArray(arr);

    }
}