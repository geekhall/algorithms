// Roman numerals are represented by
// seven different symbols: I, V, X, L, C, D and M.

function romanToInt(s: string): number {
  let m = new Map()
  m.set('I', 1)
  m.set('V', 5)
  m.set('X', 10)
  m.set('L', 50)
  m.set('C', 100)
  m.set('D', 500)
  m.set('M', 1000)
  let n = s.length
  let res = 0
  if (n === 1)
    return m.get(s)

  for (let i = 1; i < n; i++) {
    let pre = m.get(s.charAt(i - 1))
    let cur = m.get(s.charAt(i))
    if ((pre === 1 && (cur === 5 || cur === 10)) ||
      (pre === 10 && (cur === 50 || cur === 100)) ||
      (pre === 100 && (cur === 500 || cur === 1000))
    ) {
      res -= pre
    } else {
      res += pre
    }
  }
  res += m.get(s.charAt(n - 1))
  return res
};

function test_00013() {
  console.log(romanToInt("V"));
  console.log(romanToInt("IV"));
  console.log(romanToInt("VI"));
  console.log(romanToInt("VIII"));
  console.log(romanToInt("DCCLXXVIII"));
  console.log(romanToInt("MMCM"));
}

test_00013()
