"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function printRGB(color) {
    return color;
}
// return 값을 Color 타입 지정하지 않아도 추론으로 Color 타입 반환
// return 값이 "color"라면 반환 값 string으로 추론
function printRGB1(color) {
    return color;
}
console.log(printRGB(types_1.Color.Red)); // Red
// console.log(printRGB(Color.Purple));
// TSError: ⨯ Unable to compile TypeScript:
// src/index.ts:15:28 - error TS2339: Property 'Purple' does not exist on type 'typeof Color'.
function printThingsInLif(things) {
    return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`;
}
console.log(printThingsInLif({ colorOfPen: types_1.Color.Blue, keyboardArrow: types_1.Direction.Left }));
