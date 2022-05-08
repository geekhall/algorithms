/**
 * ID:    00599
 * Title: Minimum Index Sum of Two Lists
 * Difficulty: Easy
 * Description: Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
 *
 * You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.
 *
 * Example 1:
 *
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"] Output: ["Shogun"] Explanation: The only restaurant they both like is "Shogun".
 *
 * Example 2:
 *
 * Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"] Output: ["Shogun"] Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 *
 * Constraints:
 *
 * 1 <= list1.length, list2.length <= 1000
 * 1 <= list1[i].length, list2[i].length <= 30
 * list1[i] and list2[i] consist of spaces ' ' and English letters.
 * All the stings of list1 are unique.
 * All the stings of list2 are unique.
 */
function findRestaurant(list1: string[], list2: string[]): string[] {
  let res: string[] = []
  let map = new Map()
  let min = Number.MAX_VALUE
  list1.forEach((v, i) => {
    let index = list2.indexOf(v)
    if (index !== -1) {
      map.set(v, i + index)
      if (i + index < min)
        min = i + index
    }
  })
  map.forEach((v, k) => {
    if (v === min)
      res.push(k)
  })
  return res
};

function test_00599() {
  let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"], list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
  console.log(findRestaurant(list1, list2));
}

test_00599()
