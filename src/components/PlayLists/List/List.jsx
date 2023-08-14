import React, { useState } from "react";
import "./List.scss";
import { useDispatch, useSelector } from "react-redux";
import { namesPlayListsSelector } from "../../../selectorApp";
import Track from "./Track/Track";
import { capitalizeFirstLetter } from "../../../function";
import addIco from "./../../../img/icons/add.svg";
import { useEffect } from "react";

const List = ({ position, list,openListName, setOpenListName }) => {
    const namesPlayLists = useSelector(namesPlayListsSelector);
    const dispatch = useDispatch();
     
    // const [openListName, setOpenlistName] = useState(""); //анімація кнопки що відкритий плейлист якийсь плейлист за назвою плейлиста

    const openList = (name) => {
        dispatch({ type: `crate${name}List` }); //сворюємо новий масив плейлиста для відображення виконається лише якщо це запит на отримання стандартних плейлистів
        dispatch({ type: "setList", position, typeList: name }); //добавляємо новий масив на відображення , якщо typeList невідомий редюсеру він пойме що це новий плейлист та добавить зі списку нових плейлистів той що потрібно на відображення
        // setOpenListName(position, name);
        dispatch({type:'setOpenListName',position,name})
    }; //відкрити плейлист за назвою назва має бути з великої літери
    const [openInput, setOpenInput] = useState(false);
    const [inputText, setInputText] = useState("");
    const pressEnter = (event) => {
        if (event.key === "Enter") {
            dispatch({
                type: "addNewList",
                newName: capitalizeFirstLetter(inputText),
            }); //створюємо всій лейлист
            setInputText("");
            setOpenInput(false);
        }
    };
    useEffect(() => {
      if(openInput){
            setTimeout(()=>{setOpenInput(false)},15000)
      }
    }, [openInput]);//автозакривання
    return (
        <div className="List">
            <div className="List__buttons">
                <img
                    src={addIco}
                    alt="addIco"
                    className="List__btn"
                    onClick={() => setOpenInput(!openInput)}
                />
                {namesPlayLists.map((item) => {
                    return (
                        <button
                            className={
                                openListName[position+''] === item
                                    ? "List__btn open"
                                    : "List__btn"
                            }
                            onClick={() => openList(item)}
                        >
                            {item}
                        </button>
                    );
                })}
            </div>
            <input
                className={openInput ? "List__input open" : "List__input"}
                type="text"
                name="namelist"
                placeholder="Enter new name list"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={pressEnter}
            />
            <div className="List__tracks">
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
                                  openListName={openListName}
                                  position={position}
                              />
                          );
                      })
                    : "No tracks"}
            </div>
            {Boolean(openListName[position+'']!=='Default'&&openListName[position+'']!=='Random'&&openListName[position+'']!=='Rating'&&openListName[position+'']!=='')&&(
                  <button className="List__delete" onClick={()=>dispatch({type:'deleteNewList',name:openListName[position+'']})}>Delete this list</button>
            )}
        </div>
    );
};

export default List;
