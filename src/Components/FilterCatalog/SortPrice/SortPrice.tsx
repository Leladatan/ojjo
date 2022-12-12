import React, {FC} from 'react';

interface Props {
    priceSort: string;
    setPriceSort: React.Dispatch<React.SetStateAction<string>>;
}

const SortPrice: FC<Props> = ({priceSort, setPriceSort}) => {
    return (
        <div className="select__sort-price">
            <select
                name="sortPrice"
                id="product-select"
                value={priceSort}
                onChange={(e) => {
                    setPriceSort(e.target.value);
                }}>
                <option value="">Цена</option>
                <option value="up">По возратанию</option>
                <option value="down">По убыванию</option>
            </select>
        </div>
    );
};

export default SortPrice;