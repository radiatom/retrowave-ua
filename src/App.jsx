import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { addMusics } from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
    addDataAppSelector,
    positionSelector,
    nameCurrentListPlayerSelector,
    DefaultListSelector,
    numberOfTracksSelector,
} from "./selectorApp";
import Boombox from "./components/Boombox/Boombox";
import Player from "./components/Player/Player";

function App() {
    const [back, setBack] = useState(false); //блюр фонової картинки
    const [openBoombox, setOpenBoombox] = useState(false); //показати бумбокс?
    const nameCurrentListPlayer = useSelector(nameCurrentListPlayerSelector); //назва поточного плейлиста
    const position = useSelector(positionSelector); //позиція в плейлисті
    const DefaultList = useSelector(DefaultListSelector); //весь список треків
    const music = useSelector(addDataAppSelector); //дані про трек
    const numberOfTracks = useSelector(numberOfTracksSelector); //кількість треків в листі що відтворюється
    const dispatch = useDispatch();
    const audioRef = useRef(null);

    useEffect(() => {
        setBack(true); //заблюрити фон
        if (DefaultList.length === 0) {
            dispatch(addMusics()); //відправити запит на пісні якщо наш стор пустий
        }
    }, []);

    useEffect(() => {
        dispatch({ type: "addMusic", position }); //завантажити трек під індексом 'position' при зміні позиції
    }, [position, nameCurrentListPlayer]);

    const prev = () => {
        if (position > 0) {
            dispatch({ type: "setPosition", position: position - 1 });
            // setPosition(position - 1);
        }
    };
    const next = () => {
        if (position < numberOfTracks - 1) {
            //якщо в списку 4 пісні
            dispatch({ type: "setPosition", position: position + 1 });
            // setPosition(position + 1);
        } else {
            dispatch({ type: "setPosition", position: 0 });
            // setPosition(0);
        }
    };
    return (
        music && (
            <div
                className="app" //темний фон якщо нема зображення
                style={{
                    backgroundImage: `url( ${music.artworkUrl})`,
                }}
            >
                <div className={back ? "app__blur active" : "app__blur"}></div>
                <audio className="audio" src={music.streamUrl} ref={audioRef} id="audio"></audio>
                <h1 className="app__h1">Retrowave Radio UA</h1>
                <div className={openBoombox ? "app__boombox open" : "app__boombox"}>
                    <Boombox
                        music={music}
                        prev={prev}
                        next={next}
                        position={position}
                        audioRef={audioRef}
                        setOpenBoombox={setOpenBoombox}
                    />
                </div>
                <div className={openBoombox ? "app__player" : "app__player open"}>
                    <Player
                        music={music}
                        prev={prev}
                        next={next}
                        position={position}
                        audioRef={audioRef}
                        setOpenBoombox={setOpenBoombox}
                    />
                </div>
            </div>
        )
    );
}

export default App;
