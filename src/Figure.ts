"use strict";

export type FigureType = {
  color: string;
  isDigital: boolean;
};

export class Figure {
  constructor({ color, isDigital }: FigureType) {
    this.color = color;
    this.isDigital = isDigital;
  }
  protected color: string;
  protected isDigital: boolean;

  draw() {
    return "Preparing for drawing";
  }
}
