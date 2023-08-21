import React from "react";
import "./PlayList.scss";
import { useSelector } from "react-redux";
import { leftListSelector, openListNameSelector } from "../../selectorApp";
import WindowList from "../Boombox/WindowList/WindowList";

const PlayList = ({ music, position, audioRef, setOpenBoombox }) => {
    const listLeft = useSelector(leftListSelector);
    const openListsNames = useSelector(openListNameSelector);

    return (
        <div className="playList" onClick={()=>setOpenBoombox(false)}>
            <div className="playList__left">
                <WindowList
                    leftOrRight="left"
                    list={listLeft}
                    openListName={openListsNames["left"]}
                    portion={30}
                    lineHight={20}
                />
            </div>
        </div>
    );
};

export default PlayList;
