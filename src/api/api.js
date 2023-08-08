import axios from "axios";
import {getData} from './../server'

export const allApi = {
    getAddMusics: () => {
        
        return getData()
        // return axios.get(`https://retrowave.ru/api/v1/tracks?cursor=1&limit=199`)
        //     .then((response) => {
        //         return response.data.body.tracks;
        //     });
    },
};
