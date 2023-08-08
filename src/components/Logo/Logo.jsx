import React, { useEffect, useState } from "react";
import "./Logo.scss";
import logo from "./../../img/logo.png";
const Logo = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setOpen((prev) => (prev === false ? true : false));
        }, 750);
        return () => {
            clearInterval(interval);
        };
    }, []);
//коли появляється друга картинка ззаду то логотип стає світлішим
    return (
        <div className="logo">
            <img className={`logo__img 1`} src={logo} alt="logo" />
            <img
                className={open ? `logo__img` : "logo__img closed"}
                src={logo}
                alt="logo"
            />
        </div>
    );
};

export default Logo;
