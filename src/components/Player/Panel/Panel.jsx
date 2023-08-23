import React, { useEffect, useState } from "react";
import "./Panel.scss";
import Cassette from "./Cassette/Cassette";

const Panel = React.memo(({ music, prev, next, position, audioRef,setAnaliz,setPlay,play }) => {
    const audio=audioRef.current

    useEffect(() => {
        if (play) {
            audio.play(); 
        }
    }, [play, music]); // Відтворити музику при зміні об'єкту music

    const clickPlay = () => {
        if (play) {
            setPlay(false); //стиль плеєра який не грає
            audio.pause(); 
        } else {
            setAnaliz(true)
            setPlay(true); //стиль плеєра який грає
            audio.play(); 
        }
    };
    return (
        <div className={play ? "panel play" : "panel"}>
            <Cassette music={music} play={play}/>
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
