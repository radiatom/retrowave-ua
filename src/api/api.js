import axios from "axios";
import {getData} from './../server'
const data1Dowland=[{
    id: '74df5ac0a77e7c8b9dac8e3fd7d110fc8cfdac21',
    title: 'Neon Nox – Checkpoint feat. Rebecka Stragefors',
    duration: 325000,
    streamUrl: '/audio/74df5ac0a77e7c8b9dac8e3fd7d110fc8cfdac21.mp3',
    artworkUrl: '/artwork/74df5ac0a77e7c8b9dac8e3fd7d110fc8cfdac21.jpg'
  },
  {
    id: '0a1799039974f417ce1c07fc384c463c3ba3ec57',
    title: 'Midnight Static – Orange Sunshine',
    duration: 218000,
    streamUrl: '/audio/0a1799039974f417ce1c07fc384c463c3ba3ec57.mp3',
    artworkUrl: '/artwork/0a1799039974f417ce1c07fc384c463c3ba3ec57.jpg'
  },
  {
    id: '2cfb3922cab509f99822d8a832dea233268377cb',
    title: 'Prius An Sich – Crystal Peak',
    duration: 289985.55,
    streamUrl: '/audio/2cfb3922cab509f99822d8a832dea233268377cb.mp3',
    artworkUrl: '/artwork/2cfb3922cab509f99822d8a832dea233268377cb.jpg'
  },
  {
    id: 'b5f15ca04fc2aa4db4f86701f1808579c0cad830',
    title: 'Power Glove – Power Core',
    duration: 130000,
    streamUrl: '/audio/b5f15ca04fc2aa4db4f86701f1808579c0cad830.mp3',
    artworkUrl: '/artwork/b5f15ca04fc2aa4db4f86701f1808579c0cad830.jpg'
  },
  {
    id: '89e451b72241fb9d9d3fbbd4f93342388ff7dae4',
    title: 'Rain Sword – Sailing With You',
    duration: 280000,
    streamUrl: '/audio/89e451b72241fb9d9d3fbbd4f93342388ff7dae4.mp3',
    artworkUrl: '/artwork/89e451b72241fb9d9d3fbbd4f93342388ff7dae4.jpg'
  },
  {
    id: 'e17a80d8100372686f2477955a0a19c54d2f16dc',
    title: 'NightStop – Porn After Midnight',
    duration: 261000,
    streamUrl: '/audio/e17a80d8100372686f2477955a0a19c54d2f16dc.mp3',
    artworkUrl: '/artwork/e17a80d8100372686f2477955a0a19c54d2f16dc.jpg'
  },
  {
    id: '2a06aaef4e0b21a535545ef03ef4b196b7b72728',
    title: 'Nightcrawler – Broken Dreams',
    duration: 274000,
    streamUrl: '/audio/2a06aaef4e0b21a535545ef03ef4b196b7b72728.mp3',
    artworkUrl: '/artwork/2a06aaef4e0b21a535545ef03ef4b196b7b72728.jpg'
  },
  {
    id: 'a08e490cd760d9711206f7662577300bec5d7619',
    title: 'Adeyhawke – Looker',
    duration: 281000,
    streamUrl: '/audio/a08e490cd760d9711206f7662577300bec5d7619.mp3',
    artworkUrl: '/artwork/a08e490cd760d9711206f7662577300bec5d7619.jpg'
  },
  {
    id: '5866736b34b2baf2eb1feeec32a6b27728a7444d',
    title: 'Sebastian Gampl – Under Control  (Feat Tommy Reeve)',
    duration: 286000,
    streamUrl: '/audio/5866736b34b2baf2eb1feeec32a6b27728a7444d.mp3',
    artworkUrl: '/artwork/5866736b34b2baf2eb1feeec32a6b27728a7444d.jpg'
  },
  {
    id: '11e9de7ef505443597243237178d7cdffd50758f',
    title: 'Magic Sword – Battlefield',
    duration: 256056.24999999997,
    streamUrl: '/audio/11e9de7ef505443597243237178d7cdffd50758f.mp3',
    artworkUrl: '/artwork/11e9de7ef505443597243237178d7cdffd50758f.jpg'
  },
  {
    id: '0e93f44db3df1480267abc6f9e7e514a04c22165',
    title: 'Cluster Buster – Knee-Deep In The Dead',
    duration: 254000,
    streamUrl: '/audio/0e93f44db3df1480267abc6f9e7e514a04c22165.mp3',
    artworkUrl: '/artwork/0e93f44db3df1480267abc6f9e7e514a04c22165.jpg'
  },
  {
    id: '3f9d0703490f83fff3bac8c0401bfb8901b07a76',
    title: 'Meteor – Round One',
    duration: 194000,
    streamUrl: '/audio/3f9d0703490f83fff3bac8c0401bfb8901b07a76.mp3',
    artworkUrl: '/artwork/3f9d0703490f83fff3bac8c0401bfb8901b07a76.jpg'
  },
  {
    id: 'f9ceb6e469719b3a5e9edd80012ac23cb5f07cdb',
    title: 'CYBEREALITYライフ – Road Memories',
    duration: 284000,
    streamUrl: '/audio/f9ceb6e469719b3a5e9edd80012ac23cb5f07cdb.mp3',
    artworkUrl: '/artwork/f9ceb6e469719b3a5e9edd80012ac23cb5f07cdb.jpg'
  },
  {
    id: '4f963db3977646970a42b118346ca8d736a412b8',
    title: 'Kristine – The Deepest Blue',
    duration: 277680.25,
    streamUrl: '/audio/4f963db3977646970a42b118346ca8d736a412b8.mp3',
    artworkUrl: '/artwork/4f963db3977646970a42b118346ca8d736a412b8.jpg'
  },
  {
    id: 'dc41a75c2c58d1efdb955eb48a77c31d24ad12d7',
    title: 'Street Cleaner – Outnumbered',
    duration: 208000,
    streamUrl: '/audio/dc41a75c2c58d1efdb955eb48a77c31d24ad12d7.mp3',
    artworkUrl: '/artwork/dc41a75c2c58d1efdb955eb48a77c31d24ad12d7.jpg'
  },
  {
    id: '57480d80acbd7de60f22b0fb5787700720ed1a8a',
    title: 'Monomer – Chrome Castles',
    duration: 201000,
    streamUrl: '/audio/57480d80acbd7de60f22b0fb5787700720ed1a8a.mp3',
    artworkUrl: '/artwork/57480d80acbd7de60f22b0fb5787700720ed1a8a.jpg'
  },
  {
    id: 'a1edad3d91e75b97eac8181e0466ff2904cfed72',
    title: "Mild Peril – Paladin's Theme",
    duration: 571000,
    streamUrl: '/audio/a1edad3d91e75b97eac8181e0466ff2904cfed72.mp3',
    artworkUrl: '/artwork/a1edad3d91e75b97eac8181e0466ff2904cfed72.jpg'
  },
  {
    id: 'd597ca5b42eca6792835dce652258b6c601ef9b0',
    title: 'Orax – Pilgrimage',
    duration: 351000,
    streamUrl: '/audio/d597ca5b42eca6792835dce652258b6c601ef9b0.mp3',
    artworkUrl: '/artwork/d597ca5b42eca6792835dce652258b6c601ef9b0.jpg'
  },
  {
    id: 'dd22f48d09c6b272cb6bb533a05f087bdc222ae9',
    title: 'NightStop – VHS GIRLS',
    duration: 208000,
    streamUrl: '/audio/dd22f48d09c6b272cb6bb533a05f087bdc222ae9.mp3',
    artworkUrl: '/artwork/dd22f48d09c6b272cb6bb533a05f087bdc222ae9.jpg'
  },
  {
    id: 'd98d1e528bae6a544bcd7e085d58fd6ff0b88ed8',
    title: 'Droid Bishop – Beyond The Blue',
    duration: 291000,
    streamUrl: '/audio/d98d1e528bae6a544bcd7e085d58fd6ff0b88ed8.mp3',
    artworkUrl: '/artwork/d98d1e528bae6a544bcd7e085d58fd6ff0b88ed8.jpg'
  },
  {
    id: '6de51ebbd2ee3590d304a1ca7257396dc27b25a0',
    title: 'Arcade High – Cool Inc.',
    duration: 233000,
    streamUrl: '/audio/6de51ebbd2ee3590d304a1ca7257396dc27b25a0.mp3',
    artworkUrl: '/artwork/6de51ebbd2ee3590d304a1ca7257396dc27b25a0.jpg'
  },
  {
    id: '41349f10e3a57cb26f78ef4051c532fcce7c57d9',
    title: 'Division – Lost in Time',
    duration: 314000,
    streamUrl: '/audio/41349f10e3a57cb26f78ef4051c532fcce7c57d9.mp3',
    artworkUrl: '/artwork/41349f10e3a57cb26f78ef4051c532fcce7c57d9.jpg'
  },
  {
    id: '962d24a6756f9971b8f82cc4285d04fb0fae5cc0',
    title: 'Black Heron – Surgeon Stimulator (Operating Theatre)',
    duration: 270000,
    streamUrl: '/audio/962d24a6756f9971b8f82cc4285d04fb0fae5cc0.mp3',
    artworkUrl: '/artwork/962d24a6756f9971b8f82cc4285d04fb0fae5cc0.jpg'
  },
  {
    id: '8f5ae5ac0599cd3f07f74a781af36472379a6bc8',
    title: 'Pinemarten – Just Friends',
    duration: 323000,
    streamUrl: '/audio/8f5ae5ac0599cd3f07f74a781af36472379a6bc8.mp3',
    artworkUrl: '/artwork/8f5ae5ac0599cd3f07f74a781af36472379a6bc8.jpg'
  },
  {
    id: '8bc347cbd4b75985d741b5e26cc48f7389c8a45a',
    title: 'Megahit – Shinjuku Cruise',
    duration: 222000,
    streamUrl: '/audio/8bc347cbd4b75985d741b5e26cc48f7389c8a45a.mp3',
    artworkUrl: '/artwork/8bc347cbd4b75985d741b5e26cc48f7389c8a45a.jpg'
  },
  {
    id: 'da96c99f6c1a59ae1457689532c83d69d46d973a',
    title: 'Betamaxx – Restless',
    duration: 232000,
    streamUrl: '/audio/da96c99f6c1a59ae1457689532c83d69d46d973a.mp3',
    artworkUrl: '/artwork/da96c99f6c1a59ae1457689532c83d69d46d973a.jpg'
  },
  {
    id: 'eaf8638aeeabeed18d3128141756a180feec71d9',
    title: 'Miami Nights 1984 – Reflex Training',
    duration: 118000,
    streamUrl: '/audio/eaf8638aeeabeed18d3128141756a180feec71d9.mp3',
    artworkUrl: '/artwork/eaf8638aeeabeed18d3128141756a180feec71d9.jpg'
  },
  {
    id: '1843e9a4696860e87dd21468ba8515b39f36e33e',
    title: 'Nemix – Under Enemy Control',
    duration: 284000,
    streamUrl: '/audio/1843e9a4696860e87dd21468ba8515b39f36e33e.mp3',
    artworkUrl: '/artwork/1843e9a4696860e87dd21468ba8515b39f36e33e.jpg'
  },
  {
    id: '649700cef90e29859a0d7e77eaa1feb2fac8ea55',
    title: 'FM Attack – Yesterday',
    duration: 297000,
    streamUrl: '/audio/649700cef90e29859a0d7e77eaa1feb2fac8ea55.mp3',
    artworkUrl: '/artwork/649700cef90e29859a0d7e77eaa1feb2fac8ea55.jpg'
  },
  {
    id: '733d40de7c759a395e36ace1e534bd89be73fece',
    title: 'Ex-Machina – Sector-17 Blues',
    duration: 378000,
    streamUrl: '/audio/733d40de7c759a395e36ace1e534bd89be73fece.mp3',
    artworkUrl: '/artwork/733d40de7c759a395e36ace1e534bd89be73fece.jpg'
  },
  {
    id: 'adf0c6f1d11c33e016bf7facade4f25d63a5bb19',
    title: 'Power Glove – TELECOM',
    duration: 131000,
    streamUrl: '/audio/adf0c6f1d11c33e016bf7facade4f25d63a5bb19.mp3',
    artworkUrl: '/artwork/adf0c6f1d11c33e016bf7facade4f25d63a5bb19.jpg'
  },
  {
    id: 'd5ac705747ffdf6283d1e8520382d1d504cc512e',
    title: 'Droid Bishop – When Androids Dream',
    duration: 262000,
    streamUrl: '/audio/d5ac705747ffdf6283d1e8520382d1d504cc512e.mp3',
    artworkUrl: '/artwork/d5ac705747ffdf6283d1e8520382d1d504cc512e.jpg'
  },
  {
    id: '6c294f8e5b77e9ceb6c2e6f74d7edc58b71882ae',
    title: 'Futurecop! – Transformers',
    duration: 279000,
    streamUrl: '/audio/6c294f8e5b77e9ceb6c2e6f74d7edc58b71882ae.mp3',
    artworkUrl: '/artwork/6c294f8e5b77e9ceb6c2e6f74d7edc58b71882ae.jpg'
  },
  {
    id: '5d906452886e98e569e59bb54d86063ee6e64e88',
    title: 'PyramidAeon – A World Of Our Own',
    duration: 252000,
    streamUrl: '/audio/5d906452886e98e569e59bb54d86063ee6e64e88.mp3',
    artworkUrl: '/artwork/5d906452886e98e569e59bb54d86063ee6e64e88.jpg'
  },
  {
    id: '0d1e0dca0e3a49aab610da756ca084284c62af45',
    title: 'Dance with the Dead – Moon Runner',
    duration: 220000,
    streamUrl: '/audio/0d1e0dca0e3a49aab610da756ca084284c62af45.mp3',
    artworkUrl: '/artwork/0d1e0dca0e3a49aab610da756ca084284c62af45.jpg'
  },
  {
    id: '0c6ccceed12738e4e7689cf4bd381aec8bae2a23',
    title: 'Droid Bishop – Moon Dancer',
    duration: 365000,
    streamUrl: '/audio/0c6ccceed12738e4e7689cf4bd381aec8bae2a23.mp3',
    artworkUrl: '/artwork/0c6ccceed12738e4e7689cf4bd381aec8bae2a23.jpg'
  },
  {
    id: 'e571b0abbfe3e6e4cb9deb708e286f4ff1d51714',
    title: '20SIX Hundred – Level Up',
    duration: 228000,
    streamUrl: '/audio/e571b0abbfe3e6e4cb9deb708e286f4ff1d51714.mp3',
    artworkUrl: '/artwork/e571b0abbfe3e6e4cb9deb708e286f4ff1d51714.jpg'
  },
  {
    id: '9010bef5e2a06b25e9d9650a52b6bc3e82b3dd7a',
    title: 'Monomer – Arcana Engine',
    duration: 229000,
    streamUrl: '/audio/9010bef5e2a06b25e9d9650a52b6bc3e82b3dd7a.mp3',
    artworkUrl: '/artwork/9010bef5e2a06b25e9d9650a52b6bc3e82b3dd7a.jpg'
  },
  {
    id: 'd57120d289b5939cb1a80de6f0974525f3a37f44',
    title: 'Nowtro – Midnight Ride',
    duration: 296000,
    streamUrl: '/audio/d57120d289b5939cb1a80de6f0974525f3a37f44.mp3',
    artworkUrl: '/artwork/d57120d289b5939cb1a80de6f0974525f3a37f44.jpg'
  },
  {
    id: '3ee10cdf8d9f39d0da09ca4c93ef55b4552d75fe',
    title: 'Kick Puncher – Beneath The Ice',
    duration: 201000,
    streamUrl: '/audio/3ee10cdf8d9f39d0da09ca4c93ef55b4552d75fe.mp3',
    artworkUrl: '/artwork/3ee10cdf8d9f39d0da09ca4c93ef55b4552d75fe.jpg'
  },
  {
    id: 'ba2a5bd4f98f36ae29283e46985d579a3e481710',
    title: 'Power Glove – Punch!',
    duration: 179000,
    streamUrl: '/audio/ba2a5bd4f98f36ae29283e46985d579a3e481710.mp3',
    artworkUrl: '/artwork/ba2a5bd4f98f36ae29283e46985d579a3e481710.jpg'
  },
  {
    id: '60d49a9ec255d657bba4d440bcd196ceae24c426',
    title: 'Starforce – Simulation 2099',
    duration: 313000,
    streamUrl: '/audio/60d49a9ec255d657bba4d440bcd196ceae24c426.mp3',
    artworkUrl: '/artwork/60d49a9ec255d657bba4d440bcd196ceae24c426.jpg'
  },
  {
    id: 'f3b6454fc2debde182c0afe863b0e14972247b07',
    title: 'Dynatron – Contact',
    duration: 308000,
    streamUrl: '/audio/f3b6454fc2debde182c0afe863b0e14972247b07.mp3',
    artworkUrl: '/artwork/f3b6454fc2debde182c0afe863b0e14972247b07.jpg'
  },
  {
    id: '2e1e07a0fda01334a895fe4e0d9e3b97e5941777',
    title: 'Flash Arnold – The Final Chase',
    duration: 212000,
    streamUrl: '/audio/2e1e07a0fda01334a895fe4e0d9e3b97e5941777.mp3',
    artworkUrl: '/artwork/2e1e07a0fda01334a895fe4e0d9e3b97e5941777.jpg'
  },
  {
    id: '65dbd1d695dd3b16f57443d4f3b900c619d08f12',
    title: 'FM Attack – A Million Miles Away',
    duration: 237000,
    streamUrl: '/audio/65dbd1d695dd3b16f57443d4f3b900c619d08f12.mp3',
    artworkUrl: '/artwork/65dbd1d695dd3b16f57443d4f3b900c619d08f12.jpg'
  },
  {
    id: '44afd90b8460b0d0f6054ad5bb147357f414ffaa',
    title: 'Robert Parker – Hardbody',
    duration: 337000,
    streamUrl: '/audio/44afd90b8460b0d0f6054ad5bb147357f414ffaa.mp3',
    artworkUrl: '/artwork/44afd90b8460b0d0f6054ad5bb147357f414ffaa.jpg'
  },
  {
    id: 'fb9d1d08c6c7719fc2cc8834e174323051fc5e1b',
    title: 'AIRGLOW – Spliff & Wesson',
    duration: 213000,
    streamUrl: '/audio/fb9d1d08c6c7719fc2cc8834e174323051fc5e1b.mp3',
    artworkUrl: '/artwork/fb9d1d08c6c7719fc2cc8834e174323051fc5e1b.jpg'
  },
  {
    id: 'b33eaa72cb166ab034c2a250570b2c898c199204',
    title: 'Aquawave – Tokyo Ride',
    duration: 300000,
    streamUrl: '/audio/b33eaa72cb166ab034c2a250570b2c898c199204.mp3',
    artworkUrl: '/artwork/b33eaa72cb166ab034c2a250570b2c898c199204.jpg'
  },
  {
    id: 'd30ef4596a1e3508635d44d3f4c5be44e767868c',
    title: 'Forgotten Illusions – Network Panic',
    duration: 190000,
    streamUrl: '/audio/d30ef4596a1e3508635d44d3f4c5be44e767868c.mp3',
    artworkUrl: '/artwork/d30ef4596a1e3508635d44d3f4c5be44e767868c.jpg'
  },
  {
    id: '98a32fda65d5303f26b0d50b93754e10db16d55e',
    title: 'Maethelvin – The Last Escape',
    duration: 221000,
    streamUrl: '/audio/98a32fda65d5303f26b0d50b93754e10db16d55e.mp3',
    artworkUrl: '/artwork/98a32fda65d5303f26b0d50b93754e10db16d55e.jpg'
  },
  {
    id: 'a6790490e9ec52ae0896daa4079cf2ec70db0791',
    title: 'Flashworx – Odaiba Chase',
    duration: 286000,
    streamUrl: '/audio/a6790490e9ec52ae0896daa4079cf2ec70db0791.mp3',
    artworkUrl: '/artwork/a6790490e9ec52ae0896daa4079cf2ec70db0791.jpg'
  },
  {
    id: 'a859e60167ad30554051ba4dfba032a89679dce8',
    title: 'Niky Nine – Exhausted Divinity',
    duration: 288000,
    streamUrl: '/audio/a859e60167ad30554051ba4dfba032a89679dce8.mp3',
    artworkUrl: '/artwork/a859e60167ad30554051ba4dfba032a89679dce8.jpg'
  },
  {
    id: '3b1353c0144d0fe7edb5785aa4adf353eb6cc3bd',
    title: 'Absolute Valentine – In The 42nd Street',
    duration: 140000,
    streamUrl: '/audio/3b1353c0144d0fe7edb5785aa4adf353eb6cc3bd.mp3',
    artworkUrl: '/artwork/3b1353c0144d0fe7edb5785aa4adf353eb6cc3bd.jpg'
  },
  {
    id: 'ef731662492b3ee1abec923ab619afa0d62f1724',
    title: 'Molasar – Talisman',
    duration: 260000,
    streamUrl: '/audio/ef731662492b3ee1abec923ab619afa0d62f1724.mp3',
    artworkUrl: '/artwork/ef731662492b3ee1abec923ab619afa0d62f1724.jpg'
  },
  {
    id: '259049936d41b46955c8736d96615239a99f8f71',
    title: 'Lost Years – Amplifier',
    duration: 215000,
    streamUrl: '/audio/259049936d41b46955c8736d96615239a99f8f71.mp3',
    artworkUrl: '/artwork/259049936d41b46955c8736d96615239a99f8f71.jpg'
  },
  {
    id: '916582e0c5932db5947a4ef4d6e618ebc5de7b58',
    title: 'Le Matos – Eyes Throat Genitals',
    duration: 367000,
    streamUrl: '/audio/916582e0c5932db5947a4ef4d6e618ebc5de7b58.mp3',
    artworkUrl: '/artwork/916582e0c5932db5947a4ef4d6e618ebc5de7b58.jpg'
  },
  {
    id: '0d9f7a2b644e52107b3fc254180591c7cd174cb4',
    title: 'PyramidAeon – Eyes',
    duration: 223000,
    streamUrl: '/audio/0d9f7a2b644e52107b3fc254180591c7cd174cb4.mp3',
    artworkUrl: '/artwork/0d9f7a2b644e52107b3fc254180591c7cd174cb4.jpg'
  },
  {
    id: '84a959f03f317a5c7ec09730c78a38889d7d646a',
    title: 'Mike Luck – Cityscape',
    duration: 287520.25,
    streamUrl: '/audio/84a959f03f317a5c7ec09730c78a38889d7d646a.mp3',
    artworkUrl: '/artwork/84a959f03f317a5c7ec09730c78a38889d7d646a.jpg'
  },
  {
    id: 'a9827b3012c0249fc81ac7dcd242712d6af2f1ee',
    title: 'Mitch Murder – Saturdays',
    duration: 240147.125,
    streamUrl: '/audio/a9827b3012c0249fc81ac7dcd242712d6af2f1ee.mp3',
    artworkUrl: '/artwork/a9827b3012c0249fc81ac7dcd242712d6af2f1ee.jpg'
  },
  {
    id: 'd0803396e7538eabdea7628b3b0ac824328beca8',
    title: 'MYRONE – The Pump Master',
    duration: 177000,
    streamUrl: '/audio/d0803396e7538eabdea7628b3b0ac824328beca8.mp3',
    artworkUrl: '/artwork/d0803396e7538eabdea7628b3b0ac824328beca8.jpg'
  },
  {
    id: '8526972b87cf00eb5ec6e495d0e1b5e886c8a296',
    title: 'De Lorra – See You Again',
    duration: 265000,
    streamUrl: '/audio/8526972b87cf00eb5ec6e495d0e1b5e886c8a296.mp3',
    artworkUrl: '/artwork/8526972b87cf00eb5ec6e495d0e1b5e886c8a296.jpg'
  },
  {
    id: '57a84dad931cdd7c212f87bc4f338dcf6d8b4438',
    title: 'Mythical Vigilante – Time Traveler (Feat. Nemix On Guitar)',
    duration: 297000,
    streamUrl: '/audio/57a84dad931cdd7c212f87bc4f338dcf6d8b4438.mp3',
    artworkUrl: '/artwork/57a84dad931cdd7c212f87bc4f338dcf6d8b4438.jpg'
  }]
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
