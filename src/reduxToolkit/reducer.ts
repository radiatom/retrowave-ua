import { allApi } from "../api/api";
import { updateValueById } from "../function";
import { Action, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { serverDataType } from "../server";

export type pageNumberType = { left: number; right: number };
export type openListNameType = { left: string; right: string };

export type initialStateType = {
    music: trackType | object;
    nameCurrentListPlayer: string;
    DefaultList: dataType | [];
    RatingList: dataType | [];
    RandomList: dataType | [];
    position: number;
    numberOfTracks: number;
    volume: number;
    namesPlayerPlaylists: Array<string>;
    namesBoomboxPlaylists: Array<string>;
    list: {
        left: dataType | [];
        right: dataType | [];
    };
    pageNumber: pageNumberType;
    openListName: openListNameType;
};
const initialState: initialStateType = {
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
const reducer = createSlice({
    name: "toolkit",
    initialState: initialState,
    reducers: {
        addMusicList(state, action: AddMusicListAction) {
            state.DefaultList = action.payload.data;
        },
        createPlayerList(state, action: CreatePlayerListAction) {
            switch (action.payload.name) {
                case "Default": {
                    state.nameCurrentListPlayer = "Default";
                    break;
                }
                case "Rating": {
                    const newArray: dataType = [...state.DefaultList];
                    newArray.sort((a, b) => {
                        return b.rating - a.rating;
                    });
                    state.nameCurrentListPlayer = "Rating";
                    state.RatingList = newArray;
                    break;
                }
                case "Random": {
                    const shuffledArray: dataType = [...state.DefaultList];
                    for (let i = shuffledArray.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
                    }
                    state.nameCurrentListPlayer = "Random";
                    state.RandomList = shuffledArray;
                    break;
                }
                default: {
                    state.nameCurrentListPlayer = action.payload.name;
                }
            }
        },
        addMusic(state, action: AddMusicAction) {
            switch (state.nameCurrentListPlayer) {
                case "Random": {
                    state.music = state.RandomList[action.payload.position];
                    state.numberOfTracks = state.RandomList.length;
                    break;
                }
                case "Rating": {
                    state.music = state.RatingList[action.payload.position];
                    state.numberOfTracks = state.RatingList.length;
                    break;
                }
                case "Default": {
                    state.music = state.DefaultList[action.payload.position];
                    state.numberOfTracks = state.DefaultList.length;
                    break;
                }
                case "": {
                    state.music = state.DefaultList[action.payload.position];
                    state.numberOfTracks = state.DefaultList.length;
                    break;
                }
                default: {
                    state.music = state[state.nameCurrentListPlayer + "List"][action.payload.position];
                    state.numberOfTracks = state[state.nameCurrentListPlayer + "List"].length;
                }
            }
        },
        setPosition(state, action: SetPositionAction) {
            state.position = action.payload.position;
        },
        setVolume(state, action: SetVolumeAction) {
            state.volume = action.payload.volume;
        },
        setRating(state, action: SetRatingAction) {
            const updatedDefaultList = updateValueById(state.DefaultList, action.payload.id, action.payload.rating); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedRatingList = [...updatedDefaultList];
            updatedRatingList.sort((a, b) => b.rating - a.rating); //відразу сортуємо по рейтингу
            const updatedRandomList = updateValueById(state.RandomList, action.payload.id, action.payload.rating); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedleftList =
                state.openListName.left === "Rating"
                    ? updatedRatingList
                    : updateValueById(state.list.left, action.payload.id, action.payload.rating); //якщо відкритий плейлист 'рейтинг' тоді добавити відсортований масив треків по рейтингу, якщо відкритий якийсь інший плейлист то просто оновити рейтинг однієї пісні

            const updatedRightList =
                state.openListName.right === "Rating"
                    ? updatedRatingList
                    : updateValueById(state.list.right, action.payload.id, action.payload.rating); //якщо відкритий плейлист 'рейтинг' тоді добавити відсортований масив треків по рейтингу, якщо відкритий якийсь інший плейлист то просто оновити рейтинг однієї пісні

            state.DefaultList = updatedDefaultList;
            state.RandomList = updatedRandomList;
            state.RatingList = updatedRatingList;
            state.music = { ...state.music, rating: action.payload.rating };
            state.list = {
                left: updatedleftList,
                right: updatedRightList,
            };
        },
        setPageNumber(state, action: SetPageNumberAction) {
            switch (action.payload.position) {
                case "left": {
                    state.pageNumber.left = action.payload.number;
                    break;
                }
                case "right": {
                    state.pageNumber.right = action.payload.number;
                    break;
                }
            }
        },
        setList(state, action: SetListAction) {
            switch (action.payload.position) {
                case "left": {
                    switch (action.payload.typeList) {
                        case "Rating": {
                            state.list.left = state.RatingList;
                            break;
                        }
                        case "Default": {
                            state.list.left = state.DefaultList;
                            break;
                        }
                        case "": {
                            // state = state;
                            break;
                        }
                        default: {
                            state.list.left = [...state[`${action.payload.typeList}List`]];
                            break;
                        }
                    }
                    break;
                }
                case "right": {
                    switch (action.payload.typeList) {
                        case "Rating": {
                            state.list.right = state.RatingList;
                            break;
                        }
                        case "Default": {
                            state.list.right = state.DefaultList;
                            break;
                        }
                        case "": {
                            // state = state;
                            break;
                        }
                        default: {
                            state.list.right = [...state[`${action.payload.typeList}List`]];
                        }
                    }
                    break;
                }
                // default:
                //     state = state;
            }
        },
        addNewList(state, action: AddNewListAction) {
            state[`${action.payload.newName}List`] = [];
            state.namesBoomboxPlaylists.push(action.payload.newName);
        },
        deleteNewList(state, action: DeleteNewListAction) {
            delete state[action.payload.name + "List"]; // Видаляємо відповідний список
            state.namesPlayerPlaylists = state.namesPlayerPlaylists.filter((name: string) => name !== action.payload.name);
            state.namesBoomboxPlaylists = state.namesBoomboxPlaylists.filter((name: string) => name !== action.payload.name);
        },
        addTrackIntoList(state, action: AddTrackIntoListAction) {
            const track = state[action.payload.currentList + "List"].find((item: trackType) => item.id === action.payload.id);//находимо трек в списку звідки добавляємо
            if (action.payload.intoList === state.nameCurrentListPlayer) {//якщо список в який добавляємо відкритий в плеєрі
                state.numberOfTracks = state[action.payload.intoList + "List"].length + 1; //для оновлення плеєва
                state[action.payload.intoList + "List"].push(track);//добавляємо трек в вибраний список
            } else {
                state[action.payload.intoList + "List"].push(track);//добавляємо трек в вибраний список
            }
            if (state[action.payload.intoList + "List"].length === 1) {
                state.namesPlayerPlaylists.push(action.payload.intoList);
            } //якщо щойно добавили перший трек в плейлист тоді відобразити назву плейлисталиста в списку плейлистівлистів плеєра
        },
        deleteTrackWithList(state, action: DeleteTrackWithListAction) {
            const newList = state[action.payload.currentList + "List"].filter((item: trackType) => item.id !== action.payload.id);
            if (action.payload.currentList === state.nameCurrentListPlayer) {
                state.numberOfTracks = state[action.payload.currentList + "List"].length - 1; //для оновлення списку в плеєрі
                state[action.payload.currentList + "List"] = newList;
            } else {
                state[action.payload.currentList + "List"] = newList;
            }
            if (state[action.payload.currentList + "List"].length === 0) {
                //коли в плейлисті нема треків
                const newNamesPlayerPlaylists = state.namesPlayerPlaylists.filter(
                    (item: string) => item !== action.payload.currentList
                ); //видаляємо назву плейлиста з списку відображення плейлистів в плеєрі
                state.namesPlayerPlaylists = newNamesPlayerPlaylists; //добавляємо відфільтрований масив назв плейлистів
                if (action.payload.currentList === state.nameCurrentListPlayer) {
                    //якщо поточний плейлист який відтворює плеєр є такий що не потрібно відображати
                    state.nameCurrentListPlayer = "Default"; //перемикаємо плеєр на відображення дефотного плейлиста
                    state.position = 0; //відтворюємо перший трек}
                }
            }
            if (action.payload.id === state.music.id && state.nameCurrentListPlayer === action.payload.currentList) {
                //якщо трек який зараз грає в плеєрі видаляється
                if (state.position > 1) {
                    state.position = state.position - 1;
                }
            }
        },
        setOpenListName(state, action: SetOpenListNameAction) {
            if (action.payload.position === "left") {
                state.openListName = { ...state.openListName, left: action.payload.name };
            } else {
                state.openListName = { ...state.openListName, right: action.payload.name };
            }
        },
    },
});
export default reducer.reducer;
export const {
    addMusicList,
    createPlayerList,
    addMusic,
    setPosition,
    setVolume,
    setRating,
    setPageNumber,
    setList,
    addNewList,
    deleteNewList,
    addTrackIntoList,
    deleteTrackWithList,
    setOpenListName,
} = reducer.actions;

type AddMusicsThunk = ThunkAction<void, initialStateType, unknown, Action>;
export const addMusics = (): AddMusicsThunk => async (dispatch) => {
    const data: serverDataType = await allApi.getAddMusics();
    const updatedData: dataType = data.map((track, index) => ({
        ...track,
        rating: 0,
        idTrack: index + 1,
        artworkUrl: new URL(`${"/retrowave-ua" + track.artworkUrl}`, import.meta.url).href, //мій ля сервер
        streamUrl: new URL(`${"/retrowave-ua" + track.streamUrl}`, import.meta.url).href, //мій ля сервер
        // artworkUrl:"https://retrowave.ru"+track.artworkUrl,
        // streamUrl:"https://retrowave.ru"+track.streamUrl
    }));
    dispatch(addMusicList({ data: updatedData }));
    dispatch(addMusic({ position: 0 }));
};

export type actionsTypes =
    | AddMusicListAction
    | CreatePlayerListAction
    | AddMusicAction
    | SetPositionAction
    | SetVolumeAction
    | SetRatingAction
    | SetPageNumberAction
    | SetListAction
    | AddNewListAction
    | DeleteNewListAction
    | AddTrackIntoListAction
    | DeleteTrackWithListAction
    | SetOpenListNameAction;

export type dataType = Array<trackType>;
export type trackType = {
    rating: number | undefined;
    idTrack: number | undefined;
    artworkUrl: string | undefined;
    streamUrl: string | undefined;
    id: string | undefined;
    title: string | undefined;
    duration: number | undefined;
};
export type AddMusicListAction = PayloadAction<{ data: dataType }>;

export type CreatePlayerListAction = PayloadAction<{ name: string }>;

export type AddMusicAction = PayloadAction<{ position: number }>;

export type SetPositionAction = PayloadAction<{ position: number }>;

export type SetVolumeAction = PayloadAction<{ volume: number }>;

export type SetRatingAction = PayloadAction<{ id: string; rating: number }>;

export type SetPageNumberAction = PayloadAction<{
    position: string;
    number: number;
}>;

export type SetListAction = PayloadAction<{
    position: string;
    typeList: string;
}>;

export type AddNewListAction = PayloadAction<{ newName: string }>;

export type DeleteNewListAction = PayloadAction<{ name: string }>;

export type AddTrackIntoListAction = PayloadAction<{
    currentList: string;
    id: string;
    intoList: string;
}>;

export type DeleteTrackWithListAction = PayloadAction<{
    currentList: string;
    id: string;
}>;

export type SetOpenListNameAction = PayloadAction<{
    position: string;
    name: string;
}>;
