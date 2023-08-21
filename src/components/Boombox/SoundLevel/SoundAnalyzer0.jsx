import React, { useEffect, useMemo, useState } from "react";

const SoundAnalyzer0 = ({ setLevel, play,audioRef }) => {
    const [audioContext, setAudioContext] = useState(null);
    const [analyser, setAnalyser] = useState(null);

    const handleFrequencyUpdate = (value) => {
        // Оновлення стану або виконання інших дій на основі значення частоти
        const newValue = Math.round((value - 100) / 10);
        setLevel(newValue);
        console.log(newValue);
    };

    useMemo(() => {
        const audioElement = audioRef.curent;

        // const context = new AudioContext();
        const context = audioContext === null ? new AudioContext() : null;
        const analyserNode = context.createAnalyser();
        const sourceNode = context.createMediaElementSource(audioElement);

        sourceNode.connect(analyserNode);
        analyserNode.connect(context.destination);

        analyserNode.fftSize = 2048; // Розмір FFT (Fast Fourier Transform)

        setAudioContext(context);
        setAnalyser(analyserNode);
        if (play === false) {
            context.delete();
        }
    }, []);

    useMemo(() => {
        if (analyser && audioContext && play) {
            const dataArray = new Uint8Array(analyser.frequencyBinCount);

            const updateFrequencyData = () => {
                analyser.getByteFrequencyData(dataArray);
                const frequencyValue = dataArray[Math.floor((800 / audioContext.sampleRate) * dataArray.length)];
                handleFrequencyUpdate(frequencyValue);
                requestAnimationFrame(updateFrequencyData);
            };

            requestAnimationFrame(updateFrequencyData);
        }
    }, [analyser, audioContext]);

    return null; // Даний компонент не відображає нічого, а лише використовується для аналізу
};
export default SoundAnalyzer0;
