import React, {FC} from 'react';
import {dataCatalogs} from "@/api/Catalogs/catalogs";

interface Props {
    priceFilterMin: number;
    setPriceFilterMin: React.Dispatch<React.SetStateAction<number>>;
    priceFilterMax: number;
    setPriceFilterMax: React.Dispatch<React.SetStateAction<number>>;
}

const FilterPrice: FC<Props> = ({priceFilterMin, setPriceFilterMin, priceFilterMax, setPriceFilterMax}) => {

    setTimeout(() => {
        priceFilterMin > priceFilterMax ? setPriceFilterMin(prev => prev - 1000) : null;
    }, 1);

    return (
        <div className="select__filter-price">
            <div className="min">
                <label className="select__filter-price__inputs__text" htmlFor="minPrice">{priceFilterMin}</label>
                <input disabled={priceFilterMin > priceFilterMax} className="min-input" type="range"
                       id="minPrice" name="minPrice"
                       min={Math.min(...dataCatalogs.map(item => item.price))}
                       max={Math.max(...dataCatalogs.map(item => item.price))}
                       step="100"
                       value={priceFilterMin}
                       onChange={(e) => {
                           setPriceFilterMin(Number(e.target.value))
                       }}
                />
            </div>

            <div className="max">
                <label className="select__filter-price__inputs__text" htmlFor="maxPrice">{priceFilterMax}</label>
                <input className="max-input" type="range" id="maxPrice" name="maxPrice"
                       min={Math.min(...dataCatalogs.map(item => item.price))}
                       max={Math.max(...dataCatalogs.map(item => item.price))}
                       step="100"
                       value={priceFilterMax}
                       onChange={(e) => {
                           setPriceFilterMax(Number(e.target.value))
                       }}
                />
            </div>
        </div>
    );
};

export default FilterPrice;