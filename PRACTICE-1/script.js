
// Basic Arithmetic & Comparison

console.log(3 + 4 === 7);
// true
console.log(10 - 5 === 5);
// true
console.log(2 * 3 === 6);
// true
console.log(8 / 2 === 4);
// true
console.log(9 % 2 === 1);
// true
console.log(5 ** 2 === 25);
// true
console.log(7 + 2 > 8);
// true
console.log(10 - 3 < 5);
// false
console.log(4 * 3 >= 12);
// true
console.log(18 / 3 <= 6);
// true

//  Logical & Comparison

console.log(true && false);
// false
console.log(true || false);
// true
console.log(!false);
// true
console.log(5 === 5 && 'a' === 'a');
// true && true
// true
console.log(4 !== 3 || 2 === 5);
// true || false
// true
console.log(7 > 3 && 8 < 10);
// true && true
// true
console.log(3 === 3 || 4 !== 4);
// true || false
// true
console.log(!(5 > 10));
// !false
// true
console.log(true && true || false);
// true || false
// true
console.log(false || true && true);
// false || true
// true


// Combined Expressions

console.log(2 + 2 === 4 && 3 * 3 === 9);
// true && true
// true
console.log(5 + 3 > 7 || 2 * 2 !== 4);
// true || false
console.log(6 / 2 === 3 && 'cat' === 'dog' || 1);
// true && false || 1
// false || 1
// 1
console.log(10 - 3 > 5 && 2 * 2 === 4);
// true && true
// true
console.log('red' !== 'blue' || 7 < 5);
// true || false
// true

//  String & Type Checking

console.log('hello' + ' ' + 'world' === 'hello world');
// true
console.log(typeof 42 === 'number');
// true
console.log(typeof 'JS' === 'string');
// true
console.log(typeof true === 'boolean');
// true
console.log(typeof null === 'object');
// true



//  Equality vs. Strict Equality

console.log(5 == '5');
// true
console.log(5 === '5');
// false
console.log(0 == false);
// true
console.log(0 === false);
// false
console.log(null == undefined);
// true
console.log(null === undefined);
// false




//  Assignment & Compound Operators

let x = 5; 
x += 3; 
console.log(x === 8);
// true
let y = 10;
 y -= 4; 
console.log(y);
// 6
let z = 2; 
z *= 3; 
console.log(z);
// 6
let a = 20; 
a /= 4; 
console.log(a);
// 5

//  Ternary Operator

console.log(5 > 3 ? 'yes' : 'no');
// yes
console.log(10 === 10 ? true : false);
// true
console.log('dog' !== 'cat' ? 1 : 0);
// 1
console.log(2 > 5 ? 'big' : 'small');
// small


