import React, { FC, useEffect } from "react";
import "./Panel.scss";
type PanelPropsType = {
    prev: () => void;
    next: () => void;
    position: number;
    play: boolean;
    setPlay: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenBoombox: React.Dispatch<React.SetStateAction<boolean>>;
    audioRef: React.RefObject<HTMLMediaElement>;
    setAnaliz: React.Dispatch<React.SetStateAction<boolean>>;
};
const Panel: FC<PanelPropsType> = ({ prev, next, position, play, setPlay, setOpenBoombox, audioRef, setAnaliz }) => {
    const clickPlay = () => {
        if (audioRef.current) {
            setAnaliz(true);
            setPlay(true); //стиль плеєра який грає
            audioRef.current.play(); //запуск відтворення
        }
    };
    const clickEject = () => {
        setOpenBoombox(false);
    };
    const clickPause = () => {
        if (audioRef.current) {
            setPlay(false); //стиль плеєра який не грає
            audioRef.current.pause(); //пауза
        }
    };
    useEffect(() => {
        if (play && audioRef.current) {
            audioRef.current.play(); //запуск відтворення
        }
    }, [play, position]); // Відтворити музику при зміні позиції
    return (
        <div className="panel">
            <div className="panel__controls">
                <button className="panel__button panelButton"></button>
                <button onClick={clickPlay} className="panel__button  panelButton panelButton_play" autoFocus={true}></button>
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
