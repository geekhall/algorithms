# XOR rules


```typescript
// basic rules
console.log(0 ^ 0); // 0
console.log(0 ^ 1); // 1
console.log(1 ^ 0); // 1
console.log(1 ^ 1); // 0


// XOR rule2
// a number will return to it's original value
// if XOR twice to a same number
console.log(2 ^ 5 ^ 5); // 2

// XOR rule 3
// a number that xor with itself is equal to 0
console.log(5 ^ 5); // 0

// XOR rule 4
// a number that xor with zero is equal to itself
console.log(5 ^ 0); // 5


// XOR rule 5
// commutative law: a ^ b = b ^ a

// XOR rule 6
// associative law: a ^ (b ^ c) = (a ^ b) ^ c

// XOR rule 7
// IF a ^ b = c THEN a ^ c = b




console.log(2 ^ 5); // 7
console.log(3 ^ 5); // 6
console.log(4 ^ 5); // 1
console.log(6 ^ 5); // 3

console.log(7 ^ 5); // 2
console.log(2 ^ 3); // 1
```
