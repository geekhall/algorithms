/**
 * ID:    01773
 * Title: Count Items Matching a Rule
 * Difficulty: Easy
 * Description: You are given an array items, where each items[i] = [type i, color i, name i ] describes the type, color, and name of the i th item. You are also given a rule represented by two strings, ruleKey and ruleValue.
 *
 * The i th item is said to match the rule if one of the following is true:
 *
 * ruleKey == "type" and ruleValue == type i.
 * ruleKey == "color" and ruleValue == color i.
 * ruleKey == "name" and ruleValue == name i.
 *
 * Return the number of items that match the given rule.
 *
 * Example 1:
 *
 * Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver" Output: 1 Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
 *
 * Example 2:
 *
 * Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone" Output: 2 Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
 *
 * Constraints:
 *
 * 1 <= items.length <= 10 4
 * 1 <= type i.length, color i.length, name i.length, ruleValue.length <= 10
 * ruleKey is equal to either "type", "color", or "name".
 * All strings consist only of lowercase letters.
 */
function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  let index = 0
  let res = 0
  switch (ruleKey) {
    case 'type':
      index = 0
      break;
    case 'color':
      index = 1
      break;
    case 'name':
      index = 2
      break;
  }
  items.forEach((item, i) => {
    if (item[index] === ruleValue) {
      res++
    }
  })
  return res
};

function test_01773() {
  let items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], ruleKey = "color", ruleValue = "silver"
  console.log(countMatches(items, ruleKey, ruleValue));
  items = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], ruleKey = "type", ruleValue = "phone"
  console.log(countMatches(items, ruleKey, ruleValue));
}

test_01773()
