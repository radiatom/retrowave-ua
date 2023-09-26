import "./PlayList.scss";
import { useSelector } from "react-redux";
import { listSelector, openListNameSelector } from "../../selectorApp";
import WindowList from "../Boombox/WindowList/WindowList";
import Panel from "../Panel/Panel";
import { FC } from "react";

type PlayListPropsType = {
    prev: () => void;
    next: () => void;
    audioRef: React.RefObject<HTMLMediaElement>;
    setOpenBoombox: React.Dispatch<React.SetStateAction<boolean>>;
    position: number;
    setAnaliz: React.Dispatch<React.SetStateAction<boolean>>;
    play: boolean;
    setPlay: React.Dispatch<React.SetStateAction<boolean>>;
};
const PlayList:FC<PlayListPropsType> = ({ prev, next, position, audioRef, setOpenBoombox, setAnaliz, play, setPlay }) => {
    const list = useSelector(listSelector);
    const openListsNames = useSelector(openListNameSelector);

    return (
        <div className="playList">
            <div className="playList__windowList">
                <WindowList
                    leftOrRight="left"
                    list={list.left}
                    openListName={openListsNames["left"]}
                    portion={30}
                    lineHight={20}
                />
            </div>
            <div className="playList__panel">
                <Panel
                    prev={prev}
                    next={next}
                    position={position}
                    setOpenBoombox={setOpenBoombox}
                    audioRef={audioRef}
                    setAnaliz={setAnaliz}
                    play={play}
                    setPlay={setPlay}
                />
            </div>
        </div>
    );
};

export default PlayList;
