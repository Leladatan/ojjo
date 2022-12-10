import React, {FC, useEffect, useState} from 'react';
import {dataCatalogs} from "../../api/Catalogs/catalogs";
import ProductCardCatalogs from "../../Components/ProductCardCatalogs/ProductCardCatalogs";
import "../../Styles/catalogPage.scss"
import SearchCatalog from "../../Components/SearchCatalog/SearchCatalog";
import {IDataCatalogs} from "../../Interfaces/IDataCatalogs";

const CatalogPage: FC = ({}) => {
    const [productList, setProductList] = useState<IDataCatalogs[]>([]);
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const result = dataCatalogs.filter((item) => {
            return (
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        });

        setProductList(result)
    }, [search])

    return (
        <main className="main">
            <div className="container">
                <div className="main__content_catalog">
                    <SearchCatalog search={search} setSearch={setSearch}/>
                    <div className="main__content__card">
                        {productList.map((item) => (
                            <ProductCardCatalogs item={item} key={item.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CatalogPage;