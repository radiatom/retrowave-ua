import React, { FC, useEffect, useState } from "react";
import "./DeleteAlert.scss";
type DeleteAlertPropsType ={
    setActiveAlert:React.Dispatch<React.SetStateAction<boolean>>
    action:()=>void
}
const DeleteAlert:FC<DeleteAlertPropsType> = ({ setActiveAlert, action }) => {
    //action- дія яку виконує згода на видалення; setActiveAlert-дія яка ховає чи відображає вікно DeleteAlert
    const [yesOrNo, setYesOrNo] = useState<boolean | null>(null);
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
