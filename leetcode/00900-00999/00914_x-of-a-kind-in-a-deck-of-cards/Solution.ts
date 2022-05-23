/**
 * ID:    00914
 * Title: X of a Kind in a Deck of Cards
 * Difficulty: Easy
 * Description: In a deck of cards, each card has an integer written on it.
 *
 * Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
 *
 * Each group has exactly X cards.
 * All the cards in each group have the same integer.
 *
 * Example 1:
 *
 * Input: deck = [1,2,3,4,4,3,2,1] Output: true Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
 *
 * Example 2:
 *
 * Input: deck = [1,1,1,2,2,2,3,3] Output: false Explanation: No possible partition.
 *
 * Constraints:
 *
 * 1 <= deck.length <= 10 4
 * 0 <= deck[i] < 10 4
 */
function hasGroupsSizeX(deck: number[]): boolean {
  if (deck.length < 2)
    return false
  const arr2map = (arr: number[]): Map<number, number> => {
    let m = new Map<number, number>()
    for (let i = 0; i < arr.length; i++) {
      if (m.get(arr[i]) === undefined) {
        m.set(arr[i], 1)
      } else {
        m.set(arr[i], m.get(arr[i])! + 1)
      }
    }
    return m
  }
  let m = arr2map(deck)
  let max = [...m.values()].sort((a, b) => b - a)[0]
  for (let x = 2; x <= max; x++) {
    if (Array.from(m.values()).every((v, _) => v % x === 0)) {
      return true
    }
  }

  return false
};

function test_00914() {
  let deck = [1, 2, 3, 4, 4, 3, 2, 1]
  console.log(hasGroupsSizeX(deck));
  deck = [1, 1, 1, 2, 2, 2, 3, 3]
  console.log(hasGroupsSizeX(deck));
  deck = [1, 1, 1, 1, 2, 2, 2, 2, 2, 2]
  console.log(hasGroupsSizeX(deck));
  deck = [1, 1]
  console.log(hasGroupsSizeX(deck));

}

test_00914()
