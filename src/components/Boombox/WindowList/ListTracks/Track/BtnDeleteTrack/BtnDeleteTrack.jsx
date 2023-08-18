import React from "react";
import "./BtnDeleteTrack.scss";
import deleteIco from "./../../../../../../img/icons/deleteTrack.png";

const BtnDeleteTrack = ({ openListName, clickDeleteTrack }) => {
    return (
        <>
            {Boolean(
                openListName !== "Default" && openListName !== "Random" && openListName !== "Rating" && openListName !== ""
            ) && <img className="btnDeleteTrack" onClick={() => clickDeleteTrack()} src={deleteIco} alt="deleteIco" />}
        </>
    );
};

export default BtnDeleteTrack;
