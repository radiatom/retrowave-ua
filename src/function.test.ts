import { describe, expect, it } from "vitest";
import {
    newTimeForBoombox,
    newTime,
    capitalizeFirstLetter,
    updateValueById,
    containsLatinAndDigits,
    timeToMilliseconds,
} from "./function";
import { dataType } from "./reduxToolkit/reducer";

describe("testing fn newTimeForBoombox ", () => {
    it("return string:000 from number:0", () => {
        expect(newTimeForBoombox(0)).toBe("000");
    });
    it("return string:125 from number:125", () => {
        expect(newTimeForBoombox(125)).toBe("125");
    });
});

describe("testing fn newTime", () => {
    it("return string:1:25 from number:85", () => {
        expect(newTime(85)).toBe("1:25");
    });
    it("return string:0:05 from number:5", () => {
        expect(newTime(5)).toBe("0:05");
    });
});

describe("testing fn capitalizeFirstLetter", () => {
    it("return empty string", () => {
        expect(capitalizeFirstLetter("")).toBe("");
    });
    it("return string with first capitalize  letter", () => {
        expect(capitalizeFirstLetter("fdsfdsdf")).toBe("Fdsfdsdf");
    });
    it("return string with first capitalize  letter", () => {
        expect(capitalizeFirstLetter("New")).toBe("New");
    });
});

describe("testing fn updateValueById", () => {
    const data: dataType = [
        {
            id: "0",
            title: "Electric Youth – WeAreTheYouth",
            duration: 192000,
            rating: 0,
            idTrack: 1,
            artworkUrl: "./../",
            streamUrl: "./../",
        },
        {
            id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
            title: "Dynatron – 37 Million Horsepower",
            duration: 276000,
            rating: 0,
            idTrack: 2,
            artworkUrl: "./../",
            streamUrl: "./../",
        },
        {
            id: "594ea8427e44a724a5ce1782c3d3dcf058735e1e",
            title: "Muscle – All My Ex's Died In Texas",
            duration: 249000,
            rating: 0,
            idTrack: 3,
            artworkUrl: "./../",
            streamUrl: "./../",
        },
    ];
    it("update rating by id", () => {
        expect(updateValueById(data, "5d4ca036e66f3ae771c008e56b111d116f7142cb", 4)).toStrictEqual([
            {
                id: "0",
                title: "Electric Youth – WeAreTheYouth",
                duration: 192000,
                rating: 0,
                idTrack: 1,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
            {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 4,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
            {
                id: "594ea8427e44a724a5ce1782c3d3dcf058735e1e",
                title: "Muscle – All My Ex's Died In Texas",
                duration: 249000,
                rating: 0,
                idTrack: 3,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
        ]);
    });
});

describe("testing fn containsLatinAndDigits", () => {
    it("return true if string not have latin leters", () => {
        expect(containsLatinAndDigits("news")).toBe(true);
    });
    it("return false if string have latin leters", () => {
        expect(containsLatinAndDigits("Привіт")).toBe(false);
    });
});

describe("testing fn timeToMilliseconds", () => {
    it("return miliseconds from the format: string:4:46", () => {
        expect(timeToMilliseconds("4:46")).toBe(286000);
    });
});
