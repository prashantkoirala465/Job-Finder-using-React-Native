import { SharedValue } from './commonTypes';
export declare type InterpolationOptions = {
    gamma?: number;
    useCorrectedHSVInterpolation?: boolean;
};
interface InterpolateRGB {
    r: number[];
    g: number[];
    b: number[];
    a: number[];
}
interface InterpolateHSV {
    h: number[];
    s: number[];
    v: number[];
    a: number[];
}
export declare const interpolateColor: (value: number, inputRange: readonly number[], outputRange: readonly (string | number)[], colorSpace?: 'RGB' | 'HSV', options?: InterpolationOptions) => string | number;
export declare enum ColorSpace {
    RGB = 0,
    HSV = 1
}
export interface InterpolateConfig {
    inputRange: readonly number[];
    outputRange: readonly (string | number)[];
    colorSpace: ColorSpace;
    cache: SharedValue<InterpolateRGB | InterpolateHSV | null>;
    options: InterpolationOptions;
}
export declare function useInterpolateConfig(inputRange: readonly number[], outputRange: readonly (string | number)[], colorSpace?: ColorSpace, options?: InterpolationOptions): SharedValue<InterpolateConfig>;
export declare const interpolateSharableColor: (value: number, interpolateConfig: SharedValue<InterpolateConfig>) => string | number;
export {};
