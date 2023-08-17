import { allApi } from "../api/api";
import { updateValueById } from "../function";

const initialState = {
    music: {},
    nameCurrentListPlayer: "",
    DefaultList: [],
    RatingList: [],
    RandomList: [],
    position: 0,
    numberOfTracks: 0,
    volume: 50,
    namesPlaylists: ["Default", "Rating", "Random"],
    list: {
        left: [],
        right: [],
    },
    pageNumber: { left: 1, right: 1 },
    openListName: { left: "", right: "" },
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addMusicList": {
            return { ...state, DefaultList: action.data };
        }
        case "createPlayerList": {
            switch (action.name) {
                case "Default": {
                    return {
                        ...state,
                        nameCurrentListPlayer: "Default",
                    };
                }
                case "Rating": {
                    const newArray = [...state.DefaultList];
                    newArray.sort((a, b) => b.rating - a.rating);
                    return {
                        ...state,
                        nameCurrentListPlayer: "Rating",
                        RatingList: newArray,
                    };
                }
                case "Random": {
                    const shuffledArray = [...state.DefaultList];
                    for (let i = shuffledArray.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
                    }
                    return {
                        ...state,
                        nameCurrentListPlayer: "Random",
                        RandomList: shuffledArray,
                    };
                }
                default: {
                    return {
                        ...state,
                        nameCurrentListPlayer: action.name,
                    };
                }
            }
        }
        case "addMusic": {
            switch (state.nameCurrentListPlayer) {
                case "Random": {
                    return {
                        ...state,
                        music: state.RandomList[action.position],
                        numberOfTracks: state.RandomList.length,
                    };
                }
                case "Rating": {
                    return {
                        ...state,
                        music: state.RatingList[action.position],
                        numberOfTracks: state.RatingList.length,
                    };
                }
                case "Default": {
                    return {
                        ...state,
                        music: state.DefaultList[action.position],
                        numberOfTracks: state.DefaultList.length,
                    };
                }
                case "": {
                    return {
                        ...state,
                        music: state.DefaultList[action.position],
                        numberOfTracks: state.DefaultList.length,
                    };
                }
                default: {
                    const track =
                        state[state.nameCurrentListPlayer + "List"].length === 0
                            ? {
                                  id: "000",
                                  title: "No traks in this list",
                                  duration: 0,
                                  streamUrl: "",
                                  artworkUrl: "",
                                  rating: 5,
                                  idTrack: 0,
                              }
                            : state[state.nameCurrentListPlayer + "List"][action.position];
                    return {
                        ...state,
                        music: track,
                        numberOfTracks: state[state.nameCurrentListPlayer + "List"].length,
                    };
                }
            }
        }
        case "setPosition": {
            return { ...state, position: action.position };
        }
        case "setVolume": {
            return { ...state, volume: action.volume };
        }
        case "setRating": {
            const updatedTotalMusicList = updateValueById(state.DefaultList, action.id, action.rating); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними

            const updatedRatingList = [...updatedTotalMusicList];
            updatedRatingList.sort((a, b) => b.rating - a.rating); //відразу сортуємо по рейтингу

            const updatedRandomList = updateValueById(state.RandomList, action.id, action.rating); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedDefaultList = updateValueById(state.DefaultList, action.id, action.rating); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedleftList =
                state.openListName.left === "Rating"
                    ? updatedRatingList
                    : updateValueById(state.list.left, action.id, action.rating); //якщо відкритий плейлист 'рейтинг' тоді добавити відсортований масив треків по рейтингу, якщо відкритий якийсь інший плейлист то просто оновити рейтинг однієї пісні

            const updatedRightList =
                state.openListName.right === "Rating"
                    ? updatedRatingList
                    : updateValueById(state.list.right, action.id, action.rating); //якщо відкритий плейлист 'рейтинг' тоді добавити відсортований масив треків по рейтингу, якщо відкритий якийсь інший плейлист то просто оновити рейтинг однієї пісні
            return {
                ...state,
                DefaultList: updatedTotalMusicList,
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
        case "setPageNumber": {
            switch (action.position) {
                case "left": {
                    return {
                        ...state,
                        pageNumber: {
                            ...state.pageNumber,
                            left: action.number,
                        },
                    };
                }
                case "right": {
                    return {
                        ...state,
                        pageNumber: {
                            ...state.pageNumber,
                            right: action.number,
                        },
                    };
                }
                default: {
                    return state;
                }
            }
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
                                    left: state.DefaultList,
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
                                    right: state.DefaultList,
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

            const newnamesPlaylists = state.namesPlaylists.filter((name) => name !== action.name);
            return {
                ...newState,
                namesPlaylists: newnamesPlaylists,
            };
        }
        case "addTrackIntoList": {
            const track = state[action.currentList + "List"].find((item) => item.id === action.id);
            if (action.intoList === state.nameCurrentListPlayer) {
                return {
                    ...state,
                    numberOfTracks: state[action.intoList + "List"].length + 1,
                    [action.intoList + "List"]: [...state[action.intoList + "List"], track],
                };
            } else {
                return {
                    ...state,
                    [action.intoList + "List"]: [...state[action.intoList + "List"], track],
                };
            }
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
    dispatch({ type: "addMusicList", data: updatedData }); //добавляємо в наш стор нові данні
    dispatch({ type: "addMusic", position: 0 }); // відображаємо перший трек
};
export default reducer;
