/**
 * ID:    01108
 * Title: Defanging an IP Address
 * Difficulty: Easy
 * Description: Given a valid (IPv4) IP address, return a defanged version of that IP address.
 *
 * A defanged IP address replaces every period "." with "[.]".
 *
 * Example 1:
 *
 * Input: address = "1.1.1.1" Output:"1[.]1[.]1[.]1"
 *
 * Example 2:
 *
 * Input: address = "255.100.50.0" Output:"255[.]100[.]50[.]0"
 *
 * Constraints:
 *
 * The given address is a valid IPv4 address.
 */
function defangIPaddr(address: string): string {
  return address.split('.').join('[.]')
};

function test_01108() {
  let address = "1.1.1.1"
  console.log(defangIPaddr(address));
  address = "255.100.50.0"
  console.log(defangIPaddr(address));

}

test_01108()
