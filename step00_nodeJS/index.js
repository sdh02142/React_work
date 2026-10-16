console.log("Hello, NodeJS!");

// cal.js import (commonJS 방식)
// const cal = require('./cal'); => 객체 형태로 받아옴.
// console.log(cal);

// const n1 = 5;
// const n2 = 7;

// console.log(`${n1} + ${n2} = ${cal.add(n1, n2)}`);
// console.log(`${n1} - ${n2} = ${cal.minus(n1, n2)}`);

// 구조 분해 할당 (commonJS 방식)
// const { add, minus } = require('./cal');

// const n1 = 5;
// const n2 = 7;

// console.log(`${n1} + ${n2} = ${add(n1, n2)}`);
// console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// ES JS 방식
import { add, minus } from './cal.js';

const n1 = 5;
const n2 = 7;

console.log(`${n1} + ${n2} = ${add(n1, n2)}`);
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);