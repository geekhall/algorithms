
/**
 * 给定一个数组arr，返回一个数组res，
 * res中的每个元素对应arr中元素向右移动的几步才能找到比它大的元素。
 * 例如：
 *   Input：[5, 3, 1, 2, 4]
 *   Output：[-1, 3, 1, 1, -1]
 */
function monotonicStackSample1(arr: number[]): number[] {
  let n = arr.length
  let res: number[] = new Array(n).fill(-1)
  let stack: number[] = []
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack.length - 1] < arr[i]) {
      res[stack[stack.length - 1]] = i - stack.pop()!
    }
    stack.push(i)
  }
  return res
}

function testMonotonicStackSample1() {
  let arr = [5, 3, 1, 2, 4]
  console.log(monotonicStackSample1(arr));
}

testMonotonicStackSample1()
