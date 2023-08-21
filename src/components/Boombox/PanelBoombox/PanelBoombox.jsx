import React, { useEffect } from "react";
import "./PanelBoombox.scss";

const PanelBoombox = ({ music, prev, next, position, play, setPlay, setOpenBoombox,audioRef}) => {
    useEffect(() => {
        if (play) {
            audioRef.current.play(); //запуск відтворення
        }
    }, [play, music]); // Відтворити музику при зміні об'єкту music

    const clickPlay = () => {
        setPlay(true); //стиль плеєра який грає
        audioRef.current.play(); //запуск відтворення
    };
    const clickEject = () => {
        setOpenBoombox(false);
    };
    const clickPause = () => {
        setPlay(false); //стиль плеєра який не грає
        audioRef.current.pause(); //пауза
    };
    return (
        <div className={play ? "panelBoombox play" : "panelBoombox"}>
            <div className="panelBoombox__controls">
                <button className="panelBoombox__controls__button"></button>
                <button onClick={clickPlay} className=" panelBoombox__controls__button play" autoFocus="yes"></button>
                <button
                    onClick={prev}
                    className={position > 0 ? "panelBoombox__controls__button prev" : "panelBoombox__controls__button prev none"}
                ></button>
                <button onClick={next} className="panelBoombox__controls__button next"></button>
                <button onClick={() => clickEject()} className="panelBoombox__controls__button eject"></button>
                <button onClick={() => clickPause()} className="panelBoombox__controls__button pause"></button>
            </div>
        </div>
    );
};

export default PanelBoombox;
