import React, {FC, useEffect, useState} from 'react';
import {IDataCatalogs} from "../../Interfaces/IDataCatalogs";
import {useLocation} from "react-router-dom";
import {dataCatalogs} from "../../api/Catalogs/catalogs";
import "../../Styles/productPage.scss"
import {format} from "../../Components/ProductCardCatalogs/ProductCardCatalogs";

const ProductPage: FC = ({}) => {
    const [item, setItem] = useState<IDataCatalogs | null>(null);

    const url = useLocation();


    useEffect(() => {
        const urlId = Number(url.pathname.slice(9));
        const current = dataCatalogs[urlId - 1];
        setItem(current);
    }, []);

    return (
        <>
            {item && (
                <main className="main">
                    <div className="container">
                        <div className="main__content__product">
                            <div className="product-page">
                                <div className="product-page__img">
                                    <img className="product-page_img" src={item.img} alt="img"/>
                                </div>
                                <div className="product-page__wrap">
                                    <div className="product-page__content">
                                        <div className="product-page__content__title">
                                            <h1 className="product-page__title">
                                                {item.title}
                                            </h1>
                                            <div className="product-page__title_info">
                                                <p className="product-page__type">
                                                    Категория: {item.type}
                                                </p>
                                                <p className="product-page__brand">
                                                    Бренд: {item.brand}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="product-page__content__text">
                                            <p className="product-page__text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis
                                                scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra
                                                dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum
                                                dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus
                                                lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac
                                                varius at amet viverra feugiat non massa.
                                                Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus
                                                malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare
                                                velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus.
                                                Et nulla sit convallis orci est, fames sit luctus lacus.

                                            </p>
                                        </div>
                                        <div className="product-page__content__price">
                                            <span className="product-page__price">
                                                {format(item.price.toString())} ₽
                                            </span>
                                        </div>
                                        <div className="product-page__content__btns">
                                            <button className="product-page__buy">
                                                КУПИТЬ
                                            </button>
                                            <button className="product-page__add">
                                                ДОБАВИТЬ В КОРЗИНУ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product__recommendation__content">

                        </div>
                        <div className="product__info__content">
                            <p className="product__info__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo
                                porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit,
                                mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor.
                                Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu
                                quisque et augue. Sed dignissim amet ut vitae at ornare sed.
                                Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu
                                quisque et augue. Sed dignissim amet ut vitae at ornare sed.
                            </p>
                            <div className="product__info__advantages">
                                <div className="product__info__advantages__card">
                                    <svg width="70" height="42" viewBox="0 0 70 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M61.25 25.3464C60.646 25.3464 60.1562 25.8361 60.1562 26.4401V34.104H58.4161C57.9872 30.3105 54.5643 27.5829 50.7709 28.0117C47.5681 28.3737 45.0408 30.9012 44.6786 34.104H21.875V2.38525H60.1562V5.8251C60.1562 6.42912 60.646 6.91885 61.25 6.91885C61.854 6.91885 62.3438 6.42912 62.3438 5.8251V1.2915C62.3438 0.687481 61.854 0.197754 61.25 0.197754H20.7812C20.1772 0.197754 19.6875 0.687481 19.6875 1.2915V2.38525H7.16187C4.41615 2.38881 2.19105 4.61377 2.1875 7.35963V8.94776C2.1875 9.55178 2.67723 10.0415 3.28125 10.0415H4.55328L3.71875 20.0657C1.53467 20.6342 0.00765625 22.6027 0 24.8596V34.104C0 34.708 0.489727 35.1978 1.09375 35.1978H3.30859C3.60842 39.109 7.02229 42.0367 10.9335 41.7369C14.4281 41.469 17.2047 38.6923 17.4727 35.1978C17.4825 35.1978 17.4902 35.2032 17.5 35.2032H19.6875C19.6875 35.8073 20.1772 36.297 20.7812 36.297H44.7781C45.5573 40.0356 49.2197 42.4346 52.9583 41.6554C55.6512 41.0942 57.7553 38.9899 58.3166 36.297H61.25C61.854 36.297 62.3438 35.8073 62.3438 35.2032V26.4401C62.3438 25.8359 61.854 25.3464 61.25 25.3464ZM10.3906 39.5728C7.67238 39.5728 5.46875 37.3691 5.46875 34.6509C5.46875 31.9326 7.67238 29.729 10.3906 29.729C13.1089 29.729 15.3125 31.9326 15.3125 34.6509C15.3095 37.3679 13.1076 39.5698 10.3906 39.5728ZM19.6875 33.0103H17.5C17.4359 33.017 17.3724 33.0297 17.3108 33.0485C16.4311 29.2268 12.62 26.8419 8.7984 27.7216C6.16328 28.3281 4.10143 30.3786 3.48031 33.0103H2.1875V24.8596C2.18928 23.3213 3.43602 22.0745 4.97437 22.0728H19.6875V33.0103ZM19.6875 19.8853H5.92812L6.74844 10.0415H19.6875V19.8853ZM19.6875 7.85401H4.375V7.35963C4.37678 5.82127 5.62352 4.57453 7.16187 4.57275H19.6875V7.85401ZM56.2673 35.154C56.1267 37.6562 54.0545 39.612 51.5484 39.6078H51.5473C49.2525 39.6027 47.2931 37.9499 46.9011 35.6889C47.0928 35.3539 47.0709 34.9377 46.8453 34.6246C46.9915 32.0229 49.2192 30.0321 51.8211 30.1783C54.4228 30.3244 56.4136 32.5521 56.2673 35.154Z"
                                            fill="#333333"/>
                                        <path
                                            d="M60.1562 8.94775H44.8438C44.2397 8.94775 43.75 9.43748 43.75 10.0415C43.75 10.6455 44.2397 11.1353 44.8438 11.1353H60.1562C60.7603 11.1353 61.25 10.6455 61.25 10.0415C61.25 9.43748 60.7603 8.94775 60.1562 8.94775Z"
                                            fill="#333333"/>
                                        <path
                                            d="M62.3438 20.979H38.2812C37.6772 20.979 37.1875 21.4687 37.1875 22.0727C37.1875 22.6768 37.6772 23.1665 38.2812 23.1665H62.3438C62.9478 23.1665 63.4375 22.6768 63.4375 22.0727C63.4375 21.4687 62.9478 20.979 62.3438 20.979Z"
                                            fill="#333333"/>
                                        <path
                                            d="M60.1562 14.4165H48.125C47.521 14.4165 47.0312 14.9062 47.0312 15.5103C47.0312 16.1143 47.521 16.604 48.125 16.604H60.1562C60.7603 16.604 61.25 16.1143 61.25 15.5103C61.25 14.9062 60.7603 14.4165 60.1562 14.4165Z"
                                            fill="#333333"/>
                                        <path
                                            d="M64.5312 11.1353H66.7188C67.3228 11.1353 67.8125 10.6455 67.8125 10.0415C67.8125 9.43748 67.3228 8.94775 66.7188 8.94775H64.5312C63.9272 8.94775 63.4375 9.43748 63.4375 10.0415C63.4375 10.6455 63.9272 11.1353 64.5312 11.1353Z"
                                            fill="#333333"/>
                                        <path
                                            d="M67.8125 20.979H65.625C65.021 20.979 64.5312 21.4687 64.5312 22.0727C64.5312 22.6768 65.021 23.1665 65.625 23.1665H67.8125C68.4165 23.1665 68.9062 22.6768 68.9062 22.0727C68.9062 21.4687 68.4165 20.979 67.8125 20.979Z"
                                            fill="#333333"/>
                                        <path
                                            d="M68.9062 14.4165H64.5312C63.9272 14.4165 63.4375 14.9062 63.4375 15.5103C63.4375 16.1143 63.9272 16.604 64.5312 16.604H68.9062C69.5103 16.604 70 16.1143 70 15.5103C70 14.9062 69.5103 14.4165 68.9062 14.4165Z"
                                            fill="#333333"/>
                                    </svg>
                                    <p className="product__info__advantages__card__text">
                                        Бесплатная
                                        <br/>
                                        доставка
                                    </p>
                                </div>

                                <div className="product__info__advantages__card">
                                    <svg width="56" height="70" viewBox="0 0 56 70" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M43.3125 2.1875H34.5625V1.09375C34.5625 0.489727 34.0728 0 33.4688 0C32.8647 0 32.375 0.489727 32.375 1.09375V2.1875H23.625V1.09375C23.625 0.489727 23.1353 0 22.5312 0C21.9272 0 21.4375 0.489727 21.4375 1.09375V2.1875H12.6875V1.09375C12.6875 0.489727 12.1978 0 11.5938 0C10.9897 0 10.5 0.489727 10.5 1.09375V2.1875H1.75C1.14598 2.1875 0.65625 2.67723 0.65625 3.28125V68.9062C0.65625 69.5103 1.14598 70 1.75 70H43.3125C43.9165 70 44.4062 69.5103 44.4062 68.9062V3.28125C44.4062 2.67723 43.9165 2.1875 43.3125 2.1875ZM42.2188 67.8125H2.84375V4.375H10.5V7.65625C10.5 8.26027 10.9897 8.75 11.5938 8.75C12.1978 8.75 12.6875 8.26027 12.6875 7.65625V4.375H21.4375V7.65625C21.4375 8.26027 21.9272 8.75 22.5312 8.75C23.1353 8.75 23.625 8.26027 23.625 7.65625V4.375H32.375V7.65625C32.375 8.26027 32.8647 8.75 33.4688 8.75C34.0728 8.75 34.5625 8.26027 34.5625 7.65625V4.375H42.2188V67.8125Z"
                                            fill="#333333"/>
                                        <path
                                            d="M18.1562 12.0312H7.21875C6.61473 12.0312 6.125 12.521 6.125 13.125V24.0625C6.125 24.6665 6.61473 25.1562 7.21875 25.1562H18.1562C18.7603 25.1562 19.25 24.6665 19.25 24.0625V13.125C19.25 12.521 18.7603 12.0312 18.1562 12.0312ZM17.0625 22.9688H8.3125V14.2188H17.0625V22.9688Z"
                                            fill="#333333"/>
                                        <path
                                            d="M18.1562 27.3438H7.21875C6.61473 27.3438 6.125 27.8335 6.125 28.4375V39.375C6.125 39.979 6.61473 40.4688 7.21875 40.4688H18.1562C18.7603 40.4688 19.25 39.979 19.25 39.375V28.4375C19.25 27.8335 18.7603 27.3438 18.1562 27.3438ZM17.0625 38.2812H8.3125V29.5312H17.0625V38.2812Z"
                                            fill="#333333"/>
                                        <path
                                            d="M18.1562 42.6562H7.21875C6.61473 42.6562 6.125 43.146 6.125 43.75V54.6875C6.125 55.2915 6.61473 55.7812 7.21875 55.7812H18.1562C18.7603 55.7812 19.25 55.2915 19.25 54.6875V43.75C19.25 43.146 18.7603 42.6562 18.1562 42.6562ZM17.0625 53.5938H8.3125V44.8438H17.0625V53.5938Z"
                                            fill="#333333"/>
                                        <path
                                            d="M22.5312 14.2188C22.5312 14.8228 23.021 15.3125 23.625 15.3125H36.75C37.354 15.3125 37.8438 14.8228 37.8438 14.2188C37.8438 13.6147 37.354 13.125 36.75 13.125H23.625C23.021 13.125 22.5312 13.6147 22.5312 14.2188Z"
                                            fill="#333333"/>
                                        <path
                                            d="M36.75 21.875H23.625C23.021 21.875 22.5312 22.3647 22.5312 22.9688C22.5312 23.5728 23.021 24.0625 23.625 24.0625H36.75C37.354 24.0625 37.8438 23.5728 37.8438 22.9688C37.8438 22.3647 37.354 21.875 36.75 21.875Z"
                                            fill="#333333"/>
                                        <path
                                            d="M23.625 19.6875H29.0938C29.6978 19.6875 30.1875 19.1978 30.1875 18.5938C30.1875 17.9897 29.6978 17.5 29.0938 17.5H23.625C23.021 17.5 22.5312 17.9897 22.5312 18.5938C22.5312 19.1978 23.021 19.6875 23.625 19.6875Z"
                                            fill="#333333"/>
                                        <path
                                            d="M34.5625 19.6875C35.1665 19.6875 35.6562 19.1978 35.6562 18.5938C35.6562 17.9897 35.1665 17.5 34.5625 17.5H32.375C31.771 17.5 31.2812 17.9897 31.2812 18.5938C31.2812 19.1978 31.771 19.6875 32.375 19.6875H34.5625Z"
                                            fill="#333333"/>
                                        <path
                                            d="M36.75 28.4375H23.625C23.021 28.4375 22.5312 28.9272 22.5312 29.5312C22.5312 30.1353 23.021 30.625 23.625 30.625H36.75C37.354 30.625 37.8438 30.1353 37.8438 29.5312C37.8438 28.9272 37.354 28.4375 36.75 28.4375Z"
                                            fill="#333333"/>
                                        <path
                                            d="M36.75 37.1875H23.625C23.021 37.1875 22.5312 37.6772 22.5312 38.2812C22.5312 38.8853 23.021 39.375 23.625 39.375H36.75C37.354 39.375 37.8438 38.8853 37.8438 38.2812C37.8438 37.6772 37.354 37.1875 36.75 37.1875Z"
                                            fill="#333333"/>
                                        <path
                                            d="M23.625 35H29.0938C29.6978 35 30.1875 34.5103 30.1875 33.9062C30.1875 33.3022 29.6978 32.8125 29.0938 32.8125H23.625C23.021 32.8125 22.5312 33.3022 22.5312 33.9062C22.5312 34.5103 23.021 35 23.625 35Z"
                                            fill="#333333"/>
                                        <path
                                            d="M34.5625 35C35.1665 35 35.6562 34.5103 35.6562 33.9062C35.6562 33.3022 35.1665 32.8125 34.5625 32.8125H32.375C31.771 32.8125 31.2812 33.3022 31.2812 33.9062C31.2812 34.5103 31.771 35 32.375 35H34.5625Z"
                                            fill="#333333"/>
                                        <path
                                            d="M36.75 43.75H23.625C23.021 43.75 22.5312 44.2397 22.5312 44.8438C22.5312 45.4478 23.021 45.9375 23.625 45.9375H36.75C37.354 45.9375 37.8438 45.4478 37.8438 44.8438C37.8438 44.2397 37.354 43.75 36.75 43.75Z"
                                            fill="#333333"/>
                                        <path
                                            d="M36.75 52.5H23.625C23.021 52.5 22.5312 52.9897 22.5312 53.5938C22.5312 54.1978 23.021 54.6875 23.625 54.6875H36.75C37.354 54.6875 37.8438 54.1978 37.8438 53.5938C37.8438 52.9897 37.354 52.5 36.75 52.5Z"
                                            fill="#333333"/>
                                        <path
                                            d="M23.625 50.3125H29.0938C29.6978 50.3125 30.1875 49.8228 30.1875 49.2188C30.1875 48.6147 29.6978 48.125 29.0938 48.125H23.625C23.021 48.125 22.5312 48.6147 22.5312 49.2188C22.5312 49.8228 23.021 50.3125 23.625 50.3125Z"
                                            fill="#333333"/>
                                        <path
                                            d="M34.5625 50.3125C35.1665 50.3125 35.6562 49.8228 35.6562 49.2188C35.6562 48.6147 35.1665 48.125 34.5625 48.125H32.375C31.771 48.125 31.2812 48.6147 31.2812 49.2188C31.2812 49.8228 31.771 50.3125 32.375 50.3125H34.5625Z"
                                            fill="#333333"/>
                                        <path
                                            d="M51.5156 14.2188C49.4014 14.2188 47.6875 15.9327 47.6875 18.0469V50.3125C47.6924 50.3445 47.699 50.3764 47.7072 50.4077C47.7055 50.4357 47.7055 50.4638 47.7072 50.4919L48.8009 57.0544C48.8883 57.5802 49.3421 57.9664 49.875 57.9688H53.1562C53.691 57.9685 54.1471 57.5818 54.2347 57.0544L55.3284 50.4919C55.3301 50.4638 55.3301 50.4357 55.3284 50.4077C55.3351 50.3762 55.3403 50.3445 55.3438 50.3125V18.0469C55.3438 15.9327 53.6298 14.2188 51.5156 14.2188ZM52.2298 55.7812H50.8014L50.073 51.4062H52.9583L52.2298 55.7812ZM53.1562 49.2188H49.875V22.9688H53.1562V49.2188ZM53.1562 20.7812H49.875V18.0469C49.875 17.1408 50.6096 16.4062 51.5156 16.4062C52.4217 16.4062 53.1562 17.1408 53.1562 18.0469V20.7812Z"
                                            fill="#333333"/>
                                    </svg>
                                    <p className="product__info__advantages__card__text">
                                        Индивидуальный
                                        <br/>
                                        дизайн
                                    </p>
                                </div>

                                <div className="product__info__advantages__card">
                                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M44.7436 39.9404L34.8998 25.7217C34.7992 25.5761 34.6648 25.4572 34.5081 25.3751C34.3514 25.2929 34.1771 25.25 34.0002 25.25C33.8233 25.25 33.649 25.2929 33.4923 25.3751C33.3356 25.4572 33.2012 25.5761 33.1006 25.7217L23.2568 39.9404C23.1602 40.0799 23.0974 40.2401 23.0734 40.4081C23.0495 40.5761 23.065 40.7474 23.1188 40.9084L25.9201 49.3125H25.2502C24.9601 49.3125 24.6819 49.4277 24.4768 49.6328C24.2717 49.838 24.1564 50.1162 24.1564 50.4062V53.6875C24.1564 53.9776 24.2717 54.2558 24.4768 54.4609C24.6819 54.666 24.9601 54.7812 25.2502 54.7812H26.3439V66.8125C26.3439 67.1026 26.4592 67.3808 26.6643 67.5859C26.8694 67.791 27.1476 67.9062 27.4377 67.9062H40.5627C40.8528 67.9062 41.131 67.791 41.3361 67.5859C41.5412 67.3808 41.6564 67.1026 41.6564 66.8125V54.7812H42.7502C43.0403 54.7812 43.3185 54.666 43.5236 54.4609C43.7287 54.2558 43.8439 53.9776 43.8439 53.6875V50.4062C43.8439 50.1162 43.7287 49.838 43.5236 49.6328C43.3185 49.4277 43.0403 49.3125 42.7502 49.3125H42.0803L44.8816 40.9084C44.9354 40.7474 44.9509 40.5761 44.9269 40.4081C44.903 40.2401 44.8402 40.0799 44.7436 39.9404ZM34.0002 38.375C34.2165 38.375 34.428 38.4391 34.6078 38.5593C34.7877 38.6795 34.9279 38.8503 35.0107 39.0502C35.0935 39.25 35.1151 39.4699 35.0729 39.6821C35.0307 39.8943 34.9266 40.0892 34.7736 40.2421C34.6206 40.3951 34.4257 40.4993 34.2136 40.5415C34.0014 40.5837 33.7815 40.562 33.5816 40.4792C33.3818 40.3964 33.211 40.2563 33.0908 40.0764C32.9706 39.8965 32.9064 39.6851 32.9064 39.4687C32.9068 39.1788 33.0222 38.9008 33.2272 38.6958C33.4323 38.4907 33.7102 38.3754 34.0002 38.375ZM39.4689 65.7187H28.5314V54.7812H39.4689V65.7187ZM41.6564 52.5937H26.3439V51.5H41.6564V52.5937ZM39.7738 49.3125H28.2266L25.3664 40.7361L32.9064 29.8451V36.1875C32.907 36.2489 32.9125 36.3102 32.9229 36.3707C32.1903 36.6253 31.5717 37.1312 31.1766 37.7985C30.7815 38.4659 30.6356 39.2516 30.7647 40.0163C30.8939 40.781 31.2897 41.4753 31.8819 41.9759C32.4742 42.4766 33.2247 42.7513 34.0002 42.7513C34.7757 42.7513 35.5262 42.4766 36.1185 41.9759C36.7107 41.4753 37.1065 40.781 37.2357 40.0163C37.3648 39.2516 37.2189 38.4659 36.8238 37.7985C36.4287 37.1312 35.8101 36.6253 35.0775 36.3707C35.0879 36.3102 35.0934 36.2489 35.0939 36.1875V29.8451L42.634 40.7361L39.7738 49.3125Z"
                                            fill="#333333"/>
                                        <path
                                            d="M66.8125 12.125H62.4375C62.1474 12.125 61.8692 12.2402 61.6641 12.4454C61.459 12.6505 61.3438 12.9287 61.3438 13.2188V14.3221C61.2984 14.3161 61.2528 14.3129 61.207 14.3125H37.2812V13.2188C37.2812 12.9287 37.166 12.6505 36.9609 12.4454C36.7558 12.2402 36.4776 12.125 36.1875 12.125H35.0938V6.65625H36.1875C36.4776 6.65625 36.7558 6.54102 36.9609 6.3359C37.166 6.13078 37.2812 5.85258 37.2812 5.5625V1.1875C37.2812 0.897419 37.166 0.61922 36.9609 0.414102C36.7558 0.208984 36.4776 0.09375 36.1875 0.09375H31.8125C31.5224 0.09375 31.2442 0.208984 31.0391 0.414102C30.834 0.61922 30.7188 0.897419 30.7188 1.1875V5.5625C30.7188 5.85258 30.834 6.13078 31.0391 6.3359C31.2442 6.54102 31.5224 6.65625 31.8125 6.65625H32.9062V12.125H31.8125C31.5224 12.125 31.2442 12.2402 31.0391 12.4454C30.834 12.6505 30.7188 12.9287 30.7188 13.2188V14.3125H6.65625V13.2188C6.65625 12.9287 6.54102 12.6505 6.3359 12.4454C6.13078 12.2402 5.85258 12.125 5.5625 12.125H1.1875C0.897419 12.125 0.61922 12.2402 0.414102 12.4454C0.208984 12.6505 0.09375 12.9287 0.09375 13.2188V17.5938C0.09375 17.8838 0.208984 18.162 0.414102 18.3671C0.61922 18.5723 0.897419 18.6875 1.1875 18.6875H5.5625C5.85258 18.6875 6.13078 18.5723 6.3359 18.3671C6.54102 18.162 6.65625 17.8838 6.65625 17.5938V16.5H24.7387C23.2951 17.455 22.0048 18.6236 20.9119 19.9658C18.1078 23.366 16.5 27.6836 16.5 31.8125H15.4062C15.1162 31.8125 14.838 31.9277 14.6329 32.1329C14.4277 32.338 14.3125 32.6162 14.3125 32.9062V37.2812C14.3125 37.5713 14.4277 37.8495 14.6329 38.0546C14.838 38.2598 15.1162 38.375 15.4062 38.375H19.7812C20.0713 38.375 20.3495 38.2598 20.5546 38.0546C20.7598 37.8495 20.875 37.5713 20.875 37.2812V32.9062C20.875 32.6162 20.7598 32.338 20.5546 32.1329C20.3495 31.9277 20.0713 31.8125 19.7812 31.8125H18.6875C18.6875 23.7023 24.9273 17.3053 30.7188 16.5711V17.5938C30.7188 17.8838 30.834 18.162 31.0391 18.3671C31.2442 18.5723 31.5224 18.6875 31.8125 18.6875H36.1875C36.4776 18.6875 36.7558 18.5723 36.9609 18.3671C37.166 18.162 37.2812 17.8838 37.2812 17.5938V16.567C40.2426 16.9184 43.085 18.693 45.3791 21.6529C47.6117 24.5309 49.0295 28.2578 49.2742 31.8125H48.2188C47.9287 31.8125 47.6505 31.9277 47.4454 32.1329C47.2402 32.338 47.125 32.6162 47.125 32.9062V37.2812C47.125 37.5713 47.2402 37.8495 47.4454 38.0546C47.6505 38.2598 47.9287 38.375 48.2188 38.375H52.5938C52.8838 38.375 53.162 38.2598 53.3671 38.0546C53.5723 37.8495 53.6875 37.5713 53.6875 37.2812V32.9062C53.6875 32.6162 53.5723 32.338 53.3671 32.1329C53.162 31.9277 52.8838 31.8125 52.5938 31.8125H51.4658C51.2266 27.7506 49.6693 23.6135 47.1086 20.3117C45.9824 18.8333 44.6252 17.5462 43.0891 16.5H61.207C61.2528 16.4996 61.2984 16.4964 61.3438 16.4904V17.5938C61.3438 17.8838 61.459 18.162 61.6641 18.3671C61.8692 18.5723 62.1474 18.6875 62.4375 18.6875H66.8125C67.1026 18.6875 67.3808 18.5723 67.5859 18.3671C67.791 18.162 67.9062 17.8838 67.9062 17.5938V13.2188C67.9062 12.9287 67.791 12.6505 67.5859 12.4454C67.3808 12.2402 67.1026 12.125 66.8125 12.125ZM4.46875 16.5H2.28125V14.3125H4.46875V16.5ZM18.6875 36.1875H16.5V34H18.6875V36.1875ZM32.9062 2.28125H35.0938V4.46875H32.9062V2.28125ZM35.0938 16.5H32.9062V14.3125H35.0938V16.5ZM49.3125 34H51.5V36.1875H49.3125V34ZM65.7188 16.5H63.5312V14.3125H65.7188V16.5Z"
                                            fill="#333333"/>
                                    </svg>
                                    <p className="product__info__advantages__card__text">
                                        Бесплатная
                                        <br/>
                                        примерка
                                    </p>
                                </div>

                                <div className="product__info__advantages__card">
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.364 43.7128C24.6941 42.5551 23.4471 41.8358 22.1097 41.8358H17.1584V38.8656C19.493 38.4095 21.3283 36.4292 21.5172 33.9852C21.5608 33.4205 21.1384 32.9275 20.5739 32.8838C20.0056 32.8384 19.5161 33.2626 19.4725 33.827C19.3387 35.5581 17.872 36.914 16.133 36.914C14.286 36.914 12.7834 35.4114 12.7834 33.5643C12.7834 31.7173 14.286 30.2147 16.133 30.2147C16.7222 30.2147 17.301 30.3695 17.8072 30.6622C18.2974 30.9456 18.9247 30.7783 19.2081 30.288C19.4917 29.7979 19.3242 29.1706 18.8339 28.8871C18.3138 28.5863 17.7466 28.3764 17.1584 28.2629V25.2722C18.5437 24.8357 19.551 23.5392 19.551 22.0116C19.551 20.4817 18.5407 19.1834 17.1521 18.7488L17.1728 16.6176C17.1761 16.276 17.4179 15.9875 17.7608 15.9159C21.4519 15.146 24.1311 11.8337 24.1311 8.04018C24.1311 3.6846 20.4823 0.00262695 16.1632 -0.000244141C16.1615 -0.000244141 16.1602 -0.000244141 16.1586 -0.000244141C13.0454 -0.000107422 10.1461 1.97466 8.77196 5.03183C8.53981 5.54835 8.77032 6.15538 9.28684 6.38753C9.8035 6.61927 10.4103 6.38931 10.6425 5.87265C11.6864 3.55062 13.8512 2.05067 16.1586 2.05067H16.1619C19.02 2.05259 22.0803 4.45966 22.0803 8.04032C22.0803 10.8679 20.0876 13.3358 17.342 13.9086C16.0479 14.1786 15.135 15.2844 15.1221 16.598L15.1012 18.7533C13.7193 19.1918 12.7151 20.4865 12.7151 22.0116C12.7151 23.5392 13.7224 24.8357 15.1076 25.2722V28.2628C12.6187 28.7434 10.7326 30.9372 10.7326 33.5643C10.7326 36.1915 12.6187 38.3853 15.1076 38.8659V41.8358H10.1564C8.81899 41.8358 7.57198 42.5551 6.90192 43.7128L0.930044 54.0352C0.258345 55.1965 0.258345 56.6393 0.930044 57.8008L6.90206 68.123C7.57198 69.2806 8.81899 69.9999 10.1564 69.9999H22.1097C23.4471 69.9999 24.6941 69.2806 25.3641 68.1229L31.336 57.8005C32.0077 56.6392 32.0077 55.1964 31.336 54.035L25.364 43.7128ZM16.133 20.6444C16.8869 20.6444 17.5002 21.2577 17.5002 22.0116C17.5002 22.7655 16.8869 23.3788 16.133 23.3788C15.3792 23.3788 14.7658 22.7655 14.7658 22.0116C14.7658 21.2577 15.3792 20.6444 16.133 20.6444ZM29.5607 56.7737L23.589 67.096C23.2844 67.6222 22.7175 67.9491 22.1097 67.9491H10.1564C9.54852 67.9491 8.98155 67.6221 8.67721 67.096L2.70534 56.7739C2.40004 56.2458 2.40004 55.59 2.70534 55.062L8.67708 44.7397C8.98169 44.2135 9.54852 43.8866 10.1564 43.8866H22.1097C22.7175 43.8866 23.2845 44.2136 23.5889 44.7397L29.5607 55.0619C29.866 55.59 29.866 56.2457 29.5607 56.7737Z"
                                            fill="#333333"/>
                                        <path
                                            d="M21.2436 49.4465C20.8176 48.7087 20.0236 48.2502 19.1716 48.2502H13.0939C12.2419 48.2502 11.4479 48.7087 11.0219 49.4465L7.98309 54.7102C7.55707 55.4481 7.55707 56.3649 7.98309 57.1028L8.46338 57.9346C8.74666 58.4251 9.37379 58.5927 9.86406 58.3099C10.3545 58.0267 10.5225 57.3996 10.2394 56.9092L9.75906 56.0774C9.69822 55.972 9.69822 55.841 9.75906 55.7356L12.7979 50.4719C12.8587 50.3665 12.9721 50.301 13.0939 50.301H19.1715C19.2933 50.301 19.4066 50.3665 19.4675 50.4719L22.5063 55.7356C22.5671 55.841 22.5671 55.972 22.5063 56.0774L19.4675 61.3411C19.4066 61.4465 19.2933 61.512 19.1715 61.512H13.0939C12.8367 61.5342 12.7175 61.1811 12.6073 61.0109C12.324 60.5201 11.6969 60.3529 11.2066 60.6353C10.7161 60.9185 10.5481 61.5456 10.8311 62.036L11.0219 62.3665C11.4479 63.1043 12.2419 63.5627 13.0939 63.5627H19.1715C20.0235 63.5627 20.8174 63.1043 21.2434 62.3665L24.2823 57.1028C24.7083 56.3649 24.7083 55.4481 24.2823 54.7102L21.2436 49.4465Z"
                                            fill="#333333"/>
                                        <path
                                            d="M69.0703 54.0351L67.3313 51.0294C67.0478 50.5392 66.4205 50.3718 65.9302 50.6554C65.4401 50.9389 65.2725 51.5662 65.5562 52.0565L67.2951 55.062C67.6004 55.59 67.6004 56.2458 67.2951 56.7738L61.3234 67.0961C61.0188 67.6223 60.4519 67.9492 59.8441 67.9492H47.8907C47.2829 67.9492 46.7159 67.6222 46.4116 67.0961L40.4397 56.774C40.1344 56.2459 40.1344 55.5901 40.4397 55.0621L46.4115 44.7398C46.7161 44.2136 47.2829 43.8867 47.8907 43.8867H59.8441C60.4519 43.8867 61.0189 44.2137 61.3232 44.7398L63.1832 47.9549C63.4668 48.4452 64.0941 48.6125 64.5842 48.329C65.0744 48.0454 65.242 47.4182 64.9583 46.9279L63.0983 43.7128C62.4285 42.5551 61.1815 41.8358 59.8441 41.8358H54.8928V38.8658C57.3818 38.3853 59.2678 36.1915 59.2678 33.5643C59.2678 30.9371 57.3818 28.7433 54.8928 28.2628V25.2722C56.278 24.8356 57.2854 23.5391 57.2854 22.0116C57.2854 20.4817 56.275 19.1834 54.8865 18.7488L54.9072 16.6176C54.9104 16.2759 55.1523 15.9875 55.4952 15.9158C59.1863 15.146 61.8655 11.8337 61.8655 8.04014C61.8655 7.73567 61.848 7.42914 61.8136 7.12918C61.7491 6.56658 61.2407 6.1619 60.6782 6.22711C60.1156 6.29164 59.7117 6.79983 59.7761 7.36256C59.8017 7.58541 59.8145 7.81346 59.8145 8.04014C59.8145 10.8678 57.8219 13.3357 55.0763 13.9084C53.7821 14.1784 52.8692 15.2842 52.8564 16.5978L52.8355 18.7531C51.4536 19.1917 50.4494 20.4865 50.4494 22.0116C50.4494 23.5391 51.4568 24.8356 52.842 25.2722V28.2628C50.3531 28.7433 48.467 30.9371 48.467 33.5643C48.467 36.1915 50.3531 38.3853 52.842 38.8658V41.8358H47.8907C46.5534 41.8358 45.3064 42.5551 44.6363 43.7128L38.6644 54.0352C37.9927 55.1965 37.9927 56.6393 38.6644 57.8007L44.6364 68.123C45.3062 69.2807 46.5534 70 47.8907 70H59.8441C61.1815 70 62.4285 69.2807 63.0985 68.123L69.0704 57.8006C69.742 56.6391 69.742 55.1965 69.0703 54.0351ZM53.8674 20.6444C54.6213 20.6444 55.2346 21.2577 55.2346 22.0116C55.2346 22.7654 54.6213 23.3788 53.8674 23.3788C53.1135 23.3788 52.5002 22.7654 52.5002 22.0116C52.5002 21.2577 53.1135 20.6444 53.8674 20.6444ZM50.5178 33.5643C50.5178 31.7172 52.0203 30.2147 53.8674 30.2147C55.7145 30.2147 57.217 31.7172 57.217 33.5643C57.217 35.4114 55.7145 36.9139 53.8674 36.9139C52.0203 36.9139 50.5178 35.4114 50.5178 33.5643Z"
                                            fill="#333333"/>
                                        <path
                                            d="M47.0212 6.38764C47.5256 6.61787 48.1442 6.39461 48.3769 5.87275C49.4208 3.55072 51.5856 2.05078 53.8928 2.05078H53.8963C55.3613 2.05174 56.8443 2.66998 57.9651 3.74705C58.3737 4.13971 59.0228 4.12631 59.4149 3.71834C59.8073 3.30996 59.7944 2.66096 59.3862 2.26857C57.8874 0.828242 55.8869 0.00136719 53.8976 0C53.8958 0 53.8946 0 53.893 0C50.7798 0 47.8805 1.97477 46.5065 5.03193C46.2742 5.54846 46.5047 6.15535 47.0212 6.38764Z"
                                            fill="#333333"/>
                                        <path
                                            d="M56.9058 48.2502H50.8283C49.9762 48.2502 49.1823 48.7087 48.7563 49.4465L45.7175 54.7102C45.2914 55.4481 45.2914 56.3649 45.7175 57.1028L48.7563 62.3665C49.1823 63.1043 49.9762 63.5627 50.8283 63.5627H56.9058C57.7579 63.5627 58.5518 63.1043 58.9778 62.3665L62.0167 57.1028C62.4427 56.3649 62.4427 55.4481 62.0167 54.7102L58.9778 49.4465C58.5518 48.7087 57.7579 48.2502 56.9058 48.2502ZM60.2405 56.0774L57.2017 61.3411C57.1409 61.4465 57.0275 61.512 56.9057 61.512H50.8281C50.7063 61.512 50.593 61.4465 50.5321 61.3411L47.4933 56.0774C47.4325 55.972 47.4325 55.841 47.4933 55.7356L50.5321 50.4719C50.593 50.3665 50.7063 50.301 50.8281 50.301H56.9057C57.0275 50.301 57.1409 50.3665 57.2017 50.4719L60.2405 55.7356C60.3014 55.8411 60.3014 55.972 60.2405 56.0774Z"
                                            fill="#333333"/>
                                    </svg>
                                    <p className="product__info__advantages__card__text">
                                        Личный
                                        <br/>
                                        подход
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default ProductPage;