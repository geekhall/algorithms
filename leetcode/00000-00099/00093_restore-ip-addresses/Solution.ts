/**
 * ID:    00093
 * Title: Restore IP Addresses
 * Difficulty: Medium
 * Description: A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.
 *
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
 *
 * Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
 *
 * Example 1:
 *
 * Input: s = "25525511135" Output: ["255.255.11.135","255.255.111.35"]
 *
 * Example 2:
 *
 * Input: s = "0000" Output: ["0.0.0.0"]
 *
 * Example 3:
 *
 * Input: s = "101023" Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 * Constraints:
 *
 * 1 <= s.length <= 20
 * s consists of digits only.
 */
function restoreIpAddresses(s: string): string[] {
  let result: string[] = []
  let arr = s.split('')
  let len = arr.length
  const isValid = (ip: string): boolean => {
    let arr = ip.split('.')
    if (arr.length !== 4) return false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 0 || arr[i].length > 3) return false
      if (arr[i][0] === '0' && arr[i].length > 1) return false
      if (+arr[i] > 255) return false
    }
    return true
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        let ip = s.substring(0, i)
          + '.' + s.substring(i, j)
          + '.' + s.substring(j, k)
          + '.' + s.substring(k)
        if (isValid(ip)) result.push(ip)
      }
    }
  }
  return result
};

function test_00093() {
  let s = "25525511135"
  console.log(restoreIpAddresses(s))
  s = "0000"
  console.log(restoreIpAddresses(s))
  s = "101023"
  console.log(restoreIpAddresses(s))
}

test_00093()
