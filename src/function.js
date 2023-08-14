export const newTime = (second) => {
      const minutes = Math.floor(second / 60);
      const remainingSeconds = second % 60;
      return `${minutes}:${
          remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`;
  }; //функція для перетворення секунди в хвилини

 export  const newTimeForBoombox = (second) => {
      return second.toString().padStart(3, "0");
  }; //функція для перетворення секунди в значення 000
  
  export const capitalizeFirstLetter=(str)=> {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}// робить першу літеру рядка великою