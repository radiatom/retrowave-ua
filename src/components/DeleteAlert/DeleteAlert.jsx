import React from "react";
import "./DeleteAlert.scss";

const DeleteAlert = ({ setYesOrNo }) => {
    return (
        <div className="deleteAlert">
            <button onClick={() => setYesOrNo(true)}>Yes</button>
            <button onClick={() => setYesOrNo(false)}>No</button>
        </div>
    );
};

export default DeleteAlert;
