/**
 * ID:    00374
 * Title: Guess Number Higher or Lower
 * Difficulty: Easy
 * Description: We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns three possible results:
 *
 * -1: Your guess is higher than the number I picked (i.e. num > pick).
 * 1: Your guess is lower than the number I picked (i.e. num < pick).
 * 0: your guess is equal to the number I picked (i.e. num == pick).
 *
 * Return the number that I picked.
 *
 * Example 1:
 *
 * Input: n = 10, pick = 6 Output: 6
 *
 * Example 2:
 *
 * Input: n = 1, pick = 1 Output: 1
 *
 * Example 3:
 *
 * Input: n = 2, pick = 1 Output: 1
 *
 * Constraints:
 *
 * 1 <= n <= 2 31 - 1
 * 1 <= pick <= n
 */
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
const picked = 10
const guess = (num: number): number => {
  if (num > picked)
    return -1
  else if (num < picked)
    return 1
  else
    return 0
}

function guessNumber(n: number): number {
  let left = 1
  let right = n
  let mid = left + Math.trunc((right - left) / 2)
  while (true) {
    mid = left + Math.trunc((right - left) / 2)
    let cur = guess(mid)
    if (cur === 0) {
      break
    } else if (cur === -1) {// mid is bigger than the target
      right = mid - 1
    } else if (cur === 1) {
      left = mid + 1
    }
  }
  return mid
};

function test_00374() {
  console.log(guessNumber(100));

}

test_00374()
