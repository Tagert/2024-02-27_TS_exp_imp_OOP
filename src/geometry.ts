"use script";

import { Triangle } from "./Triangle.js";
import { Circle } from "./Circle.js";
import { Figure } from "./Figure.js";

// Figure - schematic (parent)

const figureNo1 = new Figure({ color: "red", isDigital: true });
console.log(figureNo1);

const testingFigure = figureNo1.draw();
console.log(testingFigure);

// Triangle

const triangleNo1 = new Triangle({
  color: "black",
  isDigital: false,
  aLength: 10,
  bLength: 12,
  cLength: 6,
});

console.log(triangleNo1);

const drawTriangle = triangleNo1.draw();
const triangleArea = triangleNo1.getArea();
const trianglePerimeter = triangleNo1.getPerimeter();

console.log(
  `Triangle Area: ${triangleArea}, Triangle Perimeter: ${trianglePerimeter}, ${drawTriangle}`
);

// Circle

const circleNo1 = new Circle({
  color: "white",
  isDigital: true,
});

console.log(circleNo1);

const drawCircle = circleNo1.draw();

console.log(drawCircle);
