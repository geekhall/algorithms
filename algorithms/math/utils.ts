function isPrime(num: number): boolean {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function factoring(num: number): number[] {
  let temp = num
  let res = []
  for (let i = 2; i <= temp; i++) {
    while (temp % i === 0) {
      temp = Math.floor(temp / i)
      res.push(i)
    }
  }
  return res
}
console.log(factoring(90));
