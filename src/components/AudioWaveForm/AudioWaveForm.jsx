import { useRef, useEffect } from "react";
import useSize from "./useSize";
import './canvas.scss'
// Ця функція приймає аудіодані, аналізує їх і генерує хвилю
// який візуалізується на елементі canvas.
function animateBars(analyser, canvas, canvasCtx, dataArray, bufferLength) {
    // Аналізуйте аудіодані за допомогою методу `getByteFrequencyData` API веб-аудіо.
    analyser.getByteFrequencyData(dataArray);

    // Встановити стиль заливки полотна чорним.
    canvasCtx.fillStyle = "#000";

    // Розрахувати висоту полотна.
    const HEIGHT = canvas.height / 2;
    
    // Розраховуємо ширину кожного стовпчика у хвилі на основі ширини полотна та довжини буфера.
    var barWidth = Math.ceil(canvas.width / bufferLength) * 2.5;

    // Ініціалізація змінних для висоти смужки та x-позиції.
    let barHeight;
    let x = 0;

    // Перегляд кожного елемента в `dataArray`.
    for (var i = 0; i < bufferLength; i++) {
        // Обчислити висоту поточної панелі на основі аудіоданих і висоти полотна.
        barHeight = (dataArray[i] / 255) * HEIGHT;
        const blueShade = Math.floor((dataArray[i] / 255) * 5); // генерувати відтінок синього на основі аудіовходу *5 це буде більше останього відтінку
        // const blueHex = ["#61dafb", "#5ac8fa", "#50b6f5", "#419de6", "#20232a"][blueShade]; // використовувати сині відтінки логотипу React
        const blueHex = ["#ffffff", "#f3f368", "#ffff00", "#ff7300", "#ff0000"][blueShade]// використовувати  відтінки  вогню
        // Встановити стиль заливки полотна на випадкові значення RGB.
        canvasCtx.fillStyle = blueHex;

        // Намалюйте смугу на полотні в поточній позиції x і з обчисленою висотою та шириною.
        canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        // Оновити позицію x для наступного стовпчика.
        x += barWidth + 1;
    }
}
// Component to render the waveform
const AudioWaveForm = ({ analyzerData }) => {
    // Посилання на елемент canvas
    const canvasRef = useRef(null);
    const { dataArray, analyzer, bufferLength } = analyzerData;
    const [width, height] = useSize();

    // Функція малювання хвилі
    const draw = (dataArray, analyzer, bufferLength) => {
        const canvas = canvasRef.current;
        if (!canvas || !analyzer) return;
        const canvasCtx = canvas.getContext("2d");

        const animate = () => {
            requestAnimationFrame(animate);
            // eslint-disable-next-line no-self-assign
            canvas.width = canvas.width;
            canvasCtx.translate(0, canvas.offsetHeight / 2 - 115);
            animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength);
        };

        animate();
    };
    // Ефект для малювання хвилі під час монтування та оновлення
    useEffect(() => {
        draw(dataArray, analyzer, bufferLength);
    }, [dataArray, analyzer, bufferLength]);

    return (
        <canvas
            className="canvas"
            ref={canvasRef}
            width={width}
            height={height}
        />
    );
};

export default AudioWaveForm;
