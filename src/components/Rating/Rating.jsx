import React from "react";
import "./Rating.scss";
import { useDispatch } from "react-redux";

const Rating = React.memo(({ rating, id }) => {
    const dispatch = useDispatch();
    const setRating = (value) => {
        dispatch({ type: "setRating", id, rating: value });
    };
    return (
        <div className="rating">
            <div onClick={() => setRating(1)} className={rating >= 1 ? "rating__item active " : "rating__item "}></div>
            <div onClick={() => setRating(2)} className={rating >= 2 ? "rating__item active " : "rating__item "}></div>
            <div onClick={() => setRating(3)} className={rating >= 3 ? "rating__item active " : "rating__item "}></div>
            <div onClick={() => setRating(4)} className={rating >= 4 ? "rating__item active " : "rating__item "}></div>
            <div onClick={() => setRating(5)} className={rating >= 5 ? "rating__item active " : "rating__item "}></div>
        </div>
    );
});

export default Rating;
