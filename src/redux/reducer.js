import { allApi } from "../api/api";

const initialState = {
    totalMusicList: [],
    music: {},
    playList: "",
    RandomList: [],
    DefaultList: [],
    RatingList: [],
    position: 0,
    volume: 50,
    list: {
        left: [],
        right: [],
    },
    namesPlayLists: ["Default", "Rating", "Random"],
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
        case "crateRandomList": {
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
                playList: "random",
                RandomList: shuffledArray,
            };
        }
        case "crateDefaultList": {
            return {
                ...state,
                playList: "default",
                DefaultList: state.totalMusicList,
            };
        }
        case "crateRatingList": {
            const newArray = [...state.totalMusicList];
            newArray.sort((a, b) => b.rating - a.rating);
            return { ...state, playList: "rating", RatingList: newArray };
        }
        case "addMusic": {
            switch (state.playList) {
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
            const updateValueById = (array, idToFind, newValue) => {
                const updatedArray = array.map((item) => {
                    if (item.id === idToFind) {
                        // Копіюємо об'єкт і змінюємо значення
                        return { ...item, rating: newValue };
                    }
                    return item;
                });
                return updatedArray;
            };
            const updatedTotalMusicList = updateValueById(
                state.totalMusicList,
                action.id,
                action.rating
            ); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
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
            const updatedRatingList = updateValueById(
                state.RatingList,
                action.id,
                action.rating
            ); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedleftList = updateValueById(
                state.list.left,
                action.id,
                action.rating
            ); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedRightList = updateValueById(
                state.list.right,
                action.id,
                action.rating
            ); //шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
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
                                    left: state.DefaultList,
                                },
                            };
                        }
                        case "Random": {
                            return {
                                ...state,
                                list: { ...state.list, left: state.RandomList },
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
                        case "Random": {
                            return {
                                ...state,
                                list: {
                                    ...state.list,
                                    right: state.RandomList,
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
                namesPlayLists: [...state.namesPlayLists, action.newName],
            };
        }
        case "deleteNewList": {
            const newState = { ...state }; // Створюємо копію об'єкту
            delete newState[action.name + "List"]; // Видаляємо відповідний список

            const newNamesPlayLists = state.namesPlayLists.filter(
                (name) => name !== action.name
            );
            return {
                ...newState,
                namesPlayLists: newNamesPlayLists,
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
