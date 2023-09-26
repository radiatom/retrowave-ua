import React, { FC } from "react";
import "./BtnDeleteTrack.scss";
import deleteIco from "./../../../../../../assets/img/icons/deleteTrack.png";

type BtnDeleteTrackPropsType = {
    openListName: string;
    setActiveAlert: React.Dispatch<React.SetStateAction<boolean>>;
};
const BtnDeleteTrack: FC<BtnDeleteTrackPropsType> = React.memo(({ openListName, setActiveAlert }) => {
    return (
        <>
            {Boolean(
                openListName !== "Default" && openListName !== "Random" && openListName !== "Rating" && openListName !== ""
            ) && <img className="btnDeleteTrack" onClick={() => setActiveAlert(true)} src={deleteIco} alt="deleteIco" />}
        </>
    );
});

export default BtnDeleteTrack;
