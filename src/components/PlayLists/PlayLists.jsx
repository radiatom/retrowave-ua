import React, { useState } from "react";
import "./PlayLists.scss";
import CassetteBoombox from "./CassetteBoombox/CassetteBoombox";
import PanelBoombox from "./PanelBoombox/PanelBoombox";

const PlayLists = ({ music, prev, next, position }) => {
    const [play, setPlay] = useState(false); //анімація плеєра

    return (
        <div className="playLists">
            <CassetteBoombox music={music} play={play}/>
            <PanelBoombox
                play={play}
                setPlay={setPlay}
                music={music}
                prev={prev}
                next={next}
                position={position}
            />
        </div>
    );
};

export default PlayLists;
