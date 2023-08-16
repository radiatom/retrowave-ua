import React, { useState } from "react";
import "./Cassette.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    nameCurrentListPlayerSelector,
    namesPlaylistsSelector,
} from "./../../../../selectorApp";
import download from "./../../../../img/icons/downloadMp3.svg";
import list from "./../../../../img/icons/man.png";
import randomImg from "./../../../../img/icons/random.png";
import ratingImg from "./../../../../img/icons/rating.png";
import defaultImg from "./../../../../img/icons/default.png";
import { useEffect } from "react";

const Cassette = ({ music }) => {
    const nameCurrentListPlayer = useSelector(nameCurrentListPlayerSelector);
    const namesPlaylists = useSelector(namesPlaylistsSelector);
    const [open, setOpen] = useState(false);
    const [openList, setOpenList] = useState(false);
    const dispatch = useDispatch();
    const clickOnListIco = () => {
        setOpenList(!openList);
    };
    if(openList===true){
        setTimeout(()=>setOpenList(false),10000)
    }//ховати вікно якщо його не сховав сам користувач
    if (open === true) {
        setTimeout(() => setOpen(false), 10000);
    } //ховати вікно якщо його не сховав сам користувач
    const clickListIcon = (name) => {
        dispatch({ type: "createPlayerList", name });
        dispatch({ type: "setPosition", position: 0 });
        setOpenList(false);
    };

    const [style, setStyle] = useState({ top: `0px` });
    useEffect(() => {
        const hight = document.getElementById("list").offsetHeight;
        setStyle({ top: `-${hight}px` });
    }, [namesPlaylists]);
    
    const ico = () => {
        switch (nameCurrentListPlayer) {
            case "Random": {
                return randomImg;
            }
            case "Default": {
                return defaultImg;
            }
            case "Rating": {
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
            <div className="cassette__spoilerList" style={openList?style:{top:'0px'}} >
                <div className="list" id="list">
                    <img
                        onClick={() => clickListIcon("Random")}
                        src={randomImg}
                        alt="randomImg"
                    />
                    <img
                        onClick={() => clickListIcon("Rating")}
                        src={ratingImg}
                        alt="ratingImg"
                    />
                    <img
                        onClick={() => clickListIcon("Default")}
                        src={defaultImg}
                        alt="defaultImg"
                    />
                    {namesPlaylists.map((item, index) => {
                        if (index > 2) {
                            return (
                                <span
                                    key={index}
                                    onClick={() => clickListIcon(item)}
                                >
                                    {item}
                                </span>
                            );
                        }
                    })}
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
