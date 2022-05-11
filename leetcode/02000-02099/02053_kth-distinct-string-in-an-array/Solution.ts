/**
 * ID:    02053
 * Title: Kth Distinct String in an Array
 * Difficulty: Easy
 * Description: A distinct string is a string that is present only once in an array.
 *
 * Given an array of strings arr, and an integer k, return the k th distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".
 *
 * Note that the strings are considered in the order in which they appear in the array.
 *
 * Example 1:
 *
 * Input: arr = ["d","b","c","b","c","a"], k = 2 Output:"a" Explanation: The only distinct strings in arr are "d" and "a". "d" appears 1 st, so it is the 1 st distinct string. "a" appears 2 nd, so it is the 2 nd distinct string. Since k == 2, "a" is returned.
 *
 * Example 2:
 *
 * Input: arr = ["aaa","aa","a"], k = 1 Output:"aaa" Explanation: All strings in arr are distinct, so the 1 st string "aaa" is returned.
 *
 * Example 3:
 *
 * Input: arr = ["a","b","a"], k = 3 Output:"" Explanation: The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".
 *
 * Constraints:
 *
 * 1 <= k <= arr.length <= 1000
 * 1 <= arr[i].length <= 5
 * arr[i] consists of lowercase English letters.
 */
function kthDistinct(arr: string[], k: number): string {
  let m = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (m.get(arr[i]) === undefined) {
      m.set(arr[i], 1)
    } else {
      m.set(arr[i], m.get(arr[i]) + 1)
    }
  }
  let index = 0
  let res = ""
  for (let i = 0; i < arr.length; i++) {
    if (m.get(arr[i]) === 1) {
      index++
      if (index === k) {
        res = arr[i]
        break
      }
    }
  }
  return res
};

function test_02053() {
  let arr = ["d", "b", "c", "b", "c", "a"], k = 2
  console.log(kthDistinct(arr, k));
  arr = ["aaa", "aa", "a"], k = 1
  console.log(kthDistinct(arr, k));
  arr = ["a", "b", "a"], k = 3
  console.log(kthDistinct(arr, k));
  arr = ["bogkw", "u", "iwd", "adij", "dueb", "djrvs", "qqim", "jfiyz", "oemeg", "ahwvz", "gqfdu", "hyrv", "nrg", "zgfwx", "uz", "yg", "h", "yyfxe", "gpqwp", "w", "qfd", "ooisc", "cypor", "inpv", "qviuu", "up", "n", "yq", "dqmwk", "p", "ys", "i", "zep", "xsn", "f", "aw", "f", "k", "dc", "gnvu", "v", "lc", "sj", "lvtgl", "m", "q", "gsve", "cbcex", "ajx", "bwgp", "axh", "f", "mpto", "pepq", "d", "hqv", "rjx", "r", "kqowb", "pc", "em", "dwuyy", "fyhzv", "wrjr", "qfb", "wol", "ufq", "cnukk", "lkhye", "wvg", "zp", "arnoo", "xudtc", "exjls", "nkru", "zgssr", "vguk", "o", "gudhn", "qh", "heax", "clpp", "truwr", "iz", "um", "ba", "xrouw", "nqqw", "fllqo", "qv", "uswwb", "cpdim", "my", "rakiy", "qvid", "mmmm", "urer", "cl", "rk", "od", "qls", "sj", "gffud", "hx", "bj", "shw", "gcdq", "ybvz", "tssdc", "pbgh", "q", "ppmad", "rdqc", "te", "delbi", "dhlu", "vzh", "ibfl", "mq", "br", "zgkq", "inqsw", "t", "reekp", "bmq", "aofds", "ujgtl", "umi", "o", "mq", "l", "qcky", "nhz", "i", "jswp", "zuwux", "odx", "ly", "cdlta", "s", "acro", "ib", "xzb", "w", "vpf", "wnbna", "wcvaw", "nicd", "eh", "ayfah", "dfg", "asthd", "owtfi", "vsm", "ay", "ce", "bsm", "v", "lju", "tapk", "lpfxe", "hzo", "ohluj", "dl", "zbbkf", "inuz", "kz", "i", "yohx", "sdmtf", "unx", "rtu", "ggz", "h", "iz", "ix", "y", "leccu", "oew", "cfej", "jan", "dyw", "zjhmu", "mk", "cd", "mwiml", "xjpx", "mwr", "d", "brlad", "nxgpu", "wpu", "iozb", "ursfa", "sjyvg", "v", "azdad", "hlbxc", "mm", "zud", "bwi", "twox", "cmu", "kjsx", "aqovf", "e", "mh", "l", "gutvb", "wanu", "f", "hm", "aezkc", "wbu", "ezhli", "wmh", "gatj", "yp", "mvnwf", "nfpej", "blvd", "p", "ptxs", "wlpi", "oqgg", "xipxv", "gilwo", "xjsqp", "eo", "pgy", "uuyrz", "fvpm", "adil", "y", "upt", "t", "axv", "rpg", "cc", "ero", "zs", "gcbls", "ilqf", "h", "dcqzc", "jgtq", "yo", "okaha", "f", "obuk", "t", "pae", "a", "rfml", "tf", "km", "s", "w", "udw", "jwcfa", "x", "dwe", "dkywq", "oorq", "vmrvh", "htaa", "pjtjv", "uijrs", "e", "b", "ndg", "z", "f", "j", "rq", "zj", "ivct", "xtmjl", "uumpl", "md", "lb", "zwp", "yx", "z", "c", "jg", "cu", "f", "icuc", "xbv", "lhe", "ejw", "kj", "cej", "xqdq", "urwiq", "vaetv", "cjrz", "yz", "cxki", "f", "jwjn", "m", "bwt", "ksf", "hwyi", "vsw", "mrsi", "a", "dlq", "ycaxn", "uwzb", "efp", "y", "ykebp", "oloif", "z", "nlv", "rjcvj", "cbtwz", "mwmnm", "zngt", "lzjn", "dgx", "h", "soz", "b", "e", "ldbt", "il", "e", "r", "erp", "k", "izj", "six", "qdy", "etll", "l", "vt", "kwxci", "tchc", "dqq", "ix", "quvgl", "tol", "aox", "jh", "z", "sx", "pwgmi", "pmwe", "zc", "osck", "ay", "esf", "ldxm", "bxfg", "iqahk", "bk", "gfwtr", "mkz", "js", "qfida", "jm", "dftp", "gbodp", "nci", "b", "telro", "vflft", "gdr", "edzh", "v", "xoyr", "wwz", "abe", "bjbmx", "qyw", "elj", "kgbfr", "emwo", "kx", "xfph", "w", "qiti", "t", "wr", "y", "u", "r", "xbre", "axzie", "zni", "dzrr", "dw", "pfux", "c", "ogo", "obvqa", "w", "ccu", "kw", "u", "hcbm", "and", "na", "hxujq", "qf", "r", "xqej", "afsdd", "z", "mpa", "clr", "mv", "ifrmw", "tpb", "rs", "dkm", "hpyh", "gnjh", "vqmbg", "foy", "dy", "j", "fbaec", "asi", "q", "bfayw", "wyy", "ppakv", "uzx", "bta", "jmjl", "npeyi", "mbqeq", "yadjs", "m", "ulwxb", "ajjh", "ptlzy", "rj", "afs", "jk", "fnaz", "ozant", "zk", "qi", "v", "jcm", "bsa", "vmy", "unhaf", "xziml", "qvk", "ojzpu", "pvp", "msv", "bsnt", "mqi", "pq", "npkk", "dito", "aerdg", "lsnp", "saq", "rdb", "idrx", "j", "pzi", "w", "skr", "n", "qrzf", "jmtsy", "pb", "szp", "hvvz", "yu", "ro", "qisov", "oodj", "g", "c", "t", "rh", "lx", "pib", "kajz", "cslh", "phkz", "zlaz", "qwr", "hd", "xerr", "zksw", "ykgh", "suy", "o", "tj", "dd", "mvbs", "w", "ak", "hnuk", "xwhy", "eafz", "k", "tcc", "aezn", "dl", "h", "i", "l", "vubjr", "vi", "dpwo", "rda", "gpbc", "n", "maw", "kkxld", "cqi", "w", "a", "kax", "rz", "nve", "l", "xo", "ovrxx", "ft", "kw", "tryla", "ymnuz", "ffl", "z", "sa", "yv", "zgrki", "sgr", "khv", "zoep", "juln", "e", "xkip", "anzn", "dafs", "kxxa", "pdrl", "zqm", "qtqxr", "sfh", "a", "yvy", "e", "zu", "ssd", "fiu", "h", "pvbva", "yohz", "atugp", "xtjr", "mlkx", "e", "bk", "bx", "oqnp", "ofhcu", "d", "tmzp", "gin", "ecv", "czpu", "p", "urj", "hoayy", "tvcg", "ft", "ykhzp", "gnv", "iytf", "jc", "fujyc", "fktbv", "twrys", "f", "ue", "tss", "pdskc"]
  k = 126
  console.log(kthDistinct(arr, k)); // expect 'vsm'
}

test_02053()
