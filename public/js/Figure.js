"use strict";
export class Figure {
    constructor({ color, isDigital }) {
        this.color = color;
        this.isDigital = isDigital;
    }
    draw() {
        return "Preparing for drawing";
    }
}
