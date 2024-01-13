const sayHello = (name = "chung") => {
  // cho name bằng 'chung' để khi người dùng gọi hàm mà ko có giá trị thì sẽ không hiển thị ra undefined
  console.log("Xin chao ban " + name);
  //
  console.log(`Xin chao ban ${name}`);
};
console.log(sayHello("dat"));

const sum = (a, b) => a + b;
console.log(sum(2, 3));

// map:[] => new array
// lưu ý chỉ dùng cho mảng
