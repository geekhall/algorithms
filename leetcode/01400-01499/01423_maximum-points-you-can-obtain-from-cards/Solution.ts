/**
 * ID:    01423
 * Title: Maximum Points You Can Obtain from Cards
 * Difficulty: Medium
 * Description: There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
 *
 * In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
 *
 * Your score is the sum of the points of the cards you have taken.
 *
 * Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
 *
 * Example 1:
 *
 * Input: cardPoints = [1,2,3,4,5,6,1], k = 3 Output: 12 Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
 *
 * Example 2:
 *
 * Input: cardPoints = [2,2,2], k = 2 Output: 4 Explanation: Regardless of which two cards you take, your score will always be 4.
 *
 * Example 3:
 *
 * Input: cardPoints = [9,7,7,9,7,7,9], k = 7 Output: 55 Explanation: You have to take all the cards. Your score is the sum of points of all cards.
 *
 * Constraints:
 *
 * 1 <= cardPoints.length <= 10 5
 * 1 <= cardPoints[i] <= 10 4
 * 1 <= k <= cardPoints.length
 */
// BF , time limit exceeded
function maxScore1(cardPoints: number[], k: number): number {
  let left = 0
  let right = cardPoints.length - 1
  let max = 0
  if (k === 1) {
    return cardPoints[left] > cardPoints[right] ? cardPoints[left] : cardPoints[right]
  }
  if (k === cardPoints.length) {
    return cardPoints.reduce((a, b) => a + b, 0)
  }
  max = Math.max(
    cardPoints[left] + maxScore(cardPoints.slice(left + 1, right + 1), k - 1),
    cardPoints[right] + maxScore(cardPoints.slice(left, right), k - 1)
  )
  return max
};

// sliding window
function maxScore(cardPoints: number[], k: number): number {
  let left = 0
  let right = k - 1

  if (k === 1) {
    return cardPoints[left] > cardPoints[right] ? cardPoints[left] : cardPoints[right]
  }
  if (k === cardPoints.length) {
    return cardPoints.reduce((a, b) => a + b, 0)
  }
  let frontSum = cardPoints.slice(0, k).reduce((a, b) => a + b, 0)
  let backSum = 0
  let max = frontSum
  for (let i = 0; i < k; i++) {
    backSum += cardPoints[cardPoints.length - 1 - i]
    frontSum -= cardPoints[k - 1 - i]
    max = Math.max(max, frontSum + backSum)
  }
  return max
}


function test_01423() {
  let cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3
  console.log(maxScore(cardPoints, k));
  cardPoints = [2, 2, 2], k = 2
  console.log(maxScore(cardPoints, k));
  cardPoints = [9, 7, 7, 9, 7, 7, 9], k = 7
  console.log(maxScore(cardPoints, k));
  cardPoints = [100, 40, 17, 9, 73, 75], k = 3
  console.log(maxScore(cardPoints, k)); // 248
  cardPoints = [2, 5, 2, 2, 2, 2, 2], k = 2
  console.log(maxScore(cardPoints, k)); // 7

  cardPoints = [61, 5, 22, 64, 14, 16, 93, 28, 7, 99, 8, 17, 2, 83, 9, 88, 16, 97, 33, 50, 78, 5, 78, 100, 100, 44, 43, 73, 14, 31, 1, 72, 93, 42, 48, 49, 3, 26, 59, 8, 20, 39, 40, 67, 27]
  k = 34
  console.log(maxScore(cardPoints, k)); //
}

test_01423()
