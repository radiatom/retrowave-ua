import React, { useState } from "react";
import "./WindowList.scss";
import { useDispatch, useSelector } from "react-redux";
import { namesPlaylistsSelector, pageNumberSelector } from "../../../selectorApp";
import { capitalizeFirstLetter, containsLatinAndDigits } from "../../../function";
import addIco from "./../../../img/icons/add.svg";
import { useEffect } from "react";
import BtnDeleteList from "./BtnDeleteList/BtnDeleteList";
import ListTracks from "./ListTracks/ListTracks";

const WindowList = ({ leftOrRight, list, openListName, portion , lineHight  }) => {
    const namesPlaylists = useSelector(namesPlaylistsSelector);
    const dispatch = useDispatch();
    const pagesNumbers = useSelector(pageNumberSelector);
    const pageNumber = leftOrRight === "left" ? pagesNumbers.left : pagesNumbers.right;

    const [openInput, setOpenInput] = useState(false);
    useEffect(() => {
        if (openInput) {
            setTimeout(() => {
                setOpenInput(false);
            }, 30000);
        }
    }, [openInput]); //автозакривання

    const openList = (name) => {
        dispatch({ type: "setList", position: leftOrRight, typeList: name }); //добавляємо новий масив на відображення , якщо typeList невідомий редюсеру він пойме що це новий плейлист та добавить зі списку нових плейлистів той що потрібно на відображення
        dispatch({ type: "setOpenListName", position: leftOrRight, name }); //фіксуємо назву плейлиста який ми зараз відображаємо
        dispatch({ type: "setPageNumber", position: leftOrRight, number: 1 }); //вертаємо початкове значення номера сторінки
    }; //відкрити плейлист за назвою назва має бути з великої літери

    const [inputText, setInputText] = useState("");
    const pressEnter = (event) => {
        if (event.key === "Enter") {
            if (containsLatinAndDigits(inputText)) {
                dispatch({
                    type: "addNewList",
                    newName: capitalizeFirstLetter(inputText),
                });
            } //створюємо всій лейлист якщо там є латинські букви чи цифри
            setInputText("");
            setOpenInput(false);
        }
    };

    return (
        <div className="windowList">
            <div className="windowList__buttons">
                <button className="windowList__btn" onClick={() => setOpenInput(!openInput)}>
                    +
                </button>
                {namesPlaylists.map((item, index) => {
                    if (index !== 2) {
                        return (
                            <button
                                className={openListName === item ? "windowList__btn open" : "windowList__btn"}
                                onClick={() => openList(item)}
                            >
                                {item}
                            </button>
                        );
                    }
                })}
            </div>
            <input
                className={openInput ? "windowList__input open" : "windowList__input"}
                type="text"
                name="namelist"
                placeholder="Enter new name list (only Latin letters)"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={pressEnter}
            />
            <ListTracks
                list={list}
                pageNumber={pageNumber}
                openListName={openListName}
                leftOrRight={leftOrRight}
                portion={portion}
                lineHight={lineHight}
            />
            <BtnDeleteList openListName={openListName} />
        </div>
    );
};

export default WindowList;
