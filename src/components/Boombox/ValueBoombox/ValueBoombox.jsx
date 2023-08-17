import React, { useEffect, useState } from "react";
import "./ValueBoombox.scss";
import { useDispatch, useSelector } from "react-redux";
import { volumeSelector } from "../../../selectorApp";

const ValueBoombox = () => {
    const value = useSelector(volumeSelector); //значення величини звуку
    const dispatch = useDispatch();

    const [transform, setTransform] = useState({});
    useEffect(() => {
        setTransform({ transform: `rotate(${value * 3 - 150}deg)` });
    }, [value]); //анімується крутилка

    const changeValue = (value) => {
        return (document.querySelector(".audio").volume = value);
    }; //функція зміни значення в тегові аудіо
    useEffect(() => {
        changeValue(value / 100);
    }, [value]); //встановлення гучності за допомогою двохсторонього звязування

    return (
        <div className="valueBoombox">
            <div className="valueBoombox__volume">
                <div className="valueBoombox__volume_circle" style={transform}>
                    |
                </div>
            </div>
            <button className="volume__noMute valueBoombox__icon"></button>
            <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={value}
                onChange={(e) => dispatch({ type: "setVolume", volume: e.target.value })}
                className="volume__range valueBoombox__range"
            />
        </div>
    );
};

export default ValueBoombox;
