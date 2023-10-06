import {test, expect, describe} from "vitest";
import {fromFactoradic, toFactoradic} from "./index";

describe("convert", () => {
    const xkcdExamples: [number, string][] = [
        [1, "1"],
        [2, "10"],
        [3, "11"],
        [4, "20"],
        [5, "21"],
        [6, "100"],
        [7, "101"],
        [21, "311"],
        [22, "320"],
        [23, "321"],
        [24, "1000"],
        [25, "1001"],
        [5038, "654320"],
        [5039, "654321"],
        [5040, "1000000"],
        [999998, "266251210"],
        [999999, "266251211"],
        [1000000, "266251220"],
        [1000001, "266251221"],
    ];
    test.each(xkcdExamples)("xkcd examples fromFactoradic", (base_10, factoradic) => {
        // Test that the examples from https://xkcd.com/2835/ work for converting from factoradic
        expect(fromFactoradic(factoradic)).toBe(base_10);
    })

    test.each(xkcdExamples)("xkcd examples toFactoradic", (base_10, factoradic) => {
        // Test that the examples from https://xkcd.com/2835/ work for converting to factoradic
        expect(toFactoradic(base_10)).toBe(factoradic);
    })

    test("to maximum factoradic", () => {
        expect(toFactoradic(3628799)).toBe("987654321");
    });

    test("from maximum factoradic", () => {
        expect(fromFactoradic("987654321")).toBe(3628799);
    });

    test("toFactoradic throws on numbers larger than 3628799", () => {
        expect(() => toFactoradic(3628800)).toThrow("Numbers larger than 3628799 are simply illegal");
    });

    test("fromFactoradic throws on numbers larger than 987654321", () => {
        expect(() => fromFactoradic("1000000000")).toThrow("Numbers larger than 3628799 are simply illegal");
    });

    test.each([
        ["2", 0, 2],
        ["30", 0, 3],
        ["400", 0, 4],
        ["404", 2, 2],
        ["104", 2, 2],
        ["A", 0, 2],
    ])("fromFactoradic throws on invalid factoradic %s", (factoradic, index, expected_base) => {

        expect(() => fromFactoradic(factoradic)).toThrow(`Invalid input: Digit at position ${index} must be in base ${expected_base}`);
    });
});