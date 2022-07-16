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
  if (s.length === 1) {
    return 1;
  }
  let max = 0;
  let map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map.has(c)) {
      map.set(c, map.get(c)! + 1);
    } else {
      map.set(c, 1);
    }
  }
  let oddFlag = false;
  for (let [key, value] of map) {
    if (value % 2 === 0) {
      max += value;
    } else {
      max += value - 1;
      oddFlag = true;
    }
  }
  if (oddFlag) {
    max += 1;
  }
  return max;
}

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
