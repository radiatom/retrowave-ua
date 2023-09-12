import React from "react";
import "./BtnDeleteTrack.scss";
import deleteIco from "./../../../../../../img/icons/deleteTrack.png";

const BtnDeleteTrack = React.memo(({ openListName, setActiveAlert }) => {
    return (
        <>
            {Boolean(
                openListName !== "Default" && openListName !== "Random" && openListName !== "Rating" && openListName !== ""
            ) && <img className="btnDeleteTrack" onClick={() => setActiveAlert(true)} src={deleteIco} alt="deleteIco" />}
        </>
    );
});

export default BtnDeleteTrack;
