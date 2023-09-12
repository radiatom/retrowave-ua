import React from "react";
import "./DeleteAlert.scss";

const DeleteAlert = ({ setYesOrNO }) => {
    return (
        <div className="deleteAlert">
            <button onClick={() => setYesOrNO(true)}>Yes</button>
            <button onClick={() => setYesOrNO(false)}>No</button>
        </div>
    );
};

export default DeleteAlert;
