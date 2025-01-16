"use strict";
/**
 *
 * Copyright (c) Evan Bacon.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMergeRefs = exports.mergeRefs = void 0;
const React = __importStar(require("react"));
function mergeRefs(...args) {
    return function forwardRef(node) {
        args.forEach((ref) => {
            if (ref == null) {
                return;
            }
            if (typeof ref === "function") {
                ref(node);
                return;
            }
            if (typeof ref === "object") {
                // @ts-expect-error
                ref.current = node;
                return;
            }
            console.error(`mergeRefs cannot handle Refs of type boolean, number or string, received ref ${String(ref)}`);
        });
    };
}
exports.mergeRefs = mergeRefs;
function useMergeRefs(...args) {
    return React.useMemo(() => mergeRefs(...args), 
    // eslint-disable-next-line
    [...args]);
}
exports.useMergeRefs = useMergeRefs;
//# sourceMappingURL=mergeRefs.js.map