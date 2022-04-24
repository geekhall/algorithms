function threeSum(nums) {
    var res = [];
    if (nums.length < 2)
        return res;
    nums.sort();
    var right = nums.length - 1;
    for (var first = 0; first < nums.length - 1; first++) {
        if (first >= 1 && nums[first] === nums[first - 1])
            continue;
        var left = first + 1;
        while (left < nums.length - 1) {
            if (left > first + 1 && nums[left] === nums[left - 1])
                continue;
            if (nums[first] + nums[left] + nums[right] === 0) {
                res.push([nums[first], nums[left], nums[right]]);
                break;
            }
            else if (nums[first] + nums[left] + nums[right] > 0) {
                right -= 1;
            }
            else {
                left += 1;
            }
        }
    }
    return res;
}
;
function test_data() {
    var nums1 = [-1, 0, 1, 2, -1, 4];
    console.log(threeSum(nums1));
    var nums2 = [];
    console.log(threeSum(nums2));
    var nums3 = [0];
    console.log(threeSum(nums3));
    var nums4 = [0, 0, 0, 0];
    console.log(threeSum(nums4));
}
test_data();
