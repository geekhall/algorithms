function str2map(str: string): Map<string, number> {
  let m = new Map<string, number>()
  for (let i = 0; i < str.length; i++) {
    if (m.get(str[i]) === undefined) {
      m.set(str[i], 1)
    } else {
      m.set(str[i], m.get(str[i])! + 1)
    }
  }
  return m
}
