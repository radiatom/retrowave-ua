// import axios from "axios";
import {getData} from '../server'
// const data1Dowland=[]//масив невідомих мені треків
export const allApi = {
    getAddMusics: () => {
        // return data1Dowland //нові майбутні
        return getData()//мій сервер
        // return axios.get(`https://retrowave.ru/api/v1/tracks?cursor=1&limit=199`)
        //     .then((response) => {
        //         return response.data.body.tracks;
        //     });
    },
};
