import { describe, expect, it } from "vitest";
import reducer, {
    addMusic,
    addMusicList,
    addNewList,
    addTrackIntoList,
    createPlayerList,
    dataType,
    deleteNewList,
    deleteTrackWithList,
    initialStateType,
    setList,
    setPageNumber,
    setPosition,
    setRating,
    setVolume,
} from "./reducer";

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
const initialStateSetList: initialStateType = {
    ...state,
    DefaultList: [
        {
            id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
            title: "DefaultList",
            duration: 276000,
            rating: 1,
            idTrack: 2,
            artworkUrl: "./../",
            streamUrl: "./../",
        },
    ],
    RatingList: [
        {
            id: "594ea8427e44a724a5ce1782c3d3dcf058735e1e",
            title: "RatingList",
            duration: 249000,
            rating: 2,
            idTrack: 3,
            artworkUrl: "./../",
            streamUrl: "./../",
        },
    ],
    NewnameList: [
        {
            id: "48643145",
            title: "NewnameList",
            duration: 249000,
            rating: 2,
            idTrack: 3,
            artworkUrl: "./../",
            streamUrl: "./../",
        },
    ],
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
    it("test addMusic nameCurrentListPlayer: Newname ", () => {
        const initialState: initialStateType = { ...state, nameCurrentListPlayer: "Newname", NewnameList: data };
        const action = addMusic({ position: 1 });
        const expectState: initialStateType = {
            ...initialState,
            numberOfTracks: 3,
            music: {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 1,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
        };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test addMusic nameCurrentListPlayer:Default", () => {
        const initialState: initialStateType = { ...state, nameCurrentListPlayer: "Default", DefaultList: data };
        const action = addMusic({ position: 1 });
        const expectState: initialStateType = {
            ...initialState,
            numberOfTracks: 3,
            music: {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 1,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
        };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test addMusic nameCurrentListPlayer:Random", () => {
        const initialState: initialStateType = { ...state, nameCurrentListPlayer: "Random", RandomList: data };
        const action = addMusic({ position: 1 });
        const expectState: initialStateType = {
            ...initialState,
            numberOfTracks: 3,
            music: {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 1,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
        };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test addMusic nameCurrentListPlayer:Rating", () => {
        const initialState: initialStateType = { ...state, nameCurrentListPlayer: "Rating", RatingList: data };
        const action = addMusic({ position: 1 });
        const expectState: initialStateType = {
            ...initialState,
            numberOfTracks: 3,
            music: {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 1,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
        };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test setPosition ", () => {
        const initialState: initialStateType = state;
        const action = setPosition({ position: 80 });
        const expectState = { ...state, position: 80 };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test setVolume ", () => {
        const initialState: initialStateType = state;
        const action = setVolume({ volume: 80 });
        const expectState = { ...state, volume: 80 };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test setRating ", () => {
        const data1: dataType = [
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
                rating: 5,
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
        const newRatingList: dataType = [
            {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 5,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
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
        ];
        const initialState: initialStateType = {
            ...state,
            music: {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 0,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
            DefaultList: data,
            RatingList: data,
            RandomList: data,
            list: {
                left: data,
                right: data,
            },
            openListName: { left: "Rating", right: "Rating" },
        };
        const action = setRating({ id: "5d4ca036e66f3ae771c008e56b111d116f7142cb", rating: 5 });
        const expectState = {
            ...state,
            music: {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 5,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
            DefaultList: data1,
            RatingList: newRatingList,
            RandomList: data1,
            list: {
                left: newRatingList,
                right: newRatingList,
            },
            openListName: { left: "Rating", right: "Rating" },
        };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test setPageNumber position: left", () => {
        const initialState: initialStateType = state;
        const action = setPageNumber({ position: "left", number: 25 });
        const expectState = { ...state, pageNumber: { left: 25, right: 1 } };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test setPageNumber position: right", () => {
        const initialState: initialStateType = state;
        const action = setPageNumber({ position: "right", number: 25 });
        const expectState = { ...state, pageNumber: { left: 1, right: 25 } };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test setList position: left; typeList: Rating", () => {
        const action = setList({ position: "left", typeList: "Rating" });
        const expectState = {
            ...initialStateSetList,
            list: {
                ...state.list,
                left: [
                    {
                        id: "594ea8427e44a724a5ce1782c3d3dcf058735e1e",
                        title: "RatingList",
                        duration: 249000,
                        rating: 2,
                        idTrack: 3,
                        artworkUrl: "./../",
                        streamUrl: "./../",
                    },
                ],
            },
        };
        expect(reducer(initialStateSetList, action)).toEqual(expectState);
    });
    it("test setList position: left; typeList: Default", () => {
        const action = setList({ position: "left", typeList: "Default" });
        const expectState = {
            ...initialStateSetList,
            list: {
                ...state.list,
                left: [
                    {
                        id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                        title: "DefaultList",
                        duration: 276000,
                        rating: 1,
                        idTrack: 2,
                        artworkUrl: "./../",
                        streamUrl: "./../",
                    },
                ],
            },
        };
        expect(reducer(initialStateSetList, action)).toEqual(expectState);
    });
    it("test setList position: left; typeList: Newname", () => {
        const action = setList({ position: "left", typeList: "Newname" });
        const expectState = {
            ...initialStateSetList,
            list: {
                ...state.list,
                left: [
                    {
                        id: "48643145",
                        title: "NewnameList",
                        duration: 249000,
                        rating: 2,
                        idTrack: 3,
                        artworkUrl: "./../",
                        streamUrl: "./../",
                    },
                ],
            },
        };
        expect(reducer(initialStateSetList, action)).toEqual(expectState);
    });
    it("test setList position: right; typeList: Newname", () => {
        const action = setList({ position: "right", typeList: "Newname" });
        const expectState = {
            ...initialStateSetList,
            list: {
                ...state.list,
                right: [
                    {
                        id: "48643145",
                        title: "NewnameList",
                        duration: 249000,
                        rating: 2,
                        idTrack: 3,
                        artworkUrl: "./../",
                        streamUrl: "./../",
                    },
                ],
            },
        };
        expect(reducer(initialStateSetList, action)).toEqual(expectState);
    });
    it("test setList position: right; typeList: Default", () => {
        const action = setList({ position: "right", typeList: "Default" });
        const expectState = {
            ...initialStateSetList,
            list: {
                ...state.list,
                right: [
                    {
                        id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                        title: "DefaultList",
                        duration: 276000,
                        rating: 1,
                        idTrack: 2,
                        artworkUrl: "./../",
                        streamUrl: "./../",
                    },
                ],
            },
        };
        expect(reducer(initialStateSetList, action)).toEqual(expectState);
    });
    it("test setList position: right; typeList: Rating", () => {
        const action = setList({ position: "right", typeList: "Rating" });
        const expectState = {
            ...initialStateSetList,
            list: {
                ...state.list,
                right: [
                    {
                        id: "594ea8427e44a724a5ce1782c3d3dcf058735e1e",
                        title: "RatingList",
                        duration: 249000,
                        rating: 2,
                        idTrack: 3,
                        artworkUrl: "./../",
                        streamUrl: "./../",
                    },
                ],
            },
        };
        expect(reducer(initialStateSetList, action)).toEqual(expectState);
    });
    it("test addNewList", () => {
        const initialState: initialStateType = state;
        const action = addNewList({ newName: "New" });
        expect(reducer(initialState, action).NewList).toStrictEqual([]);
        expect(reducer(initialState, action).namesBoomboxPlaylists).toStrictEqual(["Default", "Rating", "Random", "New"]);
    });
    it("test deleteNewList", () => {
        const initialState: initialStateType = {
            ...state,
            NewList: [],
            namesBoomboxPlaylists: ["Default", "Rating", "Random", "New"],
            namesPlayerPlaylists: ["Default", "Rating", "Random", "New"],
        };
        const action = deleteNewList({ name: "New" });
        expect(reducer(initialState, action).NewList).toBe(undefined);
        expect(reducer(initialState, action).namesBoomboxPlaylists).toStrictEqual(["Default", "Rating", "Random"]);
        expect(reducer(initialState, action).namesPlayerPlaylists).toStrictEqual(["Default", "Rating", "Random"]);
    });
    it("test addTrackIntoList, add first track into newList", () => {
        const initialState: initialStateType = { ...state, DefaultList: data, nameCurrentListPlayer: "Default", NewList: [] };
        const action = addTrackIntoList({
            currentList: "Default",
            id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
            intoList: "New",
        });
        const expectState: initialStateType = {
            ...initialState,
            namesPlayerPlaylists: ["Default", "Rating", "Random", "New"],
            NewList: [
                {
                    id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                    title: "Dynatron – 37 Million Horsepower",
                    duration: 276000,
                    rating: 1,
                    idTrack: 2,
                    artworkUrl: "./../",
                    streamUrl: "./../",
                },
            ],
        };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test addTrackIntoList, add second track into newList", () => {
        const initialState: initialStateType = {
            ...state,
            DefaultList: data,
            nameCurrentListPlayer: "New",
            namesPlayerPlaylists: ["Default", "Rating", "Random", "New"],
            NewList: [
                {
                    id: "0",
                    title: "Electric Youth – WeAreTheYouth",
                    duration: 192000,
                    rating: 3,
                    idTrack: 1,
                    artworkUrl: "./../",
                    streamUrl: "./../",
                },
            ],
        };
        const action = addTrackIntoList({
            currentList: "Default",
            id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
            intoList: "New",
        });
        const expectState: initialStateType = {
            ...initialState,
            numberOfTracks: 2,
            NewList: [
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
            ],
        };
        expect(reducer(initialState, action)).toEqual(expectState);
    });
    it("test deleteTrackWithList, delete track with big Newlist.The track is playing in the player ", () => {
        const initialState: initialStateType = {
            ...state,
            position: 1,
            DefaultList: data,
            nameCurrentListPlayer: "Default",
            NewList: data,
            music: {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 1,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
        };
        const action = () => {
            deleteTrackWithList({ currentList: "New", id: "5d4ca036e66f3ae771c008e56b111d116f7142cb" });
        };
        const expectState: initialStateType = {
            ...state,
            position: 0,
            music: {
                id: "0",
                title: "Electric Youth – WeAreTheYouth",
                duration: 192000,
                rating: 3,
                idTrack: 1,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
            NewList: [
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
            ],
        };
    });
    it("test deleteTrackWithList, delete track with Newlist.Newlist have one treck. The track is playing in the player", () => {
        const initialState: initialStateType = {
            ...state,
            namesPlayerPlaylists: ["Default", "Rating", "Random", "New"],
            nameCurrentListPlayer: "New",
            music: {
                id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                title: "Dynatron – 37 Million Horsepower",
                duration: 276000,
                rating: 1,
                idTrack: 2,
                artworkUrl: "./../",
                streamUrl: "./../",
            },
            NewList: [
                {
                    id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
                    title: "Dynatron – 37 Million Horsepower",
                    duration: 276000,
                    rating: 1,
                    idTrack: 2,
                    artworkUrl: "./../",
                    streamUrl: "./../",
                },
            ],
        };
        const action = () => {
            deleteTrackWithList({ currentList: "New", id: "5d4ca036e66f3ae771c008e56b111d116f7142cb" });
        };
        const expectState: initialStateType = {
            ...state,
            NewList: [],
            namesPlayerPlaylists: ["Default", "Rating", "Random"],
            nameCurrentListPlayer: "Default",
        };
    });
});

//toBe перевіряє, чи об'єкти є однаковими за посиланням. Іншими словами, цей метод перевіряє, чи це один і той же об'єкт або примітивне значення.
//toStrictEqual перевіряє глибоку рівність об'єктів. Це означає, що він перевіряє значення об'єктів та їхню вкладеність.
//toEqual також перевіряє глибоку рівність об'єктів, але це дозволяє їм бути в іншому порядку.
