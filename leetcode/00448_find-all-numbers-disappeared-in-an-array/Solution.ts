// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.
function findDisappearedNumbers(nums: number[]): number[] {
  let full = new Set(Array.from({ length: nums.length }, (_, k) => k + 1))
  let s = new Set()
  nums.forEach((v, i) => {
    s.add(v)
  });
  return Array.from(full).filter(x => !s.has(x))
};

function test_00448() {
  // Input: nums = [4,3,2,7,8,2,3,1]
  // Output: [5,6]
  let nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
  console.log(findDisappearedNumbers(nums1));

  // Input: nums = [1,1]
  // Output: [2]
  let nums2 = [1, 1]
  console.log(findDisappearedNumbers(nums2));

}
test_00448()

/**
 * Set a - Set b
 * @param full
 * @param part
 * @returns
 */
function diffSet(a: Set<number>, b: Set<number>): Set<number> {
  return new Set([...a].filter(x => !b.has(x)))
}

/**
 * Set a union Set b
 * @param a
 * @param b
 * @returns
 */
function unionSet(a: Set<number>, b: Set<number>): Set<number> {
  return new Set([...a, ...b])
}

/**
 * Set a intersection Set b
 * @param a
 * @param b
 * @returns
 */
function intersection(a: Set<number>, b: Set<number>): Set<number> {
  return new Set([...a].filter(x => b.has(x)))
}

function setTest() {
  let a = new Set(Array.from({ length: 5 }, (_, k) => k + 1))
  let b = new Set([3, 4, 5, 6, 7])

  console.log(diffSet(a, b));   // Set(2) { 1, 2 }
  console.log(diffSet(b, a));   // Set(2) { 6, 7 }
  console.log(unionSet(a, b));    // Set(7) { 1, 2, 3, 4, 5, 6, 7 }
  console.log(intersection(a, b));  // Set(3) { 3, 4, 5 }
}
