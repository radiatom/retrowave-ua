import React, { useState } from "react";
import "./List.scss";
import { useDispatch, useSelector } from "react-redux";
import { namesPlayListsSelector } from "../../../selectorApp";
import Track from "./Track/Track";
const List = ({ position, list }) => {
    const namesPlayLists = useSelector(namesPlayListsSelector);
    const dispatch = useDispatch();
      const [openListName,setOpenlistName]=useState('')
    const openList = (name) => {
        dispatch({ type: `crate${name}List` });
        dispatch({ type: "setList", position, typeList: name });
        setOpenlistName(name)
    }; //відкрити плейлист за назвою назва має бути з великої літери

    return (
        <div className="list">
            <div className="list__buttons">
                <button className="list__btn">
                    add
                </button>
                {namesPlayLists.map((item) => {
                    return (
                        <button
                            className={openListName===item?"list__btn open":"list__btn"}
                            onClick={() => openList(item)}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
            <div className="list__tracks">
                {list.map((track, index) => {
                    return (
                        <Track
                            id={track.id}
                            title={track.title}
                            index={index}
                            key={index}
                            rating={track.rating}
                            duration={track.duration}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default List;
