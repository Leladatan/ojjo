import React, {FC} from 'react';
import visa from "../../Images/Footer/visa.png"
import mastercard from "../../Images/Footer/mastercard.png"
import "../../Styles/footer.scss"
import {Link} from "react-router-dom";

const Footer: FC = ({}) => {
    return (
        <footer className="footer">
            <div className="container">
                <section className="footer__content">
                    <div className="footer__content__list">
                        <div className="footer__list_links">
                            <h3 className="footer__list__title">
                                ПОЛЕЗНЫЕ ССЫЛКИ
                            </h3>
                            <nav className="navbar-footer__links">
                                <ul className="footer__list_list">
                                    <li className="footer__list_list_item">
                                        <a href="/" className="footer__list_list_link">
                                            Доставка
                                        </a>
                                    </li>
                                    <li className="footer__list_list_item">
                                        <a href="/" className="footer__list_list_link">
                                            Оплата
                                        </a>
                                    </li>
                                    <li className="footer__list_list_item">
                                        <a href="/" className="footer__list_list_link">
                                            Акции
                                        </a>
                                    </li>
                                    <li className="footer__list_list_item">
                                        <a href="/" className="footer__list_list_link">
                                            Политика конфиденциальности
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="footer__list_payment">
                            <h3 className="footer__list__title">
                                ОПЛАТА
                            </h3>
                            <p className="footer__list_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec,
                                pellentesque.
                            </p>
                            <div className="footer__list__img">
                                <img className="footer__list_img" src={visa} alt="img"/>
                                <img className="footer__list_img" src={mastercard} alt="img"/>
                            </div>
                        </div>
                        <div className="footer__list_contacts">
                            <Link to="/contacts" className="footer__list_contacts__link">
                                <h3 className="footer__list__title">
                                    КОНТАКТЫ
                                </h3>
                            </Link>
                            <div className="footer__list_contacts__content">
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.256 10.5182C17.16 9.84896 16.645 9.3272 15.982 9.17168C13.405 8.56563 12.759 7.0766 12.65 5.42502C12.193 5.33973 11.38 5.24742 10 5.24742C8.62003 5.24742 7.80703 5.33973 7.35003 5.42502C7.24103 7.0766 6.59503 8.56563 4.01803 9.17168C3.35503 9.32821 2.84003 9.84896 2.74403 10.5182L2.24703 13.9719C2.07203 15.188 2.96203 16.2847 4.20003 16.2847H15.8C17.037 16.2847 17.928 15.188 17.753 13.9719L17.256 10.5182ZM10 13.7682C8.60503 13.7682 7.47403 12.6444 7.47403 11.2597C7.47403 9.87505 8.60503 8.75126 10 8.75126C11.395 8.75126 12.526 9.87505 12.526 11.2597C12.526 12.6444 11.394 13.7682 10 13.7682ZM19.95 4.24403C19.926 2.73894 16.108 0.231472 10 0.230469C3.89103 0.231472 0.0730287 2.73894 0.0500287 4.24403C0.0270287 5.74911 0.0710287 7.70773 2.58503 7.38163C5.52603 6.99934 5.34503 5.96886 5.34503 4.49588C5.34503 3.46841 7.73703 3.22057 10 3.22057C12.263 3.22057 14.654 3.46841 14.655 4.49588C14.655 5.96886 14.474 6.99934 17.415 7.38163C19.928 7.70773 19.973 5.74911 19.95 4.24403Z"
                                        fill="#333333"/>
                                </svg>
                                <a className="footer__phone" href="/">
                                    8 (812) 234-56-55
                                </a>
                            </div>
                            <div className="footer__list_contacts__content">
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.256 10.5182C17.16 9.84896 16.645 9.3272 15.982 9.17168C13.405 8.56563 12.759 7.0766 12.65 5.42502C12.193 5.33973 11.38 5.24742 10 5.24742C8.62003 5.24742 7.80703 5.33973 7.35003 5.42502C7.24103 7.0766 6.59503 8.56563 4.01803 9.17168C3.35503 9.32821 2.84003 9.84896 2.74403 10.5182L2.24703 13.9719C2.07203 15.188 2.96203 16.2847 4.20003 16.2847H15.8C17.037 16.2847 17.928 15.188 17.753 13.9719L17.256 10.5182ZM10 13.7682C8.60503 13.7682 7.47403 12.6444 7.47403 11.2597C7.47403 9.87505 8.60503 8.75126 10 8.75126C11.395 8.75126 12.526 9.87505 12.526 11.2597C12.526 12.6444 11.394 13.7682 10 13.7682ZM19.95 4.24403C19.926 2.73894 16.108 0.231472 10 0.230469C3.89103 0.231472 0.0730287 2.73894 0.0500287 4.24403C0.0270287 5.74911 0.0710287 7.70773 2.58503 7.38163C5.52603 6.99934 5.34503 5.96886 5.34503 4.49588C5.34503 3.46841 7.73703 3.22057 10 3.22057C12.263 3.22057 14.654 3.46841 14.655 4.49588C14.655 5.96886 14.474 6.99934 17.415 7.38163C19.928 7.70773 19.973 5.74911 19.95 4.24403Z"
                                        fill="#333333"/>
                                </svg>
                                <a className="footer__phone" href="/">
                                    8 (812) 234-56-55
                                </a>
                            </div>
                            <div className="footer__list_contacts__content">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.574002 1.76497L8.074 5.80763C8.326 5.94308 8.652 6.0073 8.98 6.0073C9.308 6.0073 9.634 5.94308 9.886 5.80763L17.386 1.76497C17.875 1.50108 18.337 0.474609 17.44 0.474609H0.521002C-0.375998 0.474609 0.0860016 1.50108 0.574002 1.76497ZM17.613 3.97544L9.886 8.01609C9.546 8.19469 9.308 8.21576 8.98 8.21576C8.652 8.21576 8.414 8.19469 8.074 8.01609C7.734 7.83748 0.941002 4.26441 0.386002 3.97443C-0.00399834 3.76974 1.61606e-06 4.00955 1.61606e-06 4.19418V11.5119C1.61606e-06 11.9333 0.566002 12.5153 1 12.5153H17C17.434 12.5153 18 11.9333 18 11.5119V4.19518C18 4.01056 18.004 3.77074 17.613 3.97544Z"
                                        fill="#333333"/>
                                </svg>
                                <a className="footer__mail" href="/">
                                    ojjo@ojjo.ru
                                </a>
                            </div>
                        </div>
                        <div className="footer__list_society">
                            <h3 className="footer__list__title">
                                СОЦИАЛЬНЫЕ СЕТИ
                            </h3>
                            <p className="footer__list_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec,
                                pellentesque.
                            </p>
                            <div className="footer__list__society">
                                <a href="/">
                                    <svg width="25" height="15" viewBox="0 0 24 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22.8956 3.05767C22.7662 2.57507 22.5126 2.13505 22.1604 1.78166C21.8082 1.42826 21.3697 1.17389 20.8888 1.04399C19.1175 0.562988 12 0.562988 12 0.562988C12 0.562988 4.8825 0.562988 3.11125 1.04399C2.63028 1.17389 2.19175 1.42826 1.83955 1.78166C1.48735 2.13505 1.23384 2.57507 1.10438 3.05767C0.773644 4.87019 0.613149 6.70986 0.625001 8.55248C0.613149 10.3951 0.773644 12.2348 1.10438 14.0473C1.23384 14.5299 1.48735 14.9699 1.83955 15.3233C2.19175 15.6767 2.63028 15.9311 3.11125 16.061C4.8825 16.542 12 16.542 12 16.542C12 16.542 19.1175 16.542 20.8888 16.061C21.3697 15.9311 21.8082 15.6767 22.1604 15.3233C22.5126 14.9699 22.7662 14.5299 22.8956 14.0473C23.2264 12.2348 23.3869 10.3951 23.375 8.55248C23.3869 6.70986 23.2264 4.87019 22.8956 3.05767ZM9.725 11.9765V5.12841L15.6319 8.55248L9.725 11.9765Z"
                                            fill="#333333"/>
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg width="25" height="13" viewBox="0 0 24 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.3624 10.3196C21.3624 10.3196 23.3028 12.2424 23.7828 13.1323C23.7921 13.1451 23.7994 13.1593 23.8044 13.1744C24 13.5031 24.048 13.7608 23.952 13.951C23.79 14.2653 23.2416 14.423 23.0556 14.4363H19.626C19.3872 14.4363 18.8904 14.3736 18.2856 13.9546C17.8236 13.6307 17.364 13.0973 16.9188 12.576C16.254 11.8018 15.6792 11.1299 15.0972 11.1299C15.0237 11.1297 14.9507 11.1419 14.8812 11.166C14.4408 11.3057 13.8816 11.9354 13.8816 13.6127C13.8816 14.1377 13.4688 14.4363 13.1796 14.4363H11.6088C11.0736 14.4363 8.28719 14.2484 5.81639 11.6344C2.78879 8.43398 0.069586 2.01389 0.043186 1.9573C-0.126014 1.54189 0.229186 1.31553 0.613186 1.31553H4.07639C4.54079 1.31553 4.69199 1.59728 4.79759 1.85014C4.91999 2.14032 5.37359 3.30104 6.11759 4.60504C7.32239 6.72661 8.06279 7.58993 8.65439 7.58993C8.76553 7.59026 8.8748 7.56118 8.97119 7.50564C9.74399 7.0794 9.59999 4.31005 9.56399 3.73932C9.56399 3.62854 9.56279 2.50274 9.16679 1.9585C8.88359 1.56838 8.40119 1.41667 8.10959 1.36128C8.18759 1.2481 8.35319 1.07472 8.56559 0.97237C9.09479 0.707475 10.0512 0.668945 11.0004 0.668945H11.5272C12.5568 0.683394 12.8232 0.749618 13.1976 0.844739C13.9512 1.02535 13.9656 1.51541 13.8996 3.18424C13.8804 3.66105 13.86 4.19807 13.86 4.8302C13.86 4.96506 13.854 5.11557 13.854 5.26849C13.8312 6.12458 13.8012 7.08904 14.4036 7.48518C14.4817 7.53401 14.5719 7.55987 14.664 7.55983C14.8728 7.55983 15.498 7.55983 17.1936 4.63996C17.9376 3.3504 18.5136 1.82967 18.5532 1.71528C18.5868 1.65146 18.6876 1.47206 18.81 1.39981C18.8971 1.35333 18.9946 1.33011 19.0932 1.33239H23.1672C23.6112 1.33239 23.9124 1.39981 23.9712 1.56838C24.0696 1.84171 23.952 2.67613 22.092 5.19985C21.7788 5.62007 21.504 5.9837 21.2628 6.30158C19.5768 8.52188 19.5768 8.63386 21.3624 10.3196Z"
                                            fill="#333333"/>
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg width="25" height="17" viewBox="0 0 12 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.51341 20.3321V11.423H10.5088L10.9541 7.93477H7.51341V5.71293C7.51341 4.70636 7.79291 4.0172 9.23266 4.0172H11.057V0.907277C10.1694 0.811828 9.27713 0.765741 8.38441 0.769227C5.73674 0.769227 3.91891 2.39104 3.91891 5.36835V7.92825H0.942993V11.4164H3.92541V20.3321H7.51341Z"
                                            fill="#333333"/>
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg width="25" height="17" viewBox="0 0 21 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.665 0.24112L0.934973 7.1013C-0.275027 7.58894 -0.268027 8.26623 0.712973 8.56825L5.26497 9.99306L15.797 3.32554C16.295 3.02151 16.75 3.18507 16.376 3.51819L7.84297 11.2453H7.84097L7.84297 11.2463L7.52897 15.9542C7.98897 15.9542 8.19197 15.7425 8.44997 15.4926L10.661 13.3354L15.26 16.7439C16.108 17.2125 16.717 16.9716 16.928 15.9562L19.947 1.67998C20.256 0.436781 19.474 -0.126121 18.665 0.24112Z"
                                            fill="#333333"/>
                                    </svg>
                                </a>
                                <a href="/">
                                    <svg width="25" height="15" viewBox="0 0 14 17" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.70933 2.16092C4.70933 1.94351 4.73133 1.81307 5.10267 1.81307H10.0793C10.946 1.81307 11.426 2.55558 11.7727 3.94896L12.0527 5.06339H12.8993C13.0527 1.9007 13.186 0.525391 13.186 0.525391C13.186 0.525391 11.0553 0.766204 9.79267 0.766204H3.42667L0.017334 0.6565V1.57293L1.16733 1.791C1.974 1.95154 2.16733 2.12279 2.234 2.8653C2.234 2.8653 2.30733 5.05269 2.30733 8.64482C2.30733 12.247 2.24733 14.4043 2.24733 14.4043C2.24733 15.0551 1.98733 15.296 1.18733 15.4565L0.039334 15.6772V16.5796L3.45933 16.4693H9.15933C10.4493 16.4693 13.4193 16.5796 13.4193 16.5796C13.4893 15.797 13.9193 12.245 13.9893 11.8543H13.1893L12.3333 13.8009C11.6633 15.3261 10.6827 15.4364 9.59333 15.4364H6.32267C5.236 15.4364 4.71267 15.0083 4.71267 14.0651V9.08765C4.71267 9.08765 7.126 9.08765 7.906 9.15187C8.514 9.19468 8.88133 9.36927 9.07933 10.2208L9.33933 11.3546H10.2793L10.2193 8.49297L10.3473 5.61325H9.42L9.12 6.87752C8.93133 7.70966 8.8 7.86084 7.95067 7.9478C6.84 8.06152 4.74067 8.04145 4.74067 8.04145V2.16426H4.70733L4.70933 2.16092Z"
                                            fill="#333333"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__content__info">
                        <span className="footer__info_text">
                            (c) 2020 OJJO jewelry
                        </span>
                        <a href="/" className="footer__info_link">
                            Договор публичной офферты
                        </a>
                        <a href="/" className="footer__info_link">
                            Контрагентам
                        </a>
                        <span className="footer__info_text">
                            Сделано Lelik.info
                        </span>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;