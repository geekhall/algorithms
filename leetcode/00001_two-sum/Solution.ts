
interface HashMap<T> {
  [key: string]: T
}

function twoSum(nums: number[], target: number): number[] {
  let hashmap: HashMap<number> = {}
  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i]
    if (typeof hashmap[another] !== undefined) {
      return [i, hashmap[another]]
    }
    hashmap[nums[i]] = i
  }
}

function twoSum1(nums: number[], target: number): number[] {
  let m = new Map
  for (let i = 0; i < nums.length; i++) {
    let another = target - nums[i]
    if (m.has(another)) {
      return [m.get(another), i]
    }
    m.set(nums[i], i)
  }
};
function solution00001() {
  let testdata: number[] = [2, 7, 11, 13]
  let target: number = 9
  console.log(twoSum1(testdata, target));
}

solution00001()


// Usage of hashmap
// let hashmap: HashMap<number> = {}
// hashmap['1'] = 10
// hashmap['2'] = 22
// console.log(hashmap);
// console.log(hashmap['1']); // 10
// console.log(hashmap['3']); // undefined
// console.log(typeof hashmap['3']);  // undefined



