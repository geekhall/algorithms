/**
 * ID:    01268
 * Title: Search Suggestions System
 * Difficulty: Medium
 * Description: You are given an array of strings products and a string searchWord.
 *
 * Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.
 *
 * Return a list of lists of the suggested products after each character of searchWord is typed.
 *
 * Example 1:
 *
 * Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse" Output: [ ["mobile","moneypot","monitor"], ["mobile","moneypot","monitor"], ["mouse","mousepad"], ["mouse","mousepad"], ["mouse","mousepad"] ] Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"] After typing m and mo all products match and we show user ["mobile","moneypot","monitor"] After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
 *
 * Example 2:
 *
 * Input: products = ["havana"], searchWord = "havana" Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
 *
 * Example 3:
 *
 * Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags" Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
 *
 * Constraints:
 *
 * 1 <= products.length <= 1000
 * 1 <= products[i].length <= 3000
 * 1 <= sum(products[i].length) <= 2 * 10 4
 * All the strings of products are unique.
 * products[i] consists of lowercase English letters.
 * 1 <= searchWord.length <= 1000
 * searchWord consists of lowercase English letters.
 */
function suggestedProducts(products: string[], searchWord: string): string[][] {
  let res = []
  let i = 0
  while (i < searchWord.length) {
    let cur = searchWord.substring(0, i + 1)
    let cur_ans = []
    let j = 0
    while (j < products.length) {
      if (products[j].indexOf(cur) === 0) {
        cur_ans.push(products[j])
      }
      j++
    }
    res.push(cur_ans.sort((a, b) => a.localeCompare(b)).slice(0, 3))
    i++
  }
  return res
};

function test_01268() {
  let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord = "mouse"
  console.log(suggestedProducts(products, searchWord))
  products = ["havana"], searchWord = "havana"
  console.log(suggestedProducts(products, searchWord))

}

test_01268()
