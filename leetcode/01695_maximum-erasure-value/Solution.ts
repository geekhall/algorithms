// You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.

// Return the maximum score you can get by erasing exactly one subarray.

// An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).

// time limit over
function maximumUniqueSubarray_limit_over(nums: number[]): number {
  let s = new Set<number>()
  let maxVal = Number.MIN_VALUE
  for (let i = 0; i < nums.length; i++) {
    s.clear()
    for (let j = i; j < nums.length; j++) {
      if (s.has(nums[j])) {
        s.clear()
        j--
        continue
      }
      s.add(nums[j])
      let max_i = Array.from(s).reduce((pre, cur) => pre + cur)
      if (max_i > maxVal)
        maxVal = max_i
    }
  }
  return maxVal
}
function maximumUniqueSubarray(nums: number[]): number {
  const map = new Map();
  let maxSum = 0, currSum = 0, left = 0;
  for (let right in nums) {
    // get index of previous occurrence of duplicate number
    // (returns undefined if number has not been encountered)
    const curr = map.get(nums[right]);
    // subtract element at left pointer from window sum
    // while duplicate number is in window
    while (curr !== undefined && left <= curr) {
      currSum -= nums[left++];
    }
    // store/update index of number at right pointer for future use
    map.set(nums[right], right);
    currSum += nums[right]; // maintain window sum
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};

function test_01695() {
  // Input: nums = [4,2,4,5,6]
  // Output: 17
  // Explanation: The optimal subarray here is [2,4,5,6].
  let nums1 = [4, 2, 4, 5, 6]
  console.log(maximumUniqueSubarray(nums1));

  // Input: nums = [5, 2, 1, 2, 5, 2, 1, 2, 5]
  // Output: 8
  // Explanation: The optimal subarray here is[5, 2, 1] or[1, 2, 5].
  let nums2 = [5, 2, 1, 2, 5, 2, 1, 2, 5]
  console.log(maximumUniqueSubarray(nums2));

  let nums3 = [187, 470, 25, 436, 538, 809, 441, 167, 477, 110, 275, 133, 666, 345, 411, 459, 490, 266, 987, 965, 429, 166, 809, 340, 467, 318, 125, 165, 809, 610, 31, 585, 970, 306, 42, 189, 169, 743, 78, 810, 70, 382, 367, 490, 787, 670, 476, 278, 775, 673, 299, 19, 893, 817, 971, 458, 409, 886, 434]
  console.log(maximumUniqueSubarray(nums3));  // expect 16911
}

test_01695()

