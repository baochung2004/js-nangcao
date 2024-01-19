const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
console.log(new Set("Jonas"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Noodle"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze,Italy");
console.log(rest.set(2, "Lisbon,Portugal"));
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("clone", 23)
  .set(true, "We are open :D")
  .set(false, "we are closed :(");
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("clone")));
console.log(rest.has("categories"));

rest.delete(2);
// rest.clear();
// rest.set([1, 2], "test");// không đặt key như này
const arr = [1, 2];
rest.set(arr, "test");

console.log(rest);
console.log(rest.size);
// console.log(rest.get([1, 2]));// không hiển thị ra được
console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programing language is the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaSrcipt"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question.get("question"));
console.log(question);
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
  if (typeof key === "string") console.log(`Answer ${key} : ${value}`);
  if (typeof key === "boolean") console.log(`Answer ${key} : ${value}`);
}
