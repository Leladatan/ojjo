import React, {FC} from 'react';
import "@/Styles/header.scss"
import Logo from "./Logo/Logo";
import Register from "./Register/Register";

const Header: FC = ({}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Logo/>
                    <Register/>
                </div>
            </div>
        </header>
    );
};

export default Header;