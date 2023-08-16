import React, { useState } from "react";
import "./Cassette.scss";
import { useDispatch, useSelector } from "react-redux";
import { namePlayListSelector } from "./../../../../selectorApp";
import download from "./../../../../img/icons/downloadMp3.svg";
import list from "./../../../../img/icons/list.png";
import randomImg from "./../../../../img/icons/random.png";
import ratingImg from "./../../../../img/icons/rating.png";
import defaultImg from "./../../../../img/icons/default.png";

const Cassette = ({ music }) => {
    const namePlayList = useSelector(namePlayListSelector);
    const [open, setOpen] = useState(false);
    const [openList, setOpenList] = useState(false);
    const dispatch = useDispatch();
    const clickOnListIco=()=>{
        setOpenList(!openList)
    }
    if(openList===true){
        setTimeout(()=>setOpenList(false),10000)
    }//ховати вікно якщо його не сховав сам користувач
    if(open===true){
        setTimeout(()=>setOpen(false),10000)
    }//ховати вікно якщо його не сховав сам користувач
    const clickRatingListIcon = () => {
        dispatch({ type: "crateRatingList" });
        dispatch({ type: "setPosition", position: 0 });
        setOpenList(false);
    };
    const clickDefaultListIcon = () => {
        dispatch({ type: "crateDefaultList" });
        dispatch({ type: "setPosition", position: 0 });
        setOpenList(false);
    };
    const clickRandomListIcon = () => {
        dispatch({ type: "crateRandomList" });
        dispatch({ type: "setPosition", position: 0 });
        setOpenList(false);
    };

    const ico = () => {
        switch (namePlayList) {
            case "random": {
                return randomImg;
            }
            case "default": {
                return defaultImg;
            }
            case "rating": {
                return ratingImg;
            }
            default:
                return list;
        }
    };
    return (
        <div className="cassette">
            {/*зображення касети*/}
            <img
                onClick={() => clickOnListIco()}
                className={
                    openList
                        ? "cassette__listIcon active"
                        : "cassette__listIcon"
                }
                src={ico()}
                alt="list"
            />
            <div
                className={
                    openList
                        ? "cassette__spoilerList open"
                        : "cassette__spoilerList"
                }
            >
                <div className="list">
                    <img
                        onClick={() => clickRandomListIcon()}
                        src={randomImg}
                        alt="randomImg"
                    />
                    <img
                        onClick={() => clickRatingListIcon()}
                        src={ratingImg}
                        alt="ratingImg"
                    />
                    <img
                        onClick={() => clickDefaultListIcon()}
                        src={defaultImg}
                        alt="defaultImg"
                    />
                    {/* <img src={list} alt="list" /> */}
                </div>
            </div>
            <img
                onClick={() => setOpen(!open)}
                className={
                    open
                        ? "cassette__downloadIcon active"
                        : "cassette__downloadIcon"
                }
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
                        href={music.streamUrl}
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
