import React, { FC, useEffect} from "react";
import "./PanelPlayer.scss";
import Cassette from "./Cassette/Cassette";
import { trackType } from "../../../reduxToolkit/reducer";

type PanelPlayerPropsType={
    music:trackType
    prev: () => void;
    next: () => void;
    position: number;
    play: boolean;
    setPlay: React.Dispatch<React.SetStateAction<boolean>>;
    audioRef: React.RefObject<HTMLMediaElement>;
    setAnaliz: React.Dispatch<React.SetStateAction<boolean>>;
}
const PanelPlayer:FC<PanelPlayerPropsType> = React.memo(({ music, prev, next, position, audioRef, setAnaliz, setPlay, play }) => {
    
    const clickPlay = () => {
        if(audioRef.current){if (play) {
            setPlay(false); //стиль плеєра який не грає
            audioRef.current.pause();
        } else {
            setAnaliz(true);
            setPlay(true); //стиль плеєра який грає
            audioRef.current.play();
        }}
    };
    
    useEffect(() => {
        if (play&&audioRef.current) {
            audioRef.current.play();
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
                    autoFocus={true}
                ></button>
                <button onClick={next} className="panelPlayer__button panelButton panelButton_next"></button>
            </div>
        </div>
    );
});

export default PanelPlayer;
