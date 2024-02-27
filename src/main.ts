"use strict";

// task part 1 create a function which return an object

import { UserType } from "./types";

const createUser = (UserDetails: {
  name: string;
  city: string;
  occupation: string;
  age: number;
}): UserType => {
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

enum COLOR {
  RED = "RED",
  BLUE = "BLUE",
  GREEN = "GREEN",
}

type CarTitleType = {
  brand: string;
  model: string;
};

type CarBodyType = {
  color: COLOR;
  bodyMaterial: string;
};

type CarSpecificationType = {
  passengerNumber: number;
  complectation: string;
};

type CarTechnicalType = {
  maxSpeed: number;
  engineKw: number;
  consumption: number;
};

type CarType = CarTitleType &
  CarBodyType &
  CarSpecificationType &
  CarTechnicalType;

const carNo1: CarType = {
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

const carNo2: CarType = {
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

const getSameTypeVariable = <T>(arg: T): T => {
  console.log(typeof arg);
  return arg;
};

const varNo1 = getSameTypeVariable<number>(1576);
const varNo2 = getSameTypeVariable<string>("smart");
const varNo3 = getSameTypeVariable<boolean>(true);

// two variables

const getSameTypeTwoVariable = <X, Y>(x: X, y: Y): [X, Y] => {
  console.log(typeof x, typeof y);
  return [x, y];
};

const varTwoNo1 = getSameTypeTwoVariable<number, number>(1576, 32);
const varTwoNo2 = getSameTypeTwoVariable<string, string>("smart", "25");
const varTwoNo3 = getSameTypeTwoVariable<boolean, boolean>(true, false);

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return { ...obj, fullName: `${obj.firstName} ${obj.lastName}` };
};

const nameNo1 = makeFullName({
  firstName: "Jack",
  lastName: "Reaper",
  age: 120,
});

console.log(nameNo1);

// task part 4 write a function with will accept two properties first will return a number | string | boolean in an array and the second property will command how many of those properties it will have.

type PrimitiveType = string | number | boolean;

const createArray = <X extends PrimitiveType, Y extends number>(
  content: X,
  count: Y
): X[] => {
  return Array.from(new Array(count), () => content);
  //another method -->  return new Array(count).fill(content);
};

const arrNo1 = createArray<PrimitiveType, number>("text", 2);
const arrNo2 = createArray<PrimitiveType, number>(25, 3);
const arrNo3 = createArray<PrimitiveType, number>(true, 4);

console.log(arrNo1);
console.log(arrNo2);
console.log(arrNo3);

// task part 5 write a function that combines three arrays and returns a single array as output

const getArray = <T>(arr1: T[], arr2: T[], arr3: T[]): T[] => {
  let concatArray: any[] = [];

  return concatArray.concat(arr1, arr2, arr3);
};

const arrayNo1 = getArray(
  [1, "sorry", true],
  ["James", 25, false],
  [true, 85, "house"]
);

console.log(arrayNo1);
