import { timeToMilliseconds } from "./function";

export const data = [
    {
        id: '0',
        title: 'Electric Youth – WeAreTheYouth',
        duration: 192000,
        streamUrl: `/audio/Electric Youth – WeAreTheYouth.mp3`,
        artworkUrl: `/artwork/8ab19cd0a3fe579eebd5bd598581399a329ce960.jpg`
      },
      {
        id: '5d4ca036e66f3ae771c008e56b111d116f7142cb',
        title: 'Dynatron – 37 Million Horsepower',
        duration: 276000,
        streamUrl: `/audio/5d4ca036e66f3ae771c008e56b111d116f7142cb.mp3`,
        artworkUrl: `/artwork/5d4ca036e66f3ae771c008e56b111d116f7142cb.jpg`
      },
      {
        id: '594ea8427e44a724a5ce1782c3d3dcf058735e1e',
        title: "Muscle – All My Ex's Died In Texas",
        duration: 249000,
        streamUrl: `/audio/594ea8427e44a724a5ce1782c3d3dcf058735e1e.mp3` ,
        artworkUrl: `/artwork/594ea8427e44a724a5ce1782c3d3dcf058735e1e.jpg` 
      },
      {
        id: '9341a4b27134252d998579054639c1a4c7e00d11',
        title: 'GUNSHIP – Revel in Your Time',
        duration: 247704.25,
        streamUrl: `/audio/9341a4b27134252d998579054639c1a4c7e00d11.mp3`,
        artworkUrl: `/artwork/9341a4b27134252d998579054639c1a4c7e00d11.jpg`
      },
      {
        id: '83e93a0a5131b43b7050eb3bf9b57299ce031afe',
        title: 'Botnit – Jupiter Style',
        duration: 398000,
        streamUrl: `/audio/83e93a0a5131b43b7050eb3bf9b57299ce031afe.mp3`,
        artworkUrl: `/artwork/83e93a0a5131b43b7050eb3bf9b57299ce031afe.jpg`
      },
      {
        id: '3e1847cf94216b5f1f54a87847800852d887ed3d',
        title: 'Dead Astronauts – Weathered Wolves',
        duration: 300000,
        streamUrl: `/audio/3e1847cf94216b5f1f54a87847800852d887ed3d.mp3`,
        artworkUrl: `/artwork/3e1847cf94216b5f1f54a87847800852d887ed3d.jpg`
      },
      {
        id: '1102378f04e74259694aae9658a69ca957a09002',
        title: 'Lucy In Disguise – Silver Lights',
        duration: 330000,
        streamUrl: `/audio/1102378f04e74259694aae9658a69ca957a09002.mp3`,
        artworkUrl: `/artwork/1102378f04e74259694aae9658a69ca957a09002.jpg`
      },
      {
        id: 'a186634cc728b6a6d4d7e5c96dd7b7732a62aeb5',
        title: 'Highway Superstar – Cast Away (feat. Dana Jean Phoenix)',
        duration: 292176.25,
        streamUrl: `/audio/a186634cc728b6a6d4d7e5c96dd7b7732a62aeb5.mp3`,
        artworkUrl: `/artwork/a186634cc728b6a6d4d7e5c96dd7b7732a62aeb5.jpg`
      },
      {
        id: '2c09682215c758af55f75709af92306e7767f8bd',
        title: 'Daniel Deluxe – Soul Siphon',
        duration: 240216.25,
        streamUrl: `/audio/2c09682215c758af55f75709af92306e7767f8bd.mp3`,
        artworkUrl: `/artwork/2c09682215c758af55f75709af92306e7767f8bd.jpg`
      },
      {
        id: '2e82b833532f5c4611fce6b4957ac0dba5348d57',
        title: 'Android Automatic – Camaro Dreams',
        duration: 204000,
        streamUrl: `/audio/2e82b833532f5c4611fce6b4957ac0dba5348d57.mp3`,
        artworkUrl: `/artwork/2e82b833532f5c4611fce6b4957ac0dba5348d57.jpg`
      },
      {
        id: '6e531164c4804e9db56db9baa9fd1512e7de72af',
        title: 'OGRE – Job For A Cowboy',
        duration: 141000,
        streamUrl: `/audio/6e531164c4804e9db56db9baa9fd1512e7de72af.mp3`,
        artworkUrl: `/artwork/6e531164c4804e9db56db9baa9fd1512e7de72af.jpg`
      },
      {
        id: 'aefc6efe3382f15c3886bd41b12a12b89869a083',
        title: 'Miami Supercops – Rising Force',
        duration: 298000,
        streamUrl: `/audio/aefc6efe3382f15c3886bd41b12a12b89869a083.mp3`,
        artworkUrl: `/artwork/aefc6efe3382f15c3886bd41b12a12b89869a083.jpg`
      },
      {
        id: '69e3f0fd3828a2e99993c14716f791846c9f8a5c',
        title: 'Camille R – 100 $',
        duration: 199000,
        streamUrl: `/audio/69e3f0fd3828a2e99993c14716f791846c9f8a5c.mp3`,
        artworkUrl: `/artwork/69e3f0fd3828a2e99993c14716f791846c9f8a5c.jpg`
      },
      {
        id: 'c66baca5e9132375a7c5ec76b94d83a40662acd6',
        title: 'Nowtro – Space Race',
        duration: 302000,
        streamUrl: `/audio/c66baca5e9132375a7c5ec76b94d83a40662acd6.mp3`,
        artworkUrl: `/artwork/c66baca5e9132375a7c5ec76b94d83a40662acd6.jpg`
      },
      {
        id: 'bff7fd15e91b4a1d8897d917fd01a4bdb644a8d4',
        title: 'CYBEREALITYライフ – Metropoli 2022',
        duration: 269000,
        streamUrl: `/audio/bff7fd15e91b4a1d8897d917fd01a4bdb644a8d4.mp3`,
        artworkUrl: `/artwork/bff7fd15e91b4a1d8897d917fd01a4bdb644a8d4.jpg`
      },
      {
        id: '8ded378274db2849eb55e06014bcf9c1b26ce994',
        title: "Bart Graft – Gespaard's Poolside",
        duration: 256000,
        streamUrl: `/audio/8ded378274db2849eb55e06014bcf9c1b26ce994.mp3`,
        artworkUrl: `/artwork/8ded378274db2849eb55e06014bcf9c1b26ce994.jpg`
      },
      {
        id: '9e5e9a4acdc394221bf2fe6b37ada4ba8d1170d1',
        title: 'Lazerhawk – The Looks that Kill',
        duration: 249000,
        streamUrl: `/audio/9e5e9a4acdc394221bf2fe6b37ada4ba8d1170d1.mp3`,
        artworkUrl: `/artwork/9e5e9a4acdc394221bf2fe6b37ada4ba8d1170d1.jpg`
      },
      {
        id: '7ba445c504ea67db6465fd6e28a5a84cb5547fef',
        title: 'Quixotic – Highway Violence',
        duration: 352000,
        streamUrl: `/audio/7ba445c504ea67db6465fd6e28a5a84cb5547fef.mp3`,
        artworkUrl: `/artwork/7ba445c504ea67db6465fd6e28a5a84cb5547fef.jpg`
      },
      {
        id: '135a247d6a8874000707ac6d4f57c1342b389f47',
        title: 'Hot Hot Hawk – Running Man Fever',
        duration: 189000,
        streamUrl: `/audio/135a247d6a8874000707ac6d4f57c1342b389f47.mp3`,
        artworkUrl: `/artwork/135a247d6a8874000707ac6d4f57c1342b389f47.jpg`
      },
      {
        id: 'dd787f5ece304f304c5903d3e09fb9997d0d2db9',
        title: 'Orax – Memories',
        duration: 232000,
        streamUrl: `/audio/dd787f5ece304f304c5903d3e09fb9997d0d2db9.mp3`,
        artworkUrl: `/artwork/dd787f5ece304f304c5903d3e09fb9997d0d2db9.jpg`
      },
      {
        id: '2c85123bdf9ad6ac56dfe3ba4716bb252e1da72f',
        title: 'Mega Drive – Maniac',
        duration: 367000,
        streamUrl: `/audio/2c85123bdf9ad6ac56dfe3ba4716bb252e1da72f.mp3`,
        artworkUrl: `/artwork/2c85123bdf9ad6ac56dfe3ba4716bb252e1da72f.jpg`
      },
      {
        id: '7914f8b5aaaeb0632f6fa63e6c0f61e768318689',
        title: 'Lazerhawk – Fight to the Top',
        duration: 250000,
        streamUrl: `/audio/7914f8b5aaaeb0632f6fa63e6c0f61e768318689.mp3`,
        artworkUrl: `/artwork/7914f8b5aaaeb0632f6fa63e6c0f61e768318689.jpg`
      },
      {
        id: '6933da1461930205e86ff0b3f3021add9a69ab01',
        title: 'Lazerhawk – Redline',
        duration: 244000,
        streamUrl: `/audio/6933da1461930205e86ff0b3f3021add9a69ab01.mp3`,
        artworkUrl: `/artwork/6933da1461930205e86ff0b3f3021add9a69ab01.jpg`
      },
      {
        id: '573007f4c3762c54ec9ebdc4790229b7aa775f9d',
        title: 'ActRazer – We Own The Night',
        duration: 250000,
        streamUrl: `/audio/573007f4c3762c54ec9ebdc4790229b7aa775f9d.mp3`,
        artworkUrl: `/artwork/573007f4c3762c54ec9ebdc4790229b7aa775f9d.jpg`
      },
      {
        id: '9d2d6de97df2093e3db698d1dc020a35bb82f28f',
        title: 'ActRazer – Kill Switch',
        duration: 354000,
        streamUrl: `/audio/9d2d6de97df2093e3db698d1dc020a35bb82f28f.mp3`,
        artworkUrl: `/artwork/9d2d6de97df2093e3db698d1dc020a35bb82f28f.jpg`
      },
      {
        id: '76a033bf0cdd8f5d6f676cc1504cf758c88c95af',
        title: 'Power Glove – Maximum Potential',
        duration: 295000,
        streamUrl: `/audio/76a033bf0cdd8f5d6f676cc1504cf758c88c95af.mp3`,
        artworkUrl: `/artwork/76a033bf0cdd8f5d6f676cc1504cf758c88c95af.jpg`
      },
      {
        id: 'f4b90357a622963ff390a24e215043eeff36f326',
        title: 'Powernerd – Remote (feat. Oscar)',
        duration: 277000,
        streamUrl: `/audio/f4b90357a622963ff390a24e215043eeff36f326.mp3`,
        artworkUrl: `/artwork/f4b90357a622963ff390a24e215043eeff36f326.jpg`
      },
      {
        id: 'd9838e969794fae7d88f03692aecf6d1a5b69648',
        title: 'Orax – Blue Cross',
        duration: 231000,
        streamUrl: `/audio/d9838e969794fae7d88f03692aecf6d1a5b69648.mp3`,
        artworkUrl: `/artwork/d9838e969794fae7d88f03692aecf6d1a5b69648.jpg`
      },
      {
        id: '008996f9685b1157e65fc708a95632983d95fe71',
        title: 'INDEX CODE – Article 37',
        duration: 226000,
        streamUrl: `/audio/008996f9685b1157e65fc708a95632983d95fe71.mp3`,
        artworkUrl: `/artwork/008996f9685b1157e65fc708a95632983d95fe71.jpg`
      },
      {
        id: 'd04174542d7484a51073f6dc66da6a26e39628e3',
        title: 'Neon Nox – Twisted Getaway feat. Powernerd',
        duration: 360000,
        streamUrl: `/audio/d04174542d7484a51073f6dc66da6a26e39628e3.mp3`,
        artworkUrl: `/artwork/d04174542d7484a51073f6dc66da6a26e39628e3.jpg`
      },
      {
        id: 'de33a6efc0906d6e7a7ef32625de864e7f9fe6d7',
        title: 'Double Dragon – Dance',
        duration: 201000,
        streamUrl: `/audio/de33a6efc0906d6e7a7ef32625de864e7f9fe6d7.mp3`,
        artworkUrl: `/artwork/de33a6efc0906d6e7a7ef32625de864e7f9fe6d7.jpg`
      },
      {
        id: 'c3bf4f463239955b5ae74d4a22641dfbdd20a55a',
        title: 'Oscillian – Starlights',
        duration: 240000,
        streamUrl: `/audio/c3bf4f463239955b5ae74d4a22641dfbdd20a55a.mp3`,
        artworkUrl: `/artwork/c3bf4f463239955b5ae74d4a22641dfbdd20a55a.jpg`
      },
      {
        id: '309e6cd359673462c2ad18f2383e75cc6efb113d',
        title: 'Empathy Test – Losing Touch',
        duration: 232102.5,
        streamUrl: `/audio/309e6cd359673462c2ad18f2383e75cc6efb113d.mp3`,
        artworkUrl: `/artwork/309e6cd359673462c2ad18f2383e75cc6efb113d.jpg`
      },
      {
        id: 'ebb006a0827baf0bf4d4c8338ed0d877aa30d103',
        title: "Nowtro – Tears Don't Fall In Space",
        duration: 358000,
        streamUrl: `/audio/ebb006a0827baf0bf4d4c8338ed0d877aa30d103.mp3`,
        artworkUrl: `/artwork/ebb006a0827baf0bf4d4c8338ed0d877aa30d103.jpg`
      },
      {
        id: '8cc1e71db61ed26aef4b18f1bcaec85f55534b60',
        title: '3FORCE – Nuclear Sunday',
        duration: 288000,
        streamUrl: `/audio/8cc1e71db61ed26aef4b18f1bcaec85f55534b60.mp3`,
        artworkUrl: `/artwork/8cc1e71db61ed26aef4b18f1bcaec85f55534b60.jpg`
      },
      {
        id: '243236a6b088274f35d66ae62f2661ef218db6f6',
        title: 'D.Notive – Second Chances',
        duration: 360000,
        streamUrl: `/audio/243236a6b088274f35d66ae62f2661ef218db6f6.mp3`,
        artworkUrl: `/artwork/243236a6b088274f35d66ae62f2661ef218db6f6.jpg`
      },
      {
        id: 'c4110cad199f8839c0582879b7b8f7709f50c40c',
        title: 'Irving Force – Constructing Androids',
        duration: 268000,
        streamUrl: `/audio/c4110cad199f8839c0582879b7b8f7709f50c40c.mp3`,
        artworkUrl: `/artwork/c4110cad199f8839c0582879b7b8f7709f50c40c.jpg`
      },
      {
        id: '04a8b8ae0427136d2d466f673d014fccaa9ea9aa',
        title: 'NightStop – PoWer Prostitute',
        duration: 207000,
        streamUrl: `/audio/04a8b8ae0427136d2d466f673d014fccaa9ea9aa.mp3`,
        artworkUrl: `/artwork/04a8b8ae0427136d2d466f673d014fccaa9ea9aa.jpg`
      },
      {
        id: '51d453832410d084c34f0b83a7a4251b352f2b94',
        title: "Street Cleaner – Slade's Sundown",
        duration: 224000,
        streamUrl: `/audio/51d453832410d084c34f0b83a7a4251b352f2b94.mp3`,
        artworkUrl: `/artwork/51d453832410d084c34f0b83a7a4251b352f2b94.jpg`
      },
      {
        id: 'ccd411e5bddb5900c9389f75489e0cfcfee90f97',
        title: 'Mega Drive – Total Control',
        duration: 354000,
        streamUrl: `/audio/ccd411e5bddb5900c9389f75489e0cfcfee90f97.mp3`,
        artworkUrl: `/artwork/ccd411e5bddb5900c9389f75489e0cfcfee90f97.jpg`
      },
      {
        id: 'a15337e5c51f8ddd4705a3550335a0a0d982994a',
        title: 'SAYAK STRIKER – Hold of Me (feat. Future Holotape)',
        duration: 238000,
        streamUrl: `/audio/a15337e5c51f8ddd4705a3550335a0a0d982994a.mp3`,
        artworkUrl: `/artwork/a15337e5c51f8ddd4705a3550335a0a0d982994a.jpg`
      },
      {
        id: '601efa5cd2e05b5f6328a62be424391ed73ca8d0',
        title: 'Zone Tripper – The Call',
        duration: 339480.25,
        streamUrl: `/audio/601efa5cd2e05b5f6328a62be424391ed73ca8d0.mp3`,
        artworkUrl: `/artwork/601efa5cd2e05b5f6328a62be424391ed73ca8d0.jpg`
      },
      {
        id: '61281802bb95626b27f8b9eee7b58ebb5c2ed45f',
        title: 'MYRONE – Gorgeous (feat. Voyageur)',
        duration: 190000,
        streamUrl: `/audio/61281802bb95626b27f8b9eee7b58ebb5c2ed45f.mp3`,
        artworkUrl: `/artwork/61281802bb95626b27f8b9eee7b58ebb5c2ed45f.jpg`
      },
      {
        id: '29ee761876563a17c4194476f253add4b2a645de',
        title: 'OGRE – Bureau and Boulevard',
        duration: 217000,
        streamUrl: `/audio/29ee761876563a17c4194476f253add4b2a645de.mp3`,
        artworkUrl: `/artwork/29ee761876563a17c4194476f253add4b2a645de.jpg`
      },
      {
        id: '67bdec2d60f8a9f9ead848a2b635bce18e540d17',
        title: 'Hot Hot Hawk – Cyrax',
        duration: 242000,
        streamUrl: `/audio/67bdec2d60f8a9f9ead848a2b635bce18e540d17.mp3`,
        artworkUrl: `/artwork/67bdec2d60f8a9f9ead848a2b635bce18e540d17.jpg`
      },
      {
        id: '188963be7196d6c333bc77fc07c4f9fe445e4ee3',
        title: 'Highway Superstar – Deadlock Danger',
        duration: 241800.25,
        streamUrl: `/audio/188963be7196d6c333bc77fc07c4f9fe445e4ee3.mp3`,
        artworkUrl: `/artwork/188963be7196d6c333bc77fc07c4f9fe445e4ee3.jpg`
      },
      {
        id: '9daa67a2ac3b487a4d90cb2163e90af7102255da',
        title: 'Nightcrawler – Dystopia (Feat. Vincenzo Salvia)',
        duration: 223000,
        streamUrl: `/audio/9daa67a2ac3b487a4d90cb2163e90af7102255da.mp3`,
        artworkUrl: `/artwork/9daa67a2ac3b487a4d90cb2163e90af7102255da.jpg`
      },
      {
        id: 'a3b05ee7fe8b8981618ff0debf01a94b1f6e3649',
        title: 'Phaserland – We Go Tonight',
        duration: 340000,
        streamUrl: `/audio/a3b05ee7fe8b8981618ff0debf01a94b1f6e3649.mp3`,
        artworkUrl: `/artwork/a3b05ee7fe8b8981618ff0debf01a94b1f6e3649.jpg`
      },
      {
        id: 'a7436fc5334dfdd733a5fdb42a2ce627aef3fe3b',
        title: 'Le Matos – No Tomorrow feat PAWWS',
        duration: 271000,
        streamUrl: `/audio/a7436fc5334dfdd733a5fdb42a2ce627aef3fe3b.mp3`,
        artworkUrl: `/artwork/a7436fc5334dfdd733a5fdb42a2ce627aef3fe3b.jpg`
      },
      {
        id: '3d67e2b49ef4f69b8cb83a3e9d0ab684358628df',
        title: 'Let Em Riot – Sun Flares',
        duration: 272568.25,
        streamUrl: `/audio/3d67e2b49ef4f69b8cb83a3e9d0ab684358628df.mp3`,
        artworkUrl: `/artwork/3d67e2b49ef4f69b8cb83a3e9d0ab684358628df.jpg`
      },
      {
        id: '9b6431f50d6141f46216409e4ba4c883fa07324b',
        title: 'Magic Sword – The Curse',
        duration: 337000,
        streamUrl: `/audio/9b6431f50d6141f46216409e4ba4c883fa07324b.mp3`,
        artworkUrl: `/artwork/9b6431f50d6141f46216409e4ba4c883fa07324b.jpg`
      },
      {
        id: '808df356f000e947e701c151c56599a2b1c5c77c',
        title: 'DESTRYUR – Deathwave',
        duration: 197000,
        streamUrl: `/audio/808df356f000e947e701c151c56599a2b1c5c77c.mp3`,
        artworkUrl: `/artwork/808df356f000e947e701c151c56599a2b1c5c77c.jpg`
      },
      {
        id: 'df925ce4d84ecda916a49787bc980b5ccc5a8639',
        title: 'Alpha Boy – Digital Dawn',
        duration: 224000,
        streamUrl: `/audio/df925ce4d84ecda916a49787bc980b5ccc5a8639.mp3`,
        artworkUrl: `/artwork/df925ce4d84ecda916a49787bc980b5ccc5a8639.jpg`
      },
      {
        id: '3af0f58bc082469e08c66641c46c32da23619c79',
        title: 'Maxthor – Hunters',
        duration: 289000,
        streamUrl: `/audio/3af0f58bc082469e08c66641c46c32da23619c79.mp3`,
        artworkUrl: `/artwork/3af0f58bc082469e08c66641c46c32da23619c79.jpg`
      },
      {
        id: '22ea2a7715fe109547c5c8a5ee47418873bcd85a',
        title: 'Moondragon – Eye in the Sky',
        duration: 246000,
        streamUrl: `/audio/22ea2a7715fe109547c5c8a5ee47418873bcd85a.mp3`,
        artworkUrl: `/artwork/22ea2a7715fe109547c5c8a5ee47418873bcd85a.jpg`
      },
      {
        id: 'e041d9ffd6c48c5918daaf6c9a6f1a2f5d18d67b',
        title: 'Arc Neon – Forbidden Dance',
        duration: 280000,
        streamUrl: `/audio/e041d9ffd6c48c5918daaf6c9a6f1a2f5d18d67b.mp3`,
        artworkUrl: `/artwork/e041d9ffd6c48c5918daaf6c9a6f1a2f5d18d67b.jpg`
      },
      {
        id: 'f16634c904054356c844418d7261a864408607bf',
        title: 'Betamaxx – Escaping Reality',
        duration: 140000,
        streamUrl: `/audio/f16634c904054356c844418d7261a864408607bf.mp3`,
        artworkUrl: `/artwork/f16634c904054356c844418d7261a864408607bf.jpg`
      },
      {
        id: 'a6f8318c62f6426baf77f00d2f29b7a8973467e3',
        title: 'Retouch – Arm of Creation',
        duration: 230067.45,
        streamUrl: `/audio/a6f8318c62f6426baf77f00d2f29b7a8973467e3.mp3`,
        artworkUrl: `/artwork/a6f8318c62f6426baf77f00d2f29b7a8973467e3.jpg`
      },
      {
        id: 'ce8c2b1917bed452df03b5db12fe3a94fbdb98ab',
        title: 'Dance with the Dead – The Deep',
        duration: 226000,
        streamUrl: `/audio/ce8c2b1917bed452df03b5db12fe3a94fbdb98ab.mp3`,
        artworkUrl: `/artwork/ce8c2b1917bed452df03b5db12fe3a94fbdb98ab.jpg`
      },
      {
        id: '2f4e0249f3fb3a81f629e7ee391c5f77d3fc3139',
        title: 'D/A/D – Innersphere Lasergames',
        duration: 385000,
        streamUrl: `/audio/2f4e0249f3fb3a81f629e7ee391c5f77d3fc3139.mp3`,
        artworkUrl: `/artwork/2f4e0249f3fb3a81f629e7ee391c5f77d3fc3139.jpg`
      },
      {
        id: '3750d1ad44d4d5434ca59fc58a1160ae0434e2a0',
        title: 'Miami Nights 1984 – Ocean Drive',
        duration: 259000,
        streamUrl: `/audio/3750d1ad44d4d5434ca59fc58a1160ae0434e2a0.mp3`,
        artworkUrl: `/artwork/3750d1ad44d4d5434ca59fc58a1160ae0434e2a0.jpg`
      },
      {
        id: '72f2ca84f893a343b981ee8aad70ae93447e0d6e',
        title: 'Perturbator – Raining Steel',
        duration: 250000,
        streamUrl: `/audio/72f2ca84f893a343b981ee8aad70ae93447e0d6e.mp3`,
        artworkUrl: `/artwork/72f2ca84f893a343b981ee8aad70ae93447e0d6e.jpg`
      },
      {
        id: '1fc86f3e86905a5b6069a9180e56e378bfc50c1b',
        title: 'DJ Ten – Show Me The Night (feat. Dead Astronauts)',
        duration: 272000,
        streamUrl: `/audio/1fc86f3e86905a5b6069a9180e56e378bfc50c1b.mp3`,
        artworkUrl: `/artwork/1fc86f3e86905a5b6069a9180e56e378bfc50c1b.jpg`
      },
      {
        id: '52d7ead95644e8ba65fcb198811f8d358440863a',
        title: 'Sung – Wayfarer',
        duration: 253000,
        streamUrl: `/audio/52d7ead95644e8ba65fcb198811f8d358440863a.mp3`,
        artworkUrl: `/artwork/52d7ead95644e8ba65fcb198811f8d358440863a.jpg`
      },
      {
        id: '0697c2e524a441161e7ed2975111b0d84342ad90',
        title: 'Monomer – Quite Operational',
        duration: 210000,
        streamUrl: `/audio/0697c2e524a441161e7ed2975111b0d84342ad90.mp3`,
        artworkUrl: `/artwork/0697c2e524a441161e7ed2975111b0d84342ad90.jpg`
      },
      {
        id: 'fbdac1c554feebb53fb71c7ea88681efa66917e5',
        title: 'Sellorekt/LA Dreams – Avenue Electric',
        duration: 246000,
        streamUrl: `/audio/fbdac1c554feebb53fb71c7ea88681efa66917e5.mp3`,
        artworkUrl: `/artwork/fbdac1c554feebb53fb71c7ea88681efa66917e5.jpg`
      },
      {
        id: 'dc3366204847fcdb4ad982dab66900f504ce055f',
        title: 'Expender – Satanic Panic',
        duration: 283000,
        streamUrl: `/audio/dc3366204847fcdb4ad982dab66900f504ce055f.mp3`,
        artworkUrl: `/artwork/dc3366204847fcdb4ad982dab66900f504ce055f.jpg`
      },
      {
        id: '62c27ac75b511738fee0f7a657f57eacfa2ab98e',
        title: 'DJ Ten – Chrome Lust (feat. The Boy & Sister Alma)',
        duration: 282000,
        streamUrl: `/audio/62c27ac75b511738fee0f7a657f57eacfa2ab98e.mp3`,
        artworkUrl: `/artwork/62c27ac75b511738fee0f7a657f57eacfa2ab98e.jpg`
      },
      {
        id: '8b1a28d7f9a9322f44fe5f98f87229f1d2f6b883',
        title: 'Muscle – The Pump',
        duration: 251000,
        streamUrl: `/audio/8b1a28d7f9a9322f44fe5f98f87229f1d2f6b883.mp3`,
        artworkUrl: `/artwork/8b1a28d7f9a9322f44fe5f98f87229f1d2f6b883.jpg`
      },
      {
        id: 'fb8c7171a06f1fa35a6fccd0d5c997b21a75f174',
        title: 'GUNSHIP – Pink Mist',
        duration: 242424.25,
        streamUrl: `/audio/fb8c7171a06f1fa35a6fccd0d5c997b21a75f174.mp3`,
        artworkUrl: `/artwork/fb8c7171a06f1fa35a6fccd0d5c997b21a75f174.jpg`
      },
      {
        id: '138192fd6da76bb2472cb79ac3ba1e1cf6dcdfa8',
        title: 'Miami Nights 1984 – Early Summer',
        duration: 195000,
        streamUrl: `/audio/138192fd6da76bb2472cb79ac3ba1e1cf6dcdfa8.mp3`,
        artworkUrl: `/artwork/138192fd6da76bb2472cb79ac3ba1e1cf6dcdfa8.jpg`
      },
      {
        id: 'b9ab5e46dbbc19a38a6f431c91f9c9f87d310a98',
        title: "FM-84 – Let's Talk (feat. Timecop1983 & Josh Dally)",
        duration: 302000,
        streamUrl: `/audio/b9ab5e46dbbc19a38a6f431c91f9c9f87d310a98.mp3`,
        artworkUrl: `/artwork/b9ab5e46dbbc19a38a6f431c91f9c9f87d310a98.jpg`
      },
      {
        id: 'c21a9c31febea139a9bfdbc0b19df6ff854ecdd8',
        title: 'GUNSHIP – Tech Noir',
        duration: 297504.25,
        streamUrl: `/audio/c21a9c31febea139a9bfdbc0b19df6ff854ecdd8.mp3`,
        artworkUrl: `/artwork/c21a9c31febea139a9bfdbc0b19df6ff854ecdd8.jpg`
      },
      {
        id: '6baa683e12ec668da5396adb50889c60e6ef6fe0',
        title: 'Danger Mode – Activation',
        duration: 223000,
        streamUrl: `/audio/6baa683e12ec668da5396adb50889c60e6ef6fe0.mp3`,
        artworkUrl: `/artwork/6baa683e12ec668da5396adb50889c60e6ef6fe0.jpg`
      },
      {
        id: 'da11a0e704056fb105088d271e436f24041432b8',
        title: 'Hello Meteor – The Night Tram',
        duration: 272000,
        streamUrl: `/audio/da11a0e704056fb105088d271e436f24041432b8.mp3`,
        artworkUrl: `/artwork/da11a0e704056fb105088d271e436f24041432b8.jpg`
      },
      {
        id: '6ba811971c53419d1dfd5df1c048316fabff7868',
        title: 'Night Runner – The Driver',
        duration: 246000,
        streamUrl: `/audio/6ba811971c53419d1dfd5df1c048316fabff7868.mp3`,
        artworkUrl: `/artwork/6ba811971c53419d1dfd5df1c048316fabff7868.jpg`
      },
      {
        id: '6450bb773878069074411d3ec1be31666bd768fb',
        title: 'Nightcrawler – Road Blaster (Dynatron Remix)',
        duration: 263000,
        streamUrl: `/audio/6450bb773878069074411d3ec1be31666bd768fb.mp3`,
        artworkUrl: `/artwork/6450bb773878069074411d3ec1be31666bd768fb.jpg`
      },
      {
        id: '2e772770ef61c86c83677bebfec04d0b2f3f87d9',
        title: 'Kalax – The Race',
        duration: 328000,
        streamUrl: `/audio/2e772770ef61c86c83677bebfec04d0b2f3f87d9.mp3`,
        artworkUrl: `/artwork/2e772770ef61c86c83677bebfec04d0b2f3f87d9.jpg`
      },
      {
        id: 'c17438b944c7dc03a83eafa3bc06f1637b334f0f',
        title: "Analogue Clones – Drifter's Theme",
        duration: 359000,
        streamUrl: `/audio/c17438b944c7dc03a83eafa3bc06f1637b334f0f.mp3`,
        artworkUrl: `/artwork/c17438b944c7dc03a83eafa3bc06f1637b334f0f.jpg`
      },
      {
        id: 'c530a1f5e106075bb01361010bd00d018f2a30ed',
        title: 'M|O|O|N – Dust',
        duration: 302000,
        streamUrl: `/audio/c530a1f5e106075bb01361010bd00d018f2a30ed.mp3`,
        artworkUrl: `/artwork/c530a1f5e106075bb01361010bd00d018f2a30ed.jpg`
      },
      {
        id: '8ab19cd0a3fe579eebd5bd598581399a329ce960',
        title: 'Shirobon – Regain Control',
        duration: 195000,
        streamUrl: `/audio/8ab19cd0a3fe579eebd5bd598581399a329ce960.mp3`,
        artworkUrl: `/artwork/8ab19cd0a3fe579eebd5bd598581399a329ce960.jpg`
      },
      {
        id: 'bdecf489c41177c3e5d94b395b3df4939a09d302',
        title: 'Cartridge 1987 – Chase',
        duration: 350000,
        streamUrl: `/audio/bdecf489c41177c3e5d94b395b3df4939a09d302.mp3`,
        artworkUrl: `/artwork/bdecf489c41177c3e5d94b395b3df4939a09d302.jpg`
      },
      {
        id: 'aefc294e4351cf14c62c7907056ddedf3b3c1944',
        title: 'Le Matos – Piège de crystal',
        duration: 328000,
        streamUrl: `/audio/aefc294e4351cf14c62c7907056ddedf3b3c1944.mp3`,
        artworkUrl: `/artwork/aefc294e4351cf14c62c7907056ddedf3b3c1944.jpg`
      },
      {
        id: '2ac89228b654b017edb12d0363039b35ec4474a3',
        title: 'Dance with the Dead – Watching You',
        duration: 303000,
        streamUrl: `/audio/2ac89228b654b017edb12d0363039b35ec4474a3.mp3`,
        artworkUrl: `/artwork/2ac89228b654b017edb12d0363039b35ec4474a3.jpg`
      },
      {
        id: 'f29e18087d954b8d6173efbcce55d65fb36c9e00',
        title: 'Robert Parker – Sweet Nothings',
        duration: 229000,
        streamUrl: `/audio/f29e18087d954b8d6173efbcce55d65fb36c9e00.mp3`,
        artworkUrl: `/artwork/f29e18087d954b8d6173efbcce55d65fb36c9e00.jpg`
      },
      {
        id: '6665d573d5de5a66c6061334612f20e54a83597c',
        title: "Miles Prower – This World Won't Let Me Down",
        duration: 269000,
        streamUrl: `/audio/6665d573d5de5a66c6061334612f20e54a83597c.mp3`,
        artworkUrl: `/artwork/6665d573d5de5a66c6061334612f20e54a83597c.jpg`
      },
      {
        id: 'da55dda32bb7ff387d17a25a1626f5e90ee14b29',
        title: 'Nightrun – Ningen',
        duration: 364000,
        streamUrl: `/audio/da55dda32bb7ff387d17a25a1626f5e90ee14b29.mp3`,
        artworkUrl: `/artwork/da55dda32bb7ff387d17a25a1626f5e90ee14b29.jpg`
      },
      {
        id: 'c99d5d4a4951c230ded9d9ffec2c757f85593814',
        title: 'Judge Bitch – Twelve',
        duration: 231000,
        streamUrl: `/audio/c99d5d4a4951c230ded9d9ffec2c757f85593814.mp3`,
        artworkUrl: `/artwork/c99d5d4a4951c230ded9d9ffec2c757f85593814.jpg`
      },
      {
        id: '0a7f83bc97fce9011c53081b56db1e6d3c1eec29',
        title: 'kassiopeya – Odyssey Pt. I',
        duration: 260000,
        streamUrl: `/audio/0a7f83bc97fce9011c53081b56db1e6d3c1eec29.mp3`,
        artworkUrl: `/artwork/0a7f83bc97fce9011c53081b56db1e6d3c1eec29.jpg`
      },
      {
        id: '054b303ead31a68d839178e9e782e367b054a7d9',
        title: 'Nickee B – Cover Girl',
        duration: 262000,
        streamUrl: `/audio/054b303ead31a68d839178e9e782e367b054a7d9.mp3`,
        artworkUrl: `/artwork/054b303ead31a68d839178e9e782e367b054a7d9.jpg`
      },
      {
        id: '192da36d7bdd067957701427813c0f71c080e251',
        title: 'Absolute Valentine – Sunset Love',
        duration: 309000,
        streamUrl: `/audio/192da36d7bdd067957701427813c0f71c080e251.mp3`,
        artworkUrl: `/artwork/192da36d7bdd067957701427813c0f71c080e251.jpg`
      },
      {
        id: 'bf055980678604503070f402961ad5471c97549e',
        title: 'Midnight Heir – Battery',
        duration: 213000,
        streamUrl: `/audio/bf055980678604503070f402961ad5471c97549e.mp3`,
        artworkUrl: `/artwork/bf055980678604503070f402961ad5471c97549e.jpg`
      },
      {
        id: '23ed5b51c8d7dc496c0102680c508dde1b41c2ff',
        title: 'Danger Danger – A Mistery',
        duration: 265000,
        streamUrl: `/audio/23ed5b51c8d7dc496c0102680c508dde1b41c2ff.mp3`,
        artworkUrl: `/artwork/23ed5b51c8d7dc496c0102680c508dde1b41c2ff.jpg`
      },
      {
        id: '9e9efee4c0c7e95135757b49521b873cd8ea1440',
        title: 'Dreamtime – Saturday Morning Heroes',
        duration: 248000,
        streamUrl: `/audio/9e9efee4c0c7e95135757b49521b873cd8ea1440.mp3`,
        artworkUrl: `/artwork/9e9efee4c0c7e95135757b49521b873cd8ea1440.jpg`
      },
      {
        id: 'deda267d7df00c8f2f27a014b2e2d0326563ee97',
        title: 'Exemia – Dragoknight',
        duration: 301000,
        streamUrl: `/audio/deda267d7df00c8f2f27a014b2e2d0326563ee97.mp3`,
        artworkUrl: `/artwork/deda267d7df00c8f2f27a014b2e2d0326563ee97.jpg`
      },
      {
        id: '121a615ea7d12d0650c3cacfb281723a8ce81e84',
        title: 'Mild Peril – The Duel',
        duration: 383000,
        streamUrl: `/audio/121a615ea7d12d0650c3cacfb281723a8ce81e84.mp3`,
        artworkUrl: `/artwork/121a615ea7d12d0650c3cacfb281723a8ce81e84.jpg`
      },
      {
        id: '305769e2d12310ac5761defdd3e57e377fa2f84e',
        title: 'Lost Years – Converter',
        duration: 258000,
        streamUrl: `/audio/305769e2d12310ac5761defdd3e57e377fa2f84e.mp3`,
        artworkUrl: `/artwork/305769e2d12310ac5761defdd3e57e377fa2f84e.jpg`
      },
      {
        id: '90a447bffaf5657a5b7ea30d4c1ebfb36a8c31be',
        title: 'Bestrack – Stamina',
        duration: 243986.425,
        streamUrl: `/audio/90a447bffaf5657a5b7ea30d4c1ebfb36a8c31be.mp3`,
        artworkUrl: `/artwork/90a447bffaf5657a5b7ea30d4c1ebfb36a8c31be.jpg`
      },
      {
        id: '771cdcf4de641db00bf448e8ac7dc306da918221',
        title: 'Adeyhawke – Kodachrome Sundae',
        duration: 266000,
        streamUrl: `/audio/771cdcf4de641db00bf448e8ac7dc306da918221.mp3`,
        artworkUrl: `/artwork/771cdcf4de641db00bf448e8ac7dc306da918221.jpg`
      },
      {
        id: 'a0334abe1770eeda2b395106a578cf647563896c',
        title: 'Lachi James – Champagne Wishes (& Caviar Dreams)',
        duration: 183264.25,
        streamUrl: `/audio/a0334abe1770eeda2b395106a578cf647563896c.mp3`,
        artworkUrl: `/artwork/a0334abe1770eeda2b395106a578cf647563896c.jpg`
      },
      {
        id: '14d0016f6bf7f89bda4b65f361909d2306e25376',
        title: 'Street Cleaner – Skyline',
        duration: 278000,
        streamUrl: `/audio/14d0016f6bf7f89bda4b65f361909d2306e25376.mp3`,
        artworkUrl: `/artwork/14d0016f6bf7f89bda4b65f361909d2306e25376.jpg`
      },
      {
        id: '113b87ab43b7c13d9b8048fd49f21a3485a6b4fd',
        title: 'Bixby Snyder – Filthy Streets',
        duration: 351000,
        streamUrl: `/audio/113b87ab43b7c13d9b8048fd49f21a3485a6b4fd.mp3`,
        artworkUrl: `/artwork/113b87ab43b7c13d9b8048fd49f21a3485a6b4fd.jpg`
      },
      {
        id: '9c01648009e316704c0b3577633fe4a09c4cc2d0',
        title: 'Dreamtime – Futurestyle',
        duration: 342000,
        streamUrl: `/audio/9c01648009e316704c0b3577633fe4a09c4cc2d0.mp3`,
        artworkUrl: `/artwork/9c01648009e316704c0b3577633fe4a09c4cc2d0.jpg`
      },
      {
        id: 'ec907fb795935353e62e7a768f2b4ca8a1315790',
        title: '80s Stallone – Cliffhanger (Original Mix)',
        duration: 359000,
        streamUrl: `/audio/ec907fb795935353e62e7a768f2b4ca8a1315790.mp3`,
        artworkUrl: `/artwork/ec907fb795935353e62e7a768f2b4ca8a1315790.jpg`
      },
      {
        id: 'a8a1ab1c2fc7a23096beb0f0f680511eea60e0e2',
        title: 'Orax – Dreaming',
        duration: 290000,
        streamUrl: `/audio/a8a1ab1c2fc7a23096beb0f0f680511eea60e0e2.mp3`,
        artworkUrl: `/artwork/a8a1ab1c2fc7a23096beb0f0f680511eea60e0e2.jpg`
      },
      {
        id: 'de5aaf51bd09d20f8ace6526aab0f1cdfdef6166',
        title: 'Empathy Test – Kirrilee',
        duration: 231318.825,
        streamUrl: `/audio/de5aaf51bd09d20f8ace6526aab0f1cdfdef6166.mp3`,
        artworkUrl: `/artwork/de5aaf51bd09d20f8ace6526aab0f1cdfdef6166.jpg`
      },
      {
        id: 'b6f51d65c1d9d846f5c06d71c7adb267612cb797',
        title: 'Futurecop! – 1988 Girls',
        duration: 259000,
        streamUrl: `/audio/b6f51d65c1d9d846f5c06d71c7adb267612cb797.mp3`,
        artworkUrl: `/artwork/b6f51d65c1d9d846f5c06d71c7adb267612cb797.jpg`
      },
      {
        id: 'e4e941c1dbedd6914ed516b3b071ac2bdd9ddba8',
        title: 'INDEX CODE – The Baj',
        duration: 202000,
        streamUrl: `/audio/e4e941c1dbedd6914ed516b3b071ac2bdd9ddba8.mp3`,
        artworkUrl: `/artwork/e4e941c1dbedd6914ed516b3b071ac2bdd9ddba8.jpg`
      },
      {
        id: '1c93cba8419c5397359a6fdf9a02808a1014bbe8',
        title: 'Moondragon – Blackbird (feat. Phaserland)',
        duration: 378000,
        streamUrl: `/audio/1c93cba8419c5397359a6fdf9a02808a1014bbe8.mp3`,
        artworkUrl: `/artwork/1c93cba8419c5397359a6fdf9a02808a1014bbe8.jpg`
      },
      {
        id: 'e726f34cf66fb3a445fc913d6521b9da6c5607c6',
        title: 'Magic Dance – In Their Eyes',
        duration: 314000,
        streamUrl: `/audio/e726f34cf66fb3a445fc913d6521b9da6c5607c6.mp3`,
        artworkUrl: `/artwork/e726f34cf66fb3a445fc913d6521b9da6c5607c6.jpg`
      },
      {
        id: '70fcdd0eb006ef6657fd375e925d817b876dcea2',
        title: 'Rolly Mingwald – The New Girl',
        duration: 200000,
        streamUrl: `/audio/70fcdd0eb006ef6657fd375e925d817b876dcea2.mp3`,
        artworkUrl: `/artwork/70fcdd0eb006ef6657fd375e925d817b876dcea2.jpg`
      },
      {
        id: '4ebdcbe1b26296410af5af5fbefd8035f7760114',
        title: 'D/A/D – The Look of Being Old',
        duration: 258000,
        streamUrl: `/audio/4ebdcbe1b26296410af5af5fbefd8035f7760114.mp3`,
        artworkUrl: `/artwork/4ebdcbe1b26296410af5af5fbefd8035f7760114.jpg`
      },
      {
        id: '27bf995a049f76b8dda3ca16254fe46e79720410',
        title: 'Hide and Sequence – Resurrection',
        duration: 325000,
        streamUrl: `/audio/27bf995a049f76b8dda3ca16254fe46e79720410.mp3`,
        artworkUrl: `/artwork/27bf995a049f76b8dda3ca16254fe46e79720410.jpg`
      },
      {
        id: '133dfa6d2159e64e6fef53c195e53a4a4af331de',
        title: 'Alpharisc – Shanglin',
        duration: 262000,
        streamUrl: `/audio/133dfa6d2159e64e6fef53c195e53a4a4af331de.mp3`,
        artworkUrl: `/artwork/133dfa6d2159e64e6fef53c195e53a4a4af331de.jpg`
      },
      {
        id: '01ebeb2baab8a0564619cc0ca3a7fefe5413eef2',
        title: 'D/A/D – Love Will Make You Stay (with USA Gold and Sharaya Mikael)',
        duration: 374000,
        streamUrl: `/audio/01ebeb2baab8a0564619cc0ca3a7fefe5413eef2.mp3`,
        artworkUrl: `/artwork/01ebeb2baab8a0564619cc0ca3a7fefe5413eef2.jpg`
      },
      {
        id: '7efd02f39dd8b71bf85159ff0d8aabb33f48be52',
        title: 'Nowtro – Seeker',
        duration: 347000,
        streamUrl: `/audio/7efd02f39dd8b71bf85159ff0d8aabb33f48be52.mp3`,
        artworkUrl: `/artwork/7efd02f39dd8b71bf85159ff0d8aabb33f48be52.jpg`
      },
      {
        id: '622b379ab9306a074982e8ebb47c8728bb2036a3',
        title: 'Le Cassette – Digital Power',
        duration: 291000,
        streamUrl: `/audio/622b379ab9306a074982e8ebb47c8728bb2036a3.mp3`,
        artworkUrl: `/artwork/622b379ab9306a074982e8ebb47c8728bb2036a3.jpg`
      },
      {
        id: '8eaf884c9b330ea92f849ab8e7a7214bf39f6d6c',
        title: 'Bluezz Vylez – Moonlight Camp',
        duration: 259000,
        streamUrl: `/audio/8eaf884c9b330ea92f849ab8e7a7214bf39f6d6c.mp3`,
        artworkUrl: `/artwork/8eaf884c9b330ea92f849ab8e7a7214bf39f6d6c.jpg`
      },
      {
        id: 'b7e989c1f3bc017e47d9e1265668e1a58822f94f',
        title: 'Kristine – Modern Love',
        duration: 291000,
        streamUrl: `/audio/b7e989c1f3bc017e47d9e1265668e1a58822f94f.mp3`,
        artworkUrl: `/artwork/b7e989c1f3bc017e47d9e1265668e1a58822f94f.jpg`
      },
      {
        id: '4ea94188e2997f7aeeb6fdbcc74d3a760ffabe7b',
        title: 'Lost Years – Nuclear',
        duration: 321000,
        streamUrl: `/audio/4ea94188e2997f7aeeb6fdbcc74d3a760ffabe7b.mp3`,
        artworkUrl: `/artwork/4ea94188e2997f7aeeb6fdbcc74d3a760ffabe7b.jpg`
      },
      {
        id: '96fad1acecbc3caa4fe95dcd9b6d8e0e7e26d078',
        title: 'Orax – Ascent of The Blessed',
        duration: 239000,
        streamUrl: `/audio/96fad1acecbc3caa4fe95dcd9b6d8e0e7e26d078.mp3`,
        artworkUrl: `/artwork/96fad1acecbc3caa4fe95dcd9b6d8e0e7e26d078.jpg`
      },
      {
        id: '99f5630e7be927260a9da40cd6bcac3a8b5250d2',
        title: 'Power Glove – Streets of 2043',
        duration: 305000,
        streamUrl: `/audio/99f5630e7be927260a9da40cd6bcac3a8b5250d2.mp3`,
        artworkUrl: `/artwork/99f5630e7be927260a9da40cd6bcac3a8b5250d2.jpg`
      },
      {
        id: 'd5f407cb558be3bfef8707ddb6a0b382ba07b134',
        title: 'Renz Wilde – Machine Feed',
        duration: 249000,
        streamUrl: `/audio/d5f407cb558be3bfef8707ddb6a0b382ba07b134.mp3`,
        artworkUrl: `/artwork/d5f407cb558be3bfef8707ddb6a0b382ba07b134.jpg`
      },
      {
        id: '54dc470729e3267dbea8a9410a449e3dc0f46078',
        title: 'Double Dragon – Rebirth',
        duration: 186000,
        streamUrl: `/audio/54dc470729e3267dbea8a9410a449e3dc0f46078.mp3`,
        artworkUrl: `/artwork/54dc470729e3267dbea8a9410a449e3dc0f46078.jpg`
      },
      {
        id: '508aa78349552b9efe3e9d8c1861be0ddb37b122',
        title: 'Orax – The Unknown Man',
        duration: 392000,
        streamUrl: `/audio/508aa78349552b9efe3e9d8c1861be0ddb37b122.mp3`,
        artworkUrl: `/artwork/508aa78349552b9efe3e9d8c1861be0ddb37b122.jpg`
      },
      {
        id: '857cc2061d26380bf35599ae683f68cb0ceea990',
        title: 'Dance with the Dead – The Entity',
        duration: 234000,
        streamUrl: `/audio/857cc2061d26380bf35599ae683f68cb0ceea990.mp3`,
        artworkUrl: `/artwork/857cc2061d26380bf35599ae683f68cb0ceea990.jpg`
      },
      {
        id: '65a53fa4d7f7f967eb7d70f3b17987bfb4cde364',
        title: 'Dance with the Dead – Near Dark',
        duration: 279000,
        streamUrl: `/audio/65a53fa4d7f7f967eb7d70f3b17987bfb4cde364.mp3`,
        artworkUrl: `/artwork/65a53fa4d7f7f967eb7d70f3b17987bfb4cde364.jpg`
      },
      {
        id: '8b7306e130139c49d2d1b6df6699ad09d751015f',
        title: 'Zone Tripper – Cyber Dream',
        duration: 281976.25,
        streamUrl: `/audio/8b7306e130139c49d2d1b6df6699ad09d751015f.mp3`,
        artworkUrl: `/artwork/8b7306e130139c49d2d1b6df6699ad09d751015f.jpg`
      },
      {
        id: 'd48ec511aa389fe5d300b4fde8955ef2a5ba9fac',
        title: "Mirage – Midas' Hand",
        duration: 304000,
        streamUrl: `/audio/d48ec511aa389fe5d300b4fde8955ef2a5ba9fac.mp3`,
        artworkUrl: `/artwork/d48ec511aa389fe5d300b4fde8955ef2a5ba9fac.jpg`
      },
      {
        id: '40e6312155d3658574e32c356e64b716d6ceebfd',
        title: "Power Glove – Sloan's Assault",
        duration: 213000,
        streamUrl: `/audio/40e6312155d3658574e32c356e64b716d6ceebfd.mp3`,
        artworkUrl: `/artwork/40e6312155d3658574e32c356e64b716d6ceebfd.jpg`
      },
      {
        id: 'f0dc148f106612f65c718251be65d4b0235a5802',
        title: 'David Hasselhoff – True Survivor',
        duration: 221712.25,
        streamUrl: `/audio/f0dc148f106612f65c718251be65d4b0235a5802.mp3`,
        artworkUrl: `/artwork/f0dc148f106612f65c718251be65d4b0235a5802.jpg`
      },
      {
        id: '247ab817d1ca3c4409f2a0e920237bae52ce25e4',
        title: 'New Arcades – Motionless',
        duration: 235368.25,
        streamUrl: `/audio/247ab817d1ca3c4409f2a0e920237bae52ce25e4.mp3`,
        artworkUrl: `/artwork/247ab817d1ca3c4409f2a0e920237bae52ce25e4.jpg`
      },
      {
        id: 'cb22e6c7a2fe013b59d71df27c7c99fc8404cd57',
        title: 'OGRE – The Bench',
        duration: 214000,
        streamUrl: `/audio/cb22e6c7a2fe013b59d71df27c7c99fc8404cd57.mp3`,
        artworkUrl: `/artwork/cb22e6c7a2fe013b59d71df27c7c99fc8404cd57.jpg`
      },
      {
        id: 'dad32f0817a1528a13b5e7d243bfeb0858423e70',
        title: 'Midnight Kid – Aggressor',
        duration: 227000,
        streamUrl: `/audio/dad32f0817a1528a13b5e7d243bfeb0858423e70.mp3`,
        artworkUrl: `/artwork/dad32f0817a1528a13b5e7d243bfeb0858423e70.jpg`
      },
      {
        id: 'e71a89ebfd78bc22555c0602dc610c130f951a14',
        title: 'NightStop – Night Beach',
        duration: 245000,
        streamUrl: `/audio/e71a89ebfd78bc22555c0602dc610c130f951a14.mp3`,
        artworkUrl: `/artwork/e71a89ebfd78bc22555c0602dc610c130f951a14.jpg`
      },
      {
        id: '74db21ffc6e377b18baf54a775bbdb5d4d709c22',
        title: 'Droid Bishop – Forever In Twilight',
        duration: 306000,
        streamUrl: `/audio/74db21ffc6e377b18baf54a775bbdb5d4d709c22.mp3`,
        artworkUrl: `/artwork/74db21ffc6e377b18baf54a775bbdb5d4d709c22.jpg`
      },
      {
        id: '6da24383d808d8f04275829aeaac1b32ab945309',
        title: 'NightStop – Synth City',
        duration: 218000,
        streamUrl: `/audio/6da24383d808d8f04275829aeaac1b32ab945309.mp3`,
        artworkUrl: `/artwork/6da24383d808d8f04275829aeaac1b32ab945309.jpg`
      },
      {
        id: 'e0bc76f49dc7c5c3a99750361b5a79529e3a7141',
        title: 'Morgan Willis – Sunset Ridge',
        duration: 328000,
        streamUrl: `/audio/e0bc76f49dc7c5c3a99750361b5a79529e3a7141.mp3`,
        artworkUrl: `/artwork/e0bc76f49dc7c5c3a99750361b5a79529e3a7141.jpg`
      },
      {
        id: 'bd4e900cb4041863c4a04c0372dd453c0e150fd6',
        title: 'Arcade High – Miami Nights',
        duration: 250000,
        streamUrl: `/audio/bd4e900cb4041863c4a04c0372dd453c0e150fd6.mp3`,
        artworkUrl: `/artwork/bd4e900cb4041863c4a04c0372dd453c0e150fd6.jpg`
      },
      {
        id: '37380dadbbc99cfd2e182d7ae6a7f3db45665436',
        title: 'Lueur Verte – Onyx Noir',
        duration: 281000,
        streamUrl: `/audio/37380dadbbc99cfd2e182d7ae6a7f3db45665436.mp3`,
        artworkUrl: `/artwork/37380dadbbc99cfd2e182d7ae6a7f3db45665436.jpg`
      },
      {
        id: 'e65531ab65e79f56ae3d658183995d4f5d47f554',
        title: 'Bestrack – Jaguar',
        duration: 166010.9,
        streamUrl: `/audio/e65531ab65e79f56ae3d658183995d4f5d47f554.mp3`,
        artworkUrl: `/artwork/e65531ab65e79f56ae3d658183995d4f5d47f554.jpg`
      },
      {
        id: 'dd078e5f2567b9195736e4b264f45ad7eab599d5',
        title: 'Moondragon – Race the Horizon',
        duration: 200000,
        streamUrl: `/audio/dd078e5f2567b9195736e4b264f45ad7eab599d5.mp3`,
        artworkUrl: `/artwork/dd078e5f2567b9195736e4b264f45ad7eab599d5.jpg`
      },
      {
        id: '8a5c0045c26ee40307e8d3377f2991b0279bc1a2',
        title: 'College – Un Long Sommeil',
        duration: 337000,
        streamUrl: `/audio/8a5c0045c26ee40307e8d3377f2991b0279bc1a2.mp3`,
        artworkUrl: `/artwork/8a5c0045c26ee40307e8d3377f2991b0279bc1a2.jpg`
      },
      {
        id: 'e1058ebc02ae8ccd65aa7c6b357526db86517522',
        title: 'Night Runner – Murder in Miami',
        duration: 436000,
        streamUrl: `/audio/e1058ebc02ae8ccd65aa7c6b357526db86517522.mp3`,
        artworkUrl: `/artwork/e1058ebc02ae8ccd65aa7c6b357526db86517522.jpg`
      },
      {
        id: '20dba8aefb5824310c0d52cc1ffc65c34ea4537c',
        title: 'Raken – Night Light Forest',
        duration: 178000,
        streamUrl: `/audio/20dba8aefb5824310c0d52cc1ffc65c34ea4537c.mp3`,
        artworkUrl: `/artwork/20dba8aefb5824310c0d52cc1ffc65c34ea4537c.jpg`
      },
      {
        id: 'e1a7da12ba12577f2d65ddfff30d982210958322',
        title: 'FM-84 – Outatime',
        duration: 218000,
        streamUrl: `/audio/e1a7da12ba12577f2d65ddfff30d982210958322.mp3`,
        artworkUrl: `/artwork/e1a7da12ba12577f2d65ddfff30d982210958322.jpg`
      },
      {
        id: '5652718d3e28ed823d2738f6d112a1b553827aeb',
        title: 'MEO – Rescue me',
        duration: 306000,
        streamUrl: `/audio/5652718d3e28ed823d2738f6d112a1b553827aeb.mp3`,
        artworkUrl: `/artwork/5652718d3e28ed823d2738f6d112a1b553827aeb.jpg`
      },
      {
        id: 'bf35dcf7f64b844c33e3250e1d38d7446d8e0a69',
        title: 'Robert Parker – Money Talks',
        duration: 212000,
        streamUrl: `/audio/bf35dcf7f64b844c33e3250e1d38d7446d8e0a69.mp3`,
        artworkUrl: `/artwork/bf35dcf7f64b844c33e3250e1d38d7446d8e0a69.jpg`
      },
      {
        id: '0b990b6e66e298a9296f23913cf774bd21e99605',
        title: 'FM-84 – Delorean',
        duration: 294000,
        streamUrl: `/audio/0b990b6e66e298a9296f23913cf774bd21e99605.mp3`,
        artworkUrl: `/artwork/0b990b6e66e298a9296f23913cf774bd21e99605.jpg`
      },
      {
        id: '324e986311ed22c711108cbc87b667c58b7781bf',
        title: 'Dreamtime – Phantasm',
        duration: 324000,
        streamUrl: `/audio/324e986311ed22c711108cbc87b667c58b7781bf.mp3`,
        artworkUrl: `/artwork/324e986311ed22c711108cbc87b667c58b7781bf.jpg`
      },
      {
        id: 'ba7ab0c24176dabc96b2085a4e503333e08c311b',
        title: 'INDEX CODE – In Paris',
        duration: 232000,
        streamUrl: `/audio/ba7ab0c24176dabc96b2085a4e503333e08c311b.mp3`,
        artworkUrl: `/artwork/ba7ab0c24176dabc96b2085a4e503333e08c311b.jpg`
      },
      {
        id: '712d29adc4d335e0e054f86e2d6c74b0415586d5',
        title: 'Drifting Dreamer – Semi Automatic Neon Love',
        duration: 219000,
        streamUrl: `/audio/712d29adc4d335e0e054f86e2d6c74b0415586d5.mp3`,
        artworkUrl: `/artwork/712d29adc4d335e0e054f86e2d6c74b0415586d5.jpg`
      },
      {
        id: 'edce8961a35140b05fc3f4b4ef61cb823f2878b2',
        title: 'Arcade High – Ghost Council',
        duration: 221000,
        streamUrl: `/audio/edce8961a35140b05fc3f4b4ef61cb823f2878b2.mp3`,
        artworkUrl: `/artwork/edce8961a35140b05fc3f4b4ef61cb823f2878b2.jpg`
      },
      {
        id: '050ac3a6b4cdb52161217ea1c6beee2902aa97d6',
        title: 'Miami Supercops – Night Chase',
        duration: 259000,
        streamUrl: `/audio/050ac3a6b4cdb52161217ea1c6beee2902aa97d6.mp3`,
        artworkUrl: `/artwork/050ac3a6b4cdb52161217ea1c6beee2902aa97d6.jpg`
      },
      {
        id: '901a0087d60d956e7dfb24e923c02ff7eda70e2d',
        title: 'Nightcrawler – Megaforce',
        duration: 236000,
        streamUrl: `/audio/901a0087d60d956e7dfb24e923c02ff7eda70e2d.mp3`,
        artworkUrl: `/artwork/901a0087d60d956e7dfb24e923c02ff7eda70e2d.jpg`
      },
      {
        id: '516dee63000a83f401f451c8d8d49a244cd31bb7',
        title: 'Let Em Riot – The Manual',
        duration: 244056.25,
        streamUrl: `/audio/516dee63000a83f401f451c8d8d49a244cd31bb7.mp3`,
        artworkUrl: `/artwork/516dee63000a83f401f451c8d8d49a244cd31bb7.jpg`
      },
      {
        id: '1d543421237124a1af825c994c188bc06ddf8a5e',
        title: 'ActRazer – Drift',
        duration: 269000,
        streamUrl: `/audio/1d543421237124a1af825c994c188bc06ddf8a5e.mp3`,
        artworkUrl: `/artwork/1d543421237124a1af825c994c188bc06ddf8a5e.jpg`
      },
      {
        id: '00f9d627195e5d875ad6a20f7747aa6ff90cc31e',
        title: 'Perturbator – Technoir (feat. Noir Deco)',
        duration: 279000,
        streamUrl: `/audio/00f9d627195e5d875ad6a20f7747aa6ff90cc31e.mp3`,
        artworkUrl: `/artwork/00f9d627195e5d875ad6a20f7747aa6ff90cc31e.jpg`
      },
      {
        id: 'c849b02bbe3f822bfd6af4b44b2c1787b9e35dd1',
        title: 'Exiles – Red Lights',
        duration: 308000,
        streamUrl: `/audio/c849b02bbe3f822bfd6af4b44b2c1787b9e35dd1.mp3`,
        artworkUrl: `/artwork/c849b02bbe3f822bfd6af4b44b2c1787b9e35dd1.jpg`
      },
      {
        id: '7a92f5ace1a42721c8c20d8bcc74027dddf8c1c3',
        title: 'Crowns – Proper Motion',
        duration: 210000,
        streamUrl: `/audio/7a92f5ace1a42721c8c20d8bcc74027dddf8c1c3.mp3`,
        artworkUrl: `/artwork/7a92f5ace1a42721c8c20d8bcc74027dddf8c1c3.jpg`
      },
      {
        id: '1af091410ad97677ca77d5691e41387b473a0d37',
        title: 'Absolute Valentine – Light In The Dark',
        duration: 209000,
        streamUrl: `/audio/1af091410ad97677ca77d5691e41387b473a0d37.mp3`,
        artworkUrl: `/artwork/1af091410ad97677ca77d5691e41387b473a0d37.jpg`
      },
      {
        id: 'b8056d4b46e29ad61de02897ffd73ce31535d5de',
        title: 'Dance with the Dead – Odyssey',
        duration: 258000,
        streamUrl: `/audio/b8056d4b46e29ad61de02897ffd73ce31535d5de.mp3`,
        artworkUrl: `/artwork/b8056d4b46e29ad61de02897ffd73ce31535d5de.jpg`
      },
      {
        id: 'c03cd319606a25390f9a9575e442b3b9b7f37db8',
        title: 'Garth Knight – Overdrive',
        duration: 288000,
        streamUrl: `/audio/c03cd319606a25390f9a9575e442b3b9b7f37db8.mp3`,
        artworkUrl: `/artwork/c03cd319606a25390f9a9575e442b3b9b7f37db8.jpg`
      },
      {
        id: '5832db09f9a306c87d24422807aea095fcbaee0d',
        title: 'Zone Tripper – Phaselock',
        duration: 344640.25,
        streamUrl: `/audio/5832db09f9a306c87d24422807aea095fcbaee0d.mp3`,
        artworkUrl: `/artwork/5832db09f9a306c87d24422807aea095fcbaee0d.jpg`
      },
      {
        id: '21ea504244ebbeceaaf5614dad3302f081626b2e',
        title: 'Compilerbau – Walking Outer Space',
        duration: 241000,
        streamUrl: `/audio/21ea504244ebbeceaaf5614dad3302f081626b2e.mp3`,
        artworkUrl: `/artwork/21ea504244ebbeceaaf5614dad3302f081626b2e.jpg`
      },
      {
        id: 'c98973b3a848eb9621e3d83f27d6d43d664d0d5d',
        title: 'Makeup and Vanity Set – Quadra IV',
        duration: 245000,
        streamUrl: `/audio/c98973b3a848eb9621e3d83f27d6d43d664d0d5d.mp3`,
        artworkUrl: `/artwork/c98973b3a848eb9621e3d83f27d6d43d664d0d5d.jpg`
      },
      {
        id: 'b258ef05bb409034c36ba75605b41313e3fa77f8',
        title: 'GreKanE – Everything At Once',
        duration: 263000,
        streamUrl: `/audio/b258ef05bb409034c36ba75605b41313e3fa77f8.mp3`,
        artworkUrl: `/artwork/b258ef05bb409034c36ba75605b41313e3fa77f8.jpg`
      },
      {
        id: 'b4dc8c1c488dbf511171d43ef6f0e113a5f67eef',
        title: 'Lueur Verte – Emerald Rising',
        duration: 336000,
        streamUrl: `/audio/b4dc8c1c488dbf511171d43ef6f0e113a5f67eef.mp3`,
        artworkUrl: `/artwork/b4dc8c1c488dbf511171d43ef6f0e113a5f67eef.jpg`
      },
      {
        id: 'afc99b02c253550abfc5d54fc2361d5f496b06b8',
        title: 'Maxthor – Howlings in the Night',
        duration: 269000,
        streamUrl: `/audio/afc99b02c253550abfc5d54fc2361d5f496b06b8.mp3`,
        artworkUrl: `/artwork/afc99b02c253550abfc5d54fc2361d5f496b06b8.jpg`
      },
      {
        id: 'a7921afced6875ce39e37f443d0a158cf0a60dc1',
        title: 'OGRE – Hardboiled (Flashback)',
        duration: 162000,
        streamUrl: `/audio/a7921afced6875ce39e37f443d0a158cf0a60dc1.mp3`,
        artworkUrl: `/artwork/a7921afced6875ce39e37f443d0a158cf0a60dc1.jpg`
      },
      {
        id: 'eb3ab5ee2236387fbebbde101e39cd49c2639d41',
        title: 'Maethelvin – As We Were',
        duration: 261000,
        streamUrl: `/audio/eb3ab5ee2236387fbebbde101e39cd49c2639d41.mp3`,
        artworkUrl: `/artwork/eb3ab5ee2236387fbebbde101e39cd49c2639d41.jpg`
      },
      {
        id: 'b551c2d4e90b22f0ea9c44769c65cb460e9cb7fe',
        title: 'Stallions – We Are Stallions',
        duration: 222000,
        streamUrl: `/audio/b551c2d4e90b22f0ea9c44769c65cb460e9cb7fe.mp3`,
        artworkUrl: `/artwork/b551c2d4e90b22f0ea9c44769c65cb460e9cb7fe.jpg`
      },
      {
        id: '1eb106a254b08ed41e88b284f7769253d7113a4d',
        title: 'Lucy In Disguise – Deep Nothing',
        duration: 240000,
        streamUrl: `/audio/1eb106a254b08ed41e88b284f7769253d7113a4d.mp3`,
        artworkUrl: `/artwork/1eb106a254b08ed41e88b284f7769253d7113a4d.jpg`
      },
      {
        id: 'df2668f91b356763bac192ebc44a7e3530afdc37',
        title: 'Makeup and Vanity Set – Obsidian',
        duration: 213000,
        streamUrl: `/audio/df2668f91b356763bac192ebc44a7e3530afdc37.mp3`,
        artworkUrl: `/artwork/df2668f91b356763bac192ebc44a7e3530afdc37.jpg`
      },
      {
        id: '29b322523eaad9b6dc2b0d0d46792d4baa65c8e5',
        title: 'Duett – Running Scared (Feat. Stewart Lockwood)',
        duration: 199000,
        streamUrl: `/audio/29b322523eaad9b6dc2b0d0d46792d4baa65c8e5.mp3`,
        artworkUrl: `/artwork/29b322523eaad9b6dc2b0d0d46792d4baa65c8e5.jpg`
      },
      {
        id: '6a8a6bc35c6e4eb2ade31197b3218736a0512142',
        title: 'Brandon – Arcade',
        duration: 270000,
        streamUrl: `/audio/6a8a6bc35c6e4eb2ade31197b3218736a0512142.mp3`,
        artworkUrl: `/artwork/6a8a6bc35c6e4eb2ade31197b3218736a0512142.jpg`
      },
      {
        id: 'c45fef6c58ba7c15016fbfd9f229413fac925c72',
        title: 'GAMER – Get Away',
        duration: 287000,
        streamUrl: `/audio/c45fef6c58ba7c15016fbfd9f229413fac925c72.mp3`,
        artworkUrl: `/artwork/c45fef6c58ba7c15016fbfd9f229413fac925c72.jpg`
      },
      {
        id: '682e39707497c702ddc26a87f2c18d1458eee247',
        title: 'Midnight Heir/Patrick Baker – Tonight (feat. Patrick Baker)',
        duration: 306000,
        streamUrl: `/audio/682e39707497c702ddc26a87f2c18d1458eee247.mp3`,
        artworkUrl: `/artwork/682e39707497c702ddc26a87f2c18d1458eee247.jpg`
      },
      {
        id: '61c77617d9a04ca404a087a1a978a2a4f207fe05',
        title: 'NIKY NINE – ROAD',
        duration: 292000,
        streamUrl: `/audio/61c77617d9a04ca404a087a1a978a2a4f207fe05.mp3`,
        artworkUrl: `/artwork/61c77617d9a04ca404a087a1a978a2a4f207fe05.jpg`
      },
      {
        id: 'ffd65c85c036971075677e76e6b250eef4c6ef2e',
        title: 'Prius An Sich – Chrome Eyes',
        duration: 268591.25,
        streamUrl: `/audio/ffd65c85c036971075677e76e6b250eef4c6ef2e.mp3`,
        artworkUrl: `/artwork/ffd65c85c036971075677e76e6b250eef4c6ef2e.jpg`
      },
      {
        id: 'cef2115594553b478290aee7a37e9f48c290bb20',
        title: 'Retro Thunder – Sunset Highway',
        duration: 198000,
        streamUrl: `/audio/cef2115594553b478290aee7a37e9f48c290bb20.mp3`,
        artworkUrl: `/artwork/cef2115594553b478290aee7a37e9f48c290bb20.jpg`
      },
      {
        id: '4593c1f7e0c8380b87a7ed2d77d438e73a21d067',
        title: 'NightStop – Synthax Terror',
        duration: 261000,
        streamUrl: `/audio/4593c1f7e0c8380b87a7ed2d77d438e73a21d067.mp3`,
        artworkUrl: `/artwork/4593c1f7e0c8380b87a7ed2d77d438e73a21d067.jpg`
      },
      {
        id: '9789a3d23a4c8e75836d02eb13fcaea698c67e76',
        title: 'Night Runner – Invaders',
        duration: 269000,
        streamUrl: `/audio/9789a3d23a4c8e75836d02eb13fcaea698c67e76.mp3`,
        artworkUrl: `/artwork/9789a3d23a4c8e75836d02eb13fcaea698c67e76.jpg`
      },
      {
        id: '8b26847f4751208715912bae97ac526a83984479',
        title: 'Midnight Static – Synthesized Dreams',
        duration: 224000,
        streamUrl: `/audio/8b26847f4751208715912bae97ac526a83984479.mp3`,
        artworkUrl: `/artwork/8b26847f4751208715912bae97ac526a83984479.jpg`
      },
      {
        id: '01cdaa4752e895ad7d8f98e062f0d60b9ac45dfa',
        title: 'Electric Youth – A Real Hero',
        duration: 267000,
        streamUrl: `/audio/01cdaa4752e895ad7d8f98e062f0d60b9ac45dfa.mp3`,
        artworkUrl: `/artwork/01cdaa4752e895ad7d8f98e062f0d60b9ac45dfa.jpg`
      },
      {
        id: 'ac35967fdb74fe194f0d87965610c9049f889dd4',
        title: 'Nemix – The Core',
        duration: 242000,
        streamUrl: `/audio/ac35967fdb74fe194f0d87965610c9049f889dd4.mp3`,
        artworkUrl: `/artwork/ac35967fdb74fe194f0d87965610c9049f889dd4.jpg`
      },
      {
        id: '0e74467715e043c05147f2c4e5adae3ba2a8e4c5',
        title: 'SAYAK STRIKER – EASY CHOPPER',
        duration: 296000,
        streamUrl: `/audio/0e74467715e043c05147f2c4e5adae3ba2a8e4c5.mp3`,
        artworkUrl: `/artwork/0e74467715e043c05147f2c4e5adae3ba2a8e4c5.jpg`
      },
      {
        id: 'f8cdb8a86b751e81e1c18a78d8247f177e807cc7',
        title: 'Lazerhawk – Wrong Side Of Town',
        duration: 212000,
        streamUrl: `/audio/f8cdb8a86b751e81e1c18a78d8247f177e807cc7.mp3`,
        artworkUrl: `/artwork/f8cdb8a86b751e81e1c18a78d8247f177e807cc7.jpg`
      },
      {
        id: '1a066f05f2062c7066206a03cd2ab35eb04ec379',
        title: 'Power Glove – Motorcycle Cop',
        duration: 265000,
        streamUrl: `/audio/1a066f05f2062c7066206a03cd2ab35eb04ec379.mp3`,
        artworkUrl: `/artwork/1a066f05f2062c7066206a03cd2ab35eb04ec379.jpg`
      },
      {
        id: 'd0b13220e5536e140c8eb1fd5bbb713114971050',
        title: 'Meteor – Black Holes',
        duration: 211000,
        streamUrl: `/audio/d0b13220e5536e140c8eb1fd5bbb713114971050.mp3`,
        artworkUrl: `/artwork/d0b13220e5536e140c8eb1fd5bbb713114971050.jpg`
      },
      {
        id: 'b990d9be54a1d6e0192138ba64fb4692fa89b4b0',
        title: "Bart Graft – Graft's Theme",
        duration: 231000,
        streamUrl: `/audio/b990d9be54a1d6e0192138ba64fb4692fa89b4b0.mp3`,
        artworkUrl: `/artwork/b990d9be54a1d6e0192138ba64fb4692fa89b4b0.jpg`
      },
      {
        id: '9d58966dbc0dace3434fc89c73047cc664b17acb',
        title: 'Duett – Horizons',
        duration: 233000,
        streamUrl: `/audio/9d58966dbc0dace3434fc89c73047cc664b17acb.mp3`,
        artworkUrl: `/artwork/9d58966dbc0dace3434fc89c73047cc664b17acb.jpg`
      },
      {
        id: '0cf43cf0fe7f30126ed75a4225dde97c747717cf',
        title: 'Nowtro – Newborn Cyborg',
        duration: 328000,
        streamUrl: `/audio/0cf43cf0fe7f30126ed75a4225dde97c747717cf.mp3`,
        artworkUrl: `/artwork/0cf43cf0fe7f30126ed75a4225dde97c747717cf.jpg`
      },
      {
        id: 'b743fb637aa12fb07f19b6aa704884e3dc3665a2',
        title: 'Exiles – Autopilot',
        duration: 181000,
        streamUrl: `/audio/b743fb637aa12fb07f19b6aa704884e3dc3665a2.mp3`,
        artworkUrl: `/artwork/b743fb637aa12fb07f19b6aa704884e3dc3665a2.jpg`
      },
      {
        id: '6c0df79116c2e8a53087823bf4b16e28666b515e',
        title: 'DESTRYUR – Endurance',
        duration: 248000,
        streamUrl: `/audio/6c0df79116c2e8a53087823bf4b16e28666b515e.mp3`,
        artworkUrl: `/artwork/6c0df79116c2e8a53087823bf4b16e28666b515e.jpg`
      },
      {
        id: '1105ce9278503c0ad9bf304ea40b1b0e2ba29ded',
        title: 'Retouch – Illusion',
        duration: 268635.45,
        streamUrl: `/audio/1105ce9278503c0ad9bf304ea40b1b0e2ba29ded.mp3`,
        artworkUrl: `/artwork/1105ce9278503c0ad9bf304ea40b1b0e2ba29ded.jpg`
      },
      {
        id: 'aff9bc54e32ab497bd04e17cd2a43eba202c23ee',
        title: 'Midnight Heir – Badlands',
        duration: 288000,
        streamUrl: `/audio/aff9bc54e32ab497bd04e17cd2a43eba202c23ee.mp3`,
        artworkUrl: `/artwork/aff9bc54e32ab497bd04e17cd2a43eba202c23ee.jpg`
      },
      {
        id: 'a3d003e3e979906ced75d5b256964076fb826610',
        title: 'Power Glove – Night Force',
        duration: 255000,
        streamUrl: `/audio/a3d003e3e979906ced75d5b256964076fb826610.mp3`,
        artworkUrl: `/artwork/a3d003e3e979906ced75d5b256964076fb826610.jpg`
      },
      {
        id: '5176b936e146ba98d18a42ce0b470ed1af063838',
        title: 'FM-84 – Mainframe',
        duration: 292000,
        streamUrl: `/audio/5176b936e146ba98d18a42ce0b470ed1af063838.mp3`,
        artworkUrl: `/artwork/5176b936e146ba98d18a42ce0b470ed1af063838.jpg`
      },
      {
        id: '44bb8fe47bf3d366062afa182d896a4595dbda06',
        title: 'Camille R – 2001',
        duration: 213000,
        streamUrl: `/audio/44bb8fe47bf3d366062afa182d896a4595dbda06.mp3`,
        artworkUrl: `/artwork/44bb8fe47bf3d366062afa182d896a4595dbda06.jpg`
      },
      {
        id: '372567cee9b7c876f08a8685d4f472472ecafe04',
        title: 'Darknous – Outrage',
        duration: 295000,
        streamUrl: `/audio/372567cee9b7c876f08a8685d4f472472ecafe04.mp3`,
        artworkUrl: `/artwork/372567cee9b7c876f08a8685d4f472472ecafe04.jpg`
      },
      {
        id: '4171b319ab7e0c828aca696cdbd5501cc84ffa36',
        title: 'Night Action – All About U',
        duration: 291000,
        streamUrl: `/audio/4171b319ab7e0c828aca696cdbd5501cc84ffa36.mp3`,
        artworkUrl: `/artwork/4171b319ab7e0c828aca696cdbd5501cc84ffa36.jpg`
      },
      {
        id: 'd51e049836e528a8c7ce3fb3fc7afc17e0b4d2f0',
        title: 'Raken – Sunset Place',
        duration: 204000,
        streamUrl: `/audio/d51e049836e528a8c7ce3fb3fc7afc17e0b4d2f0.mp3`,
        artworkUrl: `/artwork/d51e049836e528a8c7ce3fb3fc7afc17e0b4d2f0.jpg`
      },
      {
        id: '67c1c608198f805c75b56a4b0c1c4cab5b556ffa',
        title: 'Double Dragon – Traversee',
        duration: 245000,
        streamUrl: `/audio/67c1c608198f805c75b56a4b0c1c4cab5b556ffa.mp3`,
        artworkUrl: `/artwork/67c1c608198f805c75b56a4b0c1c4cab5b556ffa.jpg`
      },
      {
        id: 'ddefc580bcfc9a424bf95b9dfbb3225fb4b89ce4',
        title: 'Dance with the Dead – Snapped',
        duration: 229000,
        streamUrl: `/audio/ddefc580bcfc9a424bf95b9dfbb3225fb4b89ce4.mp3`,
        artworkUrl: `/artwork/ddefc580bcfc9a424bf95b9dfbb3225fb4b89ce4.jpg`
      },
      {
        id: 'baaad0dfcddc351bc849be935740803dbce74665',
        title: 'Andromeda Dreams – Space Highway',
        duration: 215000,
        streamUrl: `/audio/baaad0dfcddc351bc849be935740803dbce74665.mp3`,
        artworkUrl: `/artwork/baaad0dfcddc351bc849be935740803dbce74665.jpg`
      },
      {
        id: 'b77b5efcdc591b839e4fba4de7602405333084a5',
        title: 'Robert Parker – Waiting',
        duration: 263000,
        streamUrl: `/audio/b77b5efcdc591b839e4fba4de7602405333084a5.mp3`,
        artworkUrl: `/artwork/b77b5efcdc591b839e4fba4de7602405333084a5.jpg`
      },
      {
        id: 'f8a970b802ffc8a192f34deb8e461fe0bb0d9e04',
        title: "C-jeff – Momo's Truck Stop",
        duration: 208000,
        streamUrl: `/audio/f8a970b802ffc8a192f34deb8e461fe0bb0d9e04.mp3`,
        artworkUrl: `/artwork/f8a970b802ffc8a192f34deb8e461fe0bb0d9e04.jpg`
      },
      {
        id: '7b839de882534b5491656f3388932c3aabfcbdd6',
        title: 'Jasper Byrne – Decade Dance',
        duration: 321000,
        streamUrl: `/audio/7b839de882534b5491656f3388932c3aabfcbdd6.mp3`,
        artworkUrl: `/artwork/7b839de882534b5491656f3388932c3aabfcbdd6.jpg`
      },
      {
        id: '6d331273dca80961384d55247923fc812097dd78',
        title: 'Monomer – Warden',
        duration: 258000,
        streamUrl: `/audio/6d331273dca80961384d55247923fc812097dd78.mp3`,
        artworkUrl: `/artwork/6d331273dca80961384d55247923fc812097dd78.jpg`
      },
      {
        id: '237e602291fea214cbdaebb6cd4a11944517cf8c',
        title: 'Le Matos – Wasteland',
        duration: 336000,
        streamUrl: `/audio/237e602291fea214cbdaebb6cd4a11944517cf8c.mp3`,
        artworkUrl: `/artwork/237e602291fea214cbdaebb6cd4a11944517cf8c.jpg`
      },
      {
        id: '56746093c8426c1298daa46ff1da9472ff6beaf1',
        title: 'Cluster Buster – How Can He Go So Fast',
        duration: 284000,
        streamUrl: `/audio/56746093c8426c1298daa46ff1da9472ff6beaf1.mp3`,
        artworkUrl: `/artwork/56746093c8426c1298daa46ff1da9472ff6beaf1.jpg`
      },
      {
        id: 'b8069445174238c3bfab152d8edbd0cfdbb56640',
        title: "Robert Parker – Generation '82 (feat. Shyguys)",
        duration: 256000,
        streamUrl: `/audio/b8069445174238c3bfab152d8edbd0cfdbb56640.mp3`,
        artworkUrl: `/artwork/b8069445174238c3bfab152d8edbd0cfdbb56640.jpg`
      },
      {
        id: '1b53f0b38f9f9584ff485c4a54381b1c105afcce',
        title: 'FM Attack – Magic (feat. Kristine)',
        duration: 276000,
        streamUrl: `/audio/1b53f0b38f9f9584ff485c4a54381b1c105afcce.mp3`,
        artworkUrl: `/artwork/1b53f0b38f9f9584ff485c4a54381b1c105afcce.jpg`
      },
      {
        id: 'd54cbf054a8384d627527d602328cfea2c4842fb',
        title: 'GAMER – Old Money',
        duration: 146000,
        streamUrl: `/audio/d54cbf054a8384d627527d602328cfea2c4842fb.mp3`,
        artworkUrl: `/artwork/d54cbf054a8384d627527d602328cfea2c4842fb.jpg`
      },
      {
        id: 'abf67a16c705b47e5acf45fcf5a976582c764c91',
        title: 'A Space Love Adventure – Red Blaze',
        duration: 230000,
        streamUrl: `/audio/abf67a16c705b47e5acf45fcf5a976582c764c91.mp3`,
        artworkUrl: `/artwork/abf67a16c705b47e5acf45fcf5a976582c764c91.jpg`
      },
      {
        id: 'ca6a555e348a4c495a1a9c35e14551d67e814b37',
        title: 'TWRP – Japanquest',
        duration: 272000,
        streamUrl: `/audio/ca6a555e348a4c495a1a9c35e14551d67e814b37.mp3`,
        artworkUrl: `/artwork/ca6a555e348a4c495a1a9c35e14551d67e814b37.jpg`
      },
      {
        id: '37e70082b58a52e5a051e578a49bf8e2af22bcf8',
        title: 'Perturbator – Sexualizer (feat. Flash Arnold)',
        duration: 299000,
        streamUrl: `/audio/37e70082b58a52e5a051e578a49bf8e2af22bcf8.mp3`,
        artworkUrl: `/artwork/37e70082b58a52e5a051e578a49bf8e2af22bcf8.jpg`
      },
      {
        id: '55963b04a9c541b7877f0c68c1d9c76f2f5766e6',
        title: 'Meteor – Manhattan 2019',
        duration: 223000,
        streamUrl: `/audio/55963b04a9c541b7877f0c68c1d9c76f2f5766e6.mp3`,
        artworkUrl: `/artwork/55963b04a9c541b7877f0c68c1d9c76f2f5766e6.jpg`
      },
      {
        id: '42ec2a5d905d239b06decf60abe41cd94317ba3c',
        title: 'Retouch – Event Horizon',
        duration: 223803.45,
        streamUrl: `/audio/42ec2a5d905d239b06decf60abe41cd94317ba3c.mp3`,
        artworkUrl: `/artwork/42ec2a5d905d239b06decf60abe41cd94317ba3c.jpg`
      },
      {
        id: 'bf3d8843a3ca65f54dbe4459ecd9068f475669f6',
        title: 'Pengus – Azimut',
        duration: 266000,
        streamUrl: `/audio/bf3d8843a3ca65f54dbe4459ecd9068f475669f6.mp3`,
        artworkUrl: `/artwork/bf3d8843a3ca65f54dbe4459ecd9068f475669f6.jpg`
      },
      {
        id: 'c6ffff3b532c923d7e80e87c7a4ff83cd4078fe3',
        title: 'Lazerhawk – The King of the Streets',
        duration: 297000,
        streamUrl: `/audio/c6ffff3b532c923d7e80e87c7a4ff83cd4078fe3.mp3`,
        artworkUrl: `/artwork/c6ffff3b532c923d7e80e87c7a4ff83cd4078fe3.jpg`
      },
      {
        id: '788062ec6d7f140413dcece66f1a286420e6c03e',
        title: 'Absolute Valentine – Disco Lover',
        duration: 237000,
        streamUrl: `/audio/788062ec6d7f140413dcece66f1a286420e6c03e.mp3`,
        artworkUrl: `/artwork/788062ec6d7f140413dcece66f1a286420e6c03e.jpg`
      },
      {
        id: '4c85d4dcb6d818416b201cdb670629d6cfd2fc50',
        title: 'CONFRONTATIONAL – Like A Curse (Feat. Monte Pittman)',
        duration: 304000,
        streamUrl: `/audio/4c85d4dcb6d818416b201cdb670629d6cfd2fc50.mp3`,
        artworkUrl: `/artwork/4c85d4dcb6d818416b201cdb670629d6cfd2fc50.jpg`
      },
      {
        id: 'f3b0d80c4ca4675cfea7294468ff8ff93c0fb72e',
        title: 'Mega Drive – Take Me Home',
        duration: 398000,
        streamUrl: `/audio/f3b0d80c4ca4675cfea7294468ff8ff93c0fb72e.mp3`,
        artworkUrl: `/artwork/f3b0d80c4ca4675cfea7294468ff8ff93c0fb72e.jpg`
      },
      {
        id: '6015e051f9ccb294304966c317065d26a13d019c',
        title: 'Kille ft. Future Holotape – Strangers in the Night',
        duration: 256000,
        streamUrl: `/audio/6015e051f9ccb294304966c317065d26a13d019c.mp3`,
        artworkUrl: `/artwork/6015e051f9ccb294304966c317065d26a13d019c.jpg`
      },
      {
        id: '541807d75a4bd9fe5a09104287c0ef162f06ad56',
        title: '20SIX Hundred – Open World',
        duration: 216000,
        streamUrl: `/audio/541807d75a4bd9fe5a09104287c0ef162f06ad56.mp3`,
        artworkUrl: `/artwork/541807d75a4bd9fe5a09104287c0ef162f06ad56.jpg`
      },
      {
        id: '9d97a16658f429473802c8d1ac26305719336a8b',
        title: 'Arcade High – Phone Lines (feat. Hayley Stewart)',
        duration: 253000,
        streamUrl: `/audio/9d97a16658f429473802c8d1ac26305719336a8b.mp3`,
        artworkUrl: `/artwork/9d97a16658f429473802c8d1ac26305719336a8b.jpg`
      },
      {
        id: 'd5d524b70b222e6c3675366dcdfb01e14d1cfc80',
        title: 'LeveL -1 – Dive in VR',
        duration: 231000,
        streamUrl: `/audio/d5d524b70b222e6c3675366dcdfb01e14d1cfc80.mp3`,
        artworkUrl: `/artwork/d5d524b70b222e6c3675366dcdfb01e14d1cfc80.jpg`
      },
      {
        id: '0d0b249c78e18fc77af6ce7680ff25789ec6c3c3',
        title: 'GUNSHIP – The Mountain',
        duration: 264480.25,
        streamUrl: `/audio/0d0b249c78e18fc77af6ce7680ff25789ec6c3c3.mp3`,
        artworkUrl: `/artwork/0d0b249c78e18fc77af6ce7680ff25789ec6c3c3.jpg`
      },
      {
        id: 'd3891c11749bd63159ccb52ed16e5454354a03e5',
        title: 'Vincenzo Salvia – Chromelove',
        duration: 283056.25,
        streamUrl: `/audio/d3891c11749bd63159ccb52ed16e5454354a03e5.mp3`,
        artworkUrl: `/artwork/d3891c11749bd63159ccb52ed16e5454354a03e5.jpg`
      },
      {
        id: 'ac51d0ef3fa01b5da82169dba91bcb16a69ab553',
        title: 'Phaserland – Resemblance In Machine',
        duration: 292000,
        streamUrl: `/audio/ac51d0ef3fa01b5da82169dba91bcb16a69ab553.mp3`,
        artworkUrl: `/artwork/ac51d0ef3fa01b5da82169dba91bcb16a69ab553.jpg`
      },
      {
        id: 'f4aa7673571ef901f6047dd88482d3c20a4bc761',
        title: 'GAMER – Overpass',
        duration: 220000,
        streamUrl: `/audio/f4aa7673571ef901f6047dd88482d3c20a4bc761.mp3`,
        artworkUrl: `/artwork/f4aa7673571ef901f6047dd88482d3c20a4bc761.jpg`
      },
      {
        id: '7771fc38ff6941480d64f22de2cd85836e43f639',
        title: 'Mega Drive – Pulse of The Streets',
        duration: 263000,
        streamUrl: `/audio/7771fc38ff6941480d64f22de2cd85836e43f639.mp3`,
        artworkUrl: `/artwork/7771fc38ff6941480d64f22de2cd85836e43f639.jpg`
      },
      {
        id: 'c0ea05cdb88400c1ab77b960fceb876201ed6228',
        title: 'Lucy in Disguise – 1987',
        duration: 279000,
        streamUrl: `/audio/c0ea05cdb88400c1ab77b960fceb876201ed6228.mp3`,
        artworkUrl: `/artwork/c0ea05cdb88400c1ab77b960fceb876201ed6228.jpg`
      },
      {
        id: '48e93989a6bd463855d3a34fb8b830f7c8ae75a2',
        title: 'NeodroneX – Suburban Cowboys',
        duration: 187000,
        streamUrl: `/audio/48e93989a6bd463855d3a34fb8b830f7c8ae75a2.mp3`,
        artworkUrl: `/artwork/48e93989a6bd463855d3a34fb8b830f7c8ae75a2.jpg`
      },
      {
        id: '0205d9dc38917a14540b58d1a65fe43ec9353de5',
        title: 'The Hunt – Brain Test',
        duration: 297000,
        streamUrl: `/audio/0205d9dc38917a14540b58d1a65fe43ec9353de5.mp3`,
        artworkUrl: `/artwork/0205d9dc38917a14540b58d1a65fe43ec9353de5.jpg`
      },
      {
        id: '11761072788d7cc9d1e1fb1bcc924f900a166e67',
        title: 'Saint-Samuel – Videoflex',
        duration: 206064.25,
        streamUrl: `/audio/11761072788d7cc9d1e1fb1bcc924f900a166e67.mp3`,
        artworkUrl: `/artwork/11761072788d7cc9d1e1fb1bcc924f900a166e67.jpg`
      },
      {
        id: '1a0832814890e9f64bf3e481fd5ffdfa1fa5d9f9',
        title: 'Magic Dance – The Mirror of Dreams',
        duration: 348000,
        streamUrl: `/audio/1a0832814890e9f64bf3e481fd5ffdfa1fa5d9f9.mp3`,
        artworkUrl: `/artwork/1a0832814890e9f64bf3e481fd5ffdfa1fa5d9f9.jpg`
      },
      {
        id: 'a97b1b6d51d887ddb419fa7a9fdeb4dc4f7fa4b7',
        title: 'Block 35 – Central Control',
        duration: 333000,
        streamUrl: `/audio/a97b1b6d51d887ddb419fa7a9fdeb4dc4f7fa4b7.mp3`,
        artworkUrl: `/artwork/a97b1b6d51d887ddb419fa7a9fdeb4dc4f7fa4b7.jpg`
      },
      {
        id: 'f03e9c717020ff38b48c966229063e69b57f5f83',
        title: 'CRYOSAT – CrimeCom',
        duration: 228000,
        streamUrl: `/audio/f03e9c717020ff38b48c966229063e69b57f5f83.mp3`,
        artworkUrl: `/artwork/f03e9c717020ff38b48c966229063e69b57f5f83.jpg`
      },
      {
        id: '5f17b882793fe22f9d71ff65d3d93b92c709fac8',
        title: 'Dream Fiend – Morning Light',
        duration: 210000,
        streamUrl: `/audio/5f17b882793fe22f9d71ff65d3d93b92c709fac8.mp3`,
        artworkUrl: `/artwork/5f17b882793fe22f9d71ff65d3d93b92c709fac8.jpg`
      },
      {
        id: '6cc16ed37a4b418ec3d5358257ff3142fc4bf0e5',
        title: 'LeBrock – One Night',
        duration: 212000,
        streamUrl: `/audio/6cc16ed37a4b418ec3d5358257ff3142fc4bf0e5.mp3`,
        artworkUrl: `/artwork/6cc16ed37a4b418ec3d5358257ff3142fc4bf0e5.jpg`
      },
      {
        id: 'cddac66ea9198739a8abfdaa9a088d8439bcc2f3',
        title: 'Bellemaison – The Brand New Age',
        duration: 246000,
        streamUrl: `/audio/cddac66ea9198739a8abfdaa9a088d8439bcc2f3.mp3`,
        artworkUrl: `/artwork/cddac66ea9198739a8abfdaa9a088d8439bcc2f3.jpg`
      },
      {
        id: '7dd77c06f31d4e8a1a94ac9d2832434ee1ebc94f',
        title: 'Gost – They',
        duration: 253000,
        streamUrl: `/audio/7dd77c06f31d4e8a1a94ac9d2832434ee1ebc94f.mp3`,
        artworkUrl: `/artwork/7dd77c06f31d4e8a1a94ac9d2832434ee1ebc94f.jpg`
      },
      {
        id: '24d8d047dafe17dc6717d04aa7359a3ebf62d75f',
        title: 'Danger Mode – Chroma Drive',
        duration: 294000,
        streamUrl: `/audio/24d8d047dafe17dc6717d04aa7359a3ebf62d75f.mp3`,
        artworkUrl: `/artwork/24d8d047dafe17dc6717d04aa7359a3ebf62d75f.jpg`
      },
      {
        id: '17aa22a9811d515370cb000336cb4ca79e8cfc99',
        title: 'Duett – Touch',
        duration: 208000,
        streamUrl: `/audio/17aa22a9811d515370cb000336cb4ca79e8cfc99.mp3`,
        artworkUrl: `/artwork/17aa22a9811d515370cb000336cb4ca79e8cfc99.jpg`
      },
      {
        id: '89a46b1556d22e2809447d9065598ee47ce9b87a',
        title: 'OGRE – Shore Thing',
        duration: 257000,
        streamUrl: `/audio/89a46b1556d22e2809447d9065598ee47ce9b87a.mp3`,
        artworkUrl: `/artwork/89a46b1556d22e2809447d9065598ee47ce9b87a.jpg`
      },
      {
        id: 'bfefb3e78b333f41200bfe188f911885e495cf53',
        title: 'Midnight Static – VHS Hallucinations',
        duration: 240000,
        streamUrl: `/audio/bfefb3e78b333f41200bfe188f911885e495cf53.mp3`,
        artworkUrl: `/artwork/bfefb3e78b333f41200bfe188f911885e495cf53.jpg`
      },
      {
        id: 'd37ee09b5293270ad415c26054421f1ac8d83fa1',
        title: 'Jasper Byrne – Decade Dance',
        duration: 279000,
        streamUrl: `/audio/d37ee09b5293270ad415c26054421f1ac8d83fa1.mp3`,
        artworkUrl: `/artwork/d37ee09b5293270ad415c26054421f1ac8d83fa1.jpg`
      },
      {
        id: 'bcd15c2d818e8408cb43f0b7e43438bddc97199a',
        title: 'Magic Dance – Last Light',
        duration: 279000,
        streamUrl: `/audio/bcd15c2d818e8408cb43f0b7e43438bddc97199a.mp3`,
        artworkUrl: `/artwork/bcd15c2d818e8408cb43f0b7e43438bddc97199a.jpg`
      },
      {
        id: '3ca0b480afbe763bcf545ecac432b47050641d5f',
        title: 'Mega Drive – Power Driver',
        duration: 344000,
        streamUrl: `/audio/3ca0b480afbe763bcf545ecac432b47050641d5f.mp3`,
        artworkUrl: `/artwork/3ca0b480afbe763bcf545ecac432b47050641d5f.jpg`
      },
      {
        id: 'd94929c827a1918ab1150260e9d87782ebf64d8e',
        title: 'Perturbator – Miami Disco',
        duration: 271000,
        streamUrl: `/audio/d94929c827a1918ab1150260e9d87782ebf64d8e.mp3`,
        artworkUrl: `/artwork/d94929c827a1918ab1150260e9d87782ebf64d8e.jpg`
      },
      {
        id: '963d53044d83cac67ea568d1e7a769e171310f14',
        title: 'OGRE – Always Outnumbered, Never Outrun',
        duration: 267000,
        streamUrl: `/audio/963d53044d83cac67ea568d1e7a769e171310f14.mp3`,
        artworkUrl: `/artwork/963d53044d83cac67ea568d1e7a769e171310f14.jpg`
      },
      {
        id: 'a8ff6b6b0ad0ef42ef330a59bde034c5789a8bae',
        title: 'Worship – Close Encounter',
        duration: 258048.25,
        streamUrl: `/audio/a8ff6b6b0ad0ef42ef330a59bde034c5789a8bae.mp3`,
        artworkUrl: `/artwork/a8ff6b6b0ad0ef42ef330a59bde034c5789a8bae.jpg`
      },
      {
        id: '22a749c245a6810ac61157b2c8b6c644d15d7e4d',
        title: 'Betamaxx – Redlining 6th',
        duration: 189000,
        streamUrl: `/audio/22a749c245a6810ac61157b2c8b6c644d15d7e4d.mp3`,
        artworkUrl: `/artwork/22a749c245a6810ac61157b2c8b6c644d15d7e4d.jpg`
      },
      {
        id: '6a96480a0e965070c7cf82b858188e131cfcf186',
        title: 'Perturbator – I Am The Night',
        duration: 379000,
        streamUrl: `/audio/6a96480a0e965070c7cf82b858188e131cfcf186.mp3`,
        artworkUrl: `/artwork/6a96480a0e965070c7cf82b858188e131cfcf186.jpg`
      },
      {
        id: '28ddfd663e367668b0e86cd984e95311f63608db',
        title: 'Drifting Dreamer – Lights Out',
        duration: 273000,
        streamUrl: `/audio/28ddfd663e367668b0e86cd984e95311f63608db.mp3`,
        artworkUrl: `/artwork/28ddfd663e367668b0e86cd984e95311f63608db.jpg`
      },
      {
        id: '9903c122b227587145e3b6f5fda054cc26fc03d0',
        title: 'Renz Wilde – Home Computer',
        duration: 189000,
        streamUrl: `/audio/9903c122b227587145e3b6f5fda054cc26fc03d0.mp3`,
        artworkUrl: `/artwork/9903c122b227587145e3b6f5fda054cc26fc03d0.jpg`
      },
      {
        id: 'de5e0ad7afbf5bc0055d766d1f6261b9fb0eae0a',
        title: 'Droid Bishop – Vanisher',
        duration: 236000,
        streamUrl: `/audio/de5e0ad7afbf5bc0055d766d1f6261b9fb0eae0a.mp3`,
        artworkUrl: `/artwork/de5e0ad7afbf5bc0055d766d1f6261b9fb0eae0a.jpg`
      },
      {
        id: 'abe3c0f48d6bf0014328f2189cc17db2b631df2f',
        title: 'Atrey – Supernova',
        duration: 257000,
        streamUrl: `/audio/abe3c0f48d6bf0014328f2189cc17db2b631df2f.mp3`,
        artworkUrl: `/artwork/abe3c0f48d6bf0014328f2189cc17db2b631df2f.jpg`
      },
      {
        id: 'dac784bac1f669babcfbbd40e8a2767f00e344a6',
        title: 'Betamaxx – Dreamer (feat. Rat Rios)',
        duration: 243000,
        streamUrl: `/audio/dac784bac1f669babcfbbd40e8a2767f00e344a6.mp3`,
        artworkUrl: `/artwork/dac784bac1f669babcfbbd40e8a2767f00e344a6.jpg`
      },
      {
        id: '1ffecb1c64a70d2554e9db6a259165fe3680b58e',
        title: 'Dead Astronauts – Witch Hunt',
        duration: 298000,
        streamUrl: `/audio/1ffecb1c64a70d2554e9db6a259165fe3680b58e.mp3`,
        artworkUrl: `/artwork/1ffecb1c64a70d2554e9db6a259165fe3680b58e.jpg`
      },
      {
        id: '4c0b10397725b3b27198080f2bbf8aa44c9d4127',
        title: 'Danger Mode – Survivor',
        duration: 241000,
        streamUrl: `/audio/4c0b10397725b3b27198080f2bbf8aa44c9d4127.mp3`,
        artworkUrl: `/artwork/4c0b10397725b3b27198080f2bbf8aa44c9d4127.jpg`
      },
      {
        id: '4b0e2ee44a24a562b3fde9eab8e678731b19c2d6',
        title: "Tommy '86 – Test Drive",
        duration: 402000,
        streamUrl: `/audio/4b0e2ee44a24a562b3fde9eab8e678731b19c2d6.mp3`,
        artworkUrl: `/artwork/4b0e2ee44a24a562b3fde9eab8e678731b19c2d6.jpg`
      },
      {
        id: 'fef2f2a6148f8837a336e7ca76b71dd032492a46',
        title: 'Mitch Murder – High Performance',
        duration: 220685.9,
        streamUrl: `/audio/fef2f2a6148f8837a336e7ca76b71dd032492a46.mp3`,
        artworkUrl: `/artwork/fef2f2a6148f8837a336e7ca76b71dd032492a46.jpg`
      },
      {
        id: '5434ce38252dff4782c3a3f9024c946e58b58c1a',
        title: 'Compilerbau – North Wall',
        duration: 264000,
        streamUrl: `/audio/5434ce38252dff4782c3a3f9024c946e58b58c1a.mp3`,
        artworkUrl: `/artwork/5434ce38252dff4782c3a3f9024c946e58b58c1a.jpg`
      },
      {
        id: '919714356b1f3eeed3bc836c41f15e46790e05f8',
        title: 'Miami Nights 1984 – Streets On Fire',
        duration: 197000,
        streamUrl: `/audio/919714356b1f3eeed3bc836c41f15e46790e05f8.mp3`,
        artworkUrl: `/artwork/919714356b1f3eeed3bc836c41f15e46790e05f8.jpg`
      },
      {
        id: '787022b67699b3300026ddc4563cf3f94f60afb1',
        title: 'Arcade High – On The Edge Of Summer',
        duration: 307000,
        streamUrl: `/audio/787022b67699b3300026ddc4563cf3f94f60afb1.mp3`,
        artworkUrl: `/artwork/787022b67699b3300026ddc4563cf3f94f60afb1.jpg`
      },
      {
        id: '68cd3ec26606e107bb032a65603ddec9621469ba',
        title: 'Forgotten Illusions – Electric Legion',
        duration: 152000,
        streamUrl: `/audio/68cd3ec26606e107bb032a65603ddec9621469ba.mp3`,
        artworkUrl: `/artwork/68cd3ec26606e107bb032a65603ddec9621469ba.jpg`
      },
      {
        id: '49e69e5d52a06255c8e1341aa91dd7e6db778daa',
        title: '80s Stallone – Beach (Original Mix)',
        duration: 230000,
        streamUrl: `/audio/49e69e5d52a06255c8e1341aa91dd7e6db778daa.mp3`,
        artworkUrl: `/artwork/49e69e5d52a06255c8e1341aa91dd7e6db778daa.jpg`
      },
      {
        id: 'c9257805c3b70ceb57a5c701db78cb6d4a448cf7',
        title: 'Le Matos – La Mer Des Possibilites',
        duration: 359000,
        streamUrl: `/audio/c9257805c3b70ceb57a5c701db78cb6d4a448cf7.mp3`,
        artworkUrl: `/artwork/c9257805c3b70ceb57a5c701db78cb6d4a448cf7.jpg`
      },
      {
        id: 'd8f484b66dfd10d9476206d33d79d883474eb483',
        title: 'Botnit – Ex-Cathedra',
        duration: 324000,
        streamUrl: `/audio/d8f484b66dfd10d9476206d33d79d883474eb483.mp3`,
        artworkUrl: `/artwork/d8f484b66dfd10d9476206d33d79d883474eb483.jpg`
      },
      {
        id: '0a0fb6b8fc1effcccd47b18ef0f4c2989d9a9a36',
        title: 'Betamaxx – Mechanized',
        duration: 281000,
        streamUrl: `/audio/0a0fb6b8fc1effcccd47b18ef0f4c2989d9a9a36.mp3`,
        artworkUrl: `/artwork/0a0fb6b8fc1effcccd47b18ef0f4c2989d9a9a36.jpg`
      },
      {
        id: 'a9e194fd41e0e3d34409e613e31492cf510d2d64',
        title: 'Bluezz Vylez – Craters and Lovers',
        duration: 321000,
        streamUrl: `/audio/a9e194fd41e0e3d34409e613e31492cf510d2d64.mp3`,
        artworkUrl: `/artwork/a9e194fd41e0e3d34409e613e31492cf510d2d64.jpg`
      },
      {
        id: 'c596929ce73d1fd3951fbe7bce0457060d500adb',
        title: 'The Hunt – The Abomination',
        duration: 260000,
        streamUrl: `/audio/c596929ce73d1fd3951fbe7bce0457060d500adb.mp3`,
        artworkUrl: `/artwork/c596929ce73d1fd3951fbe7bce0457060d500adb.jpg`
      },
      {
        id: 'bd5e3682730c3bd459730303ab434ad0025b7c60',
        title: 'Cosmic Sand – Give Us a First Chance',
        duration: 202000,
        streamUrl: `/audio/bd5e3682730c3bd459730303ab434ad0025b7c60.mp3`,
        artworkUrl: `/artwork/bd5e3682730c3bd459730303ab434ad0025b7c60.jpg`
      },
      {
        id: '914cb3bbe433147e173a9cc64751df2bab29868a',
        title: 'Aysyne – Nite Life',
        duration: 254000,
        streamUrl: `/audio/914cb3bbe433147e173a9cc64751df2bab29868a.mp3`,
        artworkUrl: `/artwork/914cb3bbe433147e173a9cc64751df2bab29868a.jpg`
      },
      {
        id: 'c3b7cf7f10aa82f99c988bb368195b2deb70b90f',
        title: 'GreKanE – Rectified',
        duration: 224000,
        streamUrl: `/audio/c3b7cf7f10aa82f99c988bb368195b2deb70b90f.mp3`,
        artworkUrl: `/artwork/c3b7cf7f10aa82f99c988bb368195b2deb70b90f.jpg`
      },
      {
        id: '6ddbef50dfdb019a9cc9003c19833f07f3b1d38d',
        title: 'LeveL -1 – Attacking The Headquarters',
        duration: 223000,
        streamUrl: `/audio/6ddbef50dfdb019a9cc9003c19833f07f3b1d38d.mp3`,
        artworkUrl: `/artwork/6ddbef50dfdb019a9cc9003c19833f07f3b1d38d.jpg`
      },
      {
        id: 'b82dfb64a576c808b49a8e3c2cb77572b6927188',
        title: 'Rosco – Gridlinked (feat. Kaspar Funk)',
        duration: 249000,
        streamUrl: `/audio/b82dfb64a576c808b49a8e3c2cb77572b6927188.mp3`,
        artworkUrl: `/artwork/b82dfb64a576c808b49a8e3c2cb77572b6927188.jpg`
      },
      {
        id: '9e24d884d2044a5a7b13c1f1c6d9bb60f21d4a22',
        title: 'Gost – Night Crawler',
        duration: 281000,
        streamUrl: `/audio/9e24d884d2044a5a7b13c1f1c6d9bb60f21d4a22.mp3`,
        artworkUrl: `/artwork/9e24d884d2044a5a7b13c1f1c6d9bb60f21d4a22.jpg`
      },
      {
        id: 'a054b5c0ebb7765ef84317fba68b5a4211ea780b',
        title: 'Arcade High – Heat Wave (feat. Morissa Trunzo)',
        duration: 251000,
        streamUrl: `/audio/a054b5c0ebb7765ef84317fba68b5a4211ea780b.mp3`,
        artworkUrl: `/artwork/a054b5c0ebb7765ef84317fba68b5a4211ea780b.jpg`
      },
      {
        id: 'ae270cc8a590589302309fdae7ab8864137c6df7',
        title: 'FM Attack – Sleepless Nights',
        duration: 408000,
        streamUrl: `/audio/ae270cc8a590589302309fdae7ab8864137c6df7.mp3`,
        artworkUrl: `/artwork/ae270cc8a590589302309fdae7ab8864137c6df7.jpg`
      },
      {
        id: '1af5503d2e3f4b941af82138b2ee1ea35addf4d5',
        title: 'Perturbator – Payback Pursuit',
        duration: 243000,
        streamUrl: `/audio/1af5503d2e3f4b941af82138b2ee1ea35addf4d5.mp3`,
        artworkUrl: `/artwork/1af5503d2e3f4b941af82138b2ee1ea35addf4d5.jpg`
      },
      {
        id: '7dd230b22929c716c379f7999c1d820d4ad88c69',
        title: 'Miami Nights 1984 – One Last Time',
        duration: 146000,
        streamUrl: `/audio/7dd230b22929c716c379f7999c1d820d4ad88c69.mp3`,
        artworkUrl: `/artwork/7dd230b22929c716c379f7999c1d820d4ad88c69.jpg`
      },
      {
        id: 'a0c9f1b970f2481e880d8ca6c7c0a9e3ee7cea24',
        title: 'Magic Sword – In The Face Of Evil',
        duration: 409077.80000000005,
        streamUrl: `/audio/a0c9f1b970f2481e880d8ca6c7c0a9e3ee7cea24.mp3`,
        artworkUrl: `/artwork/a0c9f1b970f2481e880d8ca6c7c0a9e3ee7cea24.jpg`
      },
      {
        id: '1c5779501ab90dd73bdfcc9d25c0ce468f5deb6f',
        title: 'Lost Years – Phoenix Rising',
        duration: 328000,
        streamUrl: `/audio/1c5779501ab90dd73bdfcc9d25c0ce468f5deb6f.mp3`,
        artworkUrl: `/artwork/1c5779501ab90dd73bdfcc9d25c0ce468f5deb6f.jpg`
      },
      {
        id: '93d11545d14e05cdfe2289a917b72cb38d67f34e',
        title: 'Danger Mode – Crime Wave',
        duration: 163000,
        streamUrl: `/audio/93d11545d14e05cdfe2289a917b72cb38d67f34e.mp3`,
        artworkUrl: `/artwork/93d11545d14e05cdfe2289a917b72cb38d67f34e.jpg`
      },
      {
        id: 'efa2f7e5bc4d049a9db5fd7b166342b56128c2d4',
        title: 'Compilerbau – Tachyon',
        duration: 277000,
        streamUrl: `/audio/efa2f7e5bc4d049a9db5fd7b166342b56128c2d4.mp3`,
        artworkUrl: `/artwork/efa2f7e5bc4d049a9db5fd7b166342b56128c2d4.jpg`
      },
      {
        id: '45fe7b51432ca4ea5c0702fb95366cb247a88d7e',
        title: '3FORCE – Highway Jupiter',
        duration: 324000,
        streamUrl: `/audio/45fe7b51432ca4ea5c0702fb95366cb247a88d7e.mp3`,
        artworkUrl: `/artwork/45fe7b51432ca4ea5c0702fb95366cb247a88d7e.jpg`
      },
      {
        id: '00076cc3b4f5bd6b1528e646d7c0db5f4e538b6a',
        title: 'Action Jackson – Palm Kill',
        duration: 349000,
        streamUrl: `/audio/00076cc3b4f5bd6b1528e646d7c0db5f4e538b6a.mp3`,
        artworkUrl: `/artwork/00076cc3b4f5bd6b1528e646d7c0db5f4e538b6a.jpg`
      },
      {
        id: '23a2dfcc04ca72329589fe1dea5fa10dc234467c',
        title: 'Bestrack – Workout 2000',
        duration: 340404.375,
        streamUrl: `/audio/23a2dfcc04ca72329589fe1dea5fa10dc234467c.mp3`,
        artworkUrl: `/artwork/23a2dfcc04ca72329589fe1dea5fa10dc234467c.jpg`
      },
      {
        id: '009cb039108b41412a674e3ed5283d5da33dce1a',
        title: 'Crockett – Changing Lanes',
        duration: 336000,
        streamUrl: `/audio/009cb039108b41412a674e3ed5283d5da33dce1a.mp3`,
        artworkUrl: `/artwork/009cb039108b41412a674e3ed5283d5da33dce1a.jpg`
      },
      {
        id: '439d440f5dcb602d2a29fea2c4128eaa42368d79',
        title: 'Mitch Murder – The Touch',
        duration: 326246.72500000003,
        streamUrl: `/audio/439d440f5dcb602d2a29fea2c4128eaa42368d79.mp3`,
        artworkUrl: `/artwork/439d440f5dcb602d2a29fea2c4128eaa42368d79.jpg`
      },
      {
        id: '77cf51db21d1b79f57cbdb486f6868325a1bbfbf',
        title: 'Muscle – Feel The Steel',
        duration: 207000,
        streamUrl: `/audio/77cf51db21d1b79f57cbdb486f6868325a1bbfbf.mp3`,
        artworkUrl: `/artwork/77cf51db21d1b79f57cbdb486f6868325a1bbfbf.jpg`
      },
      {
        id: 'dc06db7952bf78b76fce2549a3a109f2177b3486',
        title: 'Michael Perkins – Esteban',
        duration: 195000,
        streamUrl: `/audio/dc06db7952bf78b76fce2549a3a109f2177b3486.mp3`,
        artworkUrl: `/artwork/dc06db7952bf78b76fce2549a3a109f2177b3486.jpg`
      },
      {
        id: '9a3ccfcdc1393277bc6005c86fd2977089c16284',
        title: 'Judge Bitch – Tropicool',
        duration: 266000,
        streamUrl: `/audio/9a3ccfcdc1393277bc6005c86fd2977089c16284.mp3`,
        artworkUrl: `/artwork/9a3ccfcdc1393277bc6005c86fd2977089c16284.jpg`
      },
      {
        id: 'ee1ab0a93274e1e08c4500f3eb8e49c29d35d8fa',
        title: 'Bestrack – Burn the night',
        duration: 249132.5,
        streamUrl: `/audio/ee1ab0a93274e1e08c4500f3eb8e49c29d35d8fa.mp3`,
        artworkUrl: `/artwork/ee1ab0a93274e1e08c4500f3eb8e49c29d35d8fa.jpg`
      },
      {
        id: 'd93e764bb7c8c28d235f2d7520bca7da9adf7090',
        title: 'Makeup and Vanity Set – From a Distance (Theme from Hit TV)',
        duration: 274000,
        streamUrl: `/audio/d93e764bb7c8c28d235f2d7520bca7da9adf7090.mp3`,
        artworkUrl: `/artwork/d93e764bb7c8c28d235f2d7520bca7da9adf7090.jpg`
      },
      {
        id: 'e648f122678f17549e84aa2fb55f0ab046495b54',
        title: 'ALEX – Occult',
        duration: 331000,
        streamUrl: `/audio/e648f122678f17549e84aa2fb55f0ab046495b54.mp3`,
        artworkUrl: `/artwork/e648f122678f17549e84aa2fb55f0ab046495b54.jpg`
      },
      {
        id: 'c2490e19575b503d43b083913525a7f3d48d7164',
        title: "Danger Mode – Meridian Cruisin'",
        duration: 178000,
        streamUrl: `/audio/c2490e19575b503d43b083913525a7f3d48d7164.mp3`,
        artworkUrl: `/artwork/c2490e19575b503d43b083913525a7f3d48d7164.jpg`
      },
      {
        id: '5705080a6bad0d7b4ea8704234c237a68c1cd9b4',
        title: 'Run Vaylor – Rush',
        duration: 209000,
        streamUrl: `/audio/5705080a6bad0d7b4ea8704234c237a68c1cd9b4.mp3`,
        artworkUrl: `/artwork/5705080a6bad0d7b4ea8704234c237a68c1cd9b4.jpg`
      },
      {
        id: '4cfe64e8052e910e4370cdead00b706ea6bbf279',
        title: 'Meteor – Night Riders',
        duration: 199000,
        streamUrl: `/audio/4cfe64e8052e910e4370cdead00b706ea6bbf279.mp3`,
        artworkUrl: `/artwork/4cfe64e8052e910e4370cdead00b706ea6bbf279.jpg`
      },
      {
        id: 'abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2',
        title: 'Judge Bitch – Striker (feat. Perturbator)',
        duration: 186000,
        streamUrl: `/audio/abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2.mp3`,
        artworkUrl: `/artwork/abf58ed918bfb1b4a4b8f93ab208b0ce56e258f2.jpg`
      },
      {
        id: '7aac5c4753ca9859e3c67685c72b5a8529f14e67',
        title: 'Prius An Sich – Hyperion Booster',
        duration: 273244.25,
        streamUrl: `/audio/7aac5c4753ca9859e3c67685c72b5a8529f14e67.mp3`,
        artworkUrl: `/artwork/7aac5c4753ca9859e3c67685c72b5a8529f14e67.jpg`
      },
      {
        id: '1b1b89bc8ab9d0d19274190e6b5d50cc292dee96',
        title: 'Judge Bitch – MDK',
        duration: 220000,
        streamUrl: `/audio/1b1b89bc8ab9d0d19274190e6b5d50cc292dee96.mp3`,
        artworkUrl: `/artwork/1b1b89bc8ab9d0d19274190e6b5d50cc292dee96.jpg`
      },
      {
        id: '9a2e79f2a904d52481f9a692837de243596e06ed',
        title: 'Miami Nights 1984 – Saved By The Bell',
        duration: 266000,
        streamUrl: `/audio/9a2e79f2a904d52481f9a692837de243596e06ed.mp3`,
        artworkUrl: `/artwork/9a2e79f2a904d52481f9a692837de243596e06ed.jpg`
      },
      {
        id: 'b5fe4283a475ec0a61e0bf0ce173676f6e83f504',
        title: 'DATAStream – Cinder Sunset',
        duration: 334000,
        streamUrl: `/audio/b5fe4283a475ec0a61e0bf0ce173676f6e83f504.mp3`,
        artworkUrl: `/artwork/b5fe4283a475ec0a61e0bf0ce173676f6e83f504.jpg`
      },
      {
        id: '42aa24303041266a446cf3ebbc0409db2cba4b5f',
        title: 'Highway Superstar – Save You (feat. Sebastian Gampl & Miranda Carey)',
        duration: 336312.25,
        streamUrl: `/audio/42aa24303041266a446cf3ebbc0409db2cba4b5f.mp3`,
        artworkUrl: `/artwork/42aa24303041266a446cf3ebbc0409db2cba4b5f.jpg`
      },
      {
        id: '7747de1cdc8b332b962da47174adbf709fb3c970',
        title: "Carpenter Brut – Hang'Em All",
        duration: 337000,
        streamUrl: `/audio/7747de1cdc8b332b962da47174adbf709fb3c970.mp3`,
        artworkUrl: `/artwork/7747de1cdc8b332b962da47174adbf709fb3c970.jpg`
      },
      {
        id: 'a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20',
        title: 'Street Cleaner – Nightlife',
        duration: 200000,
        streamUrl: `/audio/a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20.mp3`,
        artworkUrl: `/artwork/a44fa631a47b8bf2eb253ff72da2ea9d3c8ecd20.jpg`
      },
      {
        id: '55d26f152537801780f812ffab63b5aa6567c0f2',
        title: 'D/A/D – Backbone of the Night',
        duration: 292000,
        streamUrl: `/audio/55d26f152537801780f812ffab63b5aa6567c0f2.mp3`,
        artworkUrl: `/artwork/55d26f152537801780f812ffab63b5aa6567c0f2.jpg`
      },
      {
        id: 'c8774500da6af4b048e560ba4f85c26ffc9a1fd6',
        title: 'Compilerbau – Leaving Earth',
        duration: 338000,
        streamUrl: `/audio/c8774500da6af4b048e560ba4f85c26ffc9a1fd6.mp3`,
        artworkUrl: `/artwork/c8774500da6af4b048e560ba4f85c26ffc9a1fd6.jpg`
      },
      {
        id: 'b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb',
        title: 'Mega Drive – Crimewave',
        duration: 296000,
        streamUrl: `/audio/b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb.mp3`,
        artworkUrl: `/artwork/b5eb9b5e12d2cb3a3c1ec3bccb22d140ca6231bb.jpg`
      },
      {
        id: '15e9642798b73e75e4f99ad4547b9368d2b8ad83',
        title: 'Meteor – Grim Memories',
        duration: 327000,
        streamUrl: `/audio/15e9642798b73e75e4f99ad4547b9368d2b8ad83.mp3`,
        artworkUrl: `/artwork/15e9642798b73e75e4f99ad4547b9368d2b8ad83.jpg`
      },
      {
        id: '6ae33f6d06cab43ea5bd7b4d676df702d96d8bba',
        title: 'Block 35 – Skyline',
        duration: 275000,
        streamUrl: `/audio/6ae33f6d06cab43ea5bd7b4d676df702d96d8bba.mp3`,
        artworkUrl: `/artwork/6ae33f6d06cab43ea5bd7b4d676df702d96d8bba.jpg`
      },
      {
        id: '318',
        title: 'Synthwave (The 80S Revival)',
        duration: 242000,
        streamUrl: `/audio/ab67616d0000b273bed49abd1a97264f89b60e41.mp3`,
        artworkUrl: `/artwork/ab67616d0000b273bed49abd1a97264f89b60e41.jpg`
      },
      {
        id: '319',
        title: 'Rushline - Someone (Extended Mix)',
        duration: 244000,
        streamUrl: `/audio/dc1c05d3abc491d8d747a1c804f3b1bf.mp3`,
        artworkUrl: `/artwork/dc1c05d3abc491d8d747a1c804f3b1bf.jpg`
      },
      {
        id: '320',
        title: 'Не забувай - SadSvit',
        duration: 153000,
        streamUrl: `/audio/ab67616d0000b273b5b88522c8bb1c121e41e964.mp3`,
        artworkUrl: `/artwork/ab67616d0000b273b5b88522c8bb1c121e41e964.jpg`
      },
      {
        id: '321',
        title: 'Dorian la tormenta de arena',
        duration: 306000,
        streamUrl: `/audio/artworks-000067975818-2s9bqy-t500x500.mp3`,
        artworkUrl: `/artwork/artworks-000067975818-2s9bqy-t500x500.jpg`
      },
      {
        id: '322',
        title: 'HIBELL - talking to the moon',
        duration: 151000,
        streamUrl: `/audio/5054197450563-cover-zoom.mp3`,
        artworkUrl: `/artwork/5054197450563-cover-zoom.jpg`
      },
    {
        id: '74df5ac0a77e7c8b9dac8e3fd7d110fc8cfdac21',
        title: 'Neon Nox – Checkpoint feat. Rebecka Stragefors',
        duration: 325000,
        streamUrl: `/audio/74df5ac0a77e7c8b9dac8e3fd7d110fc8cfdac21.mp3`,
        artworkUrl: `/artwork/74df5ac0a77e7c8b9dac8e3fd7d110fc8cfdac21.jpg`
      },
      {
        id: '0a1799039974f417ce1c07fc384c463c3ba3ec57',
        title: 'Midnight Static – Orange Sunshine',
        duration: 218000,
        streamUrl: `/audio/0a1799039974f417ce1c07fc384c463c3ba3ec57.mp3`,
        artworkUrl: `/artwork/0a1799039974f417ce1c07fc384c463c3ba3ec57.jpg`
      },
      {
        id: '2cfb3922cab509f99822d8a832dea233268377cb',
        title: 'Prius An Sich – Crystal Peak',
        duration: 289985.55,
        streamUrl: `/audio/2cfb3922cab509f99822d8a832dea233268377cb.mp3`,
        artworkUrl: `/artwork/2cfb3922cab509f99822d8a832dea233268377cb.jpg`
      },
      {
        id: 'b5f15ca04fc2aa4db4f86701f1808579c0cad830',
        title: 'Power Glove – Power Core',
        duration: 130000,
        streamUrl: `/audio/b5f15ca04fc2aa4db4f86701f1808579c0cad830.mp3`,
        artworkUrl: `/artwork/b5f15ca04fc2aa4db4f86701f1808579c0cad830.jpg`
      },
      {
        id: '89e451b72241fb9d9d3fbbd4f93342388ff7dae4',
        title: 'Rain Sword – Sailing With You',
        duration: 280000,
        streamUrl: `/audio/89e451b72241fb9d9d3fbbd4f93342388ff7dae4.mp3`,
        artworkUrl: `/artwork/89e451b72241fb9d9d3fbbd4f93342388ff7dae4.jpg`
      },
      {
        id: 'e17a80d8100372686f2477955a0a19c54d2f16dc',
        title: 'NightStop – Porn After Midnight',
        duration: 261000,
        streamUrl: `/audio/e17a80d8100372686f2477955a0a19c54d2f16dc.mp3`,
        artworkUrl: `/artwork/e17a80d8100372686f2477955a0a19c54d2f16dc.jpg`
      },
      {
        id: '2a06aaef4e0b21a535545ef03ef4b196b7b72728',
        title: 'Nightcrawler – Broken Dreams',
        duration: 274000,
        streamUrl: `/audio/2a06aaef4e0b21a535545ef03ef4b196b7b72728.mp3`,
        artworkUrl: `/artwork/2a06aaef4e0b21a535545ef03ef4b196b7b72728.jpg`
      },
      {
        id: 'a08e490cd760d9711206f7662577300bec5d7619',
        title: 'Adeyhawke – Looker',
        duration: 281000,
        streamUrl: `/audio/a08e490cd760d9711206f7662577300bec5d7619.mp3`,
        artworkUrl: `/artwork/a08e490cd760d9711206f7662577300bec5d7619.jpg`
      },
      {
        id: '5866736b34b2baf2eb1feeec32a6b27728a7444d',
        title: 'Sebastian Gampl – Under Control  (Feat Tommy Reeve)',
        duration: 286000,
        streamUrl: `/audio/5866736b34b2baf2eb1feeec32a6b27728a7444d.mp3`,
        artworkUrl: `/artwork/5866736b34b2baf2eb1feeec32a6b27728a7444d.jpg`
      },
      {
        id: '11e9de7ef505443597243237178d7cdffd50758f',
        title: 'Magic Sword – Battlefield',
        duration: 256056.24999999997,
        streamUrl: `/audio/11e9de7ef505443597243237178d7cdffd50758f.mp3`,
        artworkUrl: `/artwork/11e9de7ef505443597243237178d7cdffd50758f.jpg`
      },
      {
        id: '0e93f44db3df1480267abc6f9e7e514a04c22165',
        title: 'Cluster Buster – Knee-Deep In The Dead',
        duration: 254000,
        streamUrl: `/audio/0e93f44db3df1480267abc6f9e7e514a04c22165.mp3`,
        artworkUrl: `/artwork/0e93f44db3df1480267abc6f9e7e514a04c22165.jpg`
      },
      {
        id: '3f9d0703490f83fff3bac8c0401bfb8901b07a76',
        title: 'Meteor – Round One',
        duration: 194000,
        streamUrl: `/audio/3f9d0703490f83fff3bac8c0401bfb8901b07a76.mp3`,
        artworkUrl: `/artwork/3f9d0703490f83fff3bac8c0401bfb8901b07a76.jpg`
      },
      {
        id: 'f9ceb6e469719b3a5e9edd80012ac23cb5f07cdb',
        title: 'CYBEREALITYライフ – Road Memories',
        duration: 284000,
        streamUrl: `/audio/f9ceb6e469719b3a5e9edd80012ac23cb5f07cdb.mp3`,
        artworkUrl: `/artwork/f9ceb6e469719b3a5e9edd80012ac23cb5f07cdb.jpg`
      },
      {
        id: '4f963db3977646970a42b118346ca8d736a412b8',
        title: 'Kristine – The Deepest Blue',
        duration: 277680.25,
        streamUrl: `/audio/4f963db3977646970a42b118346ca8d736a412b8.mp3`,
        artworkUrl: `/artwork/4f963db3977646970a42b118346ca8d736a412b8.jpg`
      },
      {
        id: 'dc41a75c2c58d1efdb955eb48a77c31d24ad12d7',
        title: 'Street Cleaner – Outnumbered',
        duration: 208000,
        streamUrl: `/audio/dc41a75c2c58d1efdb955eb48a77c31d24ad12d7.mp3`,
        artworkUrl: `/artwork/dc41a75c2c58d1efdb955eb48a77c31d24ad12d7.jpg`
      },
      {
        id: '57480d80acbd7de60f22b0fb5787700720ed1a8a',
        title: 'Monomer – Chrome Castles',
        duration: 201000,
        streamUrl: `/audio/57480d80acbd7de60f22b0fb5787700720ed1a8a.mp3`,
        artworkUrl: `/artwork/57480d80acbd7de60f22b0fb5787700720ed1a8a.jpg`
      },
      {
        id: 'a1edad3d91e75b97eac8181e0466ff2904cfed72',
        title: "Mild Peril – Paladin's Theme",
        duration: 571000,
        streamUrl: `/audio/a1edad3d91e75b97eac8181e0466ff2904cfed72.mp3`,
        artworkUrl: `/artwork/a1edad3d91e75b97eac8181e0466ff2904cfed72.jpg`
      },
      {
        id: 'd597ca5b42eca6792835dce652258b6c601ef9b0',
        title: 'Orax – Pilgrimage',
        duration: 351000,
        streamUrl: `/audio/d597ca5b42eca6792835dce652258b6c601ef9b0.mp3`,
        artworkUrl: `/artwork/d597ca5b42eca6792835dce652258b6c601ef9b0.jpg`
      },
      {
        id: 'dd22f48d09c6b272cb6bb533a05f087bdc222ae9',
        title: 'NightStop – VHS GIRLS',
        duration: 208000,
        streamUrl: `/audio/dd22f48d09c6b272cb6bb533a05f087bdc222ae9.mp3`,
        artworkUrl: `/artwork/dd22f48d09c6b272cb6bb533a05f087bdc222ae9.jpg`
      },
      {
        id: 'd98d1e528bae6a544bcd7e085d58fd6ff0b88ed8',
        title: 'Droid Bishop – Beyond The Blue',
        duration: 291000,
        streamUrl: `/audio/d98d1e528bae6a544bcd7e085d58fd6ff0b88ed8.mp3`,
        artworkUrl: `/artwork/d98d1e528bae6a544bcd7e085d58fd6ff0b88ed8.jpg`
      },
      {
        id: '6de51ebbd2ee3590d304a1ca7257396dc27b25a0',
        title: 'Arcade High – Cool Inc.',
        duration: 233000,
        streamUrl: `/audio/6de51ebbd2ee3590d304a1ca7257396dc27b25a0.mp3`,
        artworkUrl: `/artwork/6de51ebbd2ee3590d304a1ca7257396dc27b25a0.jpg`
      },
      {
        id: '41349f10e3a57cb26f78ef4051c532fcce7c57d9',
        title: 'Division – Lost in Time',
        duration: 314000,
        streamUrl: `/audio/41349f10e3a57cb26f78ef4051c532fcce7c57d9.mp3`,
        artworkUrl: `/artwork/41349f10e3a57cb26f78ef4051c532fcce7c57d9.jpg`
      },
      {
        id: '962d24a6756f9971b8f82cc4285d04fb0fae5cc0',
        title: 'Black Heron – Surgeon Stimulator (Operating Theatre)',
        duration: 270000,
        streamUrl: `/audio/962d24a6756f9971b8f82cc4285d04fb0fae5cc0.mp3`,
        artworkUrl: `/artwork/962d24a6756f9971b8f82cc4285d04fb0fae5cc0.jpg`
      },
      {
        id: '8f5ae5ac0599cd3f07f74a781af36472379a6bc8',
        title: 'Pinemarten – Just Friends',
        duration: 323000,
        streamUrl: `/audio/8f5ae5ac0599cd3f07f74a781af36472379a6bc8.mp3`,
        artworkUrl: `/artwork/8f5ae5ac0599cd3f07f74a781af36472379a6bc8.jpg`
      },
      {
        id: '8bc347cbd4b75985d741b5e26cc48f7389c8a45a',
        title: 'Megahit – Shinjuku Cruise',
        duration: 222000,
        streamUrl: `/audio/8bc347cbd4b75985d741b5e26cc48f7389c8a45a.mp3`,
        artworkUrl: `/artwork/8bc347cbd4b75985d741b5e26cc48f7389c8a45a.jpg`
      },
      {
        id: 'da96c99f6c1a59ae1457689532c83d69d46d973a',
        title: 'Betamaxx – Restless',
        duration: 232000,
        streamUrl: `/audio/da96c99f6c1a59ae1457689532c83d69d46d973a.mp3`,
        artworkUrl: `/artwork/da96c99f6c1a59ae1457689532c83d69d46d973a.jpg`
      },
      {
        id: 'eaf8638aeeabeed18d3128141756a180feec71d9',
        title: 'Miami Nights 1984 – Reflex Training',
        duration: 118000,
        streamUrl: `/audio/eaf8638aeeabeed18d3128141756a180feec71d9.mp3`,
        artworkUrl: `/artwork/eaf8638aeeabeed18d3128141756a180feec71d9.jpg`
      },
      {
        id: '1843e9a4696860e87dd21468ba8515b39f36e33e',
        title: 'Nemix – Under Enemy Control',
        duration: 284000,
        streamUrl: `/audio/1843e9a4696860e87dd21468ba8515b39f36e33e.mp3`,
        artworkUrl: `/artwork/1843e9a4696860e87dd21468ba8515b39f36e33e.jpg`
      },
      {
        id: '649700cef90e29859a0d7e77eaa1feb2fac8ea55',
        title: 'FM Attack – Yesterday',
        duration: 297000,
        streamUrl: `/audio/649700cef90e29859a0d7e77eaa1feb2fac8ea55.mp3`,
        artworkUrl: `/artwork/649700cef90e29859a0d7e77eaa1feb2fac8ea55.jpg`
      },
      {
        id: '733d40de7c759a395e36ace1e534bd89be73fece',
        title: 'Ex-Machina – Sector-17 Blues',
        duration: 378000,
        streamUrl: `/audio/733d40de7c759a395e36ace1e534bd89be73fece.mp3`,
        artworkUrl: `/artwork/733d40de7c759a395e36ace1e534bd89be73fece.jpg`
      },
      {
        id: 'adf0c6f1d11c33e016bf7facade4f25d63a5bb19',
        title: 'Power Glove – TELECOM',
        duration: 131000,
        streamUrl: `/audio/adf0c6f1d11c33e016bf7facade4f25d63a5bb19.mp3`,
        artworkUrl: `/artwork/adf0c6f1d11c33e016bf7facade4f25d63a5bb19.jpg`
      },
      {
        id: 'd5ac705747ffdf6283d1e8520382d1d504cc512e',
        title: 'Droid Bishop – When Androids Dream',
        duration: 262000,
        streamUrl: `/audio/d5ac705747ffdf6283d1e8520382d1d504cc512e.mp3`,
        artworkUrl: `/artwork/d5ac705747ffdf6283d1e8520382d1d504cc512e.jpg`
      },
      {
        id: '6c294f8e5b77e9ceb6c2e6f74d7edc58b71882ae',
        title: 'Futurecop! – Transformers',
        duration: 279000,
        streamUrl: `/audio/6c294f8e5b77e9ceb6c2e6f74d7edc58b71882ae.mp3`,
        artworkUrl: `/artwork/6c294f8e5b77e9ceb6c2e6f74d7edc58b71882ae.jpg`
      },
      {
        id: '5d906452886e98e569e59bb54d86063ee6e64e88',
        title: 'PyramidAeon – A World Of Our Own',
        duration: 252000,
        streamUrl: `/audio/5d906452886e98e569e59bb54d86063ee6e64e88.mp3`,
        artworkUrl: `/artwork/5d906452886e98e569e59bb54d86063ee6e64e88.jpg`
      },
      {
        id: '0d1e0dca0e3a49aab610da756ca084284c62af45',
        title: 'Dance with the Dead – Moon Runner',
        duration: 220000,
        streamUrl: `/audio/0d1e0dca0e3a49aab610da756ca084284c62af45.mp3`,
        artworkUrl: `/artwork/0d1e0dca0e3a49aab610da756ca084284c62af45.jpg`
      },
      {
        id: '0c6ccceed12738e4e7689cf4bd381aec8bae2a23',
        title: 'Droid Bishop – Moon Dancer',
        duration: 365000,
        streamUrl: `/audio/0c6ccceed12738e4e7689cf4bd381aec8bae2a23.mp3`,
        artworkUrl: `/artwork/0c6ccceed12738e4e7689cf4bd381aec8bae2a23.jpg`
      },
      {
        id: 'e571b0abbfe3e6e4cb9deb708e286f4ff1d51714',
        title: '20SIX Hundred – Level Up',
        duration: 228000,
        streamUrl: `/audio/e571b0abbfe3e6e4cb9deb708e286f4ff1d51714.mp3`,
        artworkUrl: `/artwork/e571b0abbfe3e6e4cb9deb708e286f4ff1d51714.jpg`
      },
      {
        id: '9010bef5e2a06b25e9d9650a52b6bc3e82b3dd7a',
        title: 'Monomer – Arcana Engine',
        duration: 229000,
        streamUrl: `/audio/9010bef5e2a06b25e9d9650a52b6bc3e82b3dd7a.mp3`,
        artworkUrl: `/artwork/9010bef5e2a06b25e9d9650a52b6bc3e82b3dd7a.jpg`
      },
      {
        id: 'd57120d289b5939cb1a80de6f0974525f3a37f44',
        title: 'Nowtro – Midnight Ride',
        duration: 296000,
        streamUrl: `/audio/d57120d289b5939cb1a80de6f0974525f3a37f44.mp3`,
        artworkUrl: `/artwork/d57120d289b5939cb1a80de6f0974525f3a37f44.jpg`
      },
      {
        id: '3ee10cdf8d9f39d0da09ca4c93ef55b4552d75fe',
        title: 'Kick Puncher – Beneath The Ice',
        duration: 201000,
        streamUrl: `/audio/3ee10cdf8d9f39d0da09ca4c93ef55b4552d75fe.mp3`,
        artworkUrl: `/artwork/3ee10cdf8d9f39d0da09ca4c93ef55b4552d75fe.jpg`
      },
      {
        id: 'ba2a5bd4f98f36ae29283e46985d579a3e481710',
        title: 'Power Glove – Punch!',
        duration: 179000,
        streamUrl: `/audio/ba2a5bd4f98f36ae29283e46985d579a3e481710.mp3`,
        artworkUrl: `/artwork/ba2a5bd4f98f36ae29283e46985d579a3e481710.jpg`
      },
      {
        id: '60d49a9ec255d657bba4d440bcd196ceae24c426',
        title: 'Starforce – Simulation 2099',
        duration: 313000,
        streamUrl: `/audio/60d49a9ec255d657bba4d440bcd196ceae24c426.mp3`,
        artworkUrl: `/artwork/60d49a9ec255d657bba4d440bcd196ceae24c426.jpg`
      },
      {
        id: 'f3b6454fc2debde182c0afe863b0e14972247b07',
        title: 'Dynatron – Contact',
        duration: 308000,
        streamUrl: `/audio/f3b6454fc2debde182c0afe863b0e14972247b07.mp3`,
        artworkUrl: `/artwork/f3b6454fc2debde182c0afe863b0e14972247b07.jpg`
      },
      {
        id: '2e1e07a0fda01334a895fe4e0d9e3b97e5941777',
        title: 'Flash Arnold – The Final Chase',
        duration: 212000,
        streamUrl: `/audio/2e1e07a0fda01334a895fe4e0d9e3b97e5941777.mp3`,
        artworkUrl: `/artwork/2e1e07a0fda01334a895fe4e0d9e3b97e5941777.jpg`
      },
      {
        id: '65dbd1d695dd3b16f57443d4f3b900c619d08f12',
        title: 'FM Attack – A Million Miles Away',
        duration: 237000,
        streamUrl: `/audio/65dbd1d695dd3b16f57443d4f3b900c619d08f12.mp3`,
        artworkUrl: `/artwork/65dbd1d695dd3b16f57443d4f3b900c619d08f12.jpg`
      },
      {
        id: '44afd90b8460b0d0f6054ad5bb147357f414ffaa',
        title: 'Robert Parker – Hardbody',
        duration: 337000,
        streamUrl: `/audio/44afd90b8460b0d0f6054ad5bb147357f414ffaa.mp3`,
        artworkUrl: `/artwork/44afd90b8460b0d0f6054ad5bb147357f414ffaa.jpg`
      },
      {
        id: 'fb9d1d08c6c7719fc2cc8834e174323051fc5e1b',
        title: 'AIRGLOW – Spliff & Wesson',
        duration: 213000,
        streamUrl: `/audio/fb9d1d08c6c7719fc2cc8834e174323051fc5e1b.mp3`,
        artworkUrl: `/artwork/fb9d1d08c6c7719fc2cc8834e174323051fc5e1b.jpg`
      },
      {
        id: 'b33eaa72cb166ab034c2a250570b2c898c199204',
        title: 'Aquawave – Tokyo Ride',
        duration: 300000,
        streamUrl: `/audio/b33eaa72cb166ab034c2a250570b2c898c199204.mp3`,
        artworkUrl: `/artwork/b33eaa72cb166ab034c2a250570b2c898c199204.jpg`
      },
      {
        id: 'd30ef4596a1e3508635d44d3f4c5be44e767868c',
        title: 'Forgotten Illusions – Network Panic',
        duration: 190000,
        streamUrl: `/audio/d30ef4596a1e3508635d44d3f4c5be44e767868c.mp3`,
        artworkUrl: `/artwork/d30ef4596a1e3508635d44d3f4c5be44e767868c.jpg`
      },
      {
        id: '98a32fda65d5303f26b0d50b93754e10db16d55e',
        title: 'Maethelvin – The Last Escape',
        duration: 221000,
        streamUrl: `/audio/98a32fda65d5303f26b0d50b93754e10db16d55e.mp3`,
        artworkUrl: `/artwork/98a32fda65d5303f26b0d50b93754e10db16d55e.jpg`
      },
      {
        id: 'a6790490e9ec52ae0896daa4079cf2ec70db0791',
        title: 'Flashworx – Odaiba Chase',
        duration: 286000,
        streamUrl: `/audio/a6790490e9ec52ae0896daa4079cf2ec70db0791.mp3`,
        artworkUrl: `/artwork/a6790490e9ec52ae0896daa4079cf2ec70db0791.jpg`
      },
      {
        id: 'a859e60167ad30554051ba4dfba032a89679dce8',
        title: 'Niky Nine – Exhausted Divinity',
        duration: 288000,
        streamUrl: `/audio/a859e60167ad30554051ba4dfba032a89679dce8.mp3`,
        artworkUrl: `/artwork/a859e60167ad30554051ba4dfba032a89679dce8.jpg`
      },
      {
        id: '3b1353c0144d0fe7edb5785aa4adf353eb6cc3bd',
        title: 'Absolute Valentine – In The 42nd Street',
        duration: 140000,
        streamUrl: `/audio/3b1353c0144d0fe7edb5785aa4adf353eb6cc3bd.mp3`,
        artworkUrl: `/artwork/3b1353c0144d0fe7edb5785aa4adf353eb6cc3bd.jpg`
      },
      {
        id: 'ef731662492b3ee1abec923ab619afa0d62f1724',
        title: 'Molasar – Talisman',
        duration: 260000,
        streamUrl: `/audio/ef731662492b3ee1abec923ab619afa0d62f1724.mp3`,
        artworkUrl: `/artwork/ef731662492b3ee1abec923ab619afa0d62f1724.jpg`
      },
      {
        id: '259049936d41b46955c8736d96615239a99f8f71',
        title: 'Lost Years – Amplifier',
        duration: 215000,
        streamUrl: `/audio/259049936d41b46955c8736d96615239a99f8f71.mp3`,
        artworkUrl: `/artwork/259049936d41b46955c8736d96615239a99f8f71.jpg`
      },
      {
        id: '916582e0c5932db5947a4ef4d6e618ebc5de7b58',
        title: 'Le Matos – Eyes Throat Genitals',
        duration: 367000,
        streamUrl: `/audio/916582e0c5932db5947a4ef4d6e618ebc5de7b58.mp3`,
        artworkUrl: `/artwork/916582e0c5932db5947a4ef4d6e618ebc5de7b58.jpg`
      },
      {
        id: '0d9f7a2b644e52107b3fc254180591c7cd174cb4',
        title: 'PyramidAeon – Eyes',
        duration: 223000,
        streamUrl: `/audio/0d9f7a2b644e52107b3fc254180591c7cd174cb4.mp3`,
        artworkUrl: `/artwork/0d9f7a2b644e52107b3fc254180591c7cd174cb4.jpg`
      },
      {
        id: '84a959f03f317a5c7ec09730c78a38889d7d646a',
        title: 'Mike Luck – Cityscape',
        duration: 287520.25,
        streamUrl: `/audio/84a959f03f317a5c7ec09730c78a38889d7d646a.mp3`,
        artworkUrl: `/artwork/84a959f03f317a5c7ec09730c78a38889d7d646a.jpg`
      },
      {
        id: 'a9827b3012c0249fc81ac7dcd242712d6af2f1ee',
        title: 'Mitch Murder – Saturdays',
        duration: 240147.125,
        streamUrl: `/audio/a9827b3012c0249fc81ac7dcd242712d6af2f1ee.mp3`,
        artworkUrl: `/artwork/a9827b3012c0249fc81ac7dcd242712d6af2f1ee.jpg`
      },
      {
        id: 'd0803396e7538eabdea7628b3b0ac824328beca8',
        title: 'MYRONE – The Pump Master',
        duration: 177000,
        streamUrl: `/audio/d0803396e7538eabdea7628b3b0ac824328beca8.mp3`,
        artworkUrl: `/artwork/d0803396e7538eabdea7628b3b0ac824328beca8.jpg`
      },
      {
        id: '8526972b87cf00eb5ec6e495d0e1b5e886c8a296',
        title: 'De Lorra – See You Again',
        duration: 265000,
        streamUrl: `/audio/8526972b87cf00eb5ec6e495d0e1b5e886c8a296.mp3`,
        artworkUrl: `/artwork/8526972b87cf00eb5ec6e495d0e1b5e886c8a296.jpg`
      },
      {
        id: '57a84dad931cdd7c212f87bc4f338dcf6d8b4438',
        title: 'Mythical Vigilante – Time Traveler (Feat. Nemix On Guitar)',
        duration: 297000,
        streamUrl: `/audio/57a84dad931cdd7c212f87bc4f338dcf6d8b4438.mp3`,
        artworkUrl: `/artwork/57a84dad931cdd7c212f87bc4f338dcf6d8b4438.jpg`
      },
      {
        id: 'b20c6eed81633f0f8368dc8be533c23b420a7797',
        title: 'Nitelight – Together Again (feat. Joel Goodson)',
        duration: 259000,
        streamUrl: '/audio/b20c6eed81633f0f8368dc8be533c23b420a7797.mp3',
        artworkUrl: '/artwork/b20c6eed81633f0f8368dc8be533c23b420a7797.jpg'
      }
];
export const getData = () => {
    return data;
};
const addNewTrack = (title,duration,nameFile) => {
    data.unshift({
        id: data.length + 1,
        title,
        duration:timeToMilliseconds(duration),
        streamUrl: `/audio/${nameFile}.mp3`,
        artworkUrl: `/artwork/${nameFile}.jpg`,
    });
};
addNewTrack("Dangerous Feelings - Mahuia Bridgman Cooper","2:56","4")
addNewTrack("Gesaffelstein – Aleph","4:46","3")
addNewTrack("Telaviv Skeler","2:09","8")
addNewTrack("Shadow in the Cloud Mahuia Bridgman","2:26","7")
addNewTrack("You Don t Know How Far I ll Go - Mahuia Bridgman Cooper","2:23","5")
addNewTrack("Mahuia Bridgman-Cooper - Shadow in the Cloud","6:13","6")

//функції для нових пісень з респонса

