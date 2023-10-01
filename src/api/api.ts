import axios from "axios";
// import { getData } from "../server";
// const data1Dowland=[]//масив невідомих мені треків

const BASE_URL = 'https://retrowave.ru/api/v1/tracks?cursor=1&limit=199'

export const allApi = {
    getAddMusics: () => {
        // return data1Dowland //нові майбутні
        return new Promise(resolve => {
            setTimeout(() => {
              resolve(getData());//мій сервер
            }, 300);
          });
        // return axios.get(`${BASE_URL}`)
        //     .then((response) => {
        //         return response.data.body.tracks;
        //     });
    },
};
