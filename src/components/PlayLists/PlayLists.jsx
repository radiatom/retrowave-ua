import React, { useEffect, useState } from "react";
import "./PlayLists.scss";
import CassetteBoombox from "./CassetteBoombox/CassetteBoombox";
import PanelBoombox from "./PanelBoombox/PanelBoombox";
import ValueBoombox from "./ValueBoombox/ValueBoombox";
import SoundLevel from "./SoundLevel/SoundLevel";

const PlayLists = ({ music, prev, next, position, audioRef }) => {
    const newTimeForBoombox = (second) => {
        return second.toString().padStart(3, "0");
    }; //функція для перетворення секунди в значення 000
    const [play, setPlay] = useState(false); //анімація плеєра

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener(
                    "timeupdate",
                    handleTimeUpdate
                );
            }
        };
    }, []); //слідкуємо за аудіо треком
    const [currentTime, setCurrentTime] = useState("000"); //лічильник часу
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(
                newTimeForBoombox(Math.round(audioRef.current.currentTime))
            );
        }
    }; //оновлюємо лічильник слідкуючи за аудіо
    useEffect(() => {
        if (currentTime >= parseInt(music.duration.toString().substr(0, 3))) {
            next();
        }
    }, [currentTime]); //закінчиться час то після перемикнеться далі
    return (
        <div className="playLists">
            <div className="playLists__timer">{currentTime}</div>
            <ValueBoombox/>
            <SoundLevel audioRef={audioRef} play={play}/>
            <CassetteBoombox music={music} play={play} />
            <PanelBoombox
                play={play}
                setPlay={setPlay}
                music={music}
                prev={prev}
                next={next}
                position={position}
            />
        </div>
    );
};

export default PlayLists;
