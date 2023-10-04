const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} + currval: ${currval}`);
  return acc + currval;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 3999,
  },
  {
    itemName: "py course",
    price: 1999,
  },
  {
    itemName: "java course",
    price: 5999,
  },
  {
    itemName: "SQL course",
    price: 999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
