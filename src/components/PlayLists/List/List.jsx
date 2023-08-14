import React, { useState } from "react";
import "./List.scss";
import { useDispatch, useSelector } from "react-redux";
import { namesPlayListsSelector } from "../../../selectorApp";
import Track from "./Track/Track";
import { capitalizeFirstLetter } from "../../../function";
import addIco from "./../../../img/icons/add.svg";
import { useEffect } from "react";
import { checkNameInArray } from './../../../function';

const List = ({ position, list }) => {
    const namesPlayLists = useSelector(namesPlayListsSelector);
    const dispatch = useDispatch();

    const [openListName, setOpenlistName] = useState(""); //анімація кнопки що відкритий плейлист якийсь плейлист за назвою плейлиста
    const openList = (name) => {
        dispatch({ type: `crate${name}List` }); //сворюємо новий масив плейлиста для відображення виконається лише якщо це запит на отримання стандартних плейлистів
        dispatch({ type: "setList", position, typeList: name }); //добавляємо новий масив на відображення , якщо typeList невідомий редюсеру він пойме що це новий плейлист та добавить зі списку нових плейлистів той що потрібно на відображення
        setOpenlistName(name);
    }; //відкрити плейлист за назвою назва має бути з великої літери

    const [openInput, setOpenInput] = useState(false);
    const [inputText, setInputText] = useState("");
    const pressEnter = (event) => {
        if (event.key === "Enter") {
            dispatch({
                type: "crateNewList",
                newName: capitalizeFirstLetter(inputText),
            }); //створюємо всій лейлист
            setInputText("");
            setOpenInput(false);
        }
    };
    useEffect(() => {
      if(openInput){
            setTimeout(()=>{setOpenInput(false)},5000)
      }
    }, [openInput]);//автозакривання
    return (
        <div className="list">
            <div className="list__buttons">
                <img
                    src={addIco}
                    alt=""
                    className="list__btn"
                    onClick={() => setOpenInput(!openInput)}
                />
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
                placeholder="Enter new name list"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={pressEnter}
            />
            <div className="list__tracks">
                {list
                    ? list.map((track, index) => {
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
                      })
                    : "No tracks"}
            </div>
            {Boolean(openListName!=='Default'&&openListName!=='Random'&&openListName!=='Rating')&&(
                  <button className="list__delete" onClick={()=>dispatch({type:'deleteNewList',name:openListName})}>Delete this list</button>
            )}
        </div>
    );
};

export default List;
