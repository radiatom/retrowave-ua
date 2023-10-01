// import axios from "axios";
// import { beforeEach, describe, expect, test, vi } from "vitest";
// import { serverDataType } from "../server";
// import { allApi } from "./api";

// vi.mock("axios");

// describe("Test api", () => {
//     test("makes a GET request to fetch data", async () => {
//         beforeEach(() => {
//             axios.get.mockReset();
//         });
//         const dataServerMock: serverDataType = [
//             {
//                 id: "0",
//                 title: "Electric Youth – WeAreTheYouth",
//                 duration: 192000,
//                 streamUrl: `/audio/Electric Youth – WeAreTheYouth.mp3`,
//                 artworkUrl: `/artwork/8ab19cd0a3fe579eebd5bd598581399a329ce960.jpg`,
//             },
//             {
//                 id: "5d4ca036e66f3ae771c008e56b111d116f7142cb",
//                 title: "Dynatron – 37 Million Horsepower",
//                 duration: 276000,
//                 streamUrl: `/audio/5d4ca036e66f3ae771c008e56b111d116f7142cb.mp3`,
//                 artworkUrl: `/artwork/5d4ca036e66f3ae771c008e56b111d116f7142cb.jpg`,
//             },
//         ];
//         axios.get.mockResolvedValue({
//             data: { body: { tracks: dataServerMock } }
//         });//що очікуєм отримати
//         const dataServer = await allApi.getAddMusics();
//         expect(axios.get).toHaveBeenCalledWith("https://retrowave.ru/api/v1/tracks?cursor=1&limit=199");
//         expect(dataServer).toStrictEqual(dataServerMock);
//     });
// });
// ///https://runthatline.com/how-to-mock-axios-with-vitest/ дока
