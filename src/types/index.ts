export enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// type TThingsInLife = {
//   colorOfPen: Color;
//   keyboardArrow: Direction;
// };

export interface ThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

// 제네릭 없이 인터페이스 만들기
export interface Myinterface {
  value: string | number | string[];
}

// 제네릭으로 인터페이스 만들기
export interface MyinterfaceG<T> {
  value: T;
}

export type User = {
  email: string;
  name: string;
};

export enum Status {
  Initiated = "Initiated",
  Pending = "Pending",
  Shipped = "Shipped",
  Delivered = "Delivered",
}

export interface Order {
  buyer: string;
  orderStatus: Status;
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}
