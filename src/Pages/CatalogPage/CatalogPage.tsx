import React, {FC} from 'react';
import {dataCatalogs} from "../../api/Catalogs/catalogs";
import ProductCardCatalogs from "../../Components/ProductCardCatalogs/ProductCardCatalogs";
import "../../Styles/catalogPage.scss"

const CatalogPage: FC = ({}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <h1 className="main__title">
                        Catalog
                    </h1>
                    <div className="main__content__card">
                        {dataCatalogs.map((item) => (
                            <ProductCardCatalogs item={item} key={item.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CatalogPage;