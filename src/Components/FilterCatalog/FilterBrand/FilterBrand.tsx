import React, {FC} from 'react';
import {typeProduct} from "@/api/TypeProduct/typeProduct";

interface Props {
    brand: string;
    setBrand: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBrand: FC<Props> = ({brand, setBrand}) => {
    return (
        <div className="select__brand">
            <select
                name="brand"
                id="product-select"
                value={brand}
                onChange={(event) => {
                    setBrand(event.target.value);
                }}>
                <option value="">Бренд</option>
                {typeProduct.map((item) => (
                    <option value={item.type} key={item.id}>{item.type}</option>
                ))}
            </select>
        </div>
    );
};

export default FilterBrand;