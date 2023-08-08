import React, { useState } from "react";
import "./Cassette.scss";
import download from "./../../../img/icons/downloadMp3.svg";

const Cassette = ({ music }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="cassette">
            {/*зображення касети*/}
            <img
                onClick={() => setOpen(!open)}
                className={open?"cassette__downloadIcon active":"cassette__downloadIcon"}
                src={download}
                alt="download"
            />
            <div
                className={
                    open ? "cassette__spoiler open" : "cassette__spoiler"
                }
            >
                <div className="download">
                    <a
                        className="download__link"
                        href={music.artworkUrl}
                        download
                        target="_blank"
                    >
                        IMG
                    </a>
                    <a
                        className="download__link"
                        href={ music.streamUrl}
                        download
                        target="_blank"
                    >
                        MP3
                    </a>
                </div>
            </div>
            <div
                className="cassette__cover"
                style={{
                    backgroundImage: `url( ${music.artworkUrl})`,
                }}
            ></div>
            <div className="cassette__reel cassette__reel_left"></div>
            <div className="cassette__reel cassette__reel_right"></div>
            <div className="cassette__body"></div>
        </div>
    );
};

export default Cassette;
