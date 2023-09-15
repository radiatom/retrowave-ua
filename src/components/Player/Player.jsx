import React from "react";
import "./Player.scss";
import Logo from "./Logo/Logo";
import PanelPlayer from "./PanelPlayer/PanelPlayer";
import Time from "./Time/Time";
import Rating from "./../Rating/Rating";
import Volume from "./Volume/Volume";

const Player = React.memo(({ setOpenBoombox, music, prev, next, position, audioRef, setAnaliz, play, setPlay }) => {
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
            <Time audioRef={audioRef} duration={music.duration} next={next} />
            <div className="player__rating">
                <Rating rating={music.rating} id={music.id} />
            </div>
            <Volume audioRef={audioRef} />
        </div>
    );
});

export default Player;