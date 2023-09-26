import React, { FC, KeyboardEvent, useState } from "react";
import "./WindowList.scss";
import { useDispatch, useSelector } from "react-redux";
import { namesPlaylistsSelector, pageNumberSelector } from "../../../selectorApp";
import { capitalizeFirstLetter, containsLatinAndDigits } from "../../../function";
import { useEffect } from "react";
import BtnDeleteList from "./BtnDeleteList/BtnDeleteList";
import ListTracks from "./ListTracks/ListTracks";
import { addNewList, dataType, setList, setOpenListName, setPageNumber } from "../../../reduxToolkit/reducer";

type WindowListPropsType = {
    leftOrRight: string;
    list: dataType;
    openListName: string;
    portion: number;
    lineHight: number;
};
const WindowList: FC<WindowListPropsType> = React.memo(({ leftOrRight, list, openListName, portion, lineHight }) => {
    const namesPlaylists = useSelector(namesPlaylistsSelector);
    const dispatch = useDispatch();
    const pagesNumbers = useSelector(pageNumberSelector);
    const pageNumber = leftOrRight === "left" ? pagesNumbers.left : pagesNumbers.right;

    const [openInput, setOpenInput] = useState(false);

    const openList = (name: string) => {
        dispatch(setList({ position: leftOrRight, typeList: name })); //добавляємо новий масив на відображення , якщо typeList невідомий редюсеру він пойме що це новий плейлист та добавить зі списку нових плейлистів той що потрібно на відображення
        dispatch(setOpenListName({ position: leftOrRight, name })); //фіксуємо назву плейлиста який ми зараз відображаємо
        dispatch(setPageNumber({ position: leftOrRight, number: 1 })); //вертаємо початкове значення номера сторінки
    }; //відкрити плейлист за назвою назва має бути з великої літери

    useEffect(() => {
        if (openInput) {
            setTimeout(() => {
                setOpenInput(false);
            }, 30000);
        }
    }, [openInput]); //автозакривання
    const [inputText, setInputText] = useState("");
    const pressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            if (containsLatinAndDigits(inputText)) {
                dispatch(addNewList({ newName: capitalizeFirstLetter(inputText) }));
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
                                key={index}
                                className={openListName === item ? "windowList__btn windowList__btn_pressed" : "windowList__btn"}
                                onClick={() => openList(item)}
                            >
                                {item}
                            </button>
                        );
                    }
                })}
            </div>
            <input
                className={openInput ? "windowList__input windowList__input_open" : "windowList__input"}
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
            <BtnDeleteList openListName={openListName} openList={openList} />
        </div>
    );
});

export default WindowList;
