"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Guest_1 = __importDefault(require("../Guest"));
class Member extends Guest_1.default {
    constructor(r) {
        super(r);
    }
    get shapePerimeters() {
        return this._repo.shapePerimeters(this);
    }
    get averageShapePerimeter() {
        return this._repo.shapePerimeters(this) / this._repo.shapes(this).length;
    }
}
exports.default = Member;
