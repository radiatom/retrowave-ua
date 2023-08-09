import axios from "axios";
import {getData} from './../server'
// const data1Dowland=[
//     {
//       id: 'd93e764bb7c8c28d235f2d7520bca7da9adf7090',
//       title: 'Makeup and Vanity Set – From a Distance (Theme from Hit TV)',
//       duration: 274000,
//       streamUrl: '/audio/d93e764bb7c8c28d235f2d7520bca7da9adf7090.mp3',
//       artworkUrl: '/artwork/d93e764bb7c8c28d235f2d7520bca7da9adf7090.jpg'
//     },
//     {
//       id: 'e648f122678f17549e84aa2fb55f0ab046495b54',
//       title: 'ALEX – Occult',
//       duration: 331000,
//       streamUrl: '/audio/e648f122678f17549e84aa2fb55f0ab046495b54.mp3',
//       artworkUrl: '/artwork/e648f122678f17549e84aa2fb55f0ab046495b54.jpg'
//     },
//     {
//       id: 'c2490e19575b503d43b083913525a7f3d48d7164',
//       title: "Danger Mode – Meridian Cruisin'",
//       duration: 178000,
//       streamUrl: '/audio/c2490e19575b503d43b083913525a7f3d48d7164.mp3',
//       artworkUrl: '/artwork/c2490e19575b503d43b083913525a7f3d48d7164.jpg'
//     },
//     {
//       id: '5705080a6bad0d7b4ea8704234c237a68c1cd9b4',
//       title: 'Run Vaylor – Rush',
//       duration: 209000,
//       streamUrl: '/audio/5705080a6bad0d7b4ea8704234c237a68c1cd9b4.mp3',
//       artworkUrl: '/artwork/5705080a6bad0d7b4ea8704234c237a68c1cd9b4.jpg'
//     },
//     {
//       id: '4cfe64e8052e910e4370cdead00b706ea6bbf279',
//       title: 'Meteor – Night Riders',
//       duration: 199000,
//       streamUrl: '/audio/4cfe64e8052e910e4370cdead00b706ea6bbf279.mp3',
//       artworkUrl: '/artwork/4cfe64e8052e910e4370cdead00b706ea6bbf279.jpg'
//     },
//     {
//       id: 'abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2',
//       title: 'Judge Bitch – Striker (feat. Perturbator)',
//       duration: 186000,
//       streamUrl: '/audio/abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2.mp3',
//       artworkUrl: '/artwork/abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2.jpg'
//     },
//     {
//       id: '7aac5c4753ca9859e3c67685c72b5a8529f14e67',
//       title: 'Prius An Sich – Hyperion Booster',
//       duration: 273244.25,
//       streamUrl: '/audio/7aac5c4753ca9859e3c67685c72b5a8529f14e67.mp3',
//       artworkUrl: '/artwork/7aac5c4753ca9859e3c67685c72b5a8529f14e67.jpg'
//     },
//     {
//       id: '1b1b89bc8ab9d0d19274190e6b5d50cc292dee96',
//       title: 'Judge Bitch – MDK',
//       duration: 220000,
//       streamUrl: '/audio/1b1b89bc8ab9d0d19274190e6b5d50cc292dee96.mp3',
//       artworkUrl: '/artwork/1b1b89bc8ab9d0d19274190e6b5d50cc292dee96.jpg'
//     },
//     {
//       id: '9a2e79f2a904d52481f9a692837de243596e06ed',
//       title: 'Miami Nights 1984 – Saved By The Bell',
//       duration: 266000,
//       streamUrl: '/audio/9a2e79f2a904d52481f9a692837de243596e06ed.mp3',
//       artworkUrl: '/artwork/9a2e79f2a904d52481f9a692837de243596e06ed.jpg'
//     },
//     {
//       id: 'b5fe4283a475ec0a61e0bf0ce173676f6e83f504',
//       title: 'DATAStream – Cinder Sunset',
//       duration: 334000,
//       streamUrl: '/audio/b5fe4283a475ec0a61e0bf0ce173676f6e83f504.mp3',
//       artworkUrl: '/artwork/b5fe4283a475ec0a61e0bf0ce173676f6e83f504.jpg'
//     },
//     {
//       id: '42aa24303041266a446cf3ebbc0409db2cba4b5f',
//       title: 'Highway Superstar – Save You (feat. Sebastian Gampl & Miranda Carey)',
//       duration: 336312.25,
//       streamUrl: '/audio/42aa24303041266a446cf3ebbc0409db2cba4b5f.mp3',
//       artworkUrl: '/artwork/42aa24303041266a446cf3ebbc0409db2cba4b5f.jpg'
//     },
//     {
//       id: '7747de1cdc8b332b962da47174adbf709fb3c970',
//       title: "Carpenter Brut – Hang'Em All",
//       duration: 337000,
//       streamUrl: '/audio/7747de1cdc8b332b962da47174adbf709fb3c970.mp3',
//       artworkUrl: '/artwork/7747de1cdc8b332b962da47174adbf709fb3c970.jpg'
//     },
//     {
//       id: 'a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20',
//       title: 'Street Cleaner – Nightlife',
//       duration: 200000,
//       streamUrl: '/audio/a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20.mp3',
//       artworkUrl: '/artwork/a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20.jpg'
//     },
//     {
//       id: '55d26f152537801780f812ffab63b5aa6567c0f2',
//       title: 'D/A/D – Backbone of the Night',
//       duration: 292000,
//       streamUrl: '/audio/55d26f152537801780f812ffab63b5aa6567c0f2.mp3',
//       artworkUrl: '/artwork/55d26f152537801780f812ffab63b5aa6567c0f2.jpg'
//     },
//     {
//       id: 'c8774500da6af4b048e560ba4f85c26ffc9a1fd6',
//       title: 'Compilerbau – Leaving Earth',
//       duration: 338000,
//       streamUrl: '/audio/c8774500da6af4b048e560ba4f85c26ffc9a1fd6.mp3',
//       artworkUrl: '/artwork/c8774500da6af4b048e560ba4f85c26ffc9a1fd6.jpg'
//     },
//     {
//       id: 'b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb',
//       title: 'Mega Drive – Crimewave',
//       duration: 296000,
//       streamUrl: '/audio/b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb.mp3',
//       artworkUrl: '/artwork/b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb.jpg'
//     },
//     {
//       id: '15e9642798b73e75e4f99ad4547b9368d2b8ad83',
//       title: 'Meteor – Grim Memories',
//       duration: 327000,
//       streamUrl: '/audio/15e9642798b73e75e4f99ad4547b9368d2b8ad83.mp3',
//       artworkUrl: '/artwork/15e9642798b73e75e4f99ad4547b9368d2b8ad83.jpg'
//     },
//     {
//       id: '6ae33f6d06cab43ea5bd7b4d676df702d96d8bba',
//       title: 'Block 35 – Skyline',
//       duration: 275000,
//       streamUrl: '/audio/6ae33f6d06cab43ea5bd7b4d676df702d96d8bba.mp3',
//       artworkUrl: '/artwork/6ae33f6d06cab43ea5bd7b4d676df702d96d8bba.jpg'
//     },
//     {
//       id: 'd93e764bb7c8c28d235f2d7520bca7da9adf7090',
//       title: 'Makeup and Vanity Set – From a Distance (Theme from Hit TV)',
//       duration: 274000,
//       streamUrl: '/audio/d93e764bb7c8c28d235f2d7520bca7da9adf7090.mp3',
//       artworkUrl: '/artwork/d93e764bb7c8c28d235f2d7520bca7da9adf7090.jpg'
//     },
//     {
//       id: 'e648f122678f17549e84aa2fb55f0ab046495b54',
//       title: 'ALEX – Occult',
//       duration: 331000,
//       streamUrl: '/audio/e648f122678f17549e84aa2fb55f0ab046495b54.mp3',
//       artworkUrl: '/artwork/e648f122678f17549e84aa2fb55f0ab046495b54.jpg'
//     },
//     {
//       id: 'c2490e19575b503d43b083913525a7f3d48d7164',
//       title: "Danger Mode – Meridian Cruisin'",
//       duration: 178000,
//       streamUrl: '/audio/c2490e19575b503d43b083913525a7f3d48d7164.mp3',
//       artworkUrl: '/artwork/c2490e19575b503d43b083913525a7f3d48d7164.jpg'
//     },
//     {
//       id: '5705080a6bad0d7b4ea8704234c237a68c1cd9b4',
//       title: 'Run Vaylor – Rush',
//       duration: 209000,
//       streamUrl: '/audio/5705080a6bad0d7b4ea8704234c237a68c1cd9b4.mp3',
//       artworkUrl: '/artwork/5705080a6bad0d7b4ea8704234c237a68c1cd9b4.jpg'
//     },
//     {
//       id: '4cfe64e8052e910e4370cdead00b706ea6bbf279',
//       title: 'Meteor – Night Riders',
//       duration: 199000,
//       streamUrl: '/audio/4cfe64e8052e910e4370cdead00b706ea6bbf279.mp3',
//       artworkUrl: '/artwork/4cfe64e8052e910e4370cdead00b706ea6bbf279.jpg'
//     },
//     {
//       id: 'abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2',
//       title: 'Judge Bitch – Striker (feat. Perturbator)',
//       duration: 186000,
//       streamUrl: '/audio/abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2.mp3',
//       artworkUrl: '/artwork/abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2.jpg'
//     },
//     {
//       id: '7aac5c4753ca9859e3c67685c72b5a8529f14e67',
//       title: 'Prius An Sich – Hyperion Booster',
//       duration: 273244.25,
//       streamUrl: '/audio/7aac5c4753ca9859e3c67685c72b5a8529f14e67.mp3',
//       artworkUrl: '/artwork/7aac5c4753ca9859e3c67685c72b5a8529f14e67.jpg'
//     },
//     {
//       id: '1b1b89bc8ab9d0d19274190e6b5d50cc292dee96',
//       title: 'Judge Bitch – MDK',
//       duration: 220000,
//       streamUrl: '/audio/1b1b89bc8ab9d0d19274190e6b5d50cc292dee96.mp3',
//       artworkUrl: '/artwork/1b1b89bc8ab9d0d19274190e6b5d50cc292dee96.jpg'
//     },
//     {
//       id: '9a2e79f2a904d52481f9a692837de243596e06ed',
//       title: 'Miami Nights 1984 – Saved By The Bell',
//       duration: 266000,
//       streamUrl: '/audio/9a2e79f2a904d52481f9a692837de243596e06ed.mp3',
//       artworkUrl: '/artwork/9a2e79f2a904d52481f9a692837de243596e06ed.jpg'
//     },
//     {
//       id: 'b5fe4283a475ec0a61e0bf0ce173676f6e83f504',
//       title: 'DATAStream – Cinder Sunset',
//       duration: 334000,
//       streamUrl: '/audio/b5fe4283a475ec0a61e0bf0ce173676f6e83f504.mp3',
//       artworkUrl: '/artwork/b5fe4283a475ec0a61e0bf0ce173676f6e83f504.jpg'
//     },
//     {
//       id: '42aa24303041266a446cf3ebbc0409db2cba4b5f',
//       title: 'Highway Superstar – Save You (feat. Sebastian Gampl & Miranda Carey)',
//       duration: 336312.25,
//       streamUrl: '/audio/42aa24303041266a446cf3ebbc0409db2cba4b5f.mp3',
//       artworkUrl: '/artwork/42aa24303041266a446cf3ebbc0409db2cba4b5f.jpg'
//     },
//     {
//       id: '7747de1cdc8b332b962da47174adbf709fb3c970',
//       title: "Carpenter Brut – Hang'Em All",
//       duration: 337000,
//       streamUrl: '/audio/7747de1cdc8b332b962da47174adbf709fb3c970.mp3',
//       artworkUrl: '/artwork/7747de1cdc8b332b962da47174adbf709fb3c970.jpg'
//     },
//     {
//       id: 'a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20',
//       title: 'Street Cleaner – Nightlife',
//       duration: 200000,
//       streamUrl: '/audio/a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20.mp3',
//       artworkUrl: '/artwork/a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20.jpg'
//     },
//     {
//       id: '55d26f152537801780f812ffab63b5aa6567c0f2',
//       title: 'D/A/D – Backbone of the Night',
//       duration: 292000,
//       streamUrl: '/audio/55d26f152537801780f812ffab63b5aa6567c0f2.mp3',
//       artworkUrl: '/artwork/55d26f152537801780f812ffab63b5aa6567c0f2.jpg'
//     },
//     {
//       id: 'c8774500da6af4b048e560ba4f85c26ffc9a1fd6',
//       title: 'Compilerbau – Leaving Earth',
//       duration: 338000,
//       streamUrl: '/audio/c8774500da6af4b048e560ba4f85c26ffc9a1fd6.mp3',
//       artworkUrl: '/artwork/c8774500da6af4b048e560ba4f85c26ffc9a1fd6.jpg'
//     },
//     {
//       id: 'b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb',
//       title: 'Mega Drive – Crimewave',
//       duration: 296000,
//       streamUrl: '/audio/b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb.mp3',
//       artworkUrl: '/artwork/b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb.jpg'
//     },
//     {
//       id: '15e9642798b73e75e4f99ad4547b9368d2b8ad83',
//       title: 'Meteor – Grim Memories',
//       duration: 327000,
//       streamUrl: '/audio/15e9642798b73e75e4f99ad4547b9368d2b8ad83.mp3',
//       artworkUrl: '/artwork/15e9642798b73e75e4f99ad4547b9368d2b8ad83.jpg'
//     }
//   ]
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
