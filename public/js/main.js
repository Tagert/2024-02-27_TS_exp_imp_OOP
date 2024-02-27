"use strict";
const createUser = (UserDetails) => {
    return UserDetails;
};
const userNo1 = createUser({
    name: "Jerry",
    city: "Berlin",
    occupation: "Mechanic",
    age: 25,
});
const userNo2 = createUser({
    name: "Luck",
    city: "Stockholm",
    occupation: "Solder",
    age: 25,
});
console.log(userNo1, userNo2);
// task part 2 use separate types and those combine to one main type which will contains all types and enum
var COLOR;
(function (COLOR) {
    COLOR["RED"] = "RED";
    COLOR["BLUE"] = "BLUE";
    COLOR["GREEN"] = "GREEN";
})(COLOR || (COLOR = {}));
const carNo1 = {
    brand: "Skoda",
    model: "Scala",
    color: COLOR.RED,
    bodyMaterial: "Mild steel",
    passengerNumber: 5,
    complectation: "Elegance",
    maxSpeed: 210,
    engineKw: 81,
    consumption: 6.5,
};
const carNo2 = {
    brand: "Skoda",
    model: "Octavia",
    color: COLOR.GREEN,
    bodyMaterial: "Mild steel",
    passengerNumber: 5,
    complectation: "Sport",
    maxSpeed: 250,
    engineKw: 110,
    consumption: 8.5,
};
// task part 3 use some basic generics
// one variable
const getSameTypeVariable = (arg) => {
    console.log(typeof arg);
    return arg;
};
const varNo1 = getSameTypeVariable(1576);
const varNo2 = getSameTypeVariable("smart");
const varNo3 = getSameTypeVariable(true);
// two variables
const getSameTypeTwoVariable = (x, y) => {
    console.log(typeof x, typeof y);
    return [x, y];
};
const varTwoNo1 = getSameTypeTwoVariable(1576, 32);
const varTwoNo2 = getSameTypeTwoVariable("smart", "25");
const varTwoNo3 = getSameTypeTwoVariable(true, false);
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName} ${obj.lastName}` });
};
const nameNo1 = makeFullName({
    firstName: "Jack",
    lastName: "Reaper",
    age: 120,
});
console.log(nameNo1);
const createArray = (content, count) => {
    return Array.from(new Array(count), () => content);
    //another method -->  return new Array(count).fill(content);
};
const arrNo1 = createArray("text", 2);
const arrNo2 = createArray(25, 3);
const arrNo3 = createArray(true, 4);
console.log(arrNo1);
console.log(arrNo2);
console.log(arrNo3);
// task part 5 write a function that combines three arrays and returns a single array as output
const getArray = (arr1, arr2, arr3) => {
    let concatArray = [];
    return concatArray.concat(arr1, arr2, arr3);
};
const arrayNo1 = getArray([1, "sorry", true], ["James", 25, false], [true, 85, "house"]);
console.log(arrayNo1);
export {};
