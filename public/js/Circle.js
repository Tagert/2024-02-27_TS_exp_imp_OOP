"use strict";
import { Figure } from "./Figure.js";
export class Circle extends Figure {
    constructor({ color, isDigital }) {
        super({ color, isDigital });
    }
    draw() {
        return "Drawing a circle";
    }
}
