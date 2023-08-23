export const newTime = (second) => {
    const minutes = Math.floor(second / 60);
    const remainingSeconds = second % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}; //функція для перетворення секунди в хвилини

export const newTimeForBoombox = (second) => {
    return second.toString().padStart(3, "0");
}; //функція для перетворення секунди в значення 000

export const capitalizeFirstLetter = (str) => {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}; // робить першу літеру рядка великою

export const lowerFirstLetter = (str) => {
    if (str.length === 0) {
        return str;
    }
    return str[0].toLowerCase() + str.slice(1);
}; // робить першу літеру рядка низькою

export const checkNameInArray = (name, array) => {
    return array.includes(name);
}; //функція яка перевіряє наявність певної назви в масиві.return  true or folse
export const updateValueById = (array, idToFind, newValue) => {
    const updatedArray = array.map((item) => {
        if (item.id === idToFind) {
            // Копіюємо об'єкт і змінюємо значення
            return { ...item, rating: newValue };
        }
        return item;
    });
    return updatedArray;
};
export const containsLatinAndDigits = (inputString) => {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(inputString);
};

export const timeToMilliseconds = (timeString) => {
    const [minutes, seconds] = timeString.split(":");
    const totalMilliseconds = parseInt(minutes) * 60 * 1000 + parseInt(seconds) * 1000;
    return totalMilliseconds;
}; //4:46 в мілісекунди


