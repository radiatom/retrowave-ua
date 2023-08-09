import React, { useState } from "react";
import "./Cassette.scss";
import download from "./../../../img/icons/downloadMp3.svg";
import list from './../../../img/icons/list.png'
import { useDispatch } from "react-redux";
const Cassette = ({ music }) => {
    const [open, setOpen] = useState(false);
    const [openList, setOpenList] = useState(false);
    const dispatch = useDispatch()
    const clickListIcon=()=>{
        dispatch({type:"crateRatingList"})
        dispatch({type:"setPosition",position:0})
    }
    return (
        <div className="cassette">
            {/*зображення касети*/}
            <img
                onClick={() => setOpen(!open)}
                className={open?"cassette__downloadIcon active":"cassette__downloadIcon"}
                src={download}
                alt="download"
            />
            <img
                // onClick={() => setOpenList(!openList)}
                onClick={()=>clickListIcon()}
                className={openList?"cassette__listIcon active":"cassette__listIcon"}
                src={list}
                alt="list"
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
