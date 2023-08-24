import React, { useEffect } from "react";
import "./Panel.scss";

const Panel = ({ prev, next, position, play, setPlay, setOpenBoombox, audioRef, setAnaliz }) => {
    useEffect(() => {
        if (play) {
            audioRef.current.play(); //запуск відтворення
        }
    }, [play, position]); // Відтворити музику при зміні позиції

    const clickPlay = () => {
        setAnaliz(true);
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
        <div className="panel">
            <div className="panel__controls">
                <button className="panel__button panelButton"></button>
                <button
                    onClick={clickPlay}
                    className="panel__button  panelButton panelButton_play"
                    autoFocus="yes"
                ></button>
                <button
                    onClick={prev}
                    className={
                        position > 0
                            ? "panel__button panelButton panelButton_prev"
                            : "panel__button panelButton panelButton_prev panelButton_opacity"
                    }
                ></button>
                <button onClick={next} className="panel__button panelButton panelButton_next"></button>
                <button onClick={() => clickEject()} className="panel__button panelButton panelButton_eject"></button>
                <button onClick={() => clickPause()} className="panel__button panelButton panelButton_pause"></button>
            </div>
        </div>
    );
};

export default Panel;
