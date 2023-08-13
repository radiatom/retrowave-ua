import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { addMusics } from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
    addDataAppSelector,
    positionSelector,
    totalMusicListAppSelector,
    typePlaylistSelector,
} from "./selectorApp";
import Volume from "./components/Volume/Volume";
import Rating from "./components/Rating/Rating";
import Time from "./components/Time/Time";
import Player from "./components/Player/Player";
import Logo from "./components/Logo/Logo";
import PlayLists from "./components/PlayLists/PlayLists";

function App() {
    const totalMusicList = useSelector(totalMusicListAppSelector);
    const typePlayList = useSelector(typePlaylistSelector);
    const music = useSelector(addDataAppSelector);
    const position = useSelector(positionSelector); //позиція треку
    const dispatch = useDispatch();
    const audioRef = useRef(null);
    const [back, setBack] = useState(false); //завантаження фонової картинки

    useEffect(() => {
        setBack(true); //заблюрити фон
        if (totalMusicList.length === 0) {
            //виконається при першому заході на сторінку і коли в локал сторі нема данних
            dispatch(addMusics()); //відправити запит на пісні якщо наш стор пустий
        } else {
            if (typePlayList === "") {
                dispatch({ type: "crateDefaultList" });
            } //створити масив рандомних треків
            dispatch({ type: "addMusic", position }); //завантажити трек під індексом 'position' перший раз
        }
    }, [totalMusicList.length]);

    useEffect(() => {
        dispatch({ type: "addMusic", position }); //завантажити трек під індексом 'position' при зміні позиції
    }, [position, typePlayList]);

    const prev = () => {
        if (position > 0) {
            dispatch({ type: "setPosition", position: position - 1 });
            // setPosition(position - 1);
        }
    };
    const next = () => {
        if (position < totalMusicList.length - 1) {
            //якщо в списку 4 пісні
            dispatch({ type: "setPosition", position: position + 1 });
            // setPosition(position + 1);
        } else {
            dispatch({ type: "setPosition", position: 0 });
            // setPosition(0);
        }
    };
    return (
        <div className="App">
            {music && (
                <div
                    className="theme theme_palms" //темна тема а якщо є зображення тоді замість теми зображення
                    style={{
                        backgroundImage: `url( ${music.artworkUrl})`,
                    }}
                >
                    {/*блюр фону*/}
                    <div
                        className={
                            back ? "theme__overlay active" : "theme__overlay"
                        }
                    ></div>
                    <audio
                        className="audio"
                        src={music.streamUrl}
                        ref={audioRef}
                        id="audio"
                    ></audio>
                    {/* <PlayLists
                        music={music}
                        prev={prev}
                        next={next}
                        position={position}
                        audioRef={audioRef}
                    /> */}
                    <div className="theme__container">
                        <h1 className="theme__h1">Retrowave Radio UA</h1>
                        <Logo />
                        <Player
                            music={music}
                            prev={prev}
                            next={next}
                            position={position}
                        />
                        <h2 className="theme__title">
                            <span>{music.idTrack}.</span> {music.title}
                        </h2>
                        {/* <h2 className="theme__title"><span>{position}.</span> {music.title}</h2> */}
                        <Time
                            audioRef={audioRef}
                            duration={music.duration}
                            next={next}
                        />
                        {/* <div className="theme__rating"> */}
                            <Rating rating={music.rating} id={music.id} />
                        {/* </div> */}
                        <Volume />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
