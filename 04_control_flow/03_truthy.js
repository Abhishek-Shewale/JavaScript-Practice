// const userEmail = [];

// if (userEmail) {
//   console.log("userEmail already in use");
// } else {
//   console.log("userEmail not in use");
// }

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0",  'false', " ", [], {}, function(){}

const userEmail = [];

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operators (??): null undefiend

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 50;
val1 = null ?? 5 ?? 10;

console.log(val1);

// Terniary operator
// condition ? true : false

const iceTea = 100;
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");
