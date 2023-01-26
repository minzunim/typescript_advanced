"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const keys = Object.keys(types_1.Color); // string[] (문자열 배열)
console.log(keys);
const values = Object.values(types_1.Color); // Color[] (enum 배열)
console.log(values);
const myObject = {};
// keys.forEach((key) => {
//   myObject[key] = "hello";
// });
// key는 string 타입이라 error
// myObject[key as Color]는 가능하나 타입 캐스팅은 하지 않는 게 좋음
values.forEach((key) => {
    myObject[key] = "hello";
});
// 컴파일 에러가 사라짐
