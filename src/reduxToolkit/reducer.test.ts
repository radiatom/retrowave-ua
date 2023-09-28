import { describe, expect, it } from "vitest";
import reducer, { addMusicList, createPlayerList, dataType, initialStateType } from "./reducer";

const data: dataType = [
    {
        id: "0",
        title: "Electric Youth – WeAreTheYouth",
        duration: 192000,
        rating: 3,
        idTrack: 1,
        artworkUrl: "./../",
        streamUrl: "./../",
    },
    {
        id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
        title: "Dynatron – 37 Million Horsepower",
        duration: 276000,
        rating: 1,
        idTrack: 2,
        artworkUrl: "./../",
        streamUrl: "./../",
    },
    {
        id: "594ea8427e44a724a5ce1782c3d3dcf058735e1e",
        title: "Muscle – All My Ex's Died In Texas",
        duration: 249000,
        rating: 2,
        idTrack: 3,
        artworkUrl: "./../",
        streamUrl: "./../",
    },
];

const state: initialStateType = {
    music: {},
    nameCurrentListPlayer: "",
    DefaultList: [],
    RatingList: [],
    RandomList: [],
    position: 0,
    numberOfTracks: 0,
    volume: 50,
    namesPlayerPlaylists: ["Default", "Rating", "Random"],
    namesBoomboxPlaylists: ["Default", "Rating", "Random"],
    list: {
        left: [],
        right: [],
    },
    pageNumber: { left: 1, right: 1 },
    openListName: { left: "", right: "" },
};

describe("reducer", () => {
    it("test addMusicList", () => {
        const initialState: initialStateType = state;
        const action = addMusicList({ data });
        const expectedState = { ...state, DefaultList: data };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });
    it("test createPlayerList name: Default", () => {
        const initialState: initialStateType = { ...state, DefaultList: data };
        const action = createPlayerList({ name: "Default" });
        const expectedState = { ...state, DefaultList: data, nameCurrentListPlayer: "Default" };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });
    it("test createPlayerList name: Rating", () => {
        const ratingList: dataType = [
            {
                id: "0",
                title: "Electric Youth – WeAreTheYouth",
                duration: 192000,
                rating: 3,
                idTrack: 1,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
            {
                id: "594ea8427e44a724a5ce1782c3d3dcf058735e1e",
                title: "Muscle – All My Ex's Died In Texas",
                duration: 249000,
                rating: 2,
                idTrack: 3,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
            {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 1,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
        ];
        const initialState: initialStateType = { ...state, DefaultList: data };
        const action = createPlayerList({ name: "Rating" });
        const expectedState = { ...state, DefaultList: data, nameCurrentListPlayer: "Rating", RatingList: ratingList };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });
    it("test createPlayerList name: Random", () => {
        const initialState: initialStateType = { ...state, DefaultList: data };
        const action = createPlayerList({ name: "Random" });
        expect("Random").toBe(reducer(initialState, action).nameCurrentListPlayer);
        expect(3).toBe(reducer(initialState, action).RandomList.length);
    });
    it("test createPlayerList name: Newname", () => {
        const initialState: initialStateType = { ...state, DefaultList: data };
        const action = createPlayerList({ name: "Newname" });
        expect("Newname").toBe(reducer(initialState, action).nameCurrentListPlayer);
    });
});
