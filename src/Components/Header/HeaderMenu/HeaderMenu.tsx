import React, {FC} from 'react';
import "./HeaderMenu.scss"

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMenu: FC<Props> = ({isOpen, setIsOpen}) => {

    const handlerMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="header__menu" onClick={handlerMenu}>
                <span className={isOpen ? "header__menu__burger__active" : "header__menu__burger"}></span>
            </div>
        </>
    );
};

export default HeaderMenu;