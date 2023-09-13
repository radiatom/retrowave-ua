import React, { useEffect, useState } from "react";
import "./DeleteAlert.scss";

const DeleteAlert = ({ setActiveAlert, action }) => {
    //action- дія яку виконує згода на видалення; setActiveAlert-дія яка ховає чи відображає вікно DeleteAlert
    const [yesOrNo, setYesOrNo] = useState(null);
    useEffect(() => {
        if (yesOrNo === true) {
            action();
            setActiveAlert(false);
            setYesOrNo(null)
        }
    }, [yesOrNo]);
    return (
        <div className="deleteAlert">
            <button onClick={() => setYesOrNo(true)}>Yes</button>
            <button onClick={() => setActiveAlert(false)}>No</button>
        </div>
    );
};

export default DeleteAlert;
