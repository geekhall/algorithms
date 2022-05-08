
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

class Solution{
    
    // Solution 1
    public int search(int[] nums, int target) {
        int left= 0;
        int right = nums.length -1;
        while(left <= right){
            int middle = left + ((right - left) >> 1);
            if (nums[middle] > target){
                right = middle - 1;
            } else if (nums[middle] < target) {
                left = middle + 1;
            } else {
                return middle;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] test_data = {2,3,7,9};
        int target = 9;
        int result = solution.search(test_data, target);
        System.out.println(result);
    }
}