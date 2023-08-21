import { useCallback, useEffect, useState } from "react";

// спеціальний хук для отримання ширини та висоти вікна браузера
const useSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const setSizes = useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, [setWidth, setHeight]);

    useEffect(() => {
        window.addEventListener("resize", setSizes);
        setSizes();
    }, [setSizes]);

    return [width, height];
};

export default useSize;
