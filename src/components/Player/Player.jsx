import React from "react";
import "./Player.scss";
import Logo from './Logo/Logo'
import Panel from './Panel/Panel'
import Time from './Time/Time'
import Rating from './../Rating/Rating'
import Volume from './Volume/Volume'

const Player = ({ setOpenLists, music, prev, next, position, audioRef }) => {
    return (
        <div className="player">
            <Logo setOpenLists={setOpenLists} />
            <Panel music={music} prev={prev} next={next} position={position} />
            <h2 className="player__title">
                <span>{music.idTrack}.</span> {music.title}
            </h2>
            {/* <h2 className="player__title"><span>{position}.</span> {music.title}</h2> */}
            <Time audioRef={audioRef} duration={music.duration} next={next} />
            <div className="player__rating">
                <Rating rating={music.rating} id={music.id} />
            </div>
            <Volume />
        </div>
    );
};

export default Player;
