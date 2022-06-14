"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor() {
        this._length = 0;
        this._width = 0;
    }
    set a(a) {
        this._length = a;
    }
    set b(b) {
        this._width = b;
    }
    area() {
        return this._length * this._width;
    }
    circumference() {
        return 2 * (this._length + this._width);
    }
}
exports.default = Rectangle;
