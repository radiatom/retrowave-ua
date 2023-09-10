import React from "react";
import "./BtnDeleteList.scss";
import { useDispatch } from "react-redux";
import { deleteNewList } from "../../../../reduxToolkit/reducer";

const BtnDeleteList = React.memo(({ openListName, openList }) => {
    const dispatch = useDispatch();
    const click = () => {
        dispatch(deleteNewList({ name: openListName }));
        openList("Default");
    };
    return (
        <>
            {Boolean(
                openListName !== "Default" && openListName !== "Random" && openListName !== "Rating" && openListName !== ""
            ) && (
                <button className="btnDeleteList" onClick={click}>
                    Delete this list
                </button>
            )}
        </>
    );
});

export default BtnDeleteList;
