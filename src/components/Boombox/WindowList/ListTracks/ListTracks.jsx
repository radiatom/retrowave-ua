import React, { useEffect, useState } from "react";
import "./ListTracks.scss";
import Track from "./Track/Track";
import { useDispatch } from "react-redux";

const ListTracks = ({ list, pageNumber, openListName, leftOrRight }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const container = document.getElementById(`${leftOrRight}listTracks`);
        container.addEventListener("scroll", scrollHandler);
        return function cleanup() {
            container.removeEventListener("scroll", scrollHandler);
        };
    }, [pageNumber]); //слідкувати за скролом

    const scrollHandler = (e) => {
        if (e.target.scrollTop + 348 > e.target.scrollHeight&&list.length/14>=pageNumber) {//348 це висота одної сторінки 14треків
            dispatch({
                type: "setPageNumber",
                position: leftOrRight,
                number: pageNumber + 1,
            });
        } //при при скролі до низу виконуємо фукцію

        if (e.target.scrollTop+1000 < 1045&&pageNumber>2) {//1045 це висота трьох сторнікок по 14 треків
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
                      if (index < pageNumber * 14 && index > pageNumber * 14 - 42) {//41 це три сторінки треків по 14 штук
                          //відображати порціями по 14треків на одну сторінку, але якщо треків білше 42(три сторінки) то не відображати перші трекі
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
                : openListName !== "" && <h3 className="windowList__NoTracks">No tracks</h3>}
        </div>
    );
};

export default ListTracks;
