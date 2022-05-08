
class Solution extends VersionControl {
    
    
    public int firstBadVersion(int n) {
        int start = 1;
        int end = n;
        int pos = 0;
        while ( start <= end ) {
            int middle = start + ((end - start)>>1);
            if ( isBadVersion(middle) ) {
                pos = middle;
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        return pos;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int result = solution.firstBadVersion(500);
        System.out.println(result);
    }
}