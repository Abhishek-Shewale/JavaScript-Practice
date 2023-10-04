// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser);

const regularUser = {
  email: "sam@example.com",
  fullname: {
    userfullname: {
      firstname: "abhishek",
      lastname: "shewale",
    },
  },
};

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "a", 5: "b", 6: "c" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// console.log(course.courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);
