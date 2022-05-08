
function largestGoodInteger(num: string): string {
  let s = new Set<number>()
  let res = ""
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      s.add(parseInt(num.slice(i, i + 3)))
    }
  }

  if (s.size === 0)
    return ""

  res = Array.from(s).sort((a, b) => b - a)[0].toString()
  if (res.length === 1)
    return "000"
  return res
};

function testLargestGoodInteger() {
  // Input: num = "6777133339"
  // Output: "777"
  // Explanation: There are two distinct good integers: "777" and "333".
  // "777" is the largest, so we return "777".
  let num = "6777133339"
  console.log(largestGoodInteger(num));

  // Input: num = "2300019"
  // Output: "000"
  // Explanation: "000" is the only good integer.
  num = "2300019"
  console.log(largestGoodInteger(num));
  num = "2300219"
  console.log(largestGoodInteger(num));
}

testLargestGoodInteger()
