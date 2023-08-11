import React from "react";
import './CassetteBoombox.scss'

const CassetteBoombox = ({music,play}) => {
    return (
        <div className={play?"cassetteBoombox play":"cassetteBoombox"}>
            <div
                className="cassetteBoombox__cover"
                style={{
                    backgroundImage: `url( ${music.artworkUrl})`,
                }}
            ></div>
            <div className="cassetteBoombox__reel cassetteBoombox__reel_left"></div>
            <div className="cassetteBoombox__reel cassetteBoombox__reel_right"></div>
            <div className="cassetteBoombox__body"></div>
        </div>
    );
};

export default CassetteBoombox;
