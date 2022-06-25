class SkipListNode {
  key: number;
  val: number;
  next: SkipListNode[];
  constructor(key: number, val: number, next: SkipListNode[]) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
  public isKeyLessThan(key: number): boolean {
    return this.key < key;
  }
  public isKeyEqual(key: number): boolean {
    return this.key === key;
  }
}
export class SkipList {
  static PROBABILITY = 0.5;

  public head: SkipListNode | null = null
  public size: number = 0;
  public maxLevel: number = 0;
  public compare: (a: any, b: any) => number
  public constructor(compare: (a: any, b: any) => number) {
    this.compare = compare
  }
  public insert(value: any): void {
    this.head = this.insertNode(this.head, value)
  }
  public insertNode(node: SkipListNode | null, value: any): SkipListNode | null {
    if (node === null) {
      return new SkipListNode(value, value, [])
    }
    let next = node.next
    let i = 0
    while (i < next.length && this.compare(value, next[i].key) > 0) {
      i++
    }
    return node
  }
}
