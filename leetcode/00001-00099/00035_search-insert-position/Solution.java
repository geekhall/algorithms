
class Solution{
    
    
    public int searchInsert(int[] nums, int target) {
        int start = 0;
        int end = nums.length;
        while ( start < end ) {
            int middle = start + (end - start)/2;
            if (nums[middle] == target){
                return middle;
            }else if ( nums[middle] > target ) {
                end = middle;
            } else {
                start = middle + 1;
            }
        }
        return start;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] test_data = new int[]{1,3,5,6};

        int result = solution.searchInsert(test_data, 7);
        System.out.println(result);
    }
}