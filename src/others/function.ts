import { Color, Direction } from "../types";
// 같이 써줘도 되지만 type은 따로 분리하는 것이 좋은 문법
import type { ThingsInLife } from "../types";

function printRGB(color: Color): Color {
  return color;
}

// return 값을 Color 타입 지정하지 않아도 추론으로 Color 타입 반환
// return 값이 "color"라면 반환 값 string으로 추론
function printRGB1(color: Color) {
  return color;
}

console.log(printRGB(Color.Red)); // Red
// console.log(printRGB(Color.Purple));
// TSError: ⨯ Unable to compile TypeScript:
// src/index.ts:15:28 - error TS2339: Property 'Purple' does not exist on type 'typeof Color'.

function printThingsInLif(things: ThingsInLife) {
  return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`;
}

console.log(
  printThingsInLif({ colorOfPen: Color.Blue, keyboardArrow: Direction.Left })
);
