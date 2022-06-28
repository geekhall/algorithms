class SkipListNode {
  val: number;
  next: SkipListNode | null;
  down: SkipListNode | null;
  constructor(val: number, next: SkipListNode | null, down: SkipListNode | null) {
    this.val = val;
    this.next = next;
    this.down = down;
  }
}
export class Skiplist {
  static PROBABILITY = 0.5;

  public head: SkipListNode | null = null
  public size: number = 0;
  public maxLevel: number = 0;
  public constructor() {
    this.head = new SkipListNode(-1, null, null)
  }

  public print(): void {
    let cur = this.head
    while (cur) {
      let arr = []
      let cur_level: SkipListNode | null = cur
      while (cur_level) {
        arr.push(cur_level.val)
        cur_level = cur_level.next
      }
      console.log("## : ", arr.join(' -> '));
      cur = cur.down
    }
  }
  public search(target: number): boolean {
    let cur = this.head
    while (cur !== null) {
      while (cur.next && cur.next.val < target) {
        cur = cur.next
      }
      if (cur.next && target === cur.next.val) {
        return true
      }
      cur = cur.down
    }
    return false
  }
  public add(num: number): void {
    let stack = new Array<SkipListNode>()
    let cur = this.head
    while (cur) {
      while (cur.next && cur.next.val < num) {
        cur = cur.next
      }
      stack.push(cur)
      cur = cur.down
    }
    let insert = true
    let down = null
    while (insert && stack.length > 0) {
      cur = stack.pop()!
      cur.next = new SkipListNode(num, cur.next, down)
      down = cur.next
      insert = Math.random() < Skiplist.PROBABILITY
    }
    if (insert)
      this.head = new SkipListNode(-1, null, this.head)
  }

  public erase(num: number): boolean {
    let cur = this.head
    let found = false
    while (cur) {
      while (cur.next && cur.next.val < num) {
        cur = cur.next
      }
      if (cur.next && cur.next.val === num) {
        cur.next = cur.next.next
        found = true
      }
      cur = cur.down
    }
    return found
  }
}
