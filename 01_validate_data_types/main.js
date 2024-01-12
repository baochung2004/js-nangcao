/** 
   CONSOLE 
 */
// Log number
// console.log(100);

// // Log string
// console.log("Hello World");

// // Log multiple values
// console.log(20, "Hello", true);

// // Log a variable
// const x = 100;
// console.log(x);

// // Console error & warning
// console.error("Alert");
// console.warn("Warning");

// // Log object as table
// console.table({ name: "Brad", email: "brad@gmail.com" });

// // Group console commands
// console.group("simple");
// console.log(x);
// console.error("Alert");
// console.warn("Warning");
// console.groupEnd();

// // Add CSS to logs
// const styles = "padding: 10px; background-color: white; color: green";
// console.log("%cHello World", styles);

/** KHAI BÁO BIẾN  */
/**
 * var    :Giá trị có thể thay đổi(nhưng biến vẫn có thể gọi lại Vd var a= 5 ,var a=6)
 * let    :Giá trị có thể thay đổi(nhưng biến không có thể gọi lại Vd let a= 5 ,let a=6)
 * const  :Giá trị của biến không thể thay đổi
 */

/**CÁCH ĐẶT TÊN BIÊN */
/**
 *camel case :firstName,lastName,... (Lưu ý nên đặt bằng tiếng anh)
 */

/**KIỂU DỮ LIỆU THƯƠNG DÙNG */
/**
 * string
 * number
 * boolean ( LƯU Ý : cách đặt tên : bắt đầu bằng has ,is VD hasCar,hasBike ,isShow)
 * array
 * objects
 * null
 * undefined
 */

// string
// const firstName = "Chung";
// const lastName = "Bảo";
// const fullName = lastName + " " + firstName;
// console.log(fullName);
// // number
// const a = 5;
// const b = 6;
// const c = a * b;
// console.log(c);
// // boolean
// const hasStudent = true;
// // array
// let myClass = ["Nam", "Hảo", "Hương", "Long"];
// console.log(myClass);
// // objects
// let student = {
//   name: "chung",
//   birthday: "16/07/2004",
//   sex: "nam",
// };
// console.log(student);
// // null
// const car = null;
// console.log(car);
// // undefined
// const bike = undefined;
// console.log(bike);

/** Hàm */
/**
 *Các kiểu Hàm
 */
function sayhello() {
  console.log("hello");
}
sayhello();
// Hàm Trả Về
function number() {
  const a = 1;
  const b = 2;
  return a * b;
}
console.log(number());
