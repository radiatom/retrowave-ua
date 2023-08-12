import React, { useEffect, useState } from "react";
import "./SoundLevel.scss";
import SoundAnalyzer from "../ValueBoombox/SoundAnalyzer";

const SoundLevel = ({ play, audioRef }) => {
    const [level, setLevel] = useState(0);
    useEffect(() => {
        if (play === true) {
            setLevel(1);
        } else {
            setLevel(0);
        }
    }, [play]);
    const preparation = () => {
        let context = new AudioContext();
        let analyser = context.createAnalyser();

        let src = context.createMediaElementSource(audioRef.current);
        src.connect(analyser);
        analyser.connect(context.destination);

        let array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        console.log(array[40]);
    };
    
    return (
        <div className="soundLevel" onClick={() => preparation()}>
            {play ? (
                <SoundAnalyzer
                setLevel={setLevel}
                play={play}
                />
            ) : (
                ""
            )}
            <div
                className={
                    level >= 1
                        ? "soundLevel__level lightGreen"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level >= 2
                        ? "soundLevel__level lightGreen"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level >= 3
                        ? "soundLevel__level lightYellow"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level >= 4
                        ? "soundLevel__level lightYellow"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level >= 5
                        ? "soundLevel__level lightYellow"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level >= 6
                        ? "soundLevel__level lightYellow"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level >= 7
                        ? "soundLevel__level lightYellow"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level >= 8
                        ? "soundLevel__level lightRed"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level >= 9
                        ? "soundLevel__level lightRed"
                        : "soundLevel__level"
                }
            ></div>
            <div
                className={
                    level === 10
                        ? "soundLevel__level lightRed"
                        : "soundLevel__level"
                }
            ></div>
        </div>
    );
};

export default SoundLevel;
