"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Text = exports.View = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const filterStyles_1 = require("./filterStyles");
const Image_1 = __importDefault(require("./Image"));
const mergeRefs_1 = require("./mergeRefs");
const Text_1 = __importDefault(require("./Text"));
const useEvents_1 = require("./useEvents");
const View_1 = __importDefault(require("./View"));
function createPsuedoClassView(View, { style, center, ...props }, forwardedRef) {
    // Filter and apply `center` prop.
    const finalStyle = (0, react_1.useMemo)(() => {
        var _a;
        const filteredStyle = (_a = (0, filterStyles_1.filterStyles)(style)) !== null && _a !== void 0 ? _a : {};
        if (center) {
            return [styles.center, filteredStyle];
        }
        return filteredStyle;
    }, [style, center]);
    const Klass = (0, react_1.useMemo)(() => {
        if (props.hoverStyle) {
            return (0, react_1.forwardRef)(
            // @ts-expect-error
            createHoverView.bind(this, View));
        }
        return View;
    }, [props.hoverStyle]);
    return (
    // @ts-expect-error
    react_1.default.createElement(Klass, { ref: forwardedRef, style: finalStyle, ...props }));
}
function createHoverView(View, { hoverStyle, style, ...props }, forwardedRef) {
    const hostRef = (0, react_1.useRef)(null);
    const setRef = (0, mergeRefs_1.useMergeRefs)(forwardedRef, hostRef);
    const hover = (0, useEvents_1.useHover)(hostRef);
    const finalStyle = (0, react_1.useMemo)(() => {
        if (Array.isArray(style)) {
            return [...style, hover && hoverStyle];
        }
        return [style, hover && hoverStyle];
    }, [style, hoverStyle, hover]);
    return react_1.default.createElement(View, { ref: setRef, style: finalStyle, ...props });
}
exports.View = (0, react_1.forwardRef)(createPsuedoClassView.bind(this, View_1.default));
exports.Text = (0, react_1.forwardRef)(createPsuedoClassView.bind(this, Text_1.default));
exports.Image = (0, react_1.forwardRef)(createPsuedoClassView.bind(this, Image_1.default));
const styles = react_native_1.StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
});
//# sourceMappingURL=UniversalViews.js.map