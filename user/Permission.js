"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasPermission = void 0;
const HasPermission = (u, s) => {
    if (u.constructor.name != 'Guest') {
        return true;
    }
    switch (s.constructor.name) {
        case 'Circle':
        case 'Square':
            return true;
    }
    return false;
};
exports.HasPermission = HasPermission;
