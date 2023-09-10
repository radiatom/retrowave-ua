import React, { useState } from "react";
import "./Cassette.scss";
import { useDispatch, useSelector } from "react-redux";
import { nameCurrentListPlayerSelector, namesPlaylistsSelector } from "./../../../../selectorApp";
import download from "./../../../../img/icons/downloadMp3.svg";
import list from "./../../../../img/icons/man.png";
import randomImg from "./../../../../img/icons/random.png";
import ratingImg from "./../../../../img/icons/rating.png";
import defaultImg from "./../../../../img/icons/default.png";
import { useEffect } from "react";

const Cassette = React.memo(({ music,play }) => {
    const dispatch = useDispatch();
    const nameCurrentListPlayer = useSelector(nameCurrentListPlayerSelector);
    const namesPlaylists = useSelector(namesPlaylistsSelector);
    const [openDownloadSpoiler, setOpenDownloadSpoiler] = useState(false);
    const [openList, setOpenList] = useState(false);
    const [style, setStyle] = useState({ top: `0px` });

    useEffect(() => {
        const hight = document.getElementById("cassette__list").offsetHeight;
        setStyle({ top: `-${hight}px` });
    }, [namesPlaylists]);
    useEffect(() => {
        const hight = document.getElementById("cassette__list").offsetHeight;
        setStyle({ top: `-${hight}px` });
    }, []);
    if (openList === true) {
        setTimeout(() => setOpenList(false), 10000);
    } //ховати вікно якщо його не сховав сам користувач
    if (openDownloadSpoiler === true) {
        setTimeout(() => setOpenDownloadSpoiler(false), 10000);
    } //ховати вікно якщо його не сховав сам користувач

    const ico = () => {
        switch (nameCurrentListPlayer) {
            case "Random": {
                return randomImg;
            }
            case "Default": {
                return defaultImg;
            }
            case "": {
                return defaultImg;
            }
            case "Rating": {
                return ratingImg;
            }
            default:
                return list;
        }
    };

    const clickOnListIco = () => {
        setOpenList(!openList);
    };
    
    const clickListIcon = (name) => {
        dispatch({ type: "createPlayerList", name });
        dispatch({ type: "setPosition", position: 0 });
        setOpenList(false);
    };

    return (
        <div className={play?"cassette play":"cassette"}>
            <img
                onClick={() => clickOnListIco()}
                className={openList ? "cassette__listIcon active" : "cassette__listIcon"}
                src={ico()}
                alt="list"
            />
            <div className="cassette__list" style={openList ? style : { top: "0px" }} id="cassette__list">
                <img onClick={() => clickListIcon("Random")} src={randomImg} alt="randomImg" />
                <img onClick={() => clickListIcon("Rating")} src={ratingImg} alt="ratingImg" />
                <img onClick={() => clickListIcon("Default")} src={defaultImg} alt="defaultImg" />
                {namesPlaylists.map((item, index) => {
                    if (index > 2) {
                        return (
                            <span key={index} onClick={() => clickListIcon(item)}>
                                {item}
                            </span>
                        );
                    }
                })}
            </div>
            <img
                onClick={() => setOpenDownloadSpoiler(!openDownloadSpoiler)}
                className={openDownloadSpoiler ? "cassette__downloadIcon active" : "cassette__downloadIcon"}
                src={download}
                alt="download"
            />
            <div className={openDownloadSpoiler ? "cassette__spoiler open" : "cassette__spoiler"}>
                <div className="download">
                    <a className="download__link" href={music.artworkUrl} download target="_blank" rel="noopener">
                        IMG
                    </a>
                    <a className="download__link" href={music.streamUrl} download target="_blank" rel="noopener">
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
            <div className="cassette__reel left"></div>
            <div className="cassette__reel right"></div>
            <div className="cassette__body"></div>
        </div>
    );
})

export default Cassette;
