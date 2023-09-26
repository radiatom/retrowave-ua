import React, { FC } from "react";
import "./Player.scss";
import Logo from "./Logo/Logo";
import PanelPlayer from "./PanelPlayer/PanelPlayer";
import Time from "./Time/Time";
import Rating from "../Rating/Rating";
import Volume from "./Volume/Volume";
import { trackType } from "../../reduxToolkit/reducer";

type PlayerPropsType = {
    setOpenBoombox: React.Dispatch<React.SetStateAction<boolean>>;
    music: trackType;
    prev: () => void;
    next: () => void;
    position: number;
    audioRef: React.RefObject<HTMLMediaElement>;
    setAnaliz: React.Dispatch<React.SetStateAction<boolean>>;
    play: boolean;
    setPlay: React.Dispatch<React.SetStateAction<boolean>>;
};
const Player: FC<PlayerPropsType> = React.memo(
    ({ setOpenBoombox, music, prev, next, position, audioRef, setAnaliz, play, setPlay }) => {
        return (
            <div className="player">
                <Logo setOpenBoombox={setOpenBoombox} />
                <PanelPlayer
                    music={music}
                    prev={prev}
                    next={next}
                    position={position}
                    audioRef={audioRef}
                    setAnaliz={setAnaliz}
                    setPlay={setPlay}
                    play={play}
                />
                <h2 className="player__title">
                    <span>{music.idTrack}.</span> {music.title}
                </h2>
                {/* <h2 className="player__title"><span>{position}.</span> {music.title}</h2> */}
                {music.duration !== undefined && <Time audioRef={audioRef} duration={music.duration} next={next} />}
                {music.rating !== undefined && music.id !== undefined && (
                    <div className="player__rating">
                        <Rating rating={music.rating} id={music.id} />
                    </div>
                )}
                <Volume audioRef={audioRef} />
            </div>
        );
    }
);

export default Player;
