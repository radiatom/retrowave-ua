import React from "react";
import "./PlayList.scss";
import { useSelector } from "react-redux";
import {  listSelector, openListNameSelector } from "../../selectorApp";
import WindowList from "../Boombox/WindowList/WindowList";

const PlayList = ({ music, position, audioRef, setOpenBoombox }) => {
    const list = useSelector(listSelector);
    const openListsNames = useSelector(openListNameSelector);

    return (
        <div className="playList" >
            <div className="playList__left">
                <WindowList
                    leftOrRight="left"
                    list={list.left}
                    openListName={openListsNames["left"]}
                    portion={30}
                    lineHight={20}
                />
            </div>
        </div>
    );
};

export default PlayList;
