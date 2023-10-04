// array

// shallow copy - whatever you change in shallow copying of an array to changes automatically happens in an original array

const myArray = [0, 1, 5, 4, 9];

// Array methiods

// myArray.push(6);
// myArray.push(9);
// myArray.pop();

// myArray.unshift(500);
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));
// console.log(myArray);

// const newArray = myArray.join();

// console.log(myArray);
// console.log(newArray);

// console.log(typeof myArray);
// console.log(typeof newArray);

//  slice, splice

console.log("A ", myArray);

const mna1 = myArray.slice(1, 3);
console.log(mna1);
console.log("B", myArray);

const mna2 = myArray.splice(1, 3);
console.log("C ", myArray);
console.log(mna2);
