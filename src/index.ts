"use script";

import { User } from "./users.js";

const userNo10 = new User({
  name: "John",
  age: 32,
  nickName: "Big Johnny",
  password: "John12",
});

const userNo11 = new User({
  name: "Nick",
  age: 25,
  nickName: "Nickel",
  password: "Nickel_69",
});

userNo11.setName("Big boy");
const newUserNo11 = userNo11.getName();
console.log(newUserNo11);

const userInfo = userNo11.getUserInfo();

console.log(`User info: ${JSON.stringify(userInfo)}`);
