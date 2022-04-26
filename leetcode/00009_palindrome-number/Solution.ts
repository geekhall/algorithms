// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

function isPalindrome1(x: number): boolean {
  if (x < 0)
    return false
  let arr: number[] = []
  while (x > 0) {
    arr.push(x % 10)
    x = Math.floor(x / 10)
  }
  console.log(arr);

  let n = arr.length

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (arr[i] !== arr[n - i - 1])
      return false
  }
  return true
};


function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x != 0))
    return false
  let revertedNumber = 0

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = Math.floor(x / 10)
  }
  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
};

function test_00009() {
  console.log(isPalindrome(1231321));
  console.log(isPalindrome(-121));
  console.log(isPalindrome(102201));
}

test_00009()


