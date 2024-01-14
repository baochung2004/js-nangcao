const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
// nối chuỗi bằng toán tủư spread
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // in ra dưới dạng string

// array ,strings ,maps,sets .Not object

const str = "Jonas";
const letters = [...str, " ", "s."];
console.log(letters);
console.log(...str);

const orderPasta = (ing1, ing2, ing3) => {
  console.log(`Here is your declicious pasta with ${ing1} ,${ing2},${ing3}`);
};

const ingredients = [
  //   prompt("Let's make pasta ! ingredient 1"),
  //   prompt(" ingredient 2"),
  //   prompt(" ingredient 3"),
];
console.log(ingredients);
orderPasta(ingredients[0], ingredients[1], ingredients[2]); //cách gọi 1
orderPasta(...ingredients); //cách gọi 2

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// 2 function
const add = (...numbers) => {
  // dùng toán tử spread để nén chúng lại thành một
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [25, 5, 7];
add(...x);
