import React, { useEffect, useState } from "react";
import "./Boombox.scss";
import CassetteBoombox from "./CassetteBoombox/CassetteBoombox";
import PanelBoombox from "./PanelBoombox/PanelBoombox";
import ValueBoombox from "./ValueBoombox/ValueBoombox";
import SoundLevel from "./SoundLevel/SoundLevel";
import WindowList from "./WindowList/WindowList";
import { leftListSelector, openListNameSelector, rightListSelector } from "../../selectorApp";
import { useSelector } from "react-redux";
import { newTimeForBoombox } from "../../function";

const Boombox = ({ music, prev, next, audioRef, setOpenBoombox, position }) => {
    const [play, setPlay] = useState(false); //анімація плеєра

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
            }
        };
    }, []); //слідкуємо за аудіо треком

    const [currentTime, setCurrentTime] = useState("000"); //лічильник часу
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(newTimeForBoombox(Math.round(audioRef.current.currentTime)));
        }
    }; //оновлюємо лічильник слідкуючи за аудіо

    useEffect(() => {
        if (currentTime >= parseInt(music.duration.toString().substr(0, 3))) {
            next();
        }
    }, [currentTime]); //закінчиться час то після перемикнеться далі

    const listLeft = useSelector(leftListSelector);
    const listRight = useSelector(rightListSelector);
    const openListsNames = useSelector(openListNameSelector);

    return (
        <div className="boombox">
            <div className="boombox__timer">{currentTime}</div>
            <ValueBoombox  audioRef={audioRef}/>
            {/* <SoundLevel audioRef={audioRef} play={play} /> */}
            <CassetteBoombox music={music} play={play} />

            <div className="boombox__left">
                <WindowList leftOrRight="left" list={listLeft} openListName={openListsNames["left"]} portion = {14} lineHight = {20}/>
            </div>
            <div className="boombox__right">
                <WindowList leftOrRight="right" list={listRight} openListName={openListsNames["right"]} portion = {14} lineHight = {20}/>
            </div>
            <PanelBoombox
                play={play}
                setPlay={setPlay}
                music={music}
                prev={prev}
                next={next}
                position={position}
                setOpenBoombox={setOpenBoombox}
                audioRef={audioRef}
            />
        </div>
    );
};

export default Boombox;
