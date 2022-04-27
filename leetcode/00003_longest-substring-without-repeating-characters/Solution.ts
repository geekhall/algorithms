function lengthOfLongestSubstring(s: string): number {
  let ans = 0
  let set = new Set()
  let n = s.length
  for (let i = 0; i < n; i++) {
    set.clear()
    set.add(s[i])
    let right = i + 1
    for (; right < n && !set.has(s[right]); right++) {
      set.add(s[right])
    }

    if (ans < right - i)
      ans = right - i
  }
  return ans
};

function test_00003() {
  console.log(lengthOfLongestSubstring("abcabcbb"));// 3
  console.log(lengthOfLongestSubstring("bbbbb"));   // 1
  console.log(lengthOfLongestSubstring("pwwkew"));  // 3
  console.log(lengthOfLongestSubstring(" "));  // 1
  console.log(lengthOfLongestSubstring("dvdf"));  // 3
  console.log(lengthOfLongestSubstring("abcabcbb"));  // 3
  console.log(lengthOfLongestSubstring("abcdssabcdefgs"));  // 8
}

test_00003()
