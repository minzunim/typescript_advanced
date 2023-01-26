"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// readonly라는 키워드를 같이 쓰고 싶은 경우
// const error: readonly Array<boolean> = [false]; // error 발생 - 제네릭과 readonly 같이 사용할 수 없음
const okay = [true];
// readonly와 제네릭을 같이 쓰고 싶다면?
const okayGeneric = [false]; // ReadonlyArray<boolean>이라는 유틸리티 함수 사용
// 제네릭을 쓰는 이유는 뭘까?
// 1) 타입의 종류를 인터페이스에 가서 따로 확인하지 않아도 됨
// 2) 원하는 타입을 유니언으로 계속 추가하지 않아도 됨
const stringObjectG = { value: "hello world!" };
const numberObjectG = { value: 123 };
const stringArrayObjectG = {
    value: ["Hello", "World"],
};
