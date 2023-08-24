import React, { useEffect, useState } from "react";
import "./Logo.scss";
import logo from "./../../../img/logo.png";
const Logo = React.memo(({ setOpenBoombox }) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setOpen((prev) => (prev === false ? true : false));
        }, 750);
        return () => {
            clearInterval(interval);
        };
    }, []);
    //коли появляється друга картинка ззаду то логотип стає світлішим. це функція миготіння логотипа
    return (
        <div className="logo" onClick={() => setOpenBoombox(true)}>
            <img className={`logo__img`} src={logo} alt="logo" />
            <img className={open ? `logo__img` : "logo__img logo__img_opacity"} src={logo} alt="logo" />
        </div>
    );
});

export default Logo;
