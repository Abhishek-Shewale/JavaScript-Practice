// Primitive --Call by value means not giving reference only give copy and we made the changes in copy
// 7 types String, Number, Boolean, null, undefined, symbol, BigInt

const scores = 200;
const scoresvalue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let usrEmail;

const id = Symbol("123");
const anohterId = Symbol("123");

// console.log(id === anohterId);

const bigNumber = 333554444888n;

// reference (Non Primitive)
// Array, Object, Function

const heros = ["shaktiman", "doramon", "dodger"];
let myObj = {
  name: "abhi",
  age: 20,
};

const myFunction = function () {
  console.log("Hello world");
};

console;

//+++++++++++++++++++++ Stack and Heap +++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// let myYoutubename = "abhishek@youtube.com";

// let anothername = myYoutubename;
// anothername = "chaiaurcode";

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
  email: "user@example.com",
  upi: "upi@ybl",
};

let userTwo = userOne;

userTwo.email = "abhis@example";

console.log(userOne.email);
console.log(userTwo.email);

// All Primitive types are goes in stack and when anything is in the stack then we get copy of it.
// All Non primitive types are goes in heap and when anything is in the heap then we get reference of it.
