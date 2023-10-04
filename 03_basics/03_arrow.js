//  Inside the browser the global object is window object.

// const user = {
//   username: "abhishek",
//   price: 555,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "abhishek";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "abhishek";
//   console.log(this.username);
// };

// const chai = () => {
//   let username = "abhishek";
//   console.log(this.username);
// };

// chai();

// Basic Arrow Function

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwo(10, 20));

// Implicit return

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(10, 20));
