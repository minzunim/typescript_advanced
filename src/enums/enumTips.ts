type TableData = { [x: string]: string };
// interface TableData { [x: string]: string}

const enum TableKey {
  ID = "ID",
  FirstName = "firstName",
  LastName = "lastName",
  Score = "score",
}

type StrictTableData = { [key in TableKey]: string };
type LessStrictTableData = { [key in TableKey]?: string };

// const myTableData: StrictTableData = {
//   ID: "1",
//   firstName: "Jane",
//   lastName: "doe",
//   score: "100",
//   age: "99", // error: 설정되지 않은 값
//   petName: "Hari", // error: 설정되지 않은 값
// };

const myTableData: LessStrictTableData = {
  ID: "1",
  firstName: "Jane",
  lastName: "doe",
  //   score: "100", // ? 포함되어 있으므로 프로퍼티가 없어도 허용됨
};
