import React, { useEffect, useState } from "react";
import "./Panel.scss";
import Cassette from "./Cassette/Cassette";

const Panel = React.memo(({ music, prev, next, position, audioRef }) => {
    const [play, setPlay] = useState(false); //анімація плеєра

    useEffect(() => {
        if (play) {
            audioRef.current.play(); //запуск відтворення
        }
    }, [play, music]); // Відтворити музику при зміні об'єкту music

    const clickPlay = () => {
        if (play) {
            setPlay(false); //стиль плеєра який не грає
            audioRef.current.pause(); //пауза
        } else {
            setPlay(true); //стиль плеєра який грає
            audioRef.current.play(); //запуск відтворення
        }
    };
    return (
        <div className={play ? "panel play" : "panel"}>
            <Cassette music={music} />
            <div className="panel__controls">
                <button
                    onClick={prev}
                    className={position > 0 ? "panel__controls__button prev" : "panel__controls__button prev none"}
                ></button>
                <button
                    onClick={clickPlay}
                    className={play ? "panel__controls__button pause" : " panel__controls__button play"}
                    autoFocus="yes"
                ></button>
                <button onClick={next} className="panel__controls__button next"></button>
            </div>
        </div>
    );
});

export default Panel;
