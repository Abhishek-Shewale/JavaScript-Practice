// let a = 355000;

// {
//   if (true) {
//     let a = 10;
//     const b = 20;
//     console.log("INNER:", a);
//   }
// }

// console.log(a);
// console.log(b);
// console.log(c);

//  Nested Scope

function one() {
  const usernames = "Abhishek";

  function two() {
    const website = "Youtube.com";
    console.log(usernames);
  }
  // console.log(website);

  two();
}

// one();

if (true) {
  const usernames = "Abhishek";
  if (usernames === "Abhishek") {
    const website = "Youtube.com";
    // console.log(usernames + website);
  }
  // console.log(website);
}

// console.log(usernames);

// ++++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
