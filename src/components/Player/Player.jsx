import React, { useEffect, useState } from "react";
import "./Player.scss";
import Cassette from "./Cassette/Cassette";

const Player = ({ music, prev, next, position }) => {
    const [play, setPlay] = useState(false);//анімація плеєра

    useEffect(() => {
        if (play) {
            document.querySelector(".audio").play(); //запуск відтворення
        }
    }, [play, music]);// Відтворити музику при зміні об'єкту music

    const clickPlay = () => {
        if (play) {
            setPlay(false);//стиль плеєра який не грає
            document.querySelector(".audio").pause(); //пауза
        } else {
            setPlay(true);//стиль плеєра який грає
            document.querySelector(".audio").play(); //запуск відтворення
        }
    };
    return (
        <div className={play ? "player play" : "player"}>
            <Cassette music={music} />
            <div className="player__controls">
                <button
                    onClick={prev}
                    className={position>0?"player__controls__button prev":"player__controls__button prev none"}
                ></button>
                <button
                    onClick={clickPlay}
                    className={
                        play
                            ? "player__controls__button pause"
                            : " player__controls__button play"
                    }
                    autoFocus="yes"
                ></button>
                <button
                    onClick={next}
                    className="player__controls__button next"
                ></button>
            </div>
        </div>
    );
};

export default Player;
