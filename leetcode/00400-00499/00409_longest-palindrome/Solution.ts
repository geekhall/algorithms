/**
 * ID:    00409
 * Title: Longest Palindrome
 * Difficulty: Easy
 * Description: Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * Example 1:
 *
 * Input: s = "abccccdd" Output: 7 Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 * Example 2:
 *
 * Input: s = "a" Output: 1
 *
 * Example 3:
 *
 * Input: s = "bb" Output: 2
 *
 * Constraints:
 *
 * 1 <= s.length <= 2000
 * s consists of lowercase and/or uppercase English letters only.
 */
function longestPalindrome(s: string): number {
  const str2map = (str: string): Map<string, number> => {
    let m = new Map<string, number>()
    for (let i = 0; i < str.length; i++) {
      if (m.get(str[i]) === undefined) {
        m.set(str[i], 1)
      } else {
        m.set(str[i], m.get(str[i])! + 1)
      }
    }
    return m
  }
  let m = str2map(s)
  let res = 0
  let containsOdd = false
  m.forEach((v, k) => {
    if (v % 2 === 0) {
      res += v
    } else {
      containsOdd = true
      if (v > 1) {
        res += v - 1
      }
    }
  })
  return containsOdd ? res + 1 : res
};

function test_00409() {
  let s = "abccccdd"
  console.log(longestPalindrome(s));
  s = "a"
  console.log(longestPalindrome(s));
  s = "bb"
  console.log(longestPalindrome(s));
  s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  console.log(longestPalindrome(s));

}

test_00409()
