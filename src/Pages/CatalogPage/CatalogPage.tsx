import React, {FC, useEffect, useState} from 'react';
import {dataCatalogs} from "@/api/Catalogs/catalogs";
import ProductCardCatalogs from "@/Components/ProductCardCatalogs/ProductCardCatalogs";
import "@/Styles/catalogPage.scss"
import SearchCatalog from "@/Components/SearchCatalog/SearchCatalog";
import {IDataCatalogs} from "@/Interfaces/IDataCatalogs";
import SortPrice from "@/Components/FilterCatalog/SortPrice/SortPrice";
import FilterPrice from "@/Components/FilterCatalog/FilterPrice/FilterPrice";

const CatalogPage: FC = ({}) => {
    const [productList, setProductList] = useState<IDataCatalogs[]>([]);
    const [priceSort, setPriceSort] = useState<string>('');
    const [priceFilterMin, setPriceFilterMin] = useState<number>(Math.min(...dataCatalogs.map(item => item.price)));
    const [priceFilterMax, setPriceFilterMax] = useState<number>(Math.max(...dataCatalogs.map(item => item.price)));
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const result = dataCatalogs.filter((item) => {
            return (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                (item.price >= priceFilterMin && item.price <= priceFilterMax)
            );
        });

        if (priceFilterMin < Math.min(...dataCatalogs.map(item => item.price))) {
            setPriceFilterMin(Math.min(...dataCatalogs.map(item => item.price)))
        }

        if (priceSort === 'up') {
            result.sort((a, b) => b.price - a.price);
        } else if (priceSort === 'down') {
            result.sort((a, b) => a.price - b.price);
        }

        setProductList(result)
    }, [search, priceSort, priceFilterMin, priceFilterMax]);

    return (
        <main className="main">
            <div className="container">
                <div className="main__content_catalog">
                    <SearchCatalog search={search} setSearch={setSearch}/>
                    <SortPrice priceSort={priceSort} setPriceSort={setPriceSort}/>
                    <FilterPrice priceFilterMax={priceFilterMax} priceFilterMin={priceFilterMin}
                                 setPriceFilterMax={setPriceFilterMax} setPriceFilterMin={setPriceFilterMin}/>
                    {productList.length !== 0
                        ?
                        <div className="main__content__card">
                            {productList.map((item) => (
                                <ProductCardCatalogs item={item} key={item.id}/>
                            ))}
                        </div>
                        :
                        <h1 className="error__message">
                            По вашему запросу, ничего не найдено...
                        </h1>
                    }
                </div>
            </div>
        </main>
    );
};

export default CatalogPage;