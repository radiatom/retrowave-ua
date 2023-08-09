import { allApi } from "../api/api";

const initialState = {
    totalMusicList: [],
    music: {},
    randomList: [],
    playList:'random',
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
        case "crateRandomList": {
            const shuffledArray = [...state.totalMusicList];
            for (let i = shuffledArray.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            }
            return { ...state, randomList: shuffledArray  };
        }
        case "addMusic": {
            if(state.playList==='random'){return {...state, music:state.randomList[action.position]}};
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
        // artworkUrl:"https://retrowave.ru"+track.artworkUrl,//для api
        // streamUrl:"https://retrowave.ru"+track.streamUrl//для api
    }));
    dispatch({ type: "addMusicList", data:updatedData });
};
export default reducer;
