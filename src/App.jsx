import { useEffect, useRef, useState } from "react";
import "./App.scss";
import { addMusics } from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
    addDataAppSelector,
    positionSelector,
    totalMusicListAppSelector,
} from "./selectorApp";
import Volume from "./components/Volume/Volume";
import Rating from "./components/Rating/Rating";
import Time from "./components/Time/Time";
import Player from "./components/Player/Player";
import Logo from "./components/Logo/Logo";

function App() {
    const totalMusicList = useSelector(totalMusicListAppSelector);
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
        }else {
            dispatch({ type: "crateRandomList" }); //створити масив рандомних треків
            dispatch({ type: "addMusic", position }); //завантажити трек під індексом 'position' перший раз
        }
    }, [totalMusicList.length]);

    useEffect(() => {
        dispatch({ type: "addMusic", position }); //завантажити трек під індексом 'position' при зміні позиції
    }, [position]);

    const prev = () => {
        if (position > 0) {
            dispatch({ type: "setPosition", position: position - 1 });
            // setPosition(position - 1);
        }
    };
    const next = () => {
        if (position < totalMusicList.length-1) {
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
                        backgroundImage:`url( ${music.artworkUrl})`,
                    }}
                >
                    <audio
                        className="audio"
                        src={music.streamUrl}
                        ref={audioRef}
                    ></audio>

                    {/*блюр фону*/}
                    <div
                        className={
                            back ? "theme__overlay active" : "theme__overlay"
                        }
                    ></div>
                    <div className="theme__container">
                        <h1 className="theme__h1">Retrowave Radio UA</h1>
                        <Logo />
                        <Player music={music} prev={prev} next={next} position={position}/>
                        <h2 className="theme__title"><span>{music.idTrack}.</span> {music.title}</h2>
                        {/* <h2 className="theme__title"><span>{position}.</span> {music.title}</h2> */}
                        <Time
                            audioRef={audioRef}
                            duration={music.duration}
                            next={next}
                        />
                        <Rating rating={music.rating} id={music.id}/>
                        <Volume />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
