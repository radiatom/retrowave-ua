import React, { FC, useEffect, useState } from "react";
import "./Time.scss";
import { newTime } from "../../../function";

type TimePropsType = {
    duration: number;
    audioRef: React.RefObject<HTMLMediaElement>;
    next: () => void;
};
const Time: FC<TimePropsType> = React.memo(({ duration, audioRef, next }) => {
    const [time, setTime] = useState("");
    const [currentTime, setCurrentTime] = useState("0:00"); //лічильник часу
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(newTime(Math.round(audioRef.current.currentTime)));
        }
    }; //оновлюємо лічильник слідкуючи за аудіо
    useEffect(() => {
        if (duration > 0) {
            const timesSeconds = parseInt(duration.toString().substr(0, 3));
            setTime(newTime(timesSeconds));
        }
    }, [duration]); //перетворення мілісекунд з реквеста в хвилини це є загальна довжина треку

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

    useEffect(() => {
        if (currentTime >= time) {
            next();
        }
    }, [currentTime]); //закінчиться час то після перемикнеться далі

    return (
        <div className="time">
            <span className="time time_elapsed">{currentTime}</span>
            <span className="time time_total">/{time}</span>
        </div>
    );
});

export default Time;
