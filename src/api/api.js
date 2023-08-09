import axios from "axios";
import {getData} from './../server'
const data1Dowland=[
    {
      id: '44bb8fe47bf3d366062afa182d896a4595dbda06',
      title: 'Camille R – 2001',
      duration: 213000,
      streamUrl: '/audio/44bb8fe47bf3d366062afa182d896a4595dbda06.mp3',
      artworkUrl: '/artwork/44bb8fe47bf3d366062afa182d896a4595dbda06.jpg'
    },
    {
      id: '372567cee9b7c876f08a8685d4f472472ecafe04',
      title: 'Darknous – Outrage',
      duration: 295000,
      streamUrl: '/audio/372567cee9b7c876f08a8685d4f472472ecafe04.mp3',
      artworkUrl: '/artwork/372567cee9b7c876f08a8685d4f472472ecafe04.jpg'
    },
    {
      id: '4171b319ab7e0c828aca696cdbd5501cc84ffa36',
      title: 'Night Action – All About U',
      duration: 291000,
      streamUrl: '/audio/4171b319ab7e0c828aca696cdbd5501cc84ffa36.mp3',
      artworkUrl: '/artwork/4171b319ab7e0c828aca696cdbd5501cc84ffa36.jpg'
    },
    {
      id: 'd51e049836e528a8c7ce3fb3fc7afc17e0b4d2f0',
      title: 'Raken – Sunset Place',
      duration: 204000,
      streamUrl: '/audio/d51e049836e528a8c7ce3fb3fc7afc17e0b4d2f0.mp3',
      artworkUrl: '/artwork/d51e049836e528a8c7ce3fb3fc7afc17e0b4d2f0.jpg'
    },
    {
      id: '67c1c608198f805c75b56a4b0c1c4cab5b556ffa',
      title: 'Double Dragon – Traversee',
      duration: 245000,
      streamUrl: '/audio/67c1c608198f805c75b56a4b0c1c4cab5b556ffa.mp3',
      artworkUrl: '/artwork/67c1c608198f805c75b56a4b0c1c4cab5b556ffa.jpg'
    },
    {
      id: 'ddefc580bcfc9a424bf95b9dfbb3225fb4b89ce4',
      title: 'Dance with the Dead – Snapped',
      duration: 229000,
      streamUrl: '/audio/ddefc580bcfc9a424bf95b9dfbb3225fb4b89ce4.mp3',
      artworkUrl: '/artwork/ddefc580bcfc9a424bf95b9dfbb3225fb4b89ce4.jpg'
    },
    {
      id: 'baaad0dfcddc351bc849be935740803dbce74665',
      title: 'Andromeda Dreams – Space Highway',
      duration: 215000,
      streamUrl: '/audio/baaad0dfcddc351bc849be935740803dbce74665.mp3',
      artworkUrl: '/artwork/baaad0dfcddc351bc849be935740803dbce74665.jpg'
    },
    {
      id: 'b77b5efcdc591b839e4fba4de7602405333084a5',
      title: 'Robert Parker – Waiting',
      duration: 263000,
      streamUrl: '/audio/b77b5efcdc591b839e4fba4de7602405333084a5.mp3',
      artworkUrl: '/artwork/b77b5efcdc591b839e4fba4de7602405333084a5.jpg'
    },
    {
      id: 'f8a970b802ffc8a192f34deb8e461fe0bb0d9e04',
      title: "C-jeff – Momo's Truck Stop",
      duration: 208000,
      streamUrl: '/audio/f8a970b802ffc8a192f34deb8e461fe0bb0d9e04.mp3',
      artworkUrl: '/artwork/f8a970b802ffc8a192f34deb8e461fe0bb0d9e04.png'
    },
    {
      id: '7b839de882534b5491656f3388932c3aabfcbdd6',
      title: 'Jasper Byrne – Decade Dance',
      duration: 321000,
      streamUrl: '/audio/7b839de882534b5491656f3388932c3aabfcbdd6.mp3',
      artworkUrl: '/artwork/7b839de882534b5491656f3388932c3aabfcbdd6.jpg'
    },
    {
      id: '6d331273dca80961384d55247923fc812097dd78',
      title: 'Monomer – Warden',
      duration: 258000,
      streamUrl: '/audio/6d331273dca80961384d55247923fc812097dd78.mp3',
      artworkUrl: '/artwork/6d331273dca80961384d55247923fc812097dd78.jpg'
    },
    {
      id: '237e602291fea214cbdaebb6cd4a11944517cf8c',
      title: 'Le Matos – Wasteland',
      duration: 336000,
      streamUrl: '/audio/237e602291fea214cbdaebb6cd4a11944517cf8c.mp3',
      artworkUrl: '/artwork/237e602291fea214cbdaebb6cd4a11944517cf8c.jpg'
    },
    {
      id: '56746093c8426c1298daa46ff1da9472ff6beaf1',
      title: 'Cluster Buster – How Can He Go So Fast',
      duration: 284000,
      streamUrl: '/audio/56746093c8426c1298daa46ff1da9472ff6beaf1.mp3',
      artworkUrl: '/artwork/56746093c8426c1298daa46ff1da9472ff6beaf1.jpg'
    },
    {
      id: 'b8069445174238c3bfab152d8edbd0cfdbb56640',
      title: "Robert Parker – Generation '82 (feat. Shyguys)",
      duration: 256000,
      streamUrl: '/audio/b8069445174238c3bfab152d8edbd0cfdbb56640.mp3',
      artworkUrl: '/artwork/b8069445174238c3bfab152d8edbd0cfdbb56640.jpg'
    },
    {
      id: '1b53f0b38f9f9584ff485c4a54381b1c105afcce',
      title: 'FM Attack – Magic (feat. Kristine)',
      duration: 276000,
      streamUrl: '/audio/1b53f0b38f9f9584ff485c4a54381b1c105afcce.mp3',
      artworkUrl: '/artwork/1b53f0b38f9f9584ff485c4a54381b1c105afcce.jpg'
    },
    {
      id: 'd54cbf054a8384d627527d602328cfea2c4842fb',
      title: 'GAMER – Old Money',
      duration: 146000,
      streamUrl: '/audio/d54cbf054a8384d627527d602328cfea2c4842fb.mp3',
      artworkUrl: '/artwork/d54cbf054a8384d627527d602328cfea2c4842fb.jpg'
    },
    {
      id: 'abf67a16c705b47e5acf45fcf5a976582c764c91',
      title: 'A Space Love Adventure – Red Blaze',
      duration: 230000,
      streamUrl: '/audio/abf67a16c705b47e5acf45fcf5a976582c764c91.mp3',
      artworkUrl: '/artwork/abf67a16c705b47e5acf45fcf5a976582c764c91.jpg'
    },
    {
      id: 'ca6a555e348a4c495a1a9c35e14551d67e814b37',
      title: 'TWRP – Japanquest',
      duration: 272000,
      streamUrl: '/audio/ca6a555e348a4c495a1a9c35e14551d67e814b37.mp3',
      artworkUrl: '/artwork/ca6a555e348a4c495a1a9c35e14551d67e814b37.png'
    },
    {
      id: '37e70082b58a52e5a051e578a49bf8e2af22bcf8',
      title: 'Perturbator – Sexualizer (feat. Flash Arnold)',
      duration: 299000,
      streamUrl: '/audio/37e70082b58a52e5a051e578a49bf8e2af22bcf8.mp3',
      artworkUrl: '/artwork/37e70082b58a52e5a051e578a49bf8e2af22bcf8.jpg'
    },
    {
      id: '55963b04a9c541b7877f0c68c1d9c76f2f5766e6',
      title: 'Meteor – Manhattan 2019',
      duration: 223000,
      streamUrl: '/audio/55963b04a9c541b7877f0c68c1d9c76f2f5766e6.mp3',
      artworkUrl: '/artwork/55963b04a9c541b7877f0c68c1d9c76f2f5766e6.jpg'
    },
    {
      id: '42ec2a5d905d239b06decf60abe41cd94317ba3c',
      title: 'Retouch – Event Horizon',
      duration: 223803.45,
      streamUrl: '/audio/42ec2a5d905d239b06decf60abe41cd94317ba3c.mp3',
      artworkUrl: '/artwork/42ec2a5d905d239b06decf60abe41cd94317ba3c.jpg'
    },
    {
      id: 'bf3d8843a3ca65f54dbe4459ecd9068f475669f6',
      title: 'Pengus – Azimut',
      duration: 266000,
      streamUrl: '/audio/bf3d8843a3ca65f54dbe4459ecd9068f475669f6.mp3',
      artworkUrl: '/artwork/bf3d8843a3ca65f54dbe4459ecd9068f475669f6.jpg'
    },
    {
      id: 'c6ffff3b532c923d7e80e87c7a4ff83cd4078fe3',
      title: 'Lazerhawk – The King of the Streets',
      duration: 297000,
      streamUrl: '/audio/c6ffff3b532c923d7e80e87c7a4ff83cd4078fe3.mp3',
      artworkUrl: '/artwork/c6ffff3b532c923d7e80e87c7a4ff83cd4078fe3.jpg'
    },
    {
      id: '788062ec6d7f140413dcece66f1a286420e6c03e',
      title: 'Absolute Valentine – Disco Lover',
      duration: 237000,
      streamUrl: '/audio/788062ec6d7f140413dcece66f1a286420e6c03e.mp3',
      artworkUrl: '/artwork/788062ec6d7f140413dcece66f1a286420e6c03e.jpg'
    },
    {
      id: '4c85d4dcb6d818416b201cdb670629d6cfd2fc50',
      title: 'CONFRONTATIONAL – Like A Curse (Feat. Monte Pittman)',
      duration: 304000,
      streamUrl: '/audio/4c85d4dcb6d818416b201cdb670629d6cfd2fc50.mp3',
      artworkUrl: '/artwork/4c85d4dcb6d818416b201cdb670629d6cfd2fc50.jpg'
    },
    {
      id: 'f3b0d80c4ca4675cfea7294468ff8ff93c0fb72e',
      title: 'Mega Drive – Take Me Home',
      duration: 398000,
      streamUrl: '/audio/f3b0d80c4ca4675cfea7294468ff8ff93c0fb72e.mp3',
      artworkUrl: '/artwork/f3b0d80c4ca4675cfea7294468ff8ff93c0fb72e.png'
    },
    {
      id: '6015e051f9ccb294304966c317065d26a13d019c',
      title: 'Kille ft. Future Holotape – Strangers in the Night',
      duration: 256000,
      streamUrl: '/audio/6015e051f9ccb294304966c317065d26a13d019c.mp3',
      artworkUrl: '/artwork/6015e051f9ccb294304966c317065d26a13d019c.jpg'
    },
    {
      id: '541807d75a4bd9fe5a09104287c0ef162f06ad56',
      title: '20SIX Hundred – Open World',
      duration: 216000,
      streamUrl: '/audio/541807d75a4bd9fe5a09104287c0ef162f06ad56.mp3',
      artworkUrl: '/artwork/541807d75a4bd9fe5a09104287c0ef162f06ad56.jpg'
    },
    {
      id: '9d97a16658f429473802c8d1ac26305719336a8b',
      title: 'Arcade High – Phone Lines (feat. Hayley Stewart)',
      duration: 253000,
      streamUrl: '/audio/9d97a16658f429473802c8d1ac26305719336a8b.mp3',
      artworkUrl: '/artwork/9d97a16658f429473802c8d1ac26305719336a8b.jpg'
    },
    {
      id: 'd5d524b70b222e6c3675366dcdfb01e14d1cfc80',
      title: 'LeveL -1 – Dive in VR',
      duration: 231000,
      streamUrl: '/audio/d5d524b70b222e6c3675366dcdfb01e14d1cfc80.mp3',
      artworkUrl: '/artwork/d5d524b70b222e6c3675366dcdfb01e14d1cfc80.jpg'
    },
    {
      id: '0d0b249c78e18fc77af6ce7680ff25789ec6c3c3',
      title: 'GUNSHIP – The Mountain',
      duration: 264480.25,
      streamUrl: '/audio/0d0b249c78e18fc77af6ce7680ff25789ec6c3c3.mp3',
      artworkUrl: '/artwork/0d0b249c78e18fc77af6ce7680ff25789ec6c3c3.jpg'
    },
    {
      id: 'd3891c11749bd63159ccb52ed16e5454354a03e5',
      title: 'Vincenzo Salvia – Chromelove',
      duration: 283056.25,
      streamUrl: '/audio/d3891c11749bd63159ccb52ed16e5454354a03e5.mp3',
      artworkUrl: '/artwork/d3891c11749bd63159ccb52ed16e5454354a03e5.jpg'
    },
    {
      id: 'ac51d0ef3fa01b5da82169dba91bcb16a69ab553',
      title: 'Phaserland – Resemblance In Machine',
      duration: 292000,
      streamUrl: '/audio/ac51d0ef3fa01b5da82169dba91bcb16a69ab553.mp3',
      artworkUrl: '/artwork/ac51d0ef3fa01b5da82169dba91bcb16a69ab553.jpg'
    },
    {
      id: 'f4aa7673571ef901f6047dd88482d3c20a4bc761',
      title: 'GAMER – Overpass',
      duration: 220000,
      streamUrl: '/audio/f4aa7673571ef901f6047dd88482d3c20a4bc761.mp3',
      artworkUrl: '/artwork/f4aa7673571ef901f6047dd88482d3c20a4bc761.jpg'
    },
    {
      id: '7771fc38ff6941480d64f22de2cd85836e43f639',
      title: 'Mega Drive – Pulse of The Streets',
      duration: 263000,
      streamUrl: '/audio/7771fc38ff6941480d64f22de2cd85836e43f639.mp3',
      artworkUrl: '/artwork/7771fc38ff6941480d64f22de2cd85836e43f639.png'
    },
    {
      id: 'c0ea05cdb88400c1ab77b960fceb876201ed6228',
      title: 'Lucy in Disguise – 1987',
      duration: 279000,
      streamUrl: '/audio/c0ea05cdb88400c1ab77b960fceb876201ed6228.mp3',
      artworkUrl: '/artwork/c0ea05cdb88400c1ab77b960fceb876201ed6228.jpg'
    },
    {
      id: '48e93989a6bd463855d3a34fb8b830f7c8ae75a2',
      title: 'NeodroneX – Suburban Cowboys',
      duration: 187000,
      streamUrl: '/audio/48e93989a6bd463855d3a34fb8b830f7c8ae75a2.mp3',
      artworkUrl: '/artwork/48e93989a6bd463855d3a34fb8b830f7c8ae75a2.jpg'
    },
    {
      id: '0205d9dc38917a14540b58d1a65fe43ec9353de5',
      title: 'The Hunt – Brain Test',
      duration: 297000,
      streamUrl: '/audio/0205d9dc38917a14540b58d1a65fe43ec9353de5.mp3',
      artworkUrl: '/artwork/0205d9dc38917a14540b58d1a65fe43ec9353de5.jpg'
    },
    {
      id: '11761072788d7cc9d1e1fb1bcc924f900a166e67',
      title: 'Saint-Samuel – Videoflex',
      duration: 206064.25,
      streamUrl: '/audio/11761072788d7cc9d1e1fb1bcc924f900a166e67.mp3',
      artworkUrl: '/artwork/11761072788d7cc9d1e1fb1bcc924f900a166e67.jpg'
    },
    {
      id: '1a0832814890e9f64bf3e481fd5ffdfa1fa5d9f9',
      title: 'Magic Dance – The Mirror of Dreams',
      duration: 348000,
      streamUrl: '/audio/1a0832814890e9f64bf3e481fd5ffdfa1fa5d9f9.mp3',
      artworkUrl: '/artwork/1a0832814890e9f64bf3e481fd5ffdfa1fa5d9f9.jpg'
    },
    {
      id: 'a97b1b6d51d887ddb419fa7a9fdeb4dc4f7fa4b7',
      title: 'Block 35 – Central Control',
      duration: 333000,
      streamUrl: '/audio/a97b1b6d51d887ddb419fa7a9fdeb4dc4f7fa4b7.mp3',
      artworkUrl: '/artwork/a97b1b6d51d887ddb419fa7a9fdeb4dc4f7fa4b7.jpg'
    },
    {
      id: 'f03e9c717020ff38b48c966229063e69b57f5f83',
      title: 'CRYOSAT – CrimeCom',
      duration: 228000,
      streamUrl: '/audio/f03e9c717020ff38b48c966229063e69b57f5f83.mp3',
      artworkUrl: '/artwork/f03e9c717020ff38b48c966229063e69b57f5f83.jpg'
    },
    {
      id: '5f17b882793fe22f9d71ff65d3d93b92c709fac8',
      title: 'Dream Fiend – Morning Light',
      duration: 210000,
      streamUrl: '/audio/5f17b882793fe22f9d71ff65d3d93b92c709fac8.mp3',
      artworkUrl: '/artwork/5f17b882793fe22f9d71ff65d3d93b92c709fac8.jpg'
    },
    {
      id: '6cc16ed37a4b418ec3d5358257ff3142fc4bf0e5',
      title: 'LeBrock – One Night',
      duration: 212000,
      streamUrl: '/audio/6cc16ed37a4b418ec3d5358257ff3142fc4bf0e5.mp3',
      artworkUrl: '/artwork/6cc16ed37a4b418ec3d5358257ff3142fc4bf0e5.jpg'
    },
    {
      id: 'cddac66ea9198739a8abfdaa9a088d8439bcc2f3',
      title: 'Bellemaison – The Brand New Age',
      duration: 246000,
      streamUrl: '/audio/cddac66ea9198739a8abfdaa9a088d8439bcc2f3.mp3',
      artworkUrl: '/artwork/cddac66ea9198739a8abfdaa9a088d8439bcc2f3.jpg'
    },
    {
      id: '7dd77c06f31d4e8a1a94ac9d2832434ee1ebc94f',
      title: 'Gost – They',
      duration: 253000,
      streamUrl: '/audio/7dd77c06f31d4e8a1a94ac9d2832434ee1ebc94f.mp3',
      artworkUrl: '/artwork/7dd77c06f31d4e8a1a94ac9d2832434ee1ebc94f.jpg'
    },
    {
      id: '24d8d047dafe17dc6717d04aa7359a3ebf62d75f',
      title: 'Danger Mode – Chroma Drive',
      duration: 294000,
      streamUrl: '/audio/24d8d047dafe17dc6717d04aa7359a3ebf62d75f.mp3',
      artworkUrl: '/artwork/24d8d047dafe17dc6717d04aa7359a3ebf62d75f.jpg'
    },
    {
      id: '17aa22a9811d515370cb000336cb4ca79e8cfc99',
      title: 'Duett – Touch',
      duration: 208000,
      streamUrl: '/audio/17aa22a9811d515370cb000336cb4ca79e8cfc99.mp3',
      artworkUrl: '/artwork/17aa22a9811d515370cb000336cb4ca79e8cfc99.jpg'
    },
    {
      id: '89a46b1556d22e2809447d9065598ee47ce9b87a',
      title: 'OGRE – Shore Thing',
      duration: 257000,
      streamUrl: '/audio/89a46b1556d22e2809447d9065598ee47ce9b87a.mp3',
      artworkUrl: '/artwork/89a46b1556d22e2809447d9065598ee47ce9b87a.jpg'
    },
    {
      id: 'bfefb3e78b333f41200bfe188f911885e495cf53',
      title: 'Midnight Static – VHS Hallucinations',
      duration: 240000,
      streamUrl: '/audio/bfefb3e78b333f41200bfe188f911885e495cf53.mp3',
      artworkUrl: '/artwork/bfefb3e78b333f41200bfe188f911885e495cf53.jpg'
    },
    {
      id: 'd37ee09b5293270ad415c26054421f1ac8d83fa1',
      title: 'Jasper Byrne – Decade Dance',
      duration: 279000,
      streamUrl: '/audio/d37ee09b5293270ad415c26054421f1ac8d83fa1.mp3',
      artworkUrl: '/artwork/d37ee09b5293270ad415c26054421f1ac8d83fa1.png'
    },
    {
      id: 'bcd15c2d818e8408cb43f0b7e43438bddc97199a',
      title: 'Magic Dance – Last Light',
      duration: 279000,
      streamUrl: '/audio/bcd15c2d818e8408cb43f0b7e43438bddc97199a.mp3',
      artworkUrl: '/artwork/bcd15c2d818e8408cb43f0b7e43438bddc97199a.jpg'
    },
    {
      id: '3ca0b480afbe763bcf545ecac432b47050641d5f',
      title: 'Mega Drive – Power Driver',
      duration: 344000,
      streamUrl: '/audio/3ca0b480afbe763bcf545ecac432b47050641d5f.mp3',
      artworkUrl: '/artwork/3ca0b480afbe763bcf545ecac432b47050641d5f.jpg'
    },
    {
      id: 'd94929c827a1918ab1150260e9d87782ebf64d8e',
      title: 'Perturbator – Miami Disco',
      duration: 271000,
      streamUrl: '/audio/d94929c827a1918ab1150260e9d87782ebf64d8e.mp3',
      artworkUrl: '/artwork/d94929c827a1918ab1150260e9d87782ebf64d8e.jpg'
    },
    {
      id: '963d53044d83cac67ea568d1e7a769e171310f14',
      title: 'OGRE – Always Outnumbered, Never Outrun',
      duration: 267000,
      streamUrl: '/audio/963d53044d83cac67ea568d1e7a769e171310f14.mp3',
      artworkUrl: '/artwork/963d53044d83cac67ea568d1e7a769e171310f14.jpg'
    },
    {
      id: 'a8ff6b6b0ad0ef42ef330a59bde034c5789a8bae',
      title: 'Worship – Close Encounter',
      duration: 258048.25,
      streamUrl: '/audio/a8ff6b6b0ad0ef42ef330a59bde034c5789a8bae.mp3',
      artworkUrl: '/artwork/a8ff6b6b0ad0ef42ef330a59bde034c5789a8bae.jpg'
    },
    {
      id: '22a749c245a6810ac61157b2c8b6c644d15d7e4d',
      title: 'Betamaxx – Redlining 6th',
      duration: 189000,
      streamUrl: '/audio/22a749c245a6810ac61157b2c8b6c644d15d7e4d.mp3',
      artworkUrl: '/artwork/22a749c245a6810ac61157b2c8b6c644d15d7e4d.jpg'
    },
    {
      id: '6a96480a0e965070c7cf82b858188e131cfcf186',
      title: 'Perturbator – I Am The Night',
      duration: 379000,
      streamUrl: '/audio/6a96480a0e965070c7cf82b858188e131cfcf186.mp3',
      artworkUrl: '/artwork/6a96480a0e965070c7cf82b858188e131cfcf186.jpg'
    },
    {
      id: '28ddfd663e367668b0e86cd984e95311f63608db',
      title: 'Drifting Dreamer – Lights Out',
      duration: 273000,
      streamUrl: '/audio/28ddfd663e367668b0e86cd984e95311f63608db.mp3',
      artworkUrl: '/artwork/28ddfd663e367668b0e86cd984e95311f63608db.jpg'
    },
    {
      id: '9903c122b227587145e3b6f5fda054cc26fc03d0',
      title: 'Renz Wilde – Home Computer',
      duration: 189000,
      streamUrl: '/audio/9903c122b227587145e3b6f5fda054cc26fc03d0.mp3',
      artworkUrl: '/artwork/9903c122b227587145e3b6f5fda054cc26fc03d0.jpg'
    },
    {
      id: 'de5e0ad7afbf5bc0055d766d1f6261b9fb0eae0a',
      title: 'Droid Bishop – Vanisher',
      duration: 236000,
      streamUrl: '/audio/de5e0ad7afbf5bc0055d766d1f6261b9fb0eae0a.mp3',
      artworkUrl: '/artwork/de5e0ad7afbf5bc0055d766d1f6261b9fb0eae0a.jpg'
    },
    {
      id: 'abe3c0f48d6bf0014328f2189cc17db2b631df2f',
      title: 'Atrey – Supernova',
      duration: 257000,
      streamUrl: '/audio/abe3c0f48d6bf0014328f2189cc17db2b631df2f.mp3',
      artworkUrl: '/artwork/abe3c0f48d6bf0014328f2189cc17db2b631df2f.jpg'
    },
    {
      id: 'dac784bac1f669babcfbbd40e8a2767f00e344a6',
      title: 'Betamaxx – Dreamer (feat. Rat Rios)',
      duration: 243000,
      streamUrl: '/audio/dac784bac1f669babcfbbd40e8a2767f00e344a6.mp3',
      artworkUrl: '/artwork/dac784bac1f669babcfbbd40e8a2767f00e344a6.jpg'
    },
    {
      id: '1ffecb1c64a70d2554e9db6a259165fe3680b58e',
      title: 'Dead Astronauts – Witch Hunt',
      duration: 298000,
      streamUrl: '/audio/1ffecb1c64a70d2554e9db6a259165fe3680b58e.mp3',
      artworkUrl: '/artwork/1ffecb1c64a70d2554e9db6a259165fe3680b58e.jpg'
    },
    {
      id: '4c0b10397725b3b27198080f2bbf8aa44c9d4127',
      title: 'Danger Mode – Survivor',
      duration: 241000,
      streamUrl: '/audio/4c0b10397725b3b27198080f2bbf8aa44c9d4127.mp3',
      artworkUrl: '/artwork/4c0b10397725b3b27198080f2bbf8aa44c9d4127.jpg'
    },
    {
      id: '4b0e2ee44a24a562b3fde9eab8e678731b19c2d6',
      title: "Tommy '86 – Test Drive",
      duration: 402000,
      streamUrl: '/audio/4b0e2ee44a24a562b3fde9eab8e678731b19c2d6.mp3',
      artworkUrl: '/artwork/4b0e2ee44a24a562b3fde9eab8e678731b19c2d6.jpg'
    },
    {
      id: 'fef2f2a6148f8837a336e7ca76b71dd032492a46',
      title: 'Mitch Murder – High Performance',
      duration: 220685.9,
      streamUrl: '/audio/fef2f2a6148f8837a336e7ca76b71dd032492a46.mp3',
      artworkUrl: '/artwork/fef2f2a6148f8837a336e7ca76b71dd032492a46.jpg'
    },
    {
      id: '5434ce38252dff4782c3a3f9024c946e58b58c1a',
      title: 'Compilerbau – North Wall',
      duration: 264000,
      streamUrl: '/audio/5434ce38252dff4782c3a3f9024c946e58b58c1a.mp3',
      artworkUrl: '/artwork/5434ce38252dff4782c3a3f9024c946e58b58c1a.jpg'
    },
    {
      id: '919714356b1f3eeed3bc836c41f15e46790e05f8',
      title: 'Miami Nights 1984 – Streets On Fire',
      duration: 197000,
      streamUrl: '/audio/919714356b1f3eeed3bc836c41f15e46790e05f8.mp3',
      artworkUrl: '/artwork/919714356b1f3eeed3bc836c41f15e46790e05f8.jpg'
    },
    {
      id: '787022b67699b3300026ddc4563cf3f94f60afb1',
      title: 'Arcade High – On The Edge Of Summer',
      duration: 307000,
      streamUrl: '/audio/787022b67699b3300026ddc4563cf3f94f60afb1.mp3',
      artworkUrl: '/artwork/787022b67699b3300026ddc4563cf3f94f60afb1.jpg'
    },
    {
      id: '68cd3ec26606e107bb032a65603ddec9621469ba',
      title: 'Forgotten Illusions – Electric Legion',
      duration: 152000,
      streamUrl: '/audio/68cd3ec26606e107bb032a65603ddec9621469ba.mp3',
      artworkUrl: '/artwork/68cd3ec26606e107bb032a65603ddec9621469ba.jpg'
    },
    {
      id: '49e69e5d52a06255c8e1341aa91dd7e6db778daa',
      title: '80s Stallone – Beach (Original Mix)',
      duration: 230000,
      streamUrl: '/audio/49e69e5d52a06255c8e1341aa91dd7e6db778daa.mp3',
      artworkUrl: '/artwork/49e69e5d52a06255c8e1341aa91dd7e6db778daa.jpg'
    },
    {
      id: 'c9257805c3b70ceb57a5c701db78cb6d4a448cf7',
      title: 'Le Matos – La Mer Des Possibilites',
      duration: 359000,
      streamUrl: '/audio/c9257805c3b70ceb57a5c701db78cb6d4a448cf7.mp3',
      artworkUrl: '/artwork/c9257805c3b70ceb57a5c701db78cb6d4a448cf7.jpg'
    },
    {
      id: 'd8f484b66dfd10d9476206d33d79d883474eb483',
      title: 'Botnit – Ex-Cathedra',
      duration: 324000,
      streamUrl: '/audio/d8f484b66dfd10d9476206d33d79d883474eb483.mp3',
      artworkUrl: '/artwork/d8f484b66dfd10d9476206d33d79d883474eb483.jpg'
    },
    {
      id: '0a0fb6b8fc1effcccd47b18ef0f4c2989d9a9a36',
      title: 'Betamaxx – Mechanized',
      duration: 281000,
      streamUrl: '/audio/0a0fb6b8fc1effcccd47b18ef0f4c2989d9a9a36.mp3',
      artworkUrl: '/artwork/0a0fb6b8fc1effcccd47b18ef0f4c2989d9a9a36.jpg'
    },
    {
      id: 'a9e194fd41e0e3d34409e613e31492cf510d2d64',
      title: 'Bluezz Vylez – Craters and Lovers',
      duration: 321000,
      streamUrl: '/audio/a9e194fd41e0e3d34409e613e31492cf510d2d64.mp3',
      artworkUrl: '/artwork/a9e194fd41e0e3d34409e613e31492cf510d2d64.jpg'
    },
    {
      id: 'c596929ce73d1fd3951fbe7bce0457060d500adb',
      title: 'The Hunt – The Abomination',
      duration: 260000,
      streamUrl: '/audio/c596929ce73d1fd3951fbe7bce0457060d500adb.mp3',
      artworkUrl: '/artwork/c596929ce73d1fd3951fbe7bce0457060d500adb.jpg'
    },
    {
      id: 'bd5e3682730c3bd459730303ab434ad0025b7c60',
      title: 'Cosmic Sand – Give Us a First Chance',
      duration: 202000,
      streamUrl: '/audio/bd5e3682730c3bd459730303ab434ad0025b7c60.mp3',
      artworkUrl: '/artwork/bd5e3682730c3bd459730303ab434ad0025b7c60.jpg'
    },
    {
      id: '914cb3bbe433147e173a9cc64751df2bab29868a',
      title: 'Aysyne – Nite Life',
      duration: 254000,
      streamUrl: '/audio/914cb3bbe433147e173a9cc64751df2bab29868a.mp3',
      artworkUrl: '/artwork/914cb3bbe433147e173a9cc64751df2bab29868a.jpg'
    },
    {
      id: 'c3b7cf7f10aa82f99c988bb368195b2deb70b90f',
      title: 'GreKanE – Rectified',
      duration: 224000,
      streamUrl: '/audio/c3b7cf7f10aa82f99c988bb368195b2deb70b90f.mp3',
      artworkUrl: '/artwork/c3b7cf7f10aa82f99c988bb368195b2deb70b90f.jpg'
    },
    {
      id: '6ddbef50dfdb019a9cc9003c19833f07f3b1d38d',
      title: 'LeveL -1 – Attacking The Headquarters',
      duration: 223000,
      streamUrl: '/audio/6ddbef50dfdb019a9cc9003c19833f07f3b1d38d.mp3',
      artworkUrl: '/artwork/6ddbef50dfdb019a9cc9003c19833f07f3b1d38d.jpg'
    },
    {
      id: 'b82dfb64a576c808b49a8e3c2cb77572b6927188',
      title: 'Rosco – Gridlinked (feat. Kaspar Funk)',
      duration: 249000,
      streamUrl: '/audio/b82dfb64a576c808b49a8e3c2cb77572b6927188.mp3',
      artworkUrl: '/artwork/b82dfb64a576c808b49a8e3c2cb77572b6927188.jpg'
    },
    {
      id: '9e24d884d2044a5a7b13c1f1c6d9bb60f21d4a22',
      title: 'Gost – Night Crawler',
      duration: 281000,
      streamUrl: '/audio/9e24d884d2044a5a7b13c1f1c6d9bb60f21d4a22.mp3',
      artworkUrl: '/artwork/9e24d884d2044a5a7b13c1f1c6d9bb60f21d4a22.jpg'
    },
    {
      id: 'a054b5c0ebb7765ef84317fba68b5a4211ea780b',
      title: 'Arcade High – Heat Wave (feat. Morissa Trunzo)',
      duration: 251000,
      streamUrl: '/audio/a054b5c0ebb7765ef84317fba68b5a4211ea780b.mp3',
      artworkUrl: '/artwork/a054b5c0ebb7765ef84317fba68b5a4211ea780b.jpg'
    },
    {
      id: 'ae270cc8a590589302309fdae7ab8864137c6df7',
      title: 'FM Attack – Sleepless Nights',
      duration: 408000,
      streamUrl: '/audio/ae270cc8a590589302309fdae7ab8864137c6df7.mp3',
      artworkUrl: '/artwork/ae270cc8a590589302309fdae7ab8864137c6df7.jpg'
    },
    {
      id: '1af5503d2e3f4b941af82138b2ee1ea35addf4d5',
      title: 'Perturbator – Payback Pursuit',
      duration: 243000,
      streamUrl: '/audio/1af5503d2e3f4b941af82138b2ee1ea35addf4d5.mp3',
      artworkUrl: '/artwork/1af5503d2e3f4b941af82138b2ee1ea35addf4d5.jpg'
    },
    {
      id: '7dd230b22929c716c379f7999c1d820d4ad88c69',
      title: 'Miami Nights 1984 – One Last Time',
      duration: 146000,
      streamUrl: '/audio/7dd230b22929c716c379f7999c1d820d4ad88c69.mp3',
      artworkUrl: '/artwork/7dd230b22929c716c379f7999c1d820d4ad88c69.jpg'
    },
    {
      id: 'a0c9f1b970f2481e880d8ca6c7c0a9e3ee7cea24',
      title: 'Magic Sword – In The Face Of Evil',
      duration: 409077.80000000005,
      streamUrl: '/audio/a0c9f1b970f2481e880d8ca6c7c0a9e3ee7cea24.mp3',
      artworkUrl: '/artwork/a0c9f1b970f2481e880d8ca6c7c0a9e3ee7cea24.jpg'
    },
    {
      id: '1c5779501ab90dd73bdfcc9d25c0ce468f5deb6f',
      title: 'Lost Years – Phoenix Rising',
      duration: 328000,
      streamUrl: '/audio/1c5779501ab90dd73bdfcc9d25c0ce468f5deb6f.mp3',
      artworkUrl: '/artwork/1c5779501ab90dd73bdfcc9d25c0ce468f5deb6f.jpg'
    },
    {
      id: '93d11545d14e05cdfe2289a917b72cb38d67f34e',
      title: 'Danger Mode – Crime Wave',
      duration: 163000,
      streamUrl: '/audio/93d11545d14e05cdfe2289a917b72cb38d67f34e.mp3',
      artworkUrl: '/artwork/93d11545d14e05cdfe2289a917b72cb38d67f34e.jpg'
    },
    {
      id: 'efa2f7e5bc4d049a9db5fd7b166342b56128c2d4',
      title: 'Compilerbau – Tachyon',
      duration: 277000,
      streamUrl: '/audio/efa2f7e5bc4d049a9db5fd7b166342b56128c2d4.mp3',
      artworkUrl: '/artwork/efa2f7e5bc4d049a9db5fd7b166342b56128c2d4.jpg'
    },
    {
      id: '45fe7b51432ca4ea5c0702fb95366cb247a88d7e',
      title: '3FORCE – Highway Jupiter',
      duration: 324000,
      streamUrl: '/audio/45fe7b51432ca4ea5c0702fb95366cb247a88d7e.mp3',
      artworkUrl: '/artwork/45fe7b51432ca4ea5c0702fb95366cb247a88d7e.jpg'
    },
    {
      id: '00076cc3b4f5bd6b1528e646d7c0db5f4e538b6a',
      title: 'Action Jackson – Palm Kill',
      duration: 349000,
      streamUrl: '/audio/00076cc3b4f5bd6b1528e646d7c0db5f4e538b6a.mp3',
      artworkUrl: '/artwork/00076cc3b4f5bd6b1528e646d7c0db5f4e538b6a.jpg'
    },
    {
      id: '23a2dfcc04ca72329589fe1dea5fa10dc234467c',
      title: 'Bestrack – Workout 2000',
      duration: 340404.375,
      streamUrl: '/audio/23a2dfcc04ca72329589fe1dea5fa10dc234467c.mp3',
      artworkUrl: '/artwork/23a2dfcc04ca72329589fe1dea5fa10dc234467c.jpg'
    },
    {
      id: '009cb039108b41412a674e3ed5283d5da33dce1a',
      title: 'Crockett – Changing Lanes',
      duration: 336000,
      streamUrl: '/audio/009cb039108b41412a674e3ed5283d5da33dce1a.mp3',
      artworkUrl: '/artwork/009cb039108b41412a674e3ed5283d5da33dce1a.jpg'
    },
    {
      id: '439d440f5dcb602d2a29fea2c4128eaa42368d79',
      title: 'Mitch Murder – The Touch',
      duration: 326246.72500000003,
      streamUrl: '/audio/439d440f5dcb602d2a29fea2c4128eaa42368d79.mp3',
      artworkUrl: '/artwork/439d440f5dcb602d2a29fea2c4128eaa42368d79.jpg'
    },
    {
      id: '77cf51db21d1b79f57cbdb486f6868325a1bbfbf',
      title: 'Muscle – Feel The Steel',
      duration: 207000,
      streamUrl: '/audio/77cf51db21d1b79f57cbdb486f6868325a1bbfbf.mp3',
      artworkUrl: '/artwork/77cf51db21d1b79f57cbdb486f6868325a1bbfbf.jpg'
    },
    {
      id: 'dc06db7952bf78b76fce2549a3a109f2177b3486',
      title: 'Michael Perkins – Esteban',
      duration: 195000,
      streamUrl: '/audio/dc06db7952bf78b76fce2549a3a109f2177b3486.mp3',
      artworkUrl: '/artwork/dc06db7952bf78b76fce2549a3a109f2177b3486.jpg'
    },
    {
      id: '9a3ccfcdc1393277bc6005c86fd2977089c16284',
      title: 'Judge Bitch – Tropicool',
      duration: 266000,
      streamUrl: '/audio/9a3ccfcdc1393277bc6005c86fd2977089c16284.mp3',
      artworkUrl: '/artwork/9a3ccfcdc1393277bc6005c86fd2977089c16284.jpg'
    },
    {
      id: 'ee1ab0a93274e1e08c4500f3eb8e49c29d35d8fa',
      title: 'Bestrack – Burn the night',
      duration: 249132.5,
      streamUrl: '/audio/ee1ab0a93274e1e08c4500f3eb8e49c29d35d8fa.mp3',
      artworkUrl: '/artwork/ee1ab0a93274e1e08c4500f3eb8e49c29d35d8fa.jpg'
    },]
export const allApi = {
    getAddMusics: () => {
        return data1Dowland
        // return getData()//мій сервер
        // return axios.get(`https://retrowave.ru/api/v1/tracks?cursor=1&limit=199`)
        //     .then((response) => {
        //         return response.data.body.tracks;
        //     });
    },
};
