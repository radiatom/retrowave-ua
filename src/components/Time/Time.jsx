import React, { useEffect, useState } from "react";
import "./Time.scss";

const Time = ({ duration, audioRef, next }) => {
    const newTime = (second) => {
        const minutes = Math.floor(second / 60);
        const remainingSeconds = second % 60;
        return `${minutes}:${
            remainingSeconds < 10 ? "0" : ""
        }${remainingSeconds}`;
    }; //функція для перетворення мілісекунд в хвилини
console.log(newTime(150))
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timesSeconds = duration / 1000;
        setTime(newTime(timesSeconds));
    }, [duration]); //перетворення мілісекунд з реквеста в хвилини це є загальна довжина треку

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
    }, []);//слідкуємо за аудіо треком

    const [currentTime, setCurrentTime] = useState("0:00"); //лічильник часу
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(newTime(Math.round(audioRef.current.currentTime)));
        }
    };//оновлюємо лічильник слідкуючи за аудіо
    
    useEffect(() => {
        if (currentTime >= time) {
            next();
        }
    }, [currentTime]); //закінчиться час то після перемикнеться далі

    return (
        <div className="time">
            <span className="time elapsed">{currentTime}</span>
            <span className="time total">/{time}</span>
        </div>
    );
};

export default Time;
