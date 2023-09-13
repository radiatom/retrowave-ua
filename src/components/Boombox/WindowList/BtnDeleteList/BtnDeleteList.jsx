import React, { useState } from "react";
import "./BtnDeleteList.scss";
import { useDispatch } from "react-redux";
import { deleteNewList } from "../../../../reduxToolkit/reducer";
import DeleteAlert from "./../../../DeleteAlert/DeleteAlert";

const BtnDeleteList = React.memo(({ openListName, openList }) => {
    const [activeAlert, setActiveAlert] = useState(false);

    const dispatch = useDispatch();
    const click = () => {
        dispatch(deleteNewList({ name: openListName }));
        openList("Default");
    };
    return (
        <>
            {Boolean(
                openListName !== "Default" && openListName !== "Random" && openListName !== "Rating" && openListName !== ""
            ) &&
                    <div>
                        <div className={activeAlert?"btnDeleteList__deleteAlert btnDeleteList__deleteAlert_open":"btnDeleteList__deleteAlert"}>
                            <DeleteAlert setActiveAlert={setActiveAlert} action={click}/>
                        </div>
                        <button className='btnDeleteList btnDeleteList_open' onClick={()=>setActiveAlert(!activeAlert)}>
                            Delete this list
                        </button>
                    </div>
                }
        </>
    );
});

export default BtnDeleteList;
