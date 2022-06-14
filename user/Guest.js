"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Permission_1 = require("./Permission");
class Guest {
    constructor(r) {
        this._id = (0, uuid_1.v4)();
        this._repo = r;
    }
    get id() {
        return BigInt('0x' + this._id.replace(/-/g, ''));
    }
    addShape(s) {
        if (!(0, Permission_1.HasPermission)(this, s)) {
            return;
        }
        this._repo.addShape(this, s);
    }
    get shapeAreas() {
        return this._repo.shapeAreas(this);
    }
    get averageShapeArea() {
        return this._repo.shapeAreas(this) / this._repo.shapes.length;
    }
}
exports.default = Guest;
