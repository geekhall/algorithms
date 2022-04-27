function str_mul(c: string, n: number): string {
  return new Array(n).fill(0).map(() => c).join('')
}

function intToRoman(num: number): string {
  let res: string = ""
  while (num > 0) {
    if (num >= 1000) {
      res = res.concat('M')
      num = num - 1000
    } else if (num >= 900) {
      res = res.concat('CM')
      num = num - 900
    } else if (num >= 500) {
      res = res.concat('D')
      num = num - 500
    } else if (num >= 400) {
      res = res.concat('CD')
      num = num - 400
    } else if (num >= 100) {
      res = res.concat('C')
      num = num - 100
    } else if (num >= 90) {
      res = res.concat('XC')
      num = num - 90
    } else if (num >= 50) {
      res = res.concat('L')
      num = num - 50
    } else if (num >= 40) {
      res = res.concat('XL')
      num = num - 40
    } else if (num >= 10) {
      res = res.concat('X')
      num = num - 10
    } else if (num >= 9) {
      res = res.concat('IX')
      num = num - 9
    } else if (num >= 5) {
      res = res.concat('V')
      num = num - 5
    } else if (num >= 4) {
      res = res.concat('IV')
      num = num - 4
    } else if (num >= 1) {
      res = res.concat('I')
      num = num - 1
    }
  }
  return res
};

function test_0012() {
  console.log(intToRoman(1200));
  console.log(intToRoman(4));
  console.log(intToRoman(5));
  console.log(intToRoman(6));
  console.log(intToRoman(7));
  console.log(intToRoman(8));
}
test_0012()
