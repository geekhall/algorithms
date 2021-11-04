
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

class Solution{
    
    // Solution 1
    // O(n) time, O(n) space 
    // 使用一个HashMap来存储原数组[value, index]
    // 然后查看target - number是否在HashMap中存在
    public int[] twoSum(int[] numbers, int target) {
        Map<Integer, Integer> numbersMap = new HashMap<>();
        for (int i = 0; i < numbers.length; i++) {
            int another = target - numbers[i];
            if (numbersMap.containsKey(another)) {
                return new int[]{numbersMap.get(another) + 1, i+1};
            }
            numbersMap.put(numbers[i], i);
        }
        return new int[]{};
    }

    // Solution 2
    // O(nlogn) time, O(1) space
    // You can use the two pointer method. 
    // create two pointers i and j where i = 0 and j = len(array)-1. 
    // If the sum is smaller than target, increment i, if larger, decrement j. 
    // If equal, return the indices.。
    // 使用双指针向内遍历查找
    public int[] twoSum2(int[] numbers, int target) {
        // [num, index]
        int i=0;
        int j = numbers.length - 1;
        while( i < j ){
            if (numbers[i] + numbers[j] == target) {
                return new int[]{i+1, j+1};
            } else if (numbers[i] + numbers[j] < target) {
                i++;
            } else {
                j--;
            }
        }
        return new int[]{};
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] test_arr = {2,3,7,9};
        int target = 9;
        int[] res1 = solution.twoSum(test_arr, target);
        System.out.println(Arrays.toString(res1));
    }
}