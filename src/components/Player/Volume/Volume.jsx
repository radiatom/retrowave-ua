import React, { useEffect, useState } from "react";
import "./Volume.scss";
import { useDispatch, useSelector } from "react-redux";
import { volumeSelector } from "./../../../selectorApp";

const Volume = React.memo(({ audioRef }) => {
    const [mute, setMute] = useState(false); //включення чи вимкнення звуку
    const value = useSelector(volumeSelector); //значення величини звуку
    const dispatch = useDispatch();
    const changeValue = (value) => {
        return (audioRef.current.volume = value);
    }; //функція зміни значення в тегові аудіо
    useEffect(() => {
        if (value > 0) {
            setMute(false);
        }
        changeValue(value / 100);
    }, [value]); //встановлення гучності за допомогою двохсторонього звязування
    const click = () => {
        setMute(!mute);
        if (audioRef.current.volume === 0) {
            changeValue(value / 100); //вертаємо попереднє заняення
        } else {
            changeValue(0); //вимикаємо гучність
        }
    };
    return (
        <div className="volume">
            <button onClick={() => click()} className="volume__noMute"></button>
            <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={value}
                onChange={(e) => dispatch({ type: "setVolume", volume: e.target.value })}
                className="volume__range"
            />
            <div className={mute ? "volume__level mute" : "volume__level "}></div>
        </div>
    );
});

export default Volume;
