const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};
// console.log(person.name); //lấy ra gía trị của key name
// lấy giá trị trong object
const { name: myName, age, address } = person;
//name:myName
// tạo ra 1 biến mới có giá trị = person.name
console.log(myName, age, address);

// nối object bằng toán tử
// lưu ý tên thuộc tính không được giống nhau không sẽ bị mất dữ liệu
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// toán tử spread ...
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//
