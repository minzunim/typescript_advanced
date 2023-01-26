import { Order, Status, User } from "../types";

function getData<T>(data: T): T {
  return data;
}

console.log(getData<string>("Hello"));
console.log(getData<number>(1234));
console.log(getData<User>({ email: "email@email.com", name: "katie" }));
console.log(getData<string[]>(["Hello"]));
console.log(getData<string[]>([]));

// Object.keys는 string[]을 시그니처로 갖고 있으므로 Object.values를 사용
const orders: Order[] = Object.values(Status).map((status, index) => {
  return {
    buyer: `buyer #${index}`,
    orderStatus: status,
  };
});

// Object.values: 모든 값을 배열로 반환
const orders1 = Object.values(Status);
const orders2 = Object.keys(Status);

console.log(orders);
console.log(orders1);
console.log(orders2);
