/**
 * ID:    00875
 * Title: Koko Eating Bananas
 * Difficulty: Medium
 * Description: Koko loves to eat bananas. There are n piles of bananas, the i th pile has piles[i] bananas. The guards have gone and will come back in h hours.
 *
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
 *
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 *
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 *
 * Example 1:
 *
 * Input: piles = [3,6,7,11], h = 8 Output: 4
 *
 * Example 2:
 *
 * Input: piles = [30,11,23,4,20], h = 5 Output: 30
 *
 * Example 3:
 *
 * Input: piles = [30,11,23,4,20], h = 6 Output: 23
 *
 * Constraints:
 *
 * 1 <= piles.length <= 10 4
 * piles.length <= h <= 10 9
 * 1 <= piles[i] <= 10 9
 */
function minEatingSpeed(piles: number[], h: number): number {
  let l = 1, r = 1000000000;
  while (l < r) {
    let m = Math.trunc((l + r) / 2), total = 0;
    for (let p of piles)
      total += Math.trunc((p + m - 1) / m)
    if (total > h)
      l = m + 1;
    else
      r = m;
  }
  return l;
};

function test_00875() {
  let piles = [3, 6, 7, 11], h = 8
  console.log(minEatingSpeed(piles, h));
  piles = [30, 11, 23, 4, 20], h = 5
  console.log(minEatingSpeed(piles, h));
  piles = [30, 11, 23, 4, 20], h = 6
  console.log(minEatingSpeed(piles, h));
}

test_00875()
