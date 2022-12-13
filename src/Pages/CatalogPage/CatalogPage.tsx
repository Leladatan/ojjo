import React, {FC, useEffect, useState} from 'react';
import {dataCatalogs} from "@/api/Catalogs/catalogs";
import ProductCardCatalogs from "@/Components/ProductCardCatalogs/ProductCardCatalogs";
import "@/Styles/catalogPage.scss"
import SearchCatalog from "@/Components/SearchCatalog/SearchCatalog";
import {IDataCatalogs} from "@/Interfaces/IDataCatalogs";
import SortPrice from "@/Components/FilterCatalog/SortPrice/SortPrice";
import FilterPrice from "@/Components/FilterCatalog/FilterPrice/FilterPrice";
import FilterBrand from "@/Components/FilterCatalog/FilterBrand/FilterBrand";
import FilterGender from "@/Components/FilterCatalog/FilterGender/FilterGender";
import FIlterType from "@/Components/FilterCatalog/FilterType/FIlterType";
import FilterSeason from "@/Components/FilterCatalog/FilterSeason/FilterSeason";
import FilterEventProduct from "@/Components/FilterCatalog/FilterEventProduct/FilterEventProduct";

const CatalogPage: FC = ({}) => {
    const [productList, setProductList] = useState<IDataCatalogs[]>([]);
    const [priceSort, setPriceSort] = useState<string>('');
    const [brand, setBrand] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [season, setSeason] = useState<string>('');
    const [eventProduct, setEventProduct] = useState<string>('');
    const [priceFilterMin, setPriceFilterMin] = useState<number>(Math.min(...dataCatalogs.map(item => item.price)));
    const [priceFilterMax, setPriceFilterMax] = useState<number>(Math.max(...dataCatalogs.map(item => item.price)));
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const result = dataCatalogs.filter((item) => {
            return (
                item.title.toLowerCase().includes(search.toLowerCase()) &&
                item.brand.includes(brand) &&
                item.gender.includes(gender) &&
                item.type.includes(type) &&
                item.season.includes(season) &&
                item.event.includes(eventProduct) &&
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
    }, [search, priceSort, brand, gender, type, season, eventProduct, priceFilterMin, priceFilterMax]);

    return (
        <main className="main">
            <div className="container">
                <div className="main__content_catalog">
                    <SearchCatalog search={search} setSearch={setSearch}/>
                    <SortPrice priceSort={priceSort} setPriceSort={setPriceSort}/>
                    <FilterPrice priceFilterMax={priceFilterMax} priceFilterMin={priceFilterMin}
                                 setPriceFilterMax={setPriceFilterMax} setPriceFilterMin={setPriceFilterMin}/>
                    <FilterBrand brand={brand} setBrand={setBrand}/>
                    <FilterGender gender={gender} setGender={setGender}/>
                    <FIlterType type={type} setType={setType}/>
                    <FilterSeason season={season} setSeason={setSeason}/>
                    <FilterEventProduct eventProduct={eventProduct} setEventProduct={setEventProduct}/>
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