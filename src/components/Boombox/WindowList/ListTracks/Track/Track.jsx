import React, { useEffect } from "react";
import "./Track.scss";
import Rating from "./../../../../Rating/Rating";
import { newTime } from "../../../../../function";
import { useState } from "react";
import addIco from "./../../../../../img/icons/add.svg";
import { addDataAppSelector, namesPlaylistsSelector, openListNameSelector } from "../../../../../selectorApp";
import { useDispatch, useSelector } from "react-redux";
import BtnDeleteTrack from "./BtnDeleteTrack/BtnDeleteTrack";
import {
    addTrackIntoList,
    setList,
    deleteTrackWithList,
    setPosition,
    createPlayerList,
} from "./../../../../../reduxToolkit/reducer";
import DeleteAlert from "../../../../DeleteAlert/DeleteAlert";

const Track = React.memo(({ title, index, rating, duration, id, leftOrRight }) => {
    const openListName = useSelector(openListNameSelector);
    const [active, setActive] = useState(false);
    const [activeAlert, setActiveAlert] = useState(false);
    const [yesOrNo, setYesOrNo] = useState(null);

    const namesPlaylists = useSelector(namesPlaylistsSelector);
    const music = useSelector(addDataAppSelector); //дані про трек
    const dispatch = useDispatch();

    const clickAddingTrack = (name) => {
        dispatch(addTrackIntoList({ intoList: name, currentList: openListName[leftOrRight + ""], id: id }));

        const secondNameOpenList = { ...openListName };
        delete secondNameOpenList[leftOrRight + ""];
        if (Object.values(secondNameOpenList)[0] === name) {
            if (leftOrRight === "left") {
                //якщо в правому вікні робиться операція до в лівому добавиться нова пісня
                dispatch(setList({ position: "right", typeList: name }));
            } else {
                dispatch(setList({ position: "left", typeList: name }));
            }
        }

        setActive(false);
    };
    const clickDeleteTrack = () => {
        dispatch(deleteTrackWithList({ currentList: openListName[leftOrRight + ""], id }));
        dispatch(setList({ position: leftOrRight, typeList: openListName[leftOrRight + ""] })); //добавляємо новий масив на відображення

        const secondNameOpenList = { ...openListName };
        delete secondNameOpenList[leftOrRight + ""];
        if (Object.values(secondNameOpenList)[0] === openListName[leftOrRight + ""]) {
            if (leftOrRight === "left") {
                //якщо в правому вікні робиться операція до в лівому добавиться нова пісня
                dispatch(setList({ position: "right", typeList: openListName[leftOrRight + ""] }));
            } else {
                dispatch(setList({ position: "left", typeList: openListName[leftOrRight + ""] }));
            }
        }
    };

    const playTrack = () => {
        dispatch(createPlayerList({ name: openListName[leftOrRight + ""] }));
        dispatch(setPosition({ position: index }));
    };

    useEffect(() => {
        if (yesOrNo === true) {
            clickDeleteTrack();
            setActiveAlert(null);
        } else {
            setActiveAlert(null);
        }
    }, [yesOrNo]);
    return (
        <div className={music.title === title ? "track track_sounds" : "track"}>
            <div className="track__position">{index + 1}</div>
            <div className="track__title" onClick={playTrack}>
                {title}
            </div>
            <div className="track__rating">
                <Rating rating={rating} id={id} />{" "}
            </div>
            <div className="track__duration">{newTime(Math.round(duration / 1000))}</div>
            {Boolean(namesPlaylists.length > 3) && (
                <img
                    className={active ? "track__addIco track__addIco_active" : "track__addIco"}
                    onClick={() => setActive(!active)}
                    src={addIco}
                    alt="addIco"
                />
            )}
            <div className={active ? "track__spoiler track__spoiler_open" : "track__spoiler"}>
                {namesPlaylists.map((name, index) => {
                    if (index > 2) {
                        return (
                            <button className="track__btnToList" onClick={() => clickAddingTrack(name)} key={index}>
                                {name}
                            </button>
                        );
                    }
                })}
            </div>
            <div className={activeAlert ? "track__spoiler track__spoiler_open" : "track__spoiler"}>
                <DeleteAlert setYesOrNo={setYesOrNo} />
            </div>
            <BtnDeleteTrack openListName={openListName[leftOrRight + ""]} setActiveAlert={setActiveAlert} />
        </div>
    );
});

export default Track;
