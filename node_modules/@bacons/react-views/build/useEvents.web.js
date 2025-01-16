"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
const react_1 = require("react");
// @ts-expect-error: untyped
const useHover_1 = __importDefault(require("react-native-web/dist/modules/useHover"));
function useHover(ref) {
    const [hover, setHovered] = (0, react_1.useState)(false);
    // TODO: We should just support the CSS property
    (0, useHover_1.default)(ref, {
        contain: true,
        onHoverChange: setHovered,
    });
    return hover;
}
exports.useHover = useHover;
//# sourceMappingURL=useEvents.web.js.map