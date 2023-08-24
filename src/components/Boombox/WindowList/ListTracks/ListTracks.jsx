import React, { useEffect} from "react";
import "./ListTracks.scss";
import Track from "./Track/Track";
import { useDispatch } from "react-redux";

const ListTracks = React.memo(({ list, pageNumber, openListName, leftOrRight, portion, lineHight }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const container = document.getElementById(`${leftOrRight}listTracks`);
        container.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            container.removeEventListener("scroll", scrollHandler);
        };
    }, [pageNumber,list]); //слідкувати за скролом

    const scrollHandler = (e) => {
        // console.log(e.target.scrollTop + portion * lineHight, e.target.scrollHeight,list.length / portion , pageNumber,list.length,portion);
        if (e.target.scrollTop + portion * lineHight > e.target.scrollHeight && list.length / portion >= pageNumber) {
            //portion*lineHight це висота одної сторінки portionтреків
            dispatch({
                type: "setPageNumber",
                position: leftOrRight,
                number: pageNumber + 1,
            });
        } //при при скролі до низу виконуємо фукцію

        if (e.target.scrollTop + portion * lineHight * 3 - 45 < portion * lineHight * 3 && pageNumber > 2) {
            //portion*lineHight*3 це висота трьох сторнікок по portion треків
            dispatch({
                type: "setPageNumber",
                position: leftOrRight,
                number: pageNumber - 1,
            });
        } //при при скролі до верха виконуємо фукцію
    }; //реакція на скрол
    return (
        <div className="listTracks" id={`${leftOrRight}listTracks`}>
            {list.length > 0
                ? list.map((track, index) => {
                      if (index < pageNumber * portion && index > pageNumber * portion - portion * 3) {
                          //portion*3 це три сторінки треків по portion штук
                          //відображати порціями по portionтреків на одну сторінку, але якщо треків білше 42(три сторінки) то не відображати перші трекі
                          return (
                              <Track
                                  id={track.id}
                                  title={track.title}
                                  index={index}
                                  key={index}
                                  rating={track.rating}
                                  duration={track.duration}
                                  leftOrRight={leftOrRight}
                              />
                          );
                      }
                  })
                : openListName !== "" && <h3 className="listTracks__hint">No tracks</h3>}
        </div>
    );
});

export default ListTracks;
