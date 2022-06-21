export class KMP {

  /**
   * KMP algorithm
   * @param text  text
   * @param pattern pattern to be found in text
   * @returns index of pattern in text or -1 if not found
   */
  public static search(text: string, pattern: string): number {
    if (text.length === 0 || pattern.length === 0 || text.length < pattern.length || pattern.length < 0) {
      return -1
    }
    let m = pattern.length
    let n = text.length
    let dp = new Array(m + 1).fill(0)
    let i = 0
    let j = 0
    while (i < m) {
      if (pattern[i] === pattern[j]) {
        dp[i + 1] = j + 1
        i++
        j++
      } else if (j > 0) {
        j = dp[j]
      } else {
        dp[i + 1] = 0
        i++
      }
    }
    i = 0
    j = 0
    while (i < n) {
      if (text[i] === pattern[j]) {
        i++
        j++
      } else if (j > 0) {
        j = dp[j]
      } else {
        i++
      }
      if (j === m) {
        return i - j
      }
    }
    return -1
  }

  public static getIndexOf(text: string, pattern: string): number {
    if (text.length === 0 || pattern.length === 0 || text.length < pattern.length || pattern.length < 0) {
      return -1
    }
    let t_arr = text.split('')
    let p_arr = pattern.split('')
    let len_t = t_arr.length
    let len_p = p_arr.length
    let cur_t = 0
    let cur_p = 0
    let next = KMP.getNextArray(p_arr)
    while (cur_t < len_t && cur_p < len_p) {
      if (t_arr[cur_p] === p_arr[cur_t]) {
        cur_p++
        cur_t++
      } else if (next[cur_p] === -1) {
        cur_t++
      } else {
        cur_p = next[cur_p]
      }
    }
    // cur_t overflow or cur_p overflow
    return cur_p === len_p ? cur_t - len_p : -1
  }
  public static getNextArray(patt_arr: string[]): number[] {
    if (patt_arr.length === 0) {
      return []
    } else if (patt_arr.length === 1) {
      return [-1]
    }
    let next = new Array(patt_arr.length).fill(-1)
    next[1] = 0

    let i = 2
    let cn = 0
    while (i < patt_arr.length) {
      if (patt_arr[i - 1] === patt_arr[cn]) {
        next[i] = cn + 1
        i++
        cn++
      } else if (cn > 0) {
        cn = next[cn]
      } else {
        next[i] = 0
        i++
      }
    }
    return next
  }
}
