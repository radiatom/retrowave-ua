import React from "react";
import "./Track.scss";
import Rating from "./../../../Rating/Rating";
import { newTime } from "../../../../function";
import { useState } from "react";
import addIco from "./../../../../img/icons/add.svg";
import { namesPlayListsSelector } from "../../../../selectorApp";
import { useDispatch, useSelector } from "react-redux";

const Track = ({ title, index, rating, duration, id, openListName,leftOrRight }) => {
    const [active, setActive] = useState(false);
    const namesPlayLists = useSelector(namesPlayListsSelector);
    const dispatch = useDispatch();
    const click = (name) => {
        dispatch({
            type: "addTrackIntoList",
            intoList: name,
            currentList: openListName[leftOrRight+''],
            id: id,
        });
        const secondNameOpenList={...openListName}
        delete secondNameOpenList[leftOrRight+'']
       if(Object.values(secondNameOpenList)[0]===name){ if(leftOrRight==="left"){//якщо в правому вікні робиться операція до в лівому добавиться нова пісня
            dispatch({ type: "setList", position:"right", typeList: name })
        }else{dispatch({ type: "setList", position:"left", typeList: name })}}

        setActive(false);
    };
    return (
        <div className="track">
            <div className="track__position">{index + 1}</div>
            <div className="track__title">{title}</div>
            <div className="track__rating">
                <Rating rating={rating} id={id} />{" "}
            </div>
            <div className="track__duration">
                {newTime(Math.round(duration / 1000))}
            </div>
            <img
                className={active ? "track__addIco active" : "track__addIco"}
                onClick={() => setActive(!active)}
                src={addIco}
                alt="addIco"
            />
            <div className={active ? "track__spoiler open" : "track__spoiler"}>
                {namesPlayLists.map((name, index) => {
                    if (index > 1) {
                        return (
                            <button
                                className="track__btn"
                                onClick={() => click(name)}
                            >
                                {name}
                            </button>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Track;
