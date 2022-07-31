"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Memory {
    constructor() {
        this._shapes = new Map();
        this._shapeAreas = new Map();
        this._shapePerimeters = new Map();
    }
    addShape(u, s) {
        if (this._shapes.get(u.id) === undefined) {
            this._shapes.set(u.id, new Array());
        }
        this._shapes.get(u.id).push(s);
        if (this._shapeAreas.get(u.id) === undefined) {
            this._shapeAreas.set(u.id, 0);
        }
        this._shapeAreas.set(u.id, Number(this._shapeAreas.get(u.id)) + s.area());
        if (this._shapePerimeters.get(u.id) === undefined) {
            this._shapePerimeters.set(u.id, 0);
        }
        this._shapePerimeters.set(u.id, Number(this._shapePerimeters.get(u.id)) + s.perimeter());
    }
    shapes(u) {
        return this._shapes.get(u.id);
    }
    shapeAreas(u) {
        return Number(this._shapeAreas.get(u.id));
    }
    shapePerimeters(u) {
        return Number(this._shapePerimeters.get(u.id));
    }
}
exports.default = Memory;
