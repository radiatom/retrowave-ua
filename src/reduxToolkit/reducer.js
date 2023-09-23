import { allApi } from "../api/api";
import { updateValueById } from "../function";
import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
    name: "toolkit",
    initialState: {
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
    },
    reducers: {
        addMusicList(state, action) {
            state.DefaultList = action.payload.data;
        },
        createPlayerList(state, action) {
            switch (action.payload.name) {
                case "Default": {
                    state.nameCurrentListPlayer = "Default";
                    break;
                }
                case "Rating": {
                    const newArray = [...state.DefaultList];
                    newArray.sort((a, b) => b.rating - a.rating);
                    state.nameCurrentListPlayer = "Rating";
                    state.RatingList = newArray;
                    break;
                }
                case "Random": {
                    const shuffledArray = [...state.DefaultList];
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
        addMusic(state, action) {
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
        setPosition(state, action) {
            state.position = action.payload.position;
        },
        setVolume(state, action) {
            state.volume = action.payload.volume;
        },
        setRating(state, action) {
            const updatedTotalMusicList = updateValueById(state.DefaultList, action.payload.id, action.payload.rating); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними

            const updatedRatingList = [...updatedTotalMusicList];
            updatedRatingList.sort((a, b) => b.rating - a.rating); //відразу сортуємо по рейтингу

            const updatedRandomList = updateValueById(state.RandomList, action.payload.id, action.payload.rating); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedDefaultList = updateValueById(state.DefaultList, action.payload.id, action.payload.rating); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedleftList =
                state.openListName.left === "Rating"
                    ? updatedRatingList
                    : updateValueById(state.list.left, action.payload.id, action.payload.rating); //якщо відкритий плейлист 'рейтинг' тоді добавити відсортований масив треків по рейтингу, якщо відкритий якийсь інший плейлист то просто оновити рейтинг однієї пісні

            const updatedRightList =
                state.openListName.right === "Rating"
                    ? updatedRatingList
                    : updateValueById(state.list.right, action.payload.id, action.payload.rating); //якщо відкритий плейлист 'рейтинг' тоді добавити відсортований масив треків по рейтингу, якщо відкритий якийсь інший плейлист то просто оновити рейтинг однієї пісні

            state.DefaultList = updatedTotalMusicList;
            state.RandomList = updatedRandomList;
            state.DefaultList = updatedDefaultList;
            state.RatingList = updatedRatingList;
            state.music = { ...state.music, rating: action.payload.rating };
            state.list = {
                left: updatedleftList,
                right: updatedRightList,
            };
        },
        setPageNumber(state, action) {
            switch (action.payload.position) {
                case "left": {
                    state.pageNumber.left = action.payload.number;
                    break;
                }
                case "right": {
                    state.pageNumber.right = action.payload.number;
                    break;
                }
                // default: {
                //     state = state;
                // }
            }
        },
        setList(state, action) {
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
        addNewList(state, action) {
            state[`${action.payload.newName}List`] = [];
            state.namesBoomboxPlaylists.push(action.payload.newName);
        },
        deleteNewList(state, action) {
            delete state[action.payload.name + "List"]; // Видаляємо відповідний список
            state.namesPlayerPlaylists = state.namesPlayerPlaylists.filter((name) => name !== action.payload.name);
            state.namesBoomboxPlaylists = state.namesBoomboxPlaylists.filter((name) => name !== action.payload.name);
        },
        addTrackIntoList(state, action) {
            const track = state[action.payload.currentList + "List"].find((item) => item.id === action.payload.id);
            if (action.payload.intoList === state.nameCurrentListPlayer) {
                state.numberOfTracks = state[action.payload.intoList + "List"].length + 1; //для оновлення плеєва
                state[action.payload.intoList + "List"].push(track);
            } else {
                state[action.payload.intoList + "List"].push(track);
            }
            if (state[action.payload.intoList + "List"].length === 1) {
                state.namesPlayerPlaylists.push(action.payload.intoList);
            } //якщо щойно добавили перший трек в плейлист тоді відобразити назву плейлисталиста в списку плейлистівлистів плеєра
        },
        deleteTrackWithList(state, action) {
            const newList = state[action.payload.currentList + "List"].filter((item) => item.id !== action.payload.id);
            if (action.payload.currentList === state.nameCurrentListPlayer) {
                state.numberOfTracks = state[action.payload.currentList + "List"].length - 1; //для оновлення списку в плеєрі
                state[action.payload.currentList + "List"] = newList;
            } else {
                state[action.payload.currentList + "List"] = newList;
            }
            if (state[action.payload.currentList + "List"].length === 0) {//коли в плейлисті нема треків
                const newNamesPlayerPlaylists = state.namesPlayerPlaylists.filter((item) => item !== action.payload.currentList); //видаляємо назву плейлиста з списку відображення плейлистів в плеєрі
                state.namesPlayerPlaylists = newNamesPlayerPlaylists; //добавляємо відфільтрований масив назв плейлистів
                if (action.payload.currentList === state.nameCurrentListPlayer) {//якщо поточний плейлист який відтворює плеєр є такий що не потрібно відображати
                    state.nameCurrentListPlayer = "Default"; //перемикаємо плеєр на відображення дефотного плейлиста
                    state.position = 0; //відтворюємо перший трек}
                }
            }
            if(action.payload.id===state.music.id&&state.nameCurrentListPlayer===action.payload.currentList){//якщо трек який зараз грає в плеєрі видаляється
                if(state.position>1){state.position = state.position-1}
            }
        },
        setOpenListName(state, action) {
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

export const addMusics = () => async (dispatch) => {
    const data = await allApi.getAddMusics();
    const updatedData = data.map((track, index) => ({
        ...track,
        rating: 0,
        idTrack: index + 1,
        // artworkUrl: "./assets"+`${track.artworkUrl}`, //для сервера
        // streamUrl: "./assets"+`${track.streamUrl}`, //для сервера
        // artworkUrl: "/retrowave-ua/assets"+`${track.artworkUrl}`, //для сервера
        // streamUrl: "/retrowave-ua/assets"+`${track.streamUrl}`, //для сервера
        // artworkUrl:`${process.env.PUBLIC_URL}${track.artworkUrl}`,//для сервера
        // streamUrl:`${process.env.PUBLIC_URL}${track.streamUrl}`//для сервера
        // artworkUrl:`${track.artworkUrl}`,//працює лише локально але не на хостінгу
        // streamUrl:`${track.streamUrl}`//працює лише локально але не на хостінгу
        artworkUrl: new URL(`${track.artworkUrl}`, import.meta.url).href, //для сервера
        streamUrl: new URL(`${track.streamUrl}`, import.meta.url).href, //для сервера
        // artworkUrl:`${import.meta.env.VITE_PUBLIC_URL+"/assets"+track.artworkUrl}`,//для сервера
        // streamUrl:`${import.meta.env.VITE_PUBLIC_URL+"/assets"+track.streamUrl}`//для сервера
        // artworkUrl:"https://retrowave.ru"+track.artworkUrl,//для api
        // streamUrl:"https://retrowave.ru"+track.streamUrl//для api
    }));
    dispatch(addMusicList({ data: updatedData }));
    dispatch(addMusic({ position: 0 }));
};
