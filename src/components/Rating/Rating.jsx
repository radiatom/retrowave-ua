import React from "react";
import "./Rating.scss";
import { useDispatch } from "react-redux";
import { setRating } from "./../../reduxToolkit/reducer";

const Rating = React.memo(({ rating, id }) => {
    const dispatch = useDispatch();
    const clickRating = (value) => {
        dispatch(setRating({ id, rating: value }));
    };
    return (
        <div className="rating">
            <div
                onClick={() => clickRating(1)}
                className={rating >= 1 ? "rating__item rating__item_active " : "rating__item"}
            ></div>
            <div
                onClick={() => clickRating(2)}
                className={rating >= 2 ? "rating__item rating__item_active " : "rating__item"}
            ></div>
            <div
                onClick={() => clickRating(3)}
                className={rating >= 3 ? "rating__item rating__item_active " : "rating__item"}
            ></div>
            <div
                onClick={() => clickRating(4)}
                className={rating >= 4 ? "rating__item rating__item_active " : "rating__item"}
            ></div>
            <div
                onClick={() => clickRating(5)}
                className={rating >= 5 ? "rating__item rating__item_active " : "rating__item"}
            ></div>
        </div>
    );
});

export default Rating;
