import React, { useState } from "react";
import "./List.scss";
import { useDispatch, useSelector } from "react-redux";
import { namesPlayListsSelector } from "../../../selectorApp";
import Track from "./Track/Track";
import { capitalizeFirstLetter } from "../../../function";
const List = ({ position, list }) => {
    const namesPlayLists = useSelector(namesPlayListsSelector);
    const dispatch = useDispatch();

    const [openListName, setOpenlistName] = useState("");
    const openList = (name) => {
        dispatch({ type: `crate${name}List` });
        dispatch({ type: "setList", position, typeList: name });
        setOpenlistName(name);
    }; //відкрити плейлист за назвою назва має бути з великої літери

    const [openInput, setOpenInput] = useState(false);
    const [inputText,setInputText]=useState('')
    const pressEnter = (event) => {
      if (event.key === "Enter") {
        dispatch({ type: "crateNewList", newName: capitalizeFirstLetter(inputText) });
        setInputText('')
        setOpenInput(false)
      }
    };
    return (
        <div className="list">
            <div className="list__buttons">
                <button
                  //   className={openInput ? "list__btn open" : "list__btn"}
                  className="list__btn"
                    onClick={() => setOpenInput(!openInput)}
                >
                    add
                </button>
                {namesPlayLists.map((item) => {
                    return (
                        <button
                            className={
                                openListName === item
                                    ? "list__btn open"
                                    : "list__btn"
                            }
                            onClick={() => openList(item)}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
            <input
                className={openInput ? "list__input open" : "list__input"}
                type="text"
                name="namelist"
                placeholder="New name list"
                value={inputText}
                onChange={event=>setInputText(event.target.value)}
                onKeyDown={pressEnter}
            />
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
