"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
let View = react_native_1.View;
if (process.env.NODE_ENV !== 'production') {
    // Add better errors and warnings in development builds.
    View = function View(props) {
        const children = react_1.default.useMemo(() => {
            const children = [];
            react_1.default.Children.forEach(props.children, (child) => {
                if (child == null) {
                    return;
                }
                if (typeof child === 'string') {
                    // Wrap text in a Text component.
                    console.warn(`Invalid raw text as a child of View: "${child}". Wrap it with a Text component or remove it.`);
                    children.push(react_1.default.createElement(react_native_1.Text, { style: { position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'firebrick', color: 'white', fontSize: 24 } },
                        "Unwrapped text: \"",
                        react_1.default.createElement(react_native_1.Text, { style: { fontWeight: 'bold' } }, child),
                        "\""));
                    return;
                }
                else if (typeof (child === null || child === void 0 ? void 0 : child.type) === 'string' && react_native_1.Platform.OS !== 'web') {
                    // Disallow react-dom elements on native.
                    throw new Error(`Using unsupported React DOM element "<${child.type} />" in React Native. Please remove this child from the View.`);
                }
                children.push(child);
            });
            return children;
        }, [props.children]);
        return react_1.default.createElement(react_native_1.View, { ...props, children: children });
    };
}
exports.default = View;
//# sourceMappingURL=View.js.map