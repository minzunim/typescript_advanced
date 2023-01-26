import { Color } from "../types";

const keys = Object.keys(Color); // string[] (문자열 배열)
console.log(keys);

const values = Object.values(Color); // Color[] (enum 배열)
console.log(values);

type ObjectType = {
  [key in Color]?: string; // [key in Color] : 필수 키 값
};

const myObject: ObjectType = {};

// keys.forEach((key) => {
//   myObject[key] = "hello";
// });
// key는 string 타입이라 error
// myObject[key as Color]는 가능하나 타입 캐스팅은 하지 않는 게 좋음

values.forEach((key) => {
  myObject[key] = "hello";
});
// 컴파일 에러가 사라짐
