"use strict";
// https://github.com/jxnblk/css-box-shadow/blob/master/index.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBoxShadow = void 0;
const VALUES_REG = /,(?![^\(]*\))/;
const PARTS_REG = /\s(?![^(]*\))/;
const LENGTH_REG = /^[0-9]+[a-zA-Z%]+?$/;
const parseValue = (str) => {
    const parts = str.split(PARTS_REG);
    const inset = parts.includes("inset");
    const last = parts.slice(-1)[0];
    const color = !isLength(last) ? last : undefined;
    const nums = parts
        .filter((n) => n !== "inset")
        .filter((n) => n !== color)
        .map(toNum);
    const [x, y, blur, spread] = nums;
    return {
        inset,
        x,
        y,
        blur,
        spread,
        color,
    };
};
const isLength = (v) => v === "0" || LENGTH_REG.test(v);
const toNum = (v) => {
    if (!/px$/.test(v) && v !== "0")
        return v;
    const n = parseFloat(v);
    return !isNaN(n) ? n : v;
};
const parseBoxShadow = (str) => str
    .split(VALUES_REG)
    .map((s) => s.trim())
    .map(parseValue);
exports.parseBoxShadow = parseBoxShadow;
//# sourceMappingURL=parseBoxShadow.js.map