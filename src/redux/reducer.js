import { allApi } from "../api/api";

const initialState = {
    totalMusicList: [],
    music: {},
    totalIndexsList: [],
    position: 0,
    volume: 50,
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
        case "addIndexsList": {
            const numbersArray = [];
            for (let i = 0; i < state.totalMusicList.length; i++) {
                numbersArray.push(i);
            }
            for (let i = numbersArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [numbersArray[i], numbersArray[j]] = [
                    numbersArray[j],
                    numbersArray[i],
                ];
            }
            return { ...state, totalIndexsList: numbersArray };
        }
        case "addMusic": {
            const music =
                state.totalMusicList[state.totalIndexsList[action.position]];
            return { ...state, music: music };
        }
        case "setPosition": {
            return { ...state, position: action.position };
        }
        case "setVolume": {
            return { ...state, volume: action.volume };
        }
        case "setRating": {
            const updateValueById=(array, idToFind, newValue) =>{
                const updatedArray = array.map(item => {
                    if (item.id === idToFind) {
                        // Копіюємо об'єкт і змінюємо значення
                        return { ...item, rating: newValue };
                    }
                    return item;
                });
                return updatedArray;
            }//шукаємо обєкт по айді , змінюємо його рейтинг, та вертаємо новий масив з новими данними
            const updatedArray = updateValueById(state.totalMusicList, action.id, action.rating)
            return { ...state, totalMusicList: updatedArray,music:{...state.music, rating: action.rating} };
        }
        default:
            return state;
    }
};
export const addMusics = () => async (dispatch) => {
    const data = await allApi.getAddMusics();
    const updatedData = data.map((track,index) => ({
        ...track,
        rating: 0,
        idTrack:index+1,
        artworkUrl:"https://retrowave.ru"+track.artworkUrl,//для api
        streamUrl:"https://retrowave.ru"+track.streamUrl//для api
    }));
    dispatch({ type: "addMusicList", data:updatedData });
};
export default reducer;

// tracks= [
//     {
//     "id": "594ea8427e44a724a5ce1782c3d3dcf058735e1e",
//     "title": "Muscle – All My Ex's Died In Texas",
//     "duration": 249000,
//     "streamUrl": "/audio/594ea8427e44a724a5ce1782c3d3dcf058735e1e.mp3",
//     "artworkUrl": "/artwork/594ea8427e44a724a5ce1782c3d3dcf058735e1e.jpg"
//     },
//     {
//     "id": "9341a4b27134252d998579054639c1a4c7e00d11",
//     "title": "GUNSHIP – Revel in Your Time",
//     "duration": 247704.25,
//     "streamUrl": "/audio/9341a4b27134252d998579054639c1a4c7e00d11.mp3",
//     "artworkUrl": "/artwork/9341a4b27134252d998579054639c1a4c7e00d11.jpg"
//     },
//     {
//     "id": "83e93a0a5131b43b7050eb3bf9b57299ce031afe",
//     "title": "Botnit – Jupiter Style",
//     "duration": 398000,
//     "streamUrl": "/audio/83e93a0a5131b43b7050eb3bf9b57299ce031afe.mp3",
//     "artworkUrl": "/artwork/83e93a0a5131b43b7050eb3bf9b57299ce031afe.jpg"
//     },
// ]