import React, { FC, useEffect } from "react";
import "./ListTracks.scss";
import Track from "./Track/Track.tsx";
import { useDispatch } from "react-redux";
import { dataType, setPageNumber } from "../../../../reduxToolkit/reducer";

type ListTracksPropsType = {
    list: dataType;
    pageNumber: number;
    openListName: string;
    leftOrRight: string;
    portion: number;
    lineHight: number;
};
const ListTracks: FC<ListTracksPropsType> = React.memo(({ list, pageNumber, openListName, leftOrRight, portion, lineHight }) => {
    const dispatch = useDispatch();
    const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        if (
            e.currentTarget.scrollTop + portion * lineHight > e.currentTarget.scrollHeight &&
            list.length / portion >= pageNumber
        ) {
            //portion*lineHight це висота одної сторінки portionтреків
            dispatch(setPageNumber({ position: leftOrRight, number: pageNumber + 1 }));
        } //при при скролі до низу виконуємо фукцію

        if (e.currentTarget.scrollTop + portion * lineHight * 3 - 45 < portion * lineHight * 3 && pageNumber > 2) {
            //portion*lineHight*3 це висота трьох сторнікок по portion треків
            dispatch(setPageNumber({ position: leftOrRight, number: pageNumber - 1 }));
        } //при при скролі до верха виконуємо фукцію
    }; //реакція на скрол
    useEffect(() => {
        const container = document.getElementById(`${leftOrRight}listTracks`);
        if (container) {
            container.addEventListener("scroll", scrollHandler);
            return function cleanup() {
                container.removeEventListener("scroll", scrollHandler);
            };
        }
    }, [pageNumber, list]); //слідкувати за скролом
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
