import React, { useEffect, useState } from "react";
import "./PanelPlayer.scss";
import Cassette from "./Cassette/Cassette";

const PanelPlayer = React.memo(({ music, prev, next, position, audioRef, setAnaliz, setPlay, play }) => {
    const audio = audioRef.current;
    
    const clickPlay = () => {
        if (play) {
            setPlay(false); //стиль плеєра який не грає
            audio.pause();
        } else {
            setAnaliz(true);
            setPlay(true); //стиль плеєра який грає
            audio.play();
        }
    };
    
    useEffect(() => {
        if (play) {
            audio.play();
        }
    }, [play, music]); // Відтворити музику при зміні об'єкту music
    return (
        <div className={play ? "panelPlayer panelPlayer_play" : "panelPlayer"}>
            <Cassette music={music} play={play} />
            <div className="panelPlayer__controls">
                <button
                    onClick={prev}
                    className={
                        position > 0
                            ? "panelPlayer__button panelButton panelButton_prev"
                            : "panelPlayer__button panelButton panelButton_prev panelButton_opacity"
                    }
                ></button>
                <button
                    onClick={clickPlay}
                    className={
                        play
                            ? "panelPlayer__button panelButton panelButton_pause"
                            : "panelPlayer__button panelButton panelButton_play"
                    }
                    autoFocus="yes"
                ></button>
                <button onClick={next} className="panelPlayer__button panelButton panelButton_next"></button>
            </div>
        </div>
    );
});

export default PanelPlayer;
