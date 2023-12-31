import React, { useEffect, useMemo, useState } from "react";

const FrequencyAnalyzer = React.memo(({ audioRef, frequency, setLevel }) => {
  useEffect(() => {
        if (!audioRef.current) return;

        const audioContext = new AudioContext();
        const analyserNode = audioContext.createAnalyser();

        const sourceNode = audioContext.createMediaElementSource(audioRef.current);
        sourceNode.connect(analyserNode);
        analyserNode.connect(audioContext.destination);

        analyserNode.fftSize = 2048;

        const dataArray = new Uint8Array(analyserNode.frequencyBinCount);

        const updateFrequencyData = () => {
            analyserNode.getByteFrequencyData(dataArray);
            const frequencyValue = dataArray[Math.floor((frequency / audioContext.sampleRate) * dataArray.length)];
            console.log('yes')
            setLevel(Math.round((frequencyValue - 100) / 10))  
            requestAnimationFrame(updateFrequencyData);
        };
        requestAnimationFrame(updateFrequencyData);

        return () => {
            audioContext.close();
        };
    }, [audioRef, frequency, setLevel]);

    return null;
})

export default FrequencyAnalyzer;
