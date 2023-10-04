function sayMyName() {
  console.log("H");
  console.log("E");
  console.log("L");
  console.log("A");
  console.log("W");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  //   console.log("Abhishek");
  return number1 + number2;
}

const result = addTwoNumbers(10, 20);

// console.log("Result: ", result);

function loginUserMessage(username) {
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(2, 200, 20000));

const user = {
  username: "abhis",
  prices: 200,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user);

handleObject({
  username: "aaaaabhis",
  price: 200000,
});

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
