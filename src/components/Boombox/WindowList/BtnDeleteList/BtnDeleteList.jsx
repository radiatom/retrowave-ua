import React from "react";
import "./BtnDeleteList.scss";
import { useDispatch } from "react-redux";

const BtnDeleteList = ({ openListName }) => {
    const dispatch = useDispatch();
    return (
        <>
            {Boolean(
                openListName !== "Default" && openListName !== "Random" && openListName !== "Rating" && openListName !== ""
            ) && (
                <button
                    className="btnDeleteList"
                    onClick={() =>
                        dispatch({
                            type: "deleteNewList",
                            name: openListName,
                        })
                    }
                >
                    Delete this list
                </button>
            )}
        </>
    );
};

export default BtnDeleteList;
