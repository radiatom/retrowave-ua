import React, { useEffect, useState } from "react";
import "./Volume.scss";
import { useDispatch, useSelector } from "react-redux";
import { volumeSelector } from "./../../../selectorApp";
import { setVolume } from "../../../reduxToolkit/reducer";

const Volume = React.memo(({ audioRef }) => {
    const [mute, setMute] = useState(false); //включення чи вимкнення звуку
    const value = useSelector(volumeSelector); //значення величини звуку
    const dispatch = useDispatch();
    
    const changeValue = (value) => {
        audioRef.current.volume = value;
    }; //функція зміни значення в аудіо
    
    const toggleMute = () => {
        if (mute) {
            changeValue(value / 100); //вертаємо попереднє заняення
        } else {
            changeValue(0); //вимикаємо гучність
        }
        setMute(!mute);
    };
    
    useEffect(() => {
        if (value > 0) {
            setMute(false);
        }
        changeValue(value / 100);
    }, [value]); //встановлення гучності за допомогою двохсторонього звязування
    return (
        <div className="volume">
            <button onClick={toggleMute} className="volume__noMute"></button>
            <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={value}
                onChange={(e) => dispatch(setVolume({volume: e.target.value }))}
                className="range"
            />
            <div className={mute ? "volume__level volume__leve_mute" : "volume__level"}></div>
        </div>
    );
});

export default Volume;
