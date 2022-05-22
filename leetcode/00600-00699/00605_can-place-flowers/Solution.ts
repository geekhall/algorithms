/**
 * ID:    00605
 * Title: Can Place Flowers
 * Difficulty: Easy
 * Description: You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
 *
 * Given an integer array flowerbed containing 0 's and 1 's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
 *
 * Example 1:
 *
 * Input: flowerbed = [1,0,0,0,1], n = 1 Output: true
 *
 * Example 2:
 *
 * Input: flowerbed = [1,0,0,0,1], n = 2 Output: false
 *
 * Constraints:
 *
 * 1 <= flowerbed.length <= 2 * 10 4
 * flowerbed[i] is 0 or 1.
 * There are no two adjacent flowers in flowerbed.
 * 0 <= n <= flowerbed.length
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {

  let plantMax = 0
  let zeroCount = 1
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      zeroCount++
    } else {
      plantMax += Math.trunc((zeroCount - 1) / 2)
      zeroCount = 0
    }
  }
  // last zero
  if (zeroCount !== 0) {
    plantMax += Math.trunc(zeroCount / 2)
  }

  return plantMax >= n
};

function test_00605() {
  let flowerbed = [1, 0, 0, 0, 1], n = 1
  console.log(canPlaceFlowers(flowerbed, n));
  flowerbed = [1, 0, 0, 0, 1], n = 2
  console.log(canPlaceFlowers(flowerbed, n));

  flowerbed = [0, 0, 1, 0, 1], n = 1
  console.log(canPlaceFlowers(flowerbed, n));

  flowerbed = [0], n = 1
  console.log(canPlaceFlowers(flowerbed, n));

  flowerbed = [0, 0, 0], n = 2
  console.log(canPlaceFlowers(flowerbed, n));

  flowerbed = [0, 0], n = 2
  console.log(canPlaceFlowers(flowerbed, n));

}

test_00605()
