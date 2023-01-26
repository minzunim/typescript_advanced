"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const myColor = types_1.Color.Red;
console.log(myColor);
const yourColor = types_1.Color.Blue;
console.log(yourColor);
const chorock = types_1.Color.Green;
console.log(chorock);
// const chorock2: Color.Blue = Color.Green;
// src/index.ts:9:7 - error TS2322: Type 'Color.Green' is not assignable to type 'Color.Blue'.
// const chorock3: Color = "Green";
// src/index.ts:12:7 - error TS2322: Type '"Green"' is not assignable to type 'Color'.
// 타입 캐스팅을 이용하면 에러 없이 원하는대로 타입 지정 가능
const faveColor = "Red"; // "Red"
const imposterColor = "Potato"; // "Potato"
