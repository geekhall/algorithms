// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b


function findClosestElements(arr: number[], k: number, x: number): number[] {
  return []
};

function test_00658() {
  // Input: arr = [1,2,3,4,5], k = 4, x = 3
  // Output: [1,2,3,4]
  console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
}
test_00658()
