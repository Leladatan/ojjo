import React, {FC} from 'react';
import "../../Styles/homePage.scss"
import {Link} from "react-router-dom";

const HomePage: FC = () => {
    return (
        <main className="main">

            <section className="first-screen">
                <div className="container">
                    <div className="first-screen__content">
                        <div className="first-screen__content_title">
                            <h1 className="first-screen__title">
                                Долго, дорого, богато!
                            </h1>
                        </div>
                        <div className="first-screen__content_btn">
                            <Link to="/catalog" className="first-screen__btn">
                                КАТАЛОГ ИЗДЕЛИЙ
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="catalogs">
                <div className="container">
                    <div className="catalogs__content">
                        <div className="catalogs__content__title">
                            <span className="subtitle">
                                К мероприятиям
                            </span>
                            <h2 className="catalogs__title main__title">
                                Настоящая красота здесь!
                            </h2>
                        </div>
                        <div className="catalogs__content__imgs">
                            <div className="catalogs__card Rings">
                                <span className="catalogs__card__text">
                                    КОЛЬЦА
                                </span>
                            </div>

                            <div className="catalogs__card Earrings">
                                <span className="catalogs__card__text">
                                    СЕРЬГИ
                                </span>
                            </div>

                            <div className="catalogs__card Suspensions">
                                <span className="catalogs__card__text">
                                    ПОДВЕСКИ
                                </span>
                            </div>

                            <div className="catalogs__card Cufflinks">
                                <span className="catalogs__card__text">
                                    ЗАПОНКИ
                                </span>
                            </div>

                            <div className="catalogs__card Bracelets">
                                <span className="catalogs__card__text">
                                    БРАСЛЕТЫ
                                </span>
                            </div>

                            <div className="catalogs__card Watch">
                                <span className="catalogs__card__text">
                                    ЧАСЫ
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <aside className="visit">
                <div className="container">
                    <div className="visit__content">
                        <div className="visit__content__title">
                            <span className="subtitle__visit subtitle">
                                Не знаете, что выбрать?
                            </span>
                            <h2 className="visit__title main__title">
                                Посетите наши салоны в Москве
                            </h2>
                        </div>
                        <div className="visit__content__text">
                            <p className="visit__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae
                                pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque.
                                Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas
                                quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero
                                viverra ipsum.
                            </p>
                        </div>
                        <div className="visit__content__btn">
                            <button className="visit__btn">
                                НАШИ САЛОНЫ
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            <section className="blogs">
                <div className="container">
                    <div className="blogs__content">
                        <div className="blogs__content__title">
                            <span className="subtitle">
                                Полезные статьи
                            </span>
                            <h2 className="blogs__title main__title">
                                Лучшие советы по подбору дорогих подарков
                            </h2>
                        </div>
                    </div>
                    <div className="blogs__cards">

                    </div>
                    <div className="blogs__btn">
                        <Link to="/blogs" className="blogs__btn_link">
                            ЧИТАТЬ НАШ БЛОГ
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default HomePage;