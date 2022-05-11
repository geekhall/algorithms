# SWA （Sliding Window Algorithm）

## 最长连续子串问题

```typescript
function getMaxContinuousSubstringLength(){
  let result = 1, left = 0, right = 1

  while (right < s.length) {
    if (s[left] === s[right]) {
      result = right - left + 1
    } else {
      left++
    }
    right++
  }
return result
}
```
