/**
 * ID:    01507
 * Title: Reformat Date
 * Difficulty: Easy
 * Description: Given a date string in the form Day Month Year, where:
 *
 * Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
 * Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
 * Year is in the range [1900, 2100].
 *
 * Convert the date string to the format YYYY-MM-DD, where:
 *
 * YYYY denotes the 4 digit year.
 * MM denotes the 2 digit month.
 * DD denotes the 2 digit day.
 *
 * Example 1:
 *
 * Input: date = "20th Oct 2052" Output:"2052-10-20"
 *
 * Example 2:
 *
 * Input: date = "6th Jun 1933" Output:"1933-06-06"
 *
 * Example 3:
 *
 * Input: date = "26th May 1960" Output:"1960-05-26"
 *
 * Constraints:
 *
 * The given dates are guaranteed to be valid, so no error handling is necessary.
 */
function reformatDate(date: string): string {
  let m = new Map()
  m.set("Jan", '01')
  m.set("Feb", '02')
  m.set("Mar", '03')
  m.set("Apr", '04')
  m.set("May", '05')
  m.set("Jun", '06')
  m.set("Jul", '07')
  m.set("Aug", '08')
  m.set("Sep", '09')
  m.set("Oct", '10')
  m.set("Nov", '11')
  m.set("Dec", '12')

  let arr = date.split(" ")
  let day = arr[0].slice(0, arr[0].length - 2)
  if (day.length === 1)
    day = '0' + day
  return arr[2] + "-" + m.get(arr[1]) + "-" + day
};

function test_01507() {
  let date = "20th Oct 2052"
  console.log(reformatDate(date));
  date = "6th Jun 1933"
  console.log(reformatDate(date));
  date = "26th May 1960"
  console.log(reformatDate(date));
}

test_01507()
