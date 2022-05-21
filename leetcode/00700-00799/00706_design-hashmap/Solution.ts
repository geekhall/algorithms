/**
 * ID:    00706
 * Title: Design HashMap
 * Difficulty: Easy
 * Description: Design a HashMap without using any built-in hash table libraries.
 *
 * Implement the MyHashMap class:
 *
 * MyHashMap() initializes the object with an empty map.
 * void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
 * int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
 * void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 *
 * Example 1:
 *
 * Input ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"] [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]] Output [null, null, null, 1, -1, null, 1, null, -1] Explanation MyHashMap myHashMap = new MyHashMap(); myHashMap.put(1, 1); // The map is now [[1,1]] myHashMap.put(2, 2); // The map is now [[1,1], [2,2]] myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]] myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]] myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value) myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]] myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]] myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
 *
 * Constraints:
 *
 * 0 <= key, value <= 10 6
 * At most 10 4 calls will be made to put, get, and remove.
 */
class MapNode {
  key: number
  val: number
  next: MapNode | null
  constructor(key?: number, val?: number, next?: MapNode | null) {
    this.key = (key === undefined ? 0 : key)
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
const BUCKET = 10007

class MyHashMap {
  store: Array<MapNode | null>

  constructor() {
    this.store = new Array<MapNode | null>(BUCKET).fill(null)
  }

  put(key: number, value: number): void {
    let index = key % BUCKET
    let cur = this.store[index]
    if (cur === null) {
      this.store[index] = new MapNode(key, value)
    } else {
      let found = false
      let pre = cur
      while (cur !== null) {
        if (cur.key === key) {
          found = true
          break
        }
        pre = cur
        cur = cur!.next
      }
      if (found) {
        cur!.val = value
      } else {
        pre!.next = new MapNode(key, value)
      }
    }
  }

  get(key: number): number {
    let index = key % BUCKET
    let cur = this.store[index]

    if (cur === null) {
      return -1
    } else {
      // find val
      while (cur !== null) {
        if (cur.key === key) {
          return cur.val
        }
        cur = cur!.next
      }
      return -1
    }
  }

  remove(key: number): void {
    let index = key % BUCKET
    let cur = this.store[index]
    let pre = cur
    if (cur === null) {
      // do nothing
    } else {
      // find key
      let found = false
      while (cur !== null) {
        if (cur.key === key) {
          found = true
          break
        }
        pre = cur
        cur = cur!.next
      }
      if (found) {
        if (pre === cur) { // head element
          this.store[index] = cur!.next
        } else {
          pre!.next = cur!.next
        }
      }
    }
  }
}


function test_00706() {
  let myHashMap = new MyHashMap();
  myHashMap.put(1, 1); // The map is now [[1,1]]
  myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
  console.log(myHashMap.get(1));    // return 1, The map is now [[1,1], [2,2]]
  console.log(myHashMap.get(3));    // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
  myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
  console.log(myHashMap.get(2));    // return 1, The map is now [[1,1], [2,1]]
  myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
  console.log(myHashMap.get(2));    // return -1 (i.e., not found), The map is now [[1,1]]
}

test_00706()
