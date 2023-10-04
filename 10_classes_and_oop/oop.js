// Object Literal

const user = {
  username: "abhi",
  loginCount: 8,
  signedIn: true,

  getUserDeatils: function () {
    console.log("Got user details");
  },
};

console.log(user.username);
console.log(user.getUserDeatils());
