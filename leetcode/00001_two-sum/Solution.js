"use strict";
var q00001;
(function (q00001) {
    function twoSum(nums, target) {
        let hashmap = {};
        for (let i = 0; i < nums.length; i++) {
            let another = target - nums[i];
            if (typeof hashmap[another] !== undefined) {
                return [i, hashmap[another]];
            }
            hashmap[nums[i]] = i;
        }
    }
    function twoSum1(nums, target) {
        let m = new Map;
        for (let i = 0; i < nums.length; i++) {
            let another = target - nums[i];
            if (m.has(another)) {
                return [m.get(another), i];
            }
            m.set(nums[i], i);
        }
    }
    ;
    function solution00001() {
        let testdata = [2, 7, 11, 13];
        let target = 9;
        console.log(twoSum1(testdata, target));
    }
    solution00001();
})(q00001 || (q00001 = {}));
// Usage of hashmap
// let hashmap: HashMap<number> = {}
// hashmap['1'] = 10
// hashmap['2'] = 22
// console.log(hashmap);
// console.log(hashmap['1']); // 10
// console.log(hashmap['3']); // undefined
// console.log(typeof hashmap['3']);  // undefined
