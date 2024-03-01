"use strict";
import { Figure } from "./Figure.js";
export class Triangle extends Figure {
    constructor({ color, isDigital, aLength, bLength, cLength }) {
        super({ color, isDigital });
        this.aLength = aLength;
        this.bLength = bLength;
        this.cLength = cLength;
    }
    draw() {
        return "Drawing a triangle";
    }
    getArea() {
        const semiPerimeter = (this.aLength + this.bLength + this.cLength) / 2;
        const area = Math.sqrt(semiPerimeter *
            (semiPerimeter - this.aLength) *
            (semiPerimeter - this.bLength) *
            (semiPerimeter - this.cLength));
        return area.toFixed(2);
    }
    getPerimeter() {
        const perimeter = this.aLength + this.bLength + this.cLength;
        return perimeter;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        if (!color) {
            return;
        }
        this.color = color;
    }
}
