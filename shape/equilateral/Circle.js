"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor() {
        this._radius = 0;
    }
    set a(a) {
        this._radius = a;
    }
    area() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    circumference() {
        return 2 * Math.PI * this._radius;
    }
}
exports.default = Circle;
