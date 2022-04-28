function longestCommonPrefix(strs: string[]): string {
  if (strs === null || strs.length === 0)
    return ""

  let minLength = Number.MAX_VALUE
  strs.forEach((str) => {
    if (str.length < minLength)
      minLength = str.length
  })

  if (minLength === 0)
    return ""

  let length = 1
  for (; length <= minLength; length++) {
    if (!isCommonPrefix(strs, length)) {
      break
    }
  }

  return strs[0].substring(0, length - 1)
};

function isCommonPrefix(strs: string[], len: number): boolean {
  if (strs.length === 1) {
    if (len <= strs[0].length)
      return true
    else
      return false
  }

  let start = strs[0].substring(0, len)
  for (let i = 1; i < strs.length; i++) {
    if (start !== strs[i].substring(0, len))
      return false
  }
  return true
}
function test_00014() {
  console.log(longestCommonPrefix(["flower", "flow", "flight"]));
  console.log(longestCommonPrefix(["dog", "racecar", "car"]));
  console.log(longestCommonPrefix(["a"]));
  console.log(longestCommonPrefix([]));
  console.log(longestCommonPrefix(["", ""]));
  // console.log(isCommonPrefix(["flower", "flow", "flight"], 2)); // true
  // console.log(isCommonPrefix(["dog", "racecar", "car"], 1));    // false
}
test_00014()
