"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
function getData(data) {
    return data;
}
console.log(getData("Hello"));
console.log(getData(1234));
console.log(getData({ email: "email@email.com", name: "katie" }));
console.log(getData(["Hello"]));
console.log(getData([]));
// Object.keys는 string[]을 시그니처로 갖고 있으므로 Object.values를 사용
const orders = Object.values(types_1.Status).map((status, index) => {
    return {
        buyer: `buyer #${index}`,
        orderStatus: status,
    };
});
// Object.values: 모든 값을 배열로 반환
const orders1 = Object.values(types_1.Status);
const orders2 = Object.keys(types_1.Status);
console.log(orders);
console.log(orders1);
console.log(orders2);
