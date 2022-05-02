/**
 * ID:    00744
 * Title: Find Smallest Letter Greater Than Target
 * Difficulty: Easy
 * Description: Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.
 *
 * Note that the letters wrap around.
 *
 * For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
 *
 * Example 1:
 *
 * Input: letters = ["c","f","j"], target = "a" Output:"c"
 *
 * Example 2:
 *
 * Input: letters = ["c","f","j"], target = "c" Output:"f"
 *
 * Example 3:
 *
 * Input: letters = ["c","f","j"], target = "d" Output:"f"
 *
 * Constraints:
 *
 * 2 <= letters.length <= 10 4
 * letters[i] is a lowercase English letter.
 * letters is sorted in non-decreasing order.
 * letters contains at least two different characters.
 * target is a lowercase English letter.
 */
// binary search
function nextGreatestLetter(letters: string[], target: string): string {
  let lo = 0
  let hi = letters.length
  while (lo < hi) {
    let mi = lo + Math.floor((hi - lo) / 2)
    if (letters[mi] <= target)
      lo = mi + 1
    else
      hi = mi
  }
  return letters[lo % letters.length]
};

function test_00744() {
  let letters = ["c", "f", "j"], target = "a"
  console.log(nextGreatestLetter(letters, target));
}

test_00744()
