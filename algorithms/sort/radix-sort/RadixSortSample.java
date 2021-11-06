public class RadixSortSample{
    public static void radixSort(int[] arr){
        if (arr == null || arr.length < 2){
            return;
        }
        radixSort(arr, 0, arr.length -1, maxbitx(arr));
    }

    public static void radixSort(int[] arr, int L, int R, int digit){
        final int radix = 10;
        int i = 0, j=0;
        // 有多少个数准备多少个辅助空间
        int[] bucket = new int[R - L + 1];
        for (int d = 1; d <= digit; d++){ // 有多少位就进出几次
            // 10个空间
            // count[0] 当前为（d位）是0的数字有多少个
            // count[1] 当前为（d位）是0和1的数字有多少个
            // count[2] 当前为（d位）是0，1和2的数字有多少个
            // count[i] 当前为（d位）是0~i的数字有多少个
            int[] count = new int[radix];
            for (i = L; i <= R; i++){
                j = getDigit(arr[i], d);
                count[j]++;
            }
        }

    }

    public static int maxbits(init[] arr){
        int max = Integer.MIN_VALUE;
        fpr (int i = 0; i < arr.length; i++){
            max = Math.max(max, arr[i]);
        }
        int res = 0;
        while (max != 0) {
            res++;
            max /= 10;
        }
        return res;
    }
}