// singleton - when we declare like literals so that is not the singleton
// and when make from constructor then it is singleton const JsUser = {}

// Singleton Object ==> const tinderUser = new Object();
// Non Singleton Object ==> const tinderUser = {}

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "John",
  "full name": "John Wick",
  [mySym]: "mykey1",
  age: 30,
  location: "pune",
  email: "john@example.com",
  isLoggedIn: true,
  lastLoginDays: ["Sun", "Sat"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greetingTwo());
