"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Square {
    constructor() {
        this._side = 0;
    }
    set a(a) {
        this._side = a;
    }
    area() {
        return Math.pow(this._side, 2);
    }
    circumference() {
        return 4 * this._side;
    }
}
exports.default = Square;
