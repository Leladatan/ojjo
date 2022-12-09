import React, {FC, useEffect, useState} from 'react';
import {IDataCatalogs} from "../../Interfaces/IDataCatalogs";
import {useLocation} from "react-router-dom";
import {dataCatalogs} from "../../api/Catalogs/catalogs";

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
                        <div className="main__content">
                            <div className="product-page">
                                <div className="product-page__img">
                                    <img className="product-page_img" src={item.img} alt="img"/>
                                </div>
                                <div className="product-page__content">
                                    <h2>
                                        {item.title}
                                    </h2>
                                    <span>
                                        Категория: {item.type}
                                    </span>
                                    <br/>
                                    <span>
                                        Бренд: {item.brand}
                                    </span>
                                    <p>
                                        {item.description}
                                    </p>
                                    <span>
                                        {item.price} ₽
                                    </span>

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