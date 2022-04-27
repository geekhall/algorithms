// number bigger than 10^18 will overflow?
function multiply(num1: string, num2: string): string {
  let n1: number = 0;
  let n2: number = 0;
  let l1 = num1.length;
  let l2 = num2.length;
  for (let i = 0; i < l1; i++) {
    n1 += (num1.charCodeAt(i) - 0x30) * Math.pow(10, l1 - i - 1)
  }
  for (let i = 0; i < l2; i++) {
    n2 = (num2.charCodeAt(i) - 0x30) * Math.pow(10, l2 - i - 1)
  }

  return String(n1 * n2)
};


function test_00043() {
  console.log(multiply("123", "456"));
  console.log(multiply("123456789", "987654321"));  //"121932631112635269"
  console.log(987654321 * 123456789);
  console.log(121932631112635269);
  console.log(Number.MAX_VALUE);
}

test_00043()


