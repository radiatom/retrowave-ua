import { allApi } from "../api/api";
import { updateValueById } from "../function";

const initialState = {
    totalMusicList: [],
    music: {},
    nameCurrentListPlayer: "",
    RandomList: [],
    DefaultList: [],
    RatingList: [],
    position: 0,
    volume: 50,
    namesPlaylists: ["Default", "Rating"],
    list: {
        left: [],
        right: [],
    },
    openListName: { left: "", right: "" },
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addMusicList": {
            if (state.totalMusicList.length === 0) {
                return { ...state, totalMusicList: action.data };
            } else {
                return state;
            }
        }
        case "createPlayerRandomList": {
            const shuffledArray = [...state.totalMusicList];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledArray[i], shuffledArray[j]] = [
                    shuffledArray[j],
                    shuffledArray[i],
                ];
            }
            return {
                ...state,
                nameCurrentListPlayer: "random",
                RandomList: shuffledArray,
            };
        }
        case "createPlayerDefaultList": {
            return (state.DefaultList.length === 0
                ? {
                      ...state,
                      nameCurrentListPlayer: "default",
                      DefaultList: state.totalMusicList,
                  }
                : {
                      ...state,
                      nameCurrentListPlayer: "default",
                  });
        }
        case "createPlayerRatingList": {
            const newArray = [...state.totalMusicList];
            newArray.sort((a, b) => b.rating - a.rating);
            return { ...state, nameCurrentListPlayer: "rating", RatingList: newArray };
        }
        case "addMusic": {
            switch (state.nameCurrentListPlayer) {
                case "random": {
                    return {
                        ...state,
                        music: state.RandomList[action.position],
                    };
                }
                case "rating": {
                    return {
                        ...state,
                        music: state.RatingList[action.position],
                    };
                }
                case "default": {
                    return {
                        ...state,
                        music: state.DefaultList[action.position],
                    };
                }
                default:
                    return state;
            }
        }
        case "setPosition": {
            return { ...state, position: action.position };
        }
        case "setVolume": {
            return { ...state, volume: action.volume };
        }
        case "setRating": {
            const updatedTotalMusicList = updateValueById(
                state.totalMusicList,
                action.id,
                action.rating
            ); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними

            const updatedRatingList = [...updatedTotalMusicList];
            updatedRatingList.sort((a, b) => b.rating - a.rating); //відразу сортуємо по рейтингу

            const updatedRandomList = updateValueById(
                state.RandomList,
                action.id,
                action.rating
            ); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedDefaultList = updateValueById(
                state.DefaultList,
                action.id,
                action.rating
            ); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedleftList =
                state.openListName.left === "Rating"
                    ? updatedRatingList
                    : updateValueById(
                          state.list.left,
                          action.id,
                          action.rating
                      ); //якщо відкритий плейлист 'рейтинг' тоді добавити відсортований масив треків по рейтингу, якщо відкритий якийсь інший плейлист то просто оновити рейтинг однієї пісні

            const updatedRightList =
                state.openListName.right === "Rating"
                    ? updatedRatingList
                    : updateValueById(
                          state.list.right,
                          action.id,
                          action.rating
                      ); //якщо відкритий плейлист 'рейтинг' тоді добавити відсортований масив треків по рейтингу, якщо відкритий якийсь інший плейлист то просто оновити рейтинг однієї пісні
            return {
                ...state,
                totalMusicList: updatedTotalMusicList,
                RandomList: updatedRandomList,
                DefaultList: updatedDefaultList,
                RatingList: updatedRatingList,
                music: { ...state.music, rating: action.rating },
                list: {
                    left: updatedleftList,
                    right: updatedRightList,
                },
            };
        }
        case "setList": {
            switch (action.position) {
                case "left": {
                    switch (action.typeList) {
                        case "Rating": {
                            return {
                                ...state,
                                list: { ...state.list, left: state.RatingList },
                            };
                        }
                        case "Default": {
                            return {
                                ...state,
                                list: {
                                    ...state.list,
                                    left: state.totalMusicList,
                                },
                            };
                        }
                        case "": {
                            return {
                                ...state,
                            };
                        }
                        default:
                            return {
                                ...state,
                                list: {
                                    ...state.list,
                                    left: [...state[`${action.typeList}List`]],
                                },
                            };
                    }
                }
                case "right": {
                    switch (action.typeList) {
                        case "Rating": {
                            return {
                                ...state,
                                list: {
                                    ...state.list,
                                    right: state.RatingList,
                                },
                            };
                        }
                        case "Default": {
                            return {
                                ...state,
                                list: {
                                    ...state.list,
                                    right: state.totalMusicList,
                                },
                            };
                        }
                        case "": {
                            return {
                                ...state,
                            };
                        }
                        default:
                            return {
                                ...state,
                                list: {
                                    ...state.list,
                                    right: [...state[`${action.typeList}List`]],
                                },
                            };
                    }
                }
                default:
                    return state;
            }
        }
        case "addNewList": {
            return {
                ...state,
                [`${action.newName}List`]: [],
                namesPlaylists: [...state.namesPlaylists, action.newName],
            };
        }
        case "deleteNewList": {
            const newState = { ...state }; // Створюємо копію об'єкту
            delete newState[action.name + "List"]; // Видаляємо відповідний список

            const newnamesPlaylists = state.namesPlaylists.filter(
                (name) => name !== action.name
            );
            return {
                ...newState,
                namesPlaylists: newnamesPlaylists,
            };
        }
        case "addTrackIntoList": {
            const track = state[action.currentList + "List"].find(
                (item) => item.id === action.id
            );
            return {
                ...state,
                [action.intoList + "List"]: [
                    ...state[action.intoList + "List"],
                    track,
                ],
            };
        }
        case "setOpenListName": {
            if (action.position === "left") {
                return {
                    ...state,
                    openListName: { ...state.openListName, left: action.name },
                };
            } else {
                return {
                    ...state,
                    openListName: { ...state.openListName, right: action.name },
                };
            }
        }
        default:
            return state;
    }
};
export const addMusics = () => async (dispatch) => {
    const data = await allApi.getAddMusics();
    const updatedData = data.map((track, index) => ({
        ...track,
        rating: 0,
        idTrack: index + 1,
        // artworkUrl:"https://retrowave.ru"+track.artworkUrl,//для api
        // streamUrl:"https://retrowave.ru"+track.streamUrl//для api
    }));
    dispatch({ type: "addMusicList", data: updatedData });
};
export default reducer;
