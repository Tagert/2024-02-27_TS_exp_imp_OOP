"use strict";

import { Figure, FigureType } from "./Figure.js";

export class Circle extends Figure {
  constructor({ color, isDigital }: FigureType) {
    super({ color, isDigital });
  }

  draw() {
    return "Drawing a circle";
  }
}
