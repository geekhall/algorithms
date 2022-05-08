
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

class Solution{
    
    // Solution 1
    // We can use two for loops to loop through the array 
    // and find the indices of the two numbers that add up to the target number.
    // 使用双循环，不推荐。
    public static int[] findTwoSum1(int [] nums, int target){
        for (int i = 0; i < nums.length - 1; i++){
            for (int j = i + 1; j<nums.length; j++){
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};
    } 

    // Solution 2 
    // O(n) time, O(n) space 
    // We can use a hash table to store the numbers as keys and the indices as values.
    // Then we check to see if the difference (target - number) is in the hash table. 
    // If it is, return both the index of the number and the index of the difference.//
    // 使用一个HashTable来存储原数组（值作为Key，索引作为Value）
    // 然后查看target - number是否在HashTable中存在，
    // 存在则直接返回HashTable的值，和原数组的索引值，否则继续处理。
    public static int[] findTwoSum2(int [] nums, int target){
        Map<Integer, Integer> numMap = new HashMap<>();

        for (int i = 0; i < nums.length; i++){
            int another = target - nums[i];
            if (numMap.containsKey(another)){
                return new int [] {numMap.get(another), i};
            } else {
                numMap.put(nums[i], i);
            }   
        }
        return new int[]{};
    }

    // Solution 3
    // O(nlogn) time, O(1) space
    // You can use the two pointer method. 
    // After sorting the array and creating an array of the numbers and their indices, 
    // create two pointers i and j where i = 0 and j = len(array)-1. 
    // If the sum is smaller than target, increment i, if larger, increment j. 
    // If equal, return the indices.。
    // 使用双指针
    // 将原数组排序后使用双指针向内遍历查找
    public static int[] findTwoSum3(int []nums, int target){        
        // [num, index]
        int[][] mergedNums = new int[nums.length][];
        for (int i = 0; i< nums.length; i++){
            mergedNums[i] = new int[2];
            mergedNums[i][0] = nums[i];
            mergedNums[i][1] = i;
        }
        Arrays.sort(mergedNums, new Comparator<int []>(){
            @Override
            public int compare(int[] a, int[] b) {
                // TODO Auto-generated method stub
                return a[0] - b[0];
            }
        });

        int i=0;
        int j = nums.length - 1;
        while( i < j ){
            if (mergedNums[i][0] + mergedNums[j][0] == target) {
                return new int[]{mergedNums[i][1], mergedNums[j][1]};
            } else if (mergedNums[i][0] + mergedNums[j][0] < target) {
                i++;
            } else if (mergedNums[i][0] + mergedNums[j][0] > target) {
                j--;
            }
        }
        return new int[]{};
    }
    public static void main(String[] args) {
        int[] test_arr = {2,3,7,9};
        int target = 9;
        int[] res1 = Solution.findTwoSum1(test_arr, target);
        int[] res2 = Solution.findTwoSum2(test_arr, target);
        int[] res3 = Solution.findTwoSum3(test_arr, target);
        System.out.println(Arrays.toString(res1));
        System.out.println(Arrays.toString(res2));
        System.out.println(Arrays.toString(res3));
    }
}